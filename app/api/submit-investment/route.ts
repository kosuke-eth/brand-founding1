import { NextRequest, NextResponse } from "next/server";
import { sendInvestmentConfirmationEmail } from "../../../lib/email";
import { createInvestorRecord } from "../../../lib/notion";

export async function POST(request: NextRequest) {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!slackWebhookUrl && !discordWebhookUrl) {
      return NextResponse.json(
        { success: false, error: 'Missing SLACK_WEBHOOK_URL or DISCORD_WEBHOOK_URL' },
        { status: 500 }
      )
    }

    const body = await request.json();
    const { projectName, amount, name, email, phone, referralCode, slug } = body;

    // Create message bodies for Slack and Discord
    const commonText = `💰 New Investment Details Submitted\n\nProject: ${projectName}\nAmount: $${amount} USDT\nInvestor Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nReferral Code: ${
      referralCode || "None"
    }\nSubmitted at: ${new Date().toLocaleString()}`;

    const slackMessage = {
      // Simple text format for maximum compatibility
      text: `💰 New Investment Details Submitted\n\n*Project:* ${projectName}\n*Amount:* $${amount} USDT\n*Investor Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Referral Code:* ${
        referralCode || "None"
      }\n*Submitted at:* ${new Date().toLocaleString()}`,
    };

    const discordMessage = {
      // Discord expects `content`; keep it plain text for reliability
      content: commonText,
    };

    // Helper to send a webhook and return a typed result
    const sendWebhook = async (
      url: string,
      payload: unknown
    ): Promise<{ ok: boolean; statusText?: string }> => {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        return { ok: res.ok, statusText: res.statusText };
      } catch (err) {
        return { ok: false, statusText: String(err) };
      }
    };

    // Send available webhooks in parallel
    const [slackResult, discordResult] = await Promise.all([
      slackWebhookUrl
        ? sendWebhook(slackWebhookUrl, slackMessage)
        : Promise.resolve<{ ok: boolean; statusText?: string }>({ ok: false, statusText: "not configured" }),
      discordWebhookUrl
        ? sendWebhook(discordWebhookUrl, discordMessage)
        : Promise.resolve<{ ok: boolean; statusText?: string }>({ ok: false, statusText: "not configured" }),
    ]);

    if (!slackResult.ok && slackWebhookUrl) {
      console.error("Slack webhook failed:", slackResult.statusText);
    }
    if (!discordResult.ok && discordWebhookUrl) {
      console.error("Discord webhook failed:", discordResult.statusText);
    }

    if (!slackResult.ok && !discordResult.ok) {
      throw new Error("All webhooks failed");
    }

    // Store investor data in Notion database
    try {
      const investorRecord = await createInvestorRecord({
        investorName: name,
        email: email,
        phone: phone,
        referralCode: referralCode,
        projectName: projectName,
        projectSlug: slug || "",
        investmentAmount: Number(amount),
        notes: `Investment submitted via ${projectName}`
      });
      
      if (!investorRecord) {
        console.error("Failed to create investor record for:", email);
        // Don't fail the entire request if database fails, just log it
      } else {
        console.log("Investor record created successfully:", investorRecord.id);
      }
    } catch (dbError) {
      console.error("Error creating investor record:", dbError);
      // Don't fail the entire request if database fails, just log it
    }

    // Send confirmation email to the investor
    try {
      const emailSent = await sendInvestmentConfirmationEmail({
        name,
        email,
        projectName,
        amount
      });
      
      if (!emailSent) {
        console.error("Failed to send confirmation email to:", email);
        // Don't fail the entire request if email fails, just log it
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Don't fail the entire request if email fails, just log it
    }
    try {
      if (slug && amount) {
        const amt = Number(amount)
        if (!Number.isNaN(amt) && amt > 0) {
          // Update Notion: increment Funding Current by amt
          const notionApiKey = process.env.NOTION_API_KEY
          const databaseId = process.env.NOTION_DATABASE_ID
          const NOTION_VERSION = "2022-06-28"
          if (notionApiKey && databaseId) {
            // Find page by slug
            const queryResp = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${notionApiKey}`,
                "Notion-Version": NOTION_VERSION,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                filter: { property: "Slug", rich_text: { equals: slug } },
                page_size: 1,
              }),
            })
            if (queryResp.ok) {
              const queryData = await queryResp.json()
              const page = queryData.results?.[0]
              if (page) {
                const current = page.properties?.["Funding Current"]?.number || 0
                const pageId = page.id
                await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
                  method: "PATCH",
                  headers: {
                    "Authorization": `Bearer ${notionApiKey}`,
                    "Notion-Version": NOTION_VERSION,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    properties: {
                      "Funding Current": { number: current + amt },
                    },
                  }),
                })
              }
            }
          }
        }
      }
    } catch (e) {
      console.error("Failed to update Notion funding current:", e)
    }

    return NextResponse.json({ success: true, message: "Investment details sent successfully" });
  } catch (error) {
    console.error("Error sending webhooks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send investment details" },
      { status: 500 }
    );
  }
}

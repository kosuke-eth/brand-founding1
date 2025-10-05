import { NextRequest, NextResponse } from "next/server";

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
    const { projectName, amount, name, email, phone, referralCode } = body;

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

    return NextResponse.json({
      success: true,
      message: "Investment details sent to Slack successfully",
    });
  } catch (error) {
    console.error("Error sending webhooks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send investment details" },
      { status: 500 }
    );
  }
}

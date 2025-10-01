import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {

    const webhookUrl = process.env.SLACK_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: 'Missing SLACK_WEBHOOK_URL' },
        { status: 500 }
      )
    }

    const body = await request.json();
    const { projectName, amount, name, email, phone, referralCode } = body;

    // Create Slack message - simple text format for maximum compatibility
    const slackMessage = {
      text: `💰 New Investment Details Submitted\n\n*Project:* ${projectName}\n*Amount:* $${amount} USDT\n*Investor Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Referral Code:* ${
        referralCode || "None"
      }\n*Submitted at:* ${new Date().toLocaleString()}`,
    };

    // Send to Slack
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.statusText}`);
    }

    return NextResponse.json({
      success: true,
      message: "Investment details sent to Slack successfully",
    });
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send investment details to Slack" },
      { status: 500 }
    );
  }
}

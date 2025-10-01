import { NextRequest, NextResponse } from 'next/server'

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || ''

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { projectName, amount, name, email, phone, referralCode } = body

    // Create Slack message
    const slackMessage = {
      text: "New Investment Submission",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "💰 New Investment Details Submitted"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Project:*\n${projectName}`
            },
            {
              type: "mrkdwn",
              text: `*Amount:*\n$${amount} USDT`
            },
            {
              type: "mrkdwn",
              text: `*Investor Name:*\n${name}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${email}`
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${phone}`
            },
            {
              type: "mrkdwn",
              text: `*Referral Code:*\n${referralCode || 'None'}`
            }
          ]
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `Submitted at: ${new Date().toLocaleString()}`
            }
          ]
        }
      ]
    }

    // Send to Slack
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.statusText}`)
    }

    return NextResponse.json({ success: true, message: 'Investment details sent to Slack successfully' })
  } catch (error) {
    console.error('Error sending to Slack:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send investment details to Slack' },
      { status: 500 }
    )
  }
}
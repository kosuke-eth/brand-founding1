import { NextRequest, NextResponse } from 'next/server'

// Use the provided Slack webhook URL directly for reliable posting during development
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

export async function POST(request: NextRequest) {
  try {
    console.log('API route called')
    console.log('Using SLACK_WEBHOOK_URL:', SLACK_WEBHOOK_URL)

    const body = await request.json()
    const { projectName, amount, name, email, phone, referralCode } = body

    // Create Slack message - simple text format for maximum compatibility
    const slackMessage = {
      text: `💰 New Investment Details Submitted\n\n*Project:* ${projectName}\n*Amount:* $${amount} USDT\n*Investor Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Referral Code:* ${referralCode || 'None'}\n*Submitted at:* ${new Date().toLocaleString()}`,
    }

    // Send to Slack
    console.log('Sending to Slack:', JSON.stringify(slackMessage, null, 2))

    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    console.log('Slack response status:', response.status)
    const responseText = await response.text()
    console.log('Slack response text:', responseText)

    if (!response.ok) {
      throw new Error(`Slack webhook failed: ${response.statusText}`)
    }

    return NextResponse.json({ success: true, message: 'Investment details sent to Slack successfully' })
  } catch (error) {
    console.error('Error sending to Slack:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send investment details to Slack' },
      { status: 500 },
    )
  }
}
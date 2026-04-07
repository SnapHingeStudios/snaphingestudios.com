interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    // Parse the incoming request from your frontend
    const body = await context.request.json() as { email?: string };
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400 });
    }

    // Fetch the environment variables (TypeScript now knows these exist!)
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const RESEND_AUDIENCE_ID = context.env.RESEND_AUDIENCE_ID;

    // Make the request directly to the Resend API
    const res = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        audience_id: RESEND_AUDIENCE_ID,
      }),
    });

    const data = await res.json() as { message?: string; error?: string };

    if (!res.ok) {
      return new Response(JSON.stringify({ error: data.message || 'Failed to subscribe' }), { status: 400 });
    }

    // 4. Return success to the frontend
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error('Subscription error:', err);
    return new Response(JSON.stringify({ error: 'Server error. Try again.' }), { status: 500 });
  }
}
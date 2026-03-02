const fetch = globalThis.fetch;

async function sendMail({ to, subject, text, html, replyTo }) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: "Trouve ton artisan", email: "no-reply@ton-domaine.fr" }, // mets un sender vérifié
      to: [{ email: to }],
      subject,
      textContent: text,
      htmlContent: html,
      replyTo: replyTo ? { email: replyTo } : undefined,
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.message || `Brevo API error (${res.status})`);
  }

  return data;
}

module.exports = { sendMail };
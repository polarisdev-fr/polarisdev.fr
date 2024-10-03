// @/pages/api/form-handler.js

export default async function formHandler(req, res) {
    return checkTurnstileToken(req, res);
}

async function checkTurnstileToken(req, res) {
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
    const token = req.body.token;

    const formData = new FormData();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY as string);
    formData.append('response', token);

    try {
        const result = await fetch(url, {
            body: formData,
            method: 'POST',
        });

        const outcome = await result.json();
        if (outcome.success) {
            return processForm(req, res);
        }
    } catch (err) {
        console.error(err);
    }
    res.status(500).json({ message: "Failed to validate CAPTCHA response" });
    return;
}

async function processForm(req, res) {
    // Continue processing the form
}
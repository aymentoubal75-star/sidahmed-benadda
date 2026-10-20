# sidahmed — Portfolio

## Run in VS Code

```bash
npm install
npm run dev
```

Then open the localhost URL shown by Vite.

## Built with
- React
- Vite
- Three.js
- React Three Fiber
- Drei
- GSAP

Update the profile, course titles, and project content in `src/main.jsx` as needed.

## Course registration

The course registration form sends submissions through EmailJS. Copy `.env.example` to `.env` and set the service ID, template ID, and public key from your EmailJS account. In your EmailJS template, use these form variables: `{{full_name}}`, `{{email}}`, `{{phone}}`, `{{course}}`, and `{{message}}`.

Add the same three `VITE_EMAILJS_*` variables to your hosting provider's environment settings before deploying. These are browser-side EmailJS settings; do not put a private key in the frontend. Configure allowed domains and abuse protection in EmailJS.

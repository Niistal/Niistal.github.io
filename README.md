# NIISTAL — Portfolio

Professional portfolio for **Iker Nistal Fernandez** — Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI.

Live: **https://niistal.github.io** · GitHub: **https://github.com/Niistal**

## Stack

Next.js · React · TypeScript (strict) · Tailwind CSS v4 · Framer Motion — statically exported (`output: "export"`), so it runs on GitHub Pages, Cloudflare Pages, Vercel or any static host.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build    # generates ./out
```

## Publish on GitHub Pages (easiest, free)

1. Create a **public** repo named exactly like your account + `.github.io` — in your case `Niistal.github.io` (respect the account casing, otherwise GitHub serves it as a project page instead of the user site).
2. Push this project to branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/Niistal/Niistal.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. Every push to `main` redeploys via `.github/workflows/deploy.yml`. Your site appears at `https://niistal.github.io` (GitHub derives the user-site URL from your username `Niistal`).

To use the custom domain `niistal.dev` later: repo Settings → Pages → Custom domain → add a `CNAME` file — no code changes needed.

## Edit your info

All editable content lives in `src/data/` — no hardcoded copy in components:

- `src/data/profile.ts` — name, headline, location, `github`, `linkedin`, `email`, `cvUrl`, avatar, nav, languages
- `src/data/projects.ts` — projects (name, description, stack, badges, status, links)
- `src/data/skills.ts` — skill groups + specialization cards
- `src/data/experience.ts` — real experience, education, journey, principles

Contact buttons: if `linkedin` is empty, that button is not rendered. The CV PDF lives at `public/cv/CV_Iker_Nistal_2026.pdf` — replace it with new versions keeping the same filename.

## Avatar

Place your anime/developer avatar at:

```
public/images/avatar.webp   # square, min 512×512
```

If missing, a branded `N` placeholder renders automatically.

## GitHub section

Fetches `https://api.github.com/users/Niistal` client-side. If the API fails, no stats are invented — only **View GitHub Profile** is shown.

## Notes

- Static export: no server features. The OG image is a pre-generated `public/og.png` (1200×630, Bordeaux → purple → blue).
- GitHub Pages cannot send custom server headers — CSP/Referrer-Policy are enforced via `<meta>` tags in `app/layout.tsx`.
- No secrets, tokens, private endpoints or analytics by default.

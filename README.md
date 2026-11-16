# Manoj Reddy Modhugula — Portfolio

A personal portfolio told along a hand-drawn thread: interests, projects, professional experience, and a place to say hello.

**Site:** https://manoj-curious-developer.c5gq9ccdd9.chatgpt.site

## Projects

- **Saylo:** multilingual voice conversations, transcripts, and conversation history.
- **MealWorks:** personalized meal picks and plate ideas.
- **Firmly:** company research across the business, industry, financials, and news.

The home page introduces the projects and experience at MathWorks, Georgia State University, and Accolite. `/work` presents the three projects in a separate gallery.

## Development

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm run preview
```

Vite prints the local development URL. For a private-network preview, set `PORTFOLIO_PREVIEW_HOST` to the hostname you intend to use. The production build prerenders `/` and `/work` into `.output/public`.

## Source layout

- `src/lib/profile.ts`: identity, contact links, site URL, and story milestones.
- `src/routes/index.tsx`: the main story, projects, and contact section.
- `src/routes/work.tsx`: project gallery and previews.
- `src/components/experience.tsx` and `src/lib/experience.ts`: experience layout and content.
- `src/components/rabbit-hole.tsx`: navigation into and out of the project gallery.
- `src/styles.css`: typography, colors, layout, and motion.
- `src/assets`: images used by the site.
- `public`: icons, share card, sitemap, and machine-readable profile.

## Hosting

Vercel builds are configured in `vercel.json` and serve the prerendered `.output/public` directory. The existing Sites deployment is configured separately in `.openai/hosting.json`. Keep deployment credentials out of the repository.

When changing the public domain, update `src/lib/profile.ts`, `public/sitemap.xml`, and `public/llms.txt`. Search indexing is currently disabled by the site's metadata and `public/robots.txt`.

## License

Code licensing is documented in `LICENSE`. Personal photographs, branding, writing, and project screenshots are excluded from the code license.

## Contact

[Email](mailto:manoj.modhugula@gmail.com) · [LinkedIn](https://www.linkedin.com/in/manoj-modhugula/) · [GitHub](https://github.com/manoj-modhugula) · [X](https://x.com/heymeits)

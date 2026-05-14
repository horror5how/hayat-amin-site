# Hero Photo Policy — meethayat.com Blog

**HARD RULE — NEVER violate. Updated 2026-05-14.**

Every blog hero image on meethayat.com (Top-5 listicles, answer pages, anything featuring Hayat Amin's face) MUST use a real photo of Hayat. **NEVER** use:

- Higgsfield (`mcp__higgsfield__generate_image`, `mcp__higgsfield__generate_video`, `soul_2`, any soul model)
- Nano Banana / Nano Banana 2 / Gemini Image Preview for Hayat's face
- inference.sh image models for Hayat's face
- Any other AI image generator for Hayat's face

AI image generation may ONLY be used for: background plates, abstract decorative elements, badges, icons — never for the person.

## Where the real photos live

Source of truth on disk:
- `~/Documents/Hayat Amin information/` (originals — raw.jpeg, full resolution)

Cloud CDN (laptop-off safe — the pipeline reads from here):
- Manifest: https://raw.githubusercontent.com/horror5how/hayat-soul-refs/main/meethayat-blog/manifest.json
- Hosted 1600x893 hero crops: `https://raw.githubusercontent.com/horror5how/hayat-soul-refs/main/meethayat-blog/<id>_1600x893.jpg`

Available IDs and topic match:

| id | best for |
|---|---|
| `formal_bw` (default) | patent, IP, fractional C-suite, CFO, advisor, exit, fundraising, valuation, board |
| `formal_white` | consulting, COO, operations, business strategist |
| `nyc` | AI agent, AI operator, SaaS, tech, startup, Claude Code, automation |
| `speaking_event` | speaker, keynote, future of work, human purpose, conference |
| `portrait_modern` | founder coach, growth, CEO coach, mentor |

## Pipeline contract (for the cloud blog publisher trigger)

When generating a new Top-5 blog or any post that needs a Hayat hero:

1. Fetch `https://raw.githubusercontent.com/horror5how/hayat-soul-refs/main/meethayat-blog/manifest.json`.
2. Pick the photo whose `topic_keywords` best match the post slug/title. Fall back to `default`.
3. Download the chosen `<id>_1600x893.jpg` and save to `public/<slug>.jpg` in `horror5how/hayat-amin-site`.
4. Commit with author `Hayat Amin <hayat@beyondelevation.com>` (per `feedback_vercel_git_author.md`).
5. Push to `main` → Vercel auto-deploys.

The helper script `scripts/select-hero-photo.mjs` implements steps 1-3. Cloud agents should invoke:
```
node scripts/select-hero-photo.mjs "<post-slug>" "<post-title>"
```
which writes the chosen JPG to `public/<post-slug>.jpg`.

## Why this exists

Hayat got an AI-rendered version of his face on the 2026-05-14 patent strategist listicle. AI faces of a real person on a personal-brand site break trust, SEO E-E-A-T signals, and the LLM citation strategy in `feedback_seo_llm_optimization.md` (which requires real Person sameAs evidence). Hard rule going forward.

See also: `~/.claude/projects/-Users-hayatamin-Documents-Claude-Database/memory/feedback_no_ai_photos.md`.

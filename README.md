# City Lens

A free, judgment-free tool that helps people in NYC understand their rights and find local
resources — housing help, legal aid, food, shelter, and more. No accounts, no status checks.

The current demo (codename **Casa**) is focused on **housing**: it takes a person's situation
in plain words (typed, photographed, or picked from a list), explains what a notice means,
and points them to free legal help, their rights, and concrete next steps.

## Status

Early demo / prototype. Housing only for now — more categories (healthcare, legal, jobs,
voting & FAFSA dates, housing lotteries) coming next.

## Run it locally

It's a single HTML file — no build step, no install.

- **Easiest:** double-click `index.html` to open it in your browser.
- **Or** drag `index.html` into any browser window.

## Tech

Plain HTML, CSS, and JavaScript. Nothing to install.

- `index.html` — the app (layout, screens, logic).
- `resources.js` — **all the resource data** (orgs, phone numbers, descriptions). This is the file
  to edit when you want to add or change a resource. Instructions are at the top of that file.
  The "Talk to someone" screen builds its cards automatically from this data, filtered by the
  situation the person picked.
- `dates.js` — the "Important dates" data (deadlines, what they mean). Bilingual EN/ES inline,
  plus EN labels for the other languages.
- `i18n.js` — **all translations for languages beyond English & Spanish** (currently Chinese,
  Haitian Creole, Bengali, Russian, Italian, French, German). Anything not translated here
  falls back to English automatically, so the app never breaks. To add a language, add it to
  `CASA_LANGS` and fill in the blocks. Instructions are at the top of the file.
- `RESOURCES.md` / `DATA_SOURCES.md` — research notes and the plan for where data comes from.

## Languages

The 🌐 button (top-right, and on the summary screen) opens a dropdown to switch language.
English & Spanish live in `index.html`; every other language lives in `i18n.js`. The interface,
situation explanations, rights guides, news, and resource/date headings are translated for all
nine languages. **Note:** the individual date pop-up details (the long text inside each date) and
the resource descriptions still show in English for now. The translations are machine-assisted
drafts — have a fluent speaker review each one before any public launch (this is legal info).

## Working together (Matt + Sam)

We use a shared GitHub repo. Day-to-day rhythm:

1. **Pull** the latest before you start (GitHub Desktop → "Fetch origin").
2. Make your changes.
3. **Commit** with a short message describing what you changed.
4. **Push** so the other person gets it.

Pull before you start, push when you're done — that habit avoids most conflicts.

## Notes

- Phone numbers in the demo are placeholders — verify real numbers before any launch.
- Never commit secrets (API keys, passwords). The `.gitignore` is set up to help prevent that.

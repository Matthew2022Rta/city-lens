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
- `RESOURCES.md` / `DATA_SOURCES.md` — research notes and the plan for where data comes from.

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

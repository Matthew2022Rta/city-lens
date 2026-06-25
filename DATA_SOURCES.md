# City Lens — Data Sources & Strategy

How the app gets its information, what to curate by hand vs. pull from an API, and where to look.
Last updated: June 2026.

## The one rule that decides everything

**Curate by hand** (a spreadsheet you and Sam maintain) when the info is:
- the same for most people, and
- changes only a few times a year.
→ Rights, which hotline to call, who qualifies, voting deadlines, FAFSA deadlines.

**Use an API** (live data) only when the info is:
- hundreds of locations, and
- changes weekly, and
- depends on where the user physically is.
→ Food pantries, open shelters, open housing lotteries.

You will use BOTH — curated data for the "knowledge," APIs for "find the nearest open X." Phase 1
should be almost entirely curated. Add APIs later, one category at a time.

## Scope decision (important)

The Phase 1 data is **NYC-only**. "New York State" is much bigger and has totally different orgs
upstate. **Recommendation: launch NYC-only**, say so in the app, and add a `region` field to the
data now so it can expand to other NY cities later without a rebuild.

## Where the data should live (technical)

Start simple. Keep all curated resources in **one structured file** the app reads — either:
- a **Google Sheet** you both edit, exported to JSON (easiest for a non-coder + partner), or
- a **JSON file** in the repo.

Your existing Phase 1 spreadsheet already has the perfect schema:
`situation · resource name · organization · plain-language description · phone · website · languages · who can use it · hours · cost`.
Add: `region`, `last_verified` (date), and `source_url`. Don't change anything else — it's well built.

---

## Resources the app should feed, by category

### 1. Housing — DONE (Phase 1) ✅
Curated. Keep verifying numbers every ~3 months.
- Optional API later: **NYC Benefits & Programs API** (NYC Open Data / Socrata) — 40+ programs, for a
  "what do I qualify for?" screener. Also **NYC Benefits Screening API** (NYC Opportunity).

### 2. Food (pantries & soup kitchens) — high value, needs an API
- **NYC Open Data — food pantry / soup kitchen datasets** (Socrata API; CSV/JSON).
- **Food Bank For NYC** and **Plentiful** (pantry reservations app) for locations + hours.
- Curate a short "how food help works" explainer; pull the location list from the API.
- Update: API is live; locations/hours change often, so don't hard-code them.

### 3. Shelter — partly done, add live data
- Curated: right to shelter, PATH, 311/“text SHELTER to 898-211” (already in Phase 1).
- API later: **NYC Open Data — Homeless Shelters** and **DHS Daily Report** datasets.

### 4. Affordable housing lotteries — link out first, API later
- **NYC Housing Connect** (housingconnect.nyc.gov) — the official lottery site.
- Check NYC Open Data for an open-lottery feed; if none, just deep-link to Housing Connect for now.
- Curate the "how lotteries work / never pay a fee" explainer.

### 5. Voting dates & registration — CURATE (no useful API)
- **NY State Board of Elections** (elections.ny.gov) and **NYC Votes / vote.nyc** — official dates.
- These are fixed annual dates → keep them in a small `dates` file, update once a year.
- ⚠️ Do NOT build on Google's Civic Information API — its main lookup was retired April 2025.
- Example (verify yearly): 2026 primary Jun 23 (reg deadline Jun 13); general Nov 3 (reg deadline Oct 24).

### 6. FAFSA & college aid deadlines — CURATE (no useful API)
- **studentaid.gov** (federal FAFSA) + **NY HESC / TAP** (hesc.ny.gov) for state aid.
- Fixed annual dates → same small `dates` file as voting. Update once a year.

### 7. Legal rights / "know your rights" — CURATE
- Already strong in your demo. Plain-language guides change slowly; hand-maintain them.

### 8. The long-term "everything" directory — Open Referral / 211
- **Open Referral HSDS** is the national data standard for human-services directories; **211** data
  uses it. If you ever want one big searchable directory (not just curated highlights), this is the
  format to adopt so you can ingest other orgs' data cleanly. Not needed for Phase 1.

---

## Suggested build order

1. Ship the curated housing data you have (Phase 1) → already done.
2. Add the small `dates` file: voting + FAFSA deadlines (pure curation, high value, easy).
3. Add Food as the first API integration (NYC Open Data) — it's the most-needed location-based one.
4. Then shelters (API), then housing lotteries (link-out → API).
5. Only consider Open Referral/211 if you outgrow the curated list.

## Sources
- NYC Open Data — Benefits & Programs API: https://nycopendata.socrata.com/Social-Services/Benefits-and-Programs-API/2j8u-wtju
- NYC Open Data — Homeless Shelters: https://nycopendata.socrata.com/Social-Services/Homeless-Shelters/r7ck-t2gb
- NYC Benefits Platform / Screening API: https://www.nyc.gov/site/opportunity/portfolio/nyc-screening-api.page
- Open Referral HSDS: https://docs.openreferral.org/
- NY State Board of Elections — deadlines: https://elections.ny.gov/registration-and-voting-deadlines
- Google Civic API turndown notice: https://groups.google.com/g/google-civicinfo-api/c/9fwFn-dhktA

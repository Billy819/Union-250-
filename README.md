# Union 250

A discipline tracker in two levels, 500 days in total.

Log two things each night — whether you stayed clean, and your iPhone screen time.
**Level 1** maps 250 days onto 250 years of American history and assembles the United
States state by state, in the order each one actually joined the Union. **Level 2** opens
on day 250 and lights up fifty American inventions, from Franklin's lightning rod in 1752
to the iPhone in 2007.

Everything runs in the browser. No account, no server, no build step, no database.

---

## Put it on GitHub Pages

1. Create a new repository on GitHub (public is fine).
2. Upload **everything in this folder**, keeping the folder structure exactly as it is.
   The quickest way is GitHub's web uploader: **Add file → Upload files**, then drag the
   whole contents in. You can also use git:

   ```bash
   git init
   git add .
   git commit -m "Union 250"
   git branch -M main
   git remote add origin https://github.com/YOUR-NAME/YOUR-REPO.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**.
4. Under **Source**, pick **Deploy from a branch**. Choose branch `main` and folder `/ (root)`.
5. Save. After a minute or two the site is live at
   `https://YOUR-NAME.github.io/YOUR-REPO/`.

Add it to your iPhone home screen (Share → Add to Home Screen) and it opens full-screen
like an app.

### Two things that matter

- **Keep `.nojekyll`.** It is an empty file, and it is already included. Without it GitHub
  can mangle folder names and your photos will 404.
- **Do not rename the `assets` or `js` folders.** All the paths are relative and expect
  the layout below.

---

## What's in here

```
index.html                 the whole app shell
.nojekyll                  tells GitHub Pages to serve files as-is
README.md                  this file
css/
  style.css                all styling, both themes
js/
  app.js                   scoring, calendar, charts, map, hall, settings
  states.js                51 state dossiers: story text + photo captions
  inventions.js            50 invention dossiers, ordered by year invented
  map.js                   the US map as clickable SVG
  guide.js                 guide copy, tips, FAQ, videos, pride photos
assets/
  eagle.png                app icon / header mark
  flag.png                 header, pride card, finale
  america.mp3              optional background anthem (note button, top right)
  stars.mp3               	unlock fanfare
  scenery/
    al/ ak/ az/ … wy/ dc/  83 state photographs, two-letter folders
  invent/
    01_1.jpg … 50_1.jpg    51 invention photographs
  pride/
    crowd.jpg … rodeo.jpg  12 patriotic decoration photos
```

Total size is about 33 MB, nearly all of it photography. Every image was resized and
re-encoded — down from 123 MB originally — so the site loads quickly over mobile data.

---

## How the game works

**The run.** 500 logged days across two levels.

**Level 1 — The Union.** Days 1–250. Day 1 is 1776, day 250 is 2026. Every 5 days you log,
one state joins the Union — *whether the day went well or badly*. 50 unlocks × 5 days =
exactly 250. Washington, D.C. is on the map from day one. States arrive in order of
admission, so Delaware comes first and Hawaii last.

**Level 2 — The Hall of Innovation.** Days 251–500, unlocked automatically when Level 1
ends. Same rhythm: every 5 logged days lights one of fifty American inventions, in the
order they were invented. The hero counter walks forward from 1752 to 2007 as you go.
Inventions can be filtered by category, and each one opens a full story.

**Scoring.** Six metrics move together each day:

| Day | Points to every metric |
|---|---|
| Clean, under 2 hours | **+30** |
| Clean, under 3 hours | **+15** |
| Clean, under 4 hours | **+5** |
| Clean, 4 hours or more | 0 |
| Relapsed, any screen time | **−30** |

The hour thresholds are editable in Settings — change them and every past day is
rescored instantly.

**The six metrics are real.** Each one tracks a published international indicator, shows
the United States' actual current value and world rank, and names its source. Tap any card
for the full picture.

| Metric | Indicator | Source | US today | Rank | Benchmark |
|---|---|---|---|---|---|
| GDP | Nominal GDP | IMF WEO, Apr 2026 | $32.38T | 1 / 192 | $50T (stretch) |
| Human Development | Human Development Index | UNDP HDR 2025 | 0.938 | 18 / 193 | 0.972 — Iceland |
| Military Power | Global Firepower Power Index | Global Firepower 2026 | 0.0741 | 1 / 145 | 0.0000 — perfect |
| Global Reputation | Global Soft Power Index | Brand Finance 2026 | 74.9 / 100 | 1 / 193 | 100 — index max |
| Technology | Global Innovation Index | WIPO GII 2025 | 61.7 / 100 | 3 / 139 | 66.0 — Switzerland |
| Education | PISA mean score | OECD PISA 2022 | 489 | 16 / 81 | ~560 — Singapore |

**The standard is the same for all six: close the gap between where America is today and
the world's best.** Where the US already leads, the target is the index's own theoretical
best. A flawless 500-day run is 15,000 points, which closes every gap completely. Your
points move the *projection* only — the real figures are fixed, published data, and the
per-metric world ranks climb honestly as the gap narrows.

**Winning.** Reaching day 250 crowns the United States the greatest country in the world,
regardless of how the points fell along the way, and opens Level 2. Day 500 finishes
everything: 101 unlocked dossiers, nothing sealed. Showing up is the win condition.

---

## Features

- **Today** — log the day in two taps, with a live preview of what it is worth.
- **Calendar** — month grid, week list, and a 250-cell view of the entire run. Tap any
  past day to fill it in or change it. Stars mark the days that unlocked a state.
- **Progress** — screen time bar chart (7 / 30 / 90 / all days) with your target lines
  drawn on it, a breakdown of day types, the power index curve, and personal records.
- **The Union** — two halves. The real US map, where tapping any state that has joined
  opens a dossier of ten paragraphs on its history, culture, food, economy and people,
  plus photographs. And the **Hall of Innovation**, which stays sealed with a live progress
  bar until day 250, then fills with fifty inventions you can filter and read.
- **Guide** — how to use it, the scoring rules, six things to do when an urge hits, an
  FAQ, and fifteen talks from Americans worth listening to.
- **Every photograph opens full** — tap any picture in a state dossier, an invention story
  or the pride gallery and it opens uncropped, whole, at its real proportions. Arrows or a
  swipe walk the rest of the set, and a zoom button gives you detail at full resolution.
  Cards still crop to keep the grid tidy; the lightbox never changes the page underneath.
- **Settings** — name, start date, editable hour targets, dark / light / auto theme, five
  accent colours, sound, reduced motion, and backup export/import.

## Privacy

Your log never leaves your device. It lives in your browser's local storage under the key
`union250.v1`.

The fifteen videos are embedded through **youtube-nocookie.com**, and nothing is requested
from YouTube until you actually press play on one — the cards you see before that are
drawn locally.

**Back up your data** with Settings → Export backup before clearing your browser data,
switching browsers, or changing phones. It saves a small `.json` file you can import again
later.

---

## Credits

State photography and the state write-ups were supplied with the project. The base map is
the public-domain *Blank map of the United States*, rebuilt here so each state is
individually tappable and D.C. is large enough to hit with a thumb.

Colour is taken straight from the flag: Old Glory Blue and Old Glory Red on a navy field,
with star white and a gilt gold reserved for unlocks and honours. The day ledger runs on
blue intensity — the brighter the blue, the better the day — with red for a reset. Flag
stripes, star fields and pressed-metal seals are all drawn in CSS, so the decoration costs
no extra downloads.

Typography: **Public Sans** (the US federal government's typeface), **Big Shoulders
Display** (in the spirit of WPA national-park signage), and **IBM Plex Mono** for figures.

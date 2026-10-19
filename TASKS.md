# Tasks

## Task 1: Wire header-links component with CV data ✓

[x] Uncomment the `<header-links>` component in `user-header` so it is rendered.
[x] Migrate the links currently displayed by `SidebarLinksComponent` (which receives `[links]="cvData().links"`) into `HeaderLinksComponent`. Right now `HeaderLinksComponent` has its links hardcoded rather than read from an `@Input()`. Replace the hardcoded data with an `@Input() links` property bound to `cvData().links`.
[x] Icon is derived automatically from the link URL (no icon field in data); Instagram and generic fallback icons added.


## Task 2: Bye CSS, only TailwindCSS

[] Remove all imported `.css` files that define utility classes (e.g. `sidebar-block` and similar). Replace every usage with equivalent Tailwind v4 classes applied directly in the template.
[] Where the same combination of Tailwind classes repeats across multiple elements or components, extract them into a shared location (e.g. a Tailwind `@apply` rule in a single shared stylesheet, or a host-class constant) to avoid duplication.


## Task 3: ATS validation of generated PDFs

Context: feedback received that the generated PDFs do not match the exact pattern an ATS checks. We need a way to run the PDFs through an ATS-style parser and review the output before sending them.

Working hypothesis: the two-column layout itself is not the problem (two columns are common in German CVs and parsers such as [Textkernel](https://textkernel.com/faq) claim to support them, per the vendor). The likely problem is the **reading order of the extracted text** (sidebar interleaved with the main panel), plus icons/links rendered as images and a Puppeteer PDF without tagged structure. No ATS can be guaranteed to work with two columns, so the goal is a PDF whose extracted text is linear and ordered, not finding a certified ATS.

Open question: ask whoever gave the feedback which ATS/parser they used and what exactly failed (missing fields, wrong order, unreadable text).

### Candidate tools (research)

| Tool | Type | Cost / licence | Notes |
|---|---|---|---|
| [OpenResume parser](https://noted.lol/open-resume/) | Self-hostable web parser (pdf.js) | AGPL-3.0, free | Shows what the parser extracts and the detected sections. Designed for single-column English resumes, so it will flag the two-column layout. Good first check. |
| [ATS Resume Improver](https://simeononsecurity.com/articles/ats-resume-improver-ai-powered-resume-optimizer/) | Local/Docker browser tool | Free, runs without AI key | Shows the text an ATS would extract and flags formatting problems. |
| [Affinda Resume Parser](https://docs.affinda.com/resumes/self-hosted.md) ([Docker image](https://hub.docker.com/r/affinda/resume-parser)) | Commercial parser, self-hosted container | Paid, free evaluation allowance | Closest to a real commercial parser. Returns structured JSON (name, jobs, skills, education). |
| [FreeATS](https://euro-stack.com/solutions/freeats) | Full self-hosted ATS (Ruby) | MIT | Resume parsing not confirmed. Verify before relying on it. |
| Reactive Resume | Resume builder | Self-hostable | Only useful as a reference for ATS-friendly templates. |
| Not researched yet | OpenCATS, Resume-Matcher, pyresparser, Sovren/Textkernel | | Search returned nothing. Evaluate separately. |

Manual checks that need no install: select text in the PDF viewer, copy-paste into a plain text editor, and `pdftotext` (with and without `-layout`) to compare the extraction order against the source ([guidance](https://jobshinobi.com/blog/resume-scanner-for-pdf-parsing-problems)). Hosted scanners (e.g. Jobscan) are not identical to the ATS the recruiter uses.

### Checking the PDF text

```bash
pdftotext -raw  buildCVs/<file>.pdf -    # content-stream order = DOM order (what pdf.js-style parsers see)
pdftotext       buildCVs/<file>.pdf -    # re-sorted by visual position (what position-based parsers see)
pdftotext -layout buildCVs/<file>.pdf -  # keeps the page layout, useful to see the columns
```

The flag has a single dash (`-raw`, not `--raw`) and `-` as the output prints to the console. Both modes matter: a change in DOM order only shows up in `-raw`.

### Target reading order

Keep **two columns** (standard in German CVs; a single column is not needed). Reading order wanted in the text flow:

1. Personal data (name, role, contact, links)
2. About me + Skills (top of the sidebar)
3. Main panel (all experience entries)
4. Rest of the sidebar (Languages, Courses, Personal details)

Plan: CSS grid with explicit placement (`grid-column` / `grid-row`) instead of flex, so the DOM order differs from the visual order. Split the sidebar into a top part (about-me, skills) and a bottom part (languages, courses, personal details), both placed in the left column, with `main-panel` spanning both rows in the right column. The vertical divider moves from the sidebar container to the grid/main-panel. Risk: grid fragmentation across the page break in Chrome, so check page 2.

### Steps (D = difficulty 1-5, P = priority 1-5, 5 = highest)

Done:
[x] Research tools and write findings. Run `pdftotext` on EN and DE.
[x] `main-panel` first in the DOM with `flex-row-reverse` (`pdf-demo.component.ts`). Verified with `-raw` on EN `fullstackengineer`: `WORK EXPERIENCE` is now followed by the real entries and the sidebar blocks come after. Default `pdftotext` is identical before/after because it sorts by position.

Open, ordered by priority:
[] **[D1 P5]** Ask whoever gave the feedback which ATS/parser they used and what exactly failed (missing fields, wrong order, unreadable text).
[x] **[D3 P5] Target order: header, about-me + skills, main panel, rest of the sidebar.** Implemented with two independent float stacks instead of a grid (a grid shares rows between columns, which would push the "rest of the sidebar" below the whole main panel): in `pdf-demo.component.ts`, `<user-header>` (right), `<sidebar part="top">` (left), `<main-panel>` (right, `clear-right`), `<sidebar part="bottom">` (left, `clear-left`). Floats paint in DOM order and each column stacks independently, so the look is the same single left column. `SidebarComponent` has a new input `part: 'top' | 'bottom'` (top: photo, about me, skills; bottom: languages, courses, personal details); `main-panel` no longer renders the header. The vertical divider is a background gradient on the container (no positioned element). Verified with `-raw` on EN, DE and ES (`frontend`): name/contact, about me, skills, experience, education, industry contributions, languages, courses, personal details. Also added `break-after-avoid` to the section `h2`, so `EDUCATION` no longer stays alone at the bottom of page 1. Tested without photo too (`am` scope, `CVA10-DavidMayorgaF3D`): the full-width header above the columns was read after the page-1 content because an in-flow block paints after floats; it is now a `float-left w-full` inside its own `flow-root` wrapper, and the order is name, role, contact, links, about me, skills, experience, education, industry, languages, courses. Rule: every block that takes part in the reading order must be a float (or have no floats around it).
[x] **[D3 P5] Each experience entry as one contiguous block with the title first.** `main-section-timeline` is now a per-entry CSS grid (`grid-cols-[28%_72%] grid-rows-[auto_1fr]`) with DOM order role, company, city, dates, tasks (see the gap item below); the look is unchanged (checked on the rendered PDF). Verified with `-raw`: `FULL-STACK ENGINEER...`, `FREELANCER`, `Berlin`, `Aug 2025 - Present`, bullets. Root cause of the grouped company names: `z-index: 1` on `.experience__institution-font` and `.experience__role-font` and `position: relative` on `.experience__tasks-font` in `styles.css` made those elements paint in a later layer, so Chrome wrote them to the PDF after the rest. All three were removed. **Rule for the rest of the work: no `z-index`, `position: relative/absolute` or similar on elements that contain text, because they change the PDF text order.** Check the same in the sidebar components.
[x] **[D2 P4] No `position` on text containers.** Removed `relative` from all sidebar templates, the `position: relative` of `.user-header__contact-info` and the unused `.h1-cv-name` rule in `styles.css`. The horizontal sidebar dividers are now `border-b border-sidebar-divider` instead of an absolute `::after` (checked on the PDF, same look). Effect on the raw order: the contact data now comes before `WORK EXPERIENCE`, and the heading is directly followed by the first entry. Also removed the dangling `styleUrl: './app.css'` in `app.ts` (the empty `app.css` was already deleted, and the build failed without this).
[x] **[D1 P4] Tasks not aligned with the role (X offset).** `.experience__tasks-font` in `styles.css` had `padding: 0; margin: 0` (unlayered CSS beats Tailwind's `pl-6`), so the bullets sat at the timeline line while the role had `pl-6`. Removed both declarations; bullets and role now start at the same X in Work Experience, Education and Industry Contributions (compared with `CVS09-DavidMayorgaFV.pdf`).
[x] **[D3 P3] Vertical gap when the company name wraps to more lines than the role.** Fixed by making the left block (company, city, dates) one grid item spanning both rows (`grid-rows-[auto_1fr]`): row 1 is only as tall as the role, so the tasks start right under it, like the old flex layout. Trade-off: the DOM/text order is now role, company, city, dates, tasks (role first).
[x] **[D2 P4] Vertical sidebar divider** no longer uses `relative` + `::after` (see the item above).
[] **[D1 P2] Continue the Task 2 migration** while doing the above: when touching a component, move its classes from `styles.css` to Tailwind (candidates now: `.experience__*`, `.h3-occupation`, `.user-header__contact-info`, `h2`, `.about-me-font`).
[x] **[D2 P4] Links visible as text.** `header-links` has `@Input() separateUrlLine` (default `true`): the pills show the label (Portfolio, LinkedIn, GitHub) and a small plain-text line below lists the URLs (`mayit.dev · linkedin.com/in/... · github.com/...`). With `false` the pills show the URL itself and there is no extra line. Tested: `aria-label`/`title` and clipped `sr-only` text do NOT reach the PDF; only white/1px text does, which looks like hidden-text spam, so it was rejected. The PDF also keeps the `/URI` link annotations. The portfolio icon pattern now matches `mayit.dev` (it only matched the old `mayinteractive` domain). Open: check the variants with 4 links (Behance/Stackshare) for wrapping, and confirm with the ATS in question which option it needs.
[x] **[D2 P4] Garbage character before phone, email and address.** The contact icons were icomoon font glyphs (private-use characters), so the text came out as `<U+F542> +49 1525 ...`, `<U+F545> dr.mayorga20@...` and a lone glyph line before the address. Replaced by inline `aria-hidden` SVG icons in `user-header.component.ts`. `-raw` now gives `+49 1525 2198970`, `dr.mayorga20@gmail.com`, address, links. Follow-up (Task 2): delete the unused `.icon-*` rules and the `icomoon` `@font-face` in `styles.css` after checking nothing else uses them.
[x] **[D2 P4] Header block.** With the contact icons as SVG and no positioned text, the raw order is now name, role (not split), phone, email, address, links. Verified on EN `frontend`; recheck a long role (e.g. the `TDU` variant once it is registered).
[] **[D1 P4] Content errors (EN).** `Claude Cide` (Claude Code), `und Blender` (German word in the English CV), `(i.e. Yeezy)` (should be `e.g.`). Check the same text in the DE and ES mocks.
[] **[D2 P3] Sections contiguous: Education / Courses / Languages.** `EDUCATION` is read together with `COURSES`/`LANGUAGES`, and `Udemy — Jan 2020` ends up separated from its course title. Check `sidebar-courses` and the education timeline.
[~] **[D2 P3] Page break control.** Done: `break-after-avoid` on the sidebar section titles (Skills, Languages, Courses, Personal details, Links) and on the main `h2` titles, so a title is no longer left alone at the bottom of a page (`LANGUAGES` / `EDUCATION` orphans). Still open: in DE the last skills line (`• NOTEBOOKLM • GEMINI • GPT`) lands alone at the top of page 2; `break-inside-avoid` on the skill group `div` did not fix it (reverted), probably because the block is inside a fragmented float. Options: shorten the skills, or force the whole `AI & LLMS` group to move with a wrapper.
[] **[D2 P2] More visible section titles** (sidebar and main), so `COURSES` / `PERSONAL DETAILS` are not confused with the item titles below them (`CLAUDE CODE IN ACTION`, `WORK AUTHORIZATION`). See the options discussed in the chat; pick one and apply it to the sidebar titles and the main `h2` together.
[] **[D2 P3]** Install and run OpenResume parser and ATS Resume Improver locally, compare EN, DE and ES.
[] **[D1 P3]** Save the DE and ES `-raw` and default outputs and re-run after each fix, comparing with `buildCVs/ats-check-en*.txt`.
[] **[D2 P2] Lost hyphens in wrapped words (DE).** `SREPraktiken`, `PerformanceOptimierung`, `3DVisualisierung`, `Shopping-MallAktivierungen`. Avoid wrapping compound words (wider blocks, `hyphens: manual`, or non-breaking hyphen).
[] **[D1 P2]** Register `toolsDevOpsUnity` (EN, acronym `TDU`) in `src/app/services/loadMockCVData.ts`. Today `node generate-pdf.js toolsDevOpsUnity EN` renders an empty PDF.
[] **[D3 P2]** Evaluate the Affinda Docker image on the free allowance as the commercial-parser reference.
[] **[D3 P2]** Automated `pdftotext` check in `generate-pdf.js` that fails when key sections (name, email, Experience, Education, Skills) are missing or out of order.

Notes: the PDF is already tagged (`pdfinfo`: `Tagged: yes`), so `tagged: true` is not the fix. All text is extractable (no images or corrupt characters); the problems are order and structure.

@AGENTS.md
# Adamovich Site — Project Context

## Project
Multilingual website about Ales Adamovich and the initiative “Прыпынак Адамовіча”.

## Stack
- Next.js 16
- TypeScript
- CSS Modules
- App Router
- No Tailwind

## Languages
- ru
- be
- en

## Main pages
- Home
- Biography
- Bibliography
- Audio Guide
- Initiative
- Support
- Contacts

## Design direction
The site should feel archival, literary, serious, modern, but not museum-dead.
Dark version exists, but light/paper version is important because the current design was criticized as too dark.

## Visual style
- Archival paper texture
- Warm beige / old paper
- Deep black footer
- Gold accent
- Photos, books, manuscripts, forest transitions
- Avoid generic startup look

## Important rules
- Do not rewrite the whole site without need.
- Preserve current structure unless task requires change.
- Work component by component.
- Keep responsive layout clean.
- Do not remove existing content unless explicitly asked.
- Use CSS Modules.
- Do not introduce Tailwind.
- Do not invent historical facts.
- Ask only if blocked; otherwise make a reasonable implementation.

## Current priorities
1. Finish main site pages.
2. Make design consistent.
3. Prepare site for public presentation.
4. Keep performance acceptable.
5. Avoid overengineering.

## Known issue
Previous attempts to add too much global logic caused slow page generation. Be careful with root layout, dictionaries, global imports, and data loaded on every route.

## Tone
The site is not just a biography. It is a living memory platform around Adamovich’s legacy, books, war memory, civic courage, and the initiative “Прыпынак Адамовіча”.
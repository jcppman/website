---
name: chriest.me
description: A dark, quiet portfolio of software, records and photographs.
colors:
  darkroom-plum: "#211d23"
  print-cream: "#fff0dd"
  safelight-peach: "#ffb597"
  raised-plum: "#312b32"
  ledger-rule: "#594b57"
  raised-edge: "#675661"
  control-edge: "#76646e"
  faded-tick: "#a4919a"
  crop-mark-rose: "#cb9a8b"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(56px, 8.6vw, 96px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(38px, 4.4vw, 68px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.5
  body-strong:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  statement:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(42px, 6.6vw, 96px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  ledger-label:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.14em"
  label-small:
    fontFamily: "IBM Plex Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.25
rounded:
  none: "0px"
spacing:
  inset: "clamp(20px, 4vw, 68px)"
  grid-gap: "clamp(18px, 3vw, 48px)"
  album-gap: "26px"
  section: "4rem"
  entry: "2rem"
components:
  text-link:
    textColor: "{colors.print-cream}"
  text-link-hover:
    textColor: "{colors.safelight-peach}"
  nav-link:
    textColor: "{colors.safelight-peach}"
    typography: "{typography.ledger-label}"
  nav-link-current:
    textColor: "{colors.print-cream}"
    typography: "{typography.ledger-label}"
  more-link:
    textColor: "{colors.safelight-peach}"
    typography: "{typography.ledger-label}"
  role-label:
    textColor: "{colors.safelight-peach}"
    typography: "{typography.ledger-label}"
  figure-caption:
    textColor: "{colors.safelight-peach}"
    typography: "{typography.caption}"
  outline-preview:
    backgroundColor: "{colors.raised-plum}"
    textColor: "{colors.print-cream}"
    rounded: "{rounded.none}"
    padding: "9px 14px 9px 9px"
  mobile-outline:
    backgroundColor: "{colors.raised-plum}"
    textColor: "{colors.safelight-peach}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "44px"
  viewer-control:
    textColor: "{colors.safelight-peach}"
    size: "48px"
  viewer:
    backgroundColor: "{colors.darkroom-plum}"
    textColor: "{colors.print-cream}"
    rounded: "{rounded.none}"
---

# Design System: chriest.me

## Overview

**Creative North Star: "The Darkroom Ledger"**

The site works like a darkroom under a warm safelight: a deep plum dark, cream type, and one peach accent that marks what can be acted on. Inside that room, the work is logged plainly. Releases appear as a list of covers, titles, artists, years and roles. Photographs appear in month groups, divided by thin crop marks. The interface stays quiet so the photographs and record covers carry the page.

Density is low and the scale is bold. Body text is 20px, display type runs up to 96px in a tight serif, and the layout uses wide gaps and 1px ledger rules instead of boxes, cards or shadows. A thin masthead carries the name and navigation; the work takes the full width below it, and every page ends on a colophon.

This document records the current system. It is descriptive, not a lock: future work may extend it (for example, with a second accent or new surface treatments) when a surface needs it. A full replacement goes through a redesign.

**Key Characteristics:**
- One dark theme only (`color-scheme: dark`), warm and low in contrast between surfaces.
- A single accent, Safelight Peach, for links, captions, navigation and controls.
- Serif display type (Newsreader) over a sans body (IBM Plex Sans).
- Flat, square surfaces. Depth comes from small tonal steps, not shadows.
- Darkroom details used deliberately: crop-mark frames on featured images, a registration-mark divider between photograph groups, and a tick outline of the page.

## Colors

A warm, near-monochrome plum palette with one peach accent.

### Primary
- **Safelight Peach** (`safelight-peach`): the accent. Used for link hover, page navigation, "More" links, captions and metadata, photo viewer controls, focus outlines, and the active tick in the page outline. It marks things a visitor can act on, and the supporting text around the work.

### Neutral
- **Darkroom Plum** (`darkroom-plum`): the page and viewer background, and the browser `theme-color`.
- **Print Cream** (`print-cream`): body text, headings, and the current page in navigation. Inline links rest in this colour and turn peach on hover.
- **Raised Plum** (`raised-plum`): the one raised surface, used for the outline preview flyout and the mobile section picker.
- **Ledger Rule** (`ledger-rule`): the 1px divider between catalog entries on the Music page.
- **Raised Edge** (`raised-edge`): the 1px border of the outline preview.
- **Control Edge** (`control-edge`): the 1px border of the mobile section picker.
- **Faded Tick** (`faded-tick`): resting ticks of the scroll outline.
- **Crop Mark Rose** (`crop-mark-rose`): the corner strokes of the crop-mark divider between photograph months.

The photo viewer backdrop is a darker plum at 92% opacity (`rgb(16 13 17 / 92%)`); it is a one-off overlay, not a palette colour.

### Named Rules
**The Single Safelight Rule.** Peach is currently the only accent. Text and surfaces use the plum and cream neutrals; colour emphasis comes from peach alone.

## Typography

**Display Font:** Newsreader variable (with Georgia, serif)
**Body Font:** IBM Plex Sans 400 and 600 (with Arial, sans-serif)

**Character:** A literary serif for names and titles, set tight and large, over a plain, technical sans for everything else. The pairing reads like a printed credit list.

### Hierarchy
- **Statement** (400, `clamp(42px, 6.6vw, 96px)`, 1.02, max 17ch): the homepage sentence, whose three crafts are links.
- **Headline** (400, `clamp(56px, 8.6vw, 96px)`, 1.02): page titles and homepage section headings.
- **Title** (400, `clamp(38px, 4.4vw, 68px)`, 1.02): release titles in the Music ledger.
- **Display** (400, `clamp(30px, 3vw, 44px)`, 1.02): the name in the masthead and colophon, and homepage release titles.
- **Ledger label** (600, 14px, 0.14em tracking, uppercase): navigation, roles, counts, "All records" links and colophon group names.
- **Body** (400, 20px, 1.5): introduction, credits, and running text. The introduction is limited to 25ch.
- **Body strong** (600, 20px): the current page in navigation and release titles in homepage captions (at 1.15em).
- **Caption** (400, 18px): figure captions and catalog metadata, in peach.
- **Label** (400, 17px): outline preview titles, the mobile section picker.
- **Label small** (400, 15px, 1.25): secondary lines in the outline preview.

All serif roles share weight 400, line-height 1.02 and letter-spacing -0.04em. The viewer position counter uses 16px with tabular numerals.

### Named Rules
**The Regular-Weight Serif Rule.** Newsreader is used only at weight 400. Hierarchy comes from size, not weight.

## Layout

- **Shell:** one column, maximum width 1560px, centred, padded by `inset`.
- **Masthead:** name on the left, navigation on the right, on one baseline, closed by a 1px Ledger Rule. It wraps on phone.
- **Homepage:** the statement, then the lead photograph in a crop-mark frame, then Music and Photographs sections. Each section head pairs a headline with a ledger-label link on the same baseline. Releases and photographs sit in two-column grids.
- **Music ledger:** each entry is a three-column grid: a year column (`clamp(72px, 8vw, 140px)`, sticky, shown only when the year changes), the cover, and the text. Entries are divided by Ledger Rules. On phone the entry stacks.
- **Photography:** a page head with the count and year span, then groups separated by registration-mark dividers. A group of three or more that starts with a landscape photograph leads with it at full width; the rest is a two-column masonry with `album-gap`. Groups carry no visible titles.
- **Colophon:** every page ends with a crop-mark rule, the name with record and photograph counts, and link groups (Software, Elsewhere).
- **Breakpoint 740px:** below it, every grid becomes one column and the colophon becomes two. The scroll outline turns into the bottom-right picker on touch or narrow screens.

## Elevation & Depth

The system is flat. There are no shadows. Depth comes from small tonal steps: Raised Plum with a 1px edge for the outline preview and mobile picker, and a near-opaque dark backdrop behind the photo viewer. Photographs and covers are the only things with visual weight.

### Named Rules
**The No-Shadow Rule.** Surfaces are separated by tone and 1px edges, not by shadows or blur.

## Shapes

Every corner is square (`rounded.none`). Images run edge to edge in their columns with no frames or radius. Lines are 1px. The recurring form is the crop mark: two short L-shaped corner strokes (22px by 10px) at the ends of a full-width divider, borrowed from print and darkroom practice.

## Components

### Links
- **Inline links:** Print Cream with a 1px underline offset 0.19em. They turn Safelight Peach on hover with a 120ms colour transition.
- **Focus:** every focusable element gets a 2px Safelight Peach outline, offset 4px.

### Navigation
- **Masthead navigation:** ledger-label links in peach. The current page is cream with a 1px underline offset 0.6em.
- **Colophon links:** peach 18px links in labelled groups.
- **Section links:** "All records" and "All photographs" as peach ledger labels.

### Figures
- **Captions:** peach, 18px, 0.5em below the image. The homepage lead joins its caption and label with " · ".
- **Record figures:** cover image, then the title in strong body text, then artists · year and roles on their own lines.

### Crop-mark frame (signature)
Eight 1px hairlines, 28px long, drawn 12px outside the corners of an image. The home lead photograph wears it in Crop Mark Rose and settles into place on load (900ms, ease-out-expo). Covers show it in Safelight Peach on hover, sliding out from 4px.

### Ledger entry (signature)
Year in the margin, cover as a link to the first listening URL, then title, artist (omitted when it repeats the title), roles as peach ledger labels, release type, and listening links. Non-square covers sit contained on Raised Plum, never cropped.

### Registration divider (signature)
A full-width rule with 40×16px crop marks at both ends and a registration target (circle and crosshair) in the centre, in Crop Mark Rose. It separates photograph groups and is the scroll target for group bookmarks.

### Scroll outline (signature)
A column of short 10px by 2px Faded Tick lines on the right edge. On hover, focus, or for the current section, a tick grows to 19px and turns peach (140ms). Hovering or focusing shows a flyout to the left: a 54px square thumbnail with a title and a peach subtitle on Raised Plum with a Raised Edge border. The flyout fades in over 140ms.

### Mobile section picker
A fixed bottom-right button on Raised Plum with a Control Edge border, peach 17px text, at least 44px tall. A transparent native `select` covers it, so the platform picker handles the choice.

### Photo viewer
A full-screen modal `dialog` on Darkroom Plum at 96% opacity. A 3-by-3 grid places close in the top row, previous and next beside the image, and a tabular ledger-label counter below. Controls are 48px targets with 1.4px stroked SVG icons in peach, turning cream on hover. The viewer and its backdrop fade in over 160ms.

### Motion
The one authored moment is the crop-mark frame settling onto the home lead photograph. Everything else is short and functional: content fades in over 220ms, links change colour over 120ms, cover frames slide out over 260ms, and outline ticks change over 140ms. All of it is gated behind `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

These describe the current system. They are defaults for extending it, not prohibitions; a surface may depart from them when it has a reason.

### Do:
- **Do** let photographs and covers lead. Keep interface text in the masthead, captions, credit lines and colophon.
- **Do** use Safelight Peach for interactive and supporting text, and Print Cream for content text.
- **Do** set titles in Newsreader at weight 400 with tight line-height (1.02) and -0.04em tracking.
- **Do** separate content with space and 1px tonal lines before adding containers.
- **Do** keep touch targets at least 44px, as the viewer controls and mobile picker do.
- **Do** gate motion behind `prefers-reduced-motion: no-preference`; keep state changes short and reserve longer motion for one authored moment per page.
- **Do** use crop marks and registration marks as the system's ornament, at full size, rather than adding new decoration.
- **Do** theme browser surfaces from the palette: selection, scrollbar, caret.

### Don't:
- **Don't** add shadows, rounded corners or gradients to extend the current look; they are absent today. Introduce them only as a deliberate change to the system.
- **Don't** add captions or visible group titles to the full photography gallery; group titles exist only for screen readers.
- **Don't** add a light theme to a single surface; the site is dark only.

# Aarav Hotel & Banquet: website

Live: https://aarav-hotel-banquet.netlify.app

A plain HTML, CSS and JavaScript website with 9 pages. It has no build step, no framework and no server code, so any web hosting can serve it.

## Folder

| Path | What it is |
|---|---|
| `index.html` | Home: hero slides, "Check your date" box, occasions, venue, packages, banners, gallery, FAQ, enquiry form |
| `about.html`, `banquet-halls.html`, `occasions.html`, `packages.html`, `menu.html`, `rooms.html`, `gallery.html`, `contact.html` | The other 8 pages |
| `css/style.css` | All styles: colours, fonts, layout, phone/tablet sizes |
| `js/main.js` | The shared header, menu, footer and social icons, plus the slider, countdown, popup, gallery and forms |
| `images/` | All photos. Most are free stock photos from Pexels; swap in real venue photos when they arrive |

The header, menu and footer are not written in each HTML page. Every page has `<div id="site-header">` and `<div id="site-footer">`, and `js/main.js` fills them in. To change the menu or footer, edit `js/main.js` once and every page picks it up.

## Run it on your computer

**Option 1: quick look.** Double-click `index.html` to open it in Chrome or Edge.

**Option 2: local server (recommended).** Open a terminal in this folder and run:

```
python -m http.server 8010
```

Then open http://localhost:8010 and press Ctrl + C to stop. Any other static server works too, for example `npx serve .`.

## Common changes

| What | Where |
|---|---|
| Phone / WhatsApp number | `js/main.js`: `PHONE` and `WA` at the top. The number also appears in a few HTML pages (search for `9999991554`) |
| Facebook / Instagram / YouTube links | `js/main.js`: the `SOCIAL` list. Each icon is a plain logo while its link is `'#'`; put the real profile link there and it becomes a clickable link |
| Countdown end date | `js/main.js`: `OPENING` |
| Hero slides (photo, text, buttons) | `index.html`: each `<div class="slide">`. Slide speed is `4000` (ms) in `js/main.js`, and the progress bar is `prog 4s` in `css/style.css` |
| Popup (shows once, 18 s after the home page opens) | `js/main.js`: the `popup()` function |
| Colours and fonts | `css/style.css`: the `:root` variables at the top |
| Photos | Put the new file in `images/` with the same name, or change the `src` in the HTML |

**Enquiries.** No form sends data to a server. Every form and "Enquire" button opens WhatsApp (91 99999 91554) with the details already typed in, and prices are always "on request".

## Put it online

**Netlify (current).** Log in to Netlify, go to Sites, then Add new site, then Deploy manually, and drag this whole folder in. With the Netlify CLI, run `netlify deploy --prod --dir .` from this folder.

**Any hosting (Hostinger, cPanel, own server).** Upload everything in this folder to `public_html` (or the site's web root). Nothing else is needed.

**What is still to confirm with the client:**
- Real venue photos
- Logo (currently an "A" monogram)
- Social links
- Exact Google Maps pin
- Room check-in / check-out times
- Package points
- The menu
- Which booking date is correct: the countdown ends 25 Dec while the text says "Bookings open from 1st January"

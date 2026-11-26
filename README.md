# Notebooks — Programming Notes Website

A static notes website for programming learners. The home page ("OUR NOTES") shows a carousel of note subjects — HTML, CSS, JavaScript, Python, C and C++ — and the repo also bundles unit-wise study PDFs and a set of small practice pages (games, login, progress, about and contact pages), each built as separate HTML/CSS/JS files.

## What it does

- Notes home page with an image carousel for HTML, CSS, JS, Python, C and C++ notes, with dot navigation
- A "NOTEBOOKS" products/notes section on the home page
- Separate pages for About, Contact, Login and Progress
- Small practice/game pages: `game.html`, `game_page.html`, `maze.html` and `paper_game.html`
- Study material PDFs: `Unit 1_PPT.pdf`, `Unit 2.pdf`, `Unit 3_4.pdf` and `Unit 5_PPT.pdf`

## Tech stack

- HTML5, CSS3 and vanilla JavaScript — no build step or dependencies
- Each page has its own matching `.css` and `.js` file (for example `about.html` / `about.css` / `about.js`)

## How to run

```bash
git clone https://github.com/ApnaShashank/Notebooks.git
cd Notebooks
```

Then open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Project structure

- `index.html` / `style.css` / `script.js` — notes home page with the subject carousel
- `notes.html` — notes page
- `about.*`, `contact.*`, `login.*`, `progress.*` — about, contact, login and progress pages
- `game.*`, `game_page.*`, `maze.*`, `paper_game.*` — practice game pages
- `Unit *.pdf` — unit-wise study PDFs
- `html.png`, `css.png`, `js.png`, `python.png`, `c.png`, `c++.png`, `logo.png` — subject and site images

## Author

**Shashank Gupta** — [GitHub](https://github.com/ApnaShashank) · [Portfolio](https://shashankqoder.vercel.app)

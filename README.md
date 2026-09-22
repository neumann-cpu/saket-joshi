# saket-joshi

Personal site for [Saket Joshi](https://neumann-cpu.github.io/saket-joshi/) — static HTML/CSS/JS, designed for GitHub Pages.

## Local preview

```bash
# from repo root
python3 -m http.server 8000
# open http://localhost:8000
```

Or open `index.html` directly in a browser.

## GitHub Pages

Configured to serve from the `/` (root) of the `main` branch.

```bash
gh api repos/neumann-cpu/saket-joshi/pages -X POST -f build_type=legacy -f source[branch]=main -f source[path]=/
```

Site URL: https://neumann-cpu.github.io/saket-joshi/

## Structure

```
index.html          Home (about, work summary, pubs, experience, writing, contact)
work/index.html     Selected work deep dives
writing/            Writing index + posts
css/styles.css
js/main.js
```

No build step. No framework.

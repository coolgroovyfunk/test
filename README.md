# Cool Groovy Funk — Sticker Shop Site

A lightweight, no-build static site for the sticker shop. Fully mobile-responsive,
hosted for free on GitHub Pages.

## Put it on GitHub

1. Create a new repository on GitHub, e.g. `coolgroovyfunk-site`.
2. Upload every file in this folder to the repo (drag-and-drop on
   github.com works fine, or use `git` if you're comfortable with it),
   keeping the folder structure exactly as-is:
   ```
   index.html
   css/styles.css
   js/app.js
   js/stickers-data.js
   images/favicon.svg
   images/stickers/...
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch **main**, folder **/ (root)**. Save.
5. GitHub gives you a URL like `https://yourusername.github.io/coolgroovyfunk-site/`
   within a minute or two. That's your live site.
6. Optional: to use your own domain (coolgroovyfunk.com), add a `CNAME` file
   to the repo root containing just your domain name, then point your
   domain's DNS at GitHub Pages (GitHub's docs: "Managing a custom domain
   for your GitHub Pages site").

## Adding a new sticker (the part you'll do often)

1. Add your sticker's image file to `images/stickers/`.
   (Any format works — jpg, png, or svg. Square images look best.)
2. Open `js/stickers-data.js`.
3. Copy one of the existing entries (the part between `{` and `}`),
   paste it as a new item in the list, and fill in your details:
   ```js
   {
     id: "your-sticker-name",
     name: "Your Sticker Name",
     description: "A short, fun description.",
     image: "images/stickers/your-sticker-name.jpg",
     category: "Animals",
     etsyUrl: "https://etsy.com/shop/coolgroovyfunk",
     isNew: true
   }
   ```
4. Commit/save the change (right in the GitHub web editor, or via `git push`).
   The live site updates automatically — no build step, no app to run.

To remove a sticker, delete its entry from the same file. To reorder them,
just move the entries up or down in the list — they display in that order.

Categories are created automatically from whatever you type in the
`category` field, so the filter buttons at the top of the page update
themselves as you add new categories.

## What's placeholder right now

The 8 stickers included are wired up with simple colored placeholder
graphics (in `images/stickers/`) standing in for real product photos —
swap those image files out for your own photography whenever you're ready,
using the same filenames or updating the `image` path in
`stickers-data.js`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure — rarely needs edits |
| `css/styles.css` | All visual styling |
| `js/stickers-data.js` | **Edit this to add/remove/update stickers** |
| `js/app.js` | Renders the sticker grid and filters — no edits needed |

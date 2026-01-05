# PAiVE Website

## GitHub Pages Setup

### Important Notes for GitHub Pages:

1. **File Names**: Ensure all file names are lowercase and match exactly:
   - `index.html` (not `Index.html`)
   - `styles.css` (not `Styles.css`)
   - `script.js` (not `Script.js`)

2. **Directory Structure**: Make sure your files are in the root directory:
   ```
   /
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/
       ├── paivelogo.svg
       └── odoologo.png
   ```

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Select source: "Deploy from a branch"
   - Choose branch: `main` or `master`
   - Select folder: `/ (root)`
   - Click Save

4. **Clear Browser Cache**: If formatting looks off:
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache

5. **Check File Paths**: All paths use relative references:
   - `./styles.css`
   - `./script.js`
   - `./images/paivelogo.svg`

6. **Verify Files are Committed**: Make sure all files are committed and pushed to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

## Troubleshooting

If formatting is still off:
1. Check browser console (F12) for 404 errors on CSS/JS files
2. Verify all file names match exactly (case-sensitive)
3. Wait a few minutes after pushing - GitHub Pages can take time to update
4. Try accessing the site in an incognito/private window

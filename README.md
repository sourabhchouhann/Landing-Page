

##  My Approach

- Used semantic HTML for better structure and accessibility.
- Designed the layout using CSS Grid and Flexbox.
- Implemented responsive design using:
  - `clamp()` for font sizes and spacing
  - Relative units (`rem`, `%`, `vw`)
  - Media queries for tablet and mobile views
- Added Dark / Light Mode using:
  - CSS variables
  - A toggle button
  - JavaScript with `localStorage` to persist theme preference
- Ensured keyboard accessibility for the theme toggle (Enter & Space keys).
- Organized files cleanly (`index.html`, `style.css`, `script.js`, `assets/`).

---

## Challenges Faced

- Preventing layout overlap on smaller screen sizes while keeping the design consistent.
- Positioning absolute elements (hero images and start button) responsively.
- Managing dark mode styles without breaking existing color contrast.
- Debugging Git errors during the first push to GitHub.
- Ensuring keyboard accessibility worked correctly across browsers.

---

## Known Issues / Limitations

- Absolute-positioned hero images may slightly overlap on very small screens.
- Dark mode colors may need further contrast tuning for optimal readability.
- No backend integration (static front-end only).
- Images are not optimized for performance yet.

---

##  Future Improvements

- Improve mobile layout spacing.
- Add animations using CSS or GSAP.
- Optimize images and add lazy loading.
- Add ARIA roles for enhanced accessibility.
- Deploy using GitHub Pages.

---


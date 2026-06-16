# Rohit Addagatla — Personal Portfolio

A modern, responsive personal portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features

- Dark / light mode toggle (persisted via localStorage)
- Sticky, responsive navbar with mobile menu
- Animated terminal-style hero section
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- Sections: About, Education, Skills, Projects, Experience, Achievements, Contact
- Accessible contact form with client-side validation
- SEO meta tags in `index.html`

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview it with:

```bash
npm run preview
```

## 🎨 Customization

**Almost everything you need to edit lives in one file:**

```
src/data/portfolioData.js
```

This includes:

- `profile` — name, degree, college, intro text, interests, photo path
- `education` — timeline entries (degree, institution, dates, CGPA, coursework)
- `skills` — categorized skills with proficiency levels (1–5)
- `projects` — project cards (name, description, tech, features, links, image)
- `experience` — internships, hackathons, college activities, etc.
- `certifications` — achievements & certifications
- `contact` — email, phone, and social links

### Adding your photo

1. Place your image in `public/images/` (e.g. `public/images/profile.jpg`)
2. In `portfolioData.js`, set:
   ```js
   photo: '/images/profile.jpg'
   ```

### Adding project screenshots

Same approach — add images to `public/images/projects/` and set the `image`
field on each project object.

### Connecting the contact form

The form in `src/components/Contact.jsx` currently only shows a success
message locally. To actually send messages, connect it to a service like
[Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) —
see the comment block inside `handleSubmit` for an example snippet.

### Changing colors / fonts

Open `tailwind.config.js`:

- `colors.accent` — primary accent (cyan)
- `colors.flare` — secondary accent (amber)
- `colors.ink` / `colors.paper` — dark/light surface colors
- `fontFamily` — display (Space Grotesk), body (Inter), mono (JetBrains Mono)

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── ThemeContext.jsx
    ├── hooks/
    │   └── useReveal.js
    ├── data/
    │   └── portfolioData.js     ← Edit this for content
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Education.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## ♿ Accessibility

- Visible focus rings on all interactive elements
- Semantic landmarks (`header`, `main`, `footer`, `section`)
- Form labels and `aria-*` attributes for validation errors
- Reduced-motion media query disables animations when requested

## 🌐 Deployment

This is a static Vite app — deploy the `dist/` folder to any static host:

- **Vercel**: `vercel deploy`
- **Netlify**: drag-and-drop `dist/` or connect the repo
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch

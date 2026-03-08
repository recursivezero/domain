---
title: "My Internship Journey from Zero to Something"
description: "A Moth who found his flames to chase! : A transformative internship experience that shaped my frontend development career"
image: "/assets/images/blog/blog-8.png"
author: "Rupesh Rathore"
date: 2025-07-23
---

## **From Zero to A Front-End Developer: My Internship Experience**

My name is [Rupesh Rathore](https://www.linkedin.com/in/rupesh-rathore-881871326), currently a third-year B.Tech student at [ICFAI University, Jaipur](https://www.iujaipur.edu.in/),
with a passion for coding , programming , web-development, designing , art and sketching.
For past two months, I’ve had the incredible opportunity to work as a Software Development Engineer (SDE) intern at RecursiveZero Pvt. Ltd.

---

## **Significance of this Internship**

To me this was not just an Internship, it was a gamble, a desperately needed spark to ignite the flames I wanted to chase. To be honest with you all,
I had **Zero** knowledge and experience in web development 2 months prior because I was working on programming and DSA.

I wanted to learn and work on Web-development for past two years but couldn't. Then I saw an opportunity **a spark** that I could gamble on,
either I would waste my 2 months and disappoint by Internship Instructor **Mr. Keshav Mohta** or I would emerge anew and I did emerge anew.

I learned so much :

- I learned HTML, CSS, JavaScript from scratch to creating whole working projects.
- Astro from scratch to creating projects and many more that I will address later.

## Projects I Worked On at [**`abcdkbd.com`**](https://abcdkbd.com)

### [Akshar Page](https://abcdkbd.com/akshar) 🆎㊗️🈷️🕉️

- This page was originally called `Kannada` page which allowed users to explore the vowels and consonants of Kannada and Hindi language, providing a simple and visual way to compare characters and their sounds of two languages.

- I added many more languages to this page like Telugu, Tamil, Gujarati . Our Goal was to add all the most prominent languages of Bharat to it. After adding all possible languages we changed the name of the page to `Indic`
  but to set the Tone and make it sound **bhartiya**, later renamed it to `Akshar`.

- I developed its whole new UI with CSS, used many CSS features like Grid, color-gradients, CSS-animations, gradient animation and many more things.

- Now it allows users to explore the vowels and consonants of various Indian languages, providing a simple and visual way to compare scripts and sounds across different regions.
  A comprehensive hub for learning and practicing alphabets, offering tools for reading and learning.

### [Vedic Page](https://abcdkbd.com/vedic) ⏳🕰️

- A page dedicated to enables users to travel through India's rich heritage, knowledge and Time-system. This page represents Indian Time-System and units in such a way that engages users to learn and explore more about our culture.

- I developed three separate tabs - `Tithi` , `Converter` and `Units`.

  - Tithi - Presents date-time :
    - English calender(English-format - `Thursday, July 24, 2025 at 03:56:52 at night GMT+5:30`).
    - English calender(Hindi-format - `गुरुवार, 24 जुलाई 2025 को 03:56:55 IST बजे`).
    - Hindu calender(hindi-format - `शक गुरुवार, नवमी श्रावण कृष्ण पक्ष १९४७ को रात ०३:५६:५८ बजे`).
  - Converter - A vedic unit converter which helps to convert one vedic time unit to another e.g. `लव`, `रेणु`.
  - Units - A vedic time journey that allows user to travel and learn vedic time units with a stunning UI created using pure CSS.

- Developed the logic to represent date-time in different formats took inspiration from [Waqt](https://github.com/xkeshav/waqt) by **Mr. Keshav Mohta**, improved existing logic to convert units ,
  created whole UI and styling of the page from scratch.

### [Poems Page](https://abcdkbd.com/poems) 📚📜📃

- Developed a section where children can read poems across the world, making learning engaging and fun.

- I developed this page by taking inspiration from my own project which uses Astro's in-built i18n feature to show the same content in multiple languages - `localization` & `internationalization`.

- - I used `JSON` to store 50 poems and developed the logic to dynamically fetch the poems from the `JSON`.
  - Developed a cute and engaging `grid-card` based layout using CSS.
  - Utilizes JavaScript's in-built `pop-over API` to show the card-modal.
  - Utilized Emojis to give uniqueness to each `poem`.

### [Listen Page](https://abcdkbd.com/varnmala/listen) 💁‍♀️👂🔊

- Refactored and updated the Listen section’s user interface for a cleaner, more readable, and visually appealing experience.

- Removed Bugs from the page like jumbled layout and positioning.

### [Draw](https://abcdkbd.com/draw) 📝

- Refactored and updated the draw section’s user interface for a cleaner, more responsive, and visually appealing experience.

## Other Development

### [Vedic Time Journey](https://abcdkbd.com/vedic) 🕉️⏳ (

- Designed and implemented a scroll based Time journey which uses scroll based parallax effect to design cosmic journey.

### Square Bubble 🟥🟧🟪🟩

- Developed a custom component that can be used anywhere to represent the starting of the page. A stunning CSS animation and features based design which so engaging and pleasing to see.

## What I Learned 🧠

### Frontend Technologies

- **Astro Framework**:

  - Learned to use Astro's slot system for flexible component composition, enabling reusable layouts `(e.g. BaseLayout with header slots)`.
  - Utilized Astro's integration with Markdown and TypeScript for type-safe content and seamless data flow between content and UI.
  - Mastered Astro's Built-in Internationalization (I18n): Implemented robust multi-language support by configuring locales and a default language in `astro.config.mjs`.
    Organized content and UI strings by language (e.g., `src/pages/[locale]/` for routing and `src/i18n/ui.ts` for translations).
    Leveraged `astro:i18n` helper functions like `getRelativeLocaleUrl()` for accurate localized routing and `useTranslations()` for dynamic UI string translation, providing a truly global user experience.

- **CSS Techniques**:

  - Utilized CSS custom properties (variables) for theming and dynamic styling (e.g., `--item-width`, `--card-color`, `--t` for transitions), enhancing maintainability and flexibility.

  - Designed layouts using Flexbox for one-dimensional alignment and CSS Grid for complex two-dimensional structures, ensuring responsive and adaptive interfaces (e.g., gallery and capital page grids).

  - Applied gradients, `background-clip` for text effects, and `text-shadow` for visually appealing headings and cards.

  - Used `object-fit` for controlling image sizing within their containers, `border-radius` for rounded corners, and `box-shadow` to enhance image presentation and card aesthetics.

  - Leveraged `transition` and `transform` properties for smooth interactive effects (e.g., hover/active states in gallery and draw controls), improving user engagement.

  - Explored advanced CSS

    - pseudo-classes (`:hover`, `:active`, `:focus`, `:nth-child`, `:first-child`, `:last-child`)
    - pseudo-elements (`::before`, `::after`, `::first-letter`, `::first-line`) for dynamic styling and content manipulation without altering HTML.

  - Understood `z-index` for managing stacking order of elements.

  - Utilized `@keyframes` and animation properties (`animation`, `animation-delay`, `animation-duration`, `animation-timing-function`) to create complex, smooth animations.

### Git & Version Control Mastery

Learn about branching strategies, merging, and conflict resolution and learned to work with multiple developers on the same codebase and
understand the significance of proper commit messages, pull requests, and code with GitHub workflows and project organization.

### VS Code - The Developer's Best Friend

Discovered powerful extensions `(e.g. Project Manager, CSS Color Collector, ESLint, Prettier)` that transformed my coding experience and learned to use integrated debugging features for efficient troubleshooting and
learn to Organize projects efficiently with workspace settings and configurations also Created custom snippets and learned keyboard shortcuts for faster development.

---

## Gratitude & Reflection 🙌

This internship gave me a clear picture of how real projects work. I learned to write clean, on-time code and understood how important the right tools and tech stack are.
It helped me build confidence in frontend development and taught me to face challenges with curiosity and a problem-solving mindset.
With hands-on practice and great support, I feel ready to take on new projects, work in teams, and keep growing as a developer.

**Special Thanks**: Mr. Keshav Mohta and my team member for making this journey memorable and enriching! 🙏

**Thank you for reading!**

> Rupesh Rathore

## Project Structure

```plaintext
src/
├── assets/
│   └── styles/          # Global and component-specific styles
├── components/          # Reusable components
├── content/            # Content collections
│   └── blog/           # Blog posts in MDX format
│       └── blog-1-example.md
├── layouts/            # Layout components
├── models/            # TypeScript interfaces and types
│   └── index.ts
├── pages/             # Routing and page components
│   ├── index.astro
│   ├── 404.astro
│   ├── carrer.astro
│   ├── about.astro
│   ├── privacy.astro
│   ├── terms.astro
│   ├── work.astro
│   ├── blogs/          # Blog pages
│   └── work/          # Work portfolio pages
└── utils/            # Utilities and constants
    └── constants.ts  # Route configurations

docs/               # Documentation
└── README.md       # Project documentation

package.json       # Project configuration and dependencies
tsconfig.json     # TypeScript configuration
astro.config.mjs  # Astro configuration
```

## Technology Stack

- **Framework:** Astro v5.1.1
- **Styling:** Tailwind CSS v3.4.17
- **UI Components:** React v18.2.0
- **Type Checking:** TypeScript v5.6.2
- **Content:** MDX for blog posts
- **Styling Utilities:** 
  - @tailwindcss/typography
  - @tailwindcss/aspect-ratio
  - shadcn/ui components

## Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Format code
npm run lint

# Clean build files
npm run clean

# Reset project (remove node_modules, etc.)
npm run nuke
```

## Route Configuration

Add new routes in `src/utils/constants.ts`:

```typescript
export const NavbarLinks: LinkProps[] = [
  {
    name: "Page Name",
    title: "Page Title",
    path: "/route-path",
    isActive: true
  }
];
```

## Adding New Content

### Creating a New Blog Post

1. Create a new markdown file in `src/content/blog/`
2. Name format: `YYYY-MM-DD-title.md`
3. Include frontmatter:

  ```md
  ---
  title: Your Tile
  description: Brief description(optional)
  date: YYYY-MM-DD
  image: An image url
  author: Author name(optional)
---

## Adding Work Pages

1. Create a new `.astro` file in `src/pages/work/`:
```astro
---
// src/pages/work/project-name.astro
export const frontmatter = {
  title: "Project Title",
  description: "Project Description",
  image: "/path/to/image.jpg or url"
};
---

<YourWorkContent />
```

2. The work page (`work.astro`) will automatically:
   - Import all work pages
   - Generate cards with project information
   - Create navigation routes

## Navigation Structure

- Home (/)
- About (/about)
- Blogs (/blogs)
- Blog Posts (/blogs/blogs-posts)
- Career (/career)
- Work (/work)
- Work Projects (/work/work-projects)
- Footer Links:
  - Privacy Policy (/privacy)
  - Terms and Conditions (/terms)

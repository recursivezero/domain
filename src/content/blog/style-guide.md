---
title: "The style guide the must know to start the code"
description: "The full guid on file structure , css naming convention , tailwind usage and , css classes naming convention . "
date: 2024-12-26
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
---

## Style Guide Documentation

This document outlines the style guide we follow to maintain consistency and readability in our codebase. These principles apply to both CSS and JavaScript/TypeScript components.

---

## **1. File Structure**

- Use a clear and consistent folder structure.
- Place CSS files for components inside the `assets/styles` folder, named according to the component (e.g., `result-products.css` for `ResultProducts` component).
- Keep reusable styles in a `globals.css` file.

---

## **2. CSS Naming Convention**

- Use `kebab-case` for CSS class names.
  - Example: `card__image`, `container__card`
- For component-specific styles, use the format:  
  `componentName__element` (e.g., `card__image` for an image in the `Card` component).
- Use utility classes from Tailwind CSS wherever possible for common properties (e.g., margins, padding, colors).

---

## **3. Tailwind CSS Usage**

- **Use Tailwind utilities for common tasks** like spacing, typography, and colors:

  - Example:

    ```html
    <div class="rounded-lg bg-white p-4 text-gray-800"></div>
    ```

- **Avoid redundancy:** Don't add CSS rules for properties already provided by Tailwind classes.
- Create custom styles only when:
  - Tailwind utilities cannot achieve the desired layout or behavior.
  - Styles are specific to a particular component.

---

## **4. Component-Specific CSS**

- For each React component, create a corresponding CSS file if it requires custom styles.
- **CSS file naming**: Use the same name as the component, in lowercase and hyphen-separated.
  - Example:
    - Component: `ResultProducts.tsx`
    - CSS File: `result-products.css`
- Limit the use of global styles to prevent style conflicts.

---

## **5. Naming Variables & Functions**

- Use `camelCase` for variables, functions, and methods.
  - Example: `filterItemsByRating`, `sortItems`
- Use `PascalCase` for React components and TypeScript interfaces/types.
  - Example: `ResultProducts`, `ProductProps`
- Use `UPPER_SNAKE_CASE` for constants.
  - Example: `BASE_IMAGE_PATH`

---

## **7. JSX Structure**

- **Keep JSX clean and readable:**
  - Use meaningful class names.
  - Avoid inline styles unless absolutely necessary.
- Wrap component logic (e.g., filtering, sorting) in separate functions for clarity.

### **12. Example: Component and CSS Pair**

#### React Component (`ResultProducts.tsx`)

```tsx
<div className="container__card">
  <CardBase className="card__base">
    <img className="card__image" src={imageSrc} alt="Product Image" />
    <CardContent>
      <CardTitle className="card__content">Product Name</CardTitle>
    </CardContent>
  </CardBase>
</div>
```

#### CSS File (`result-products.css`)

```css
.container__card {
  @apply rounded-lg border bg-white p-4 shadow-md;
}

.card__base {
  @apply flex flex-col items-center;
}

.card__image {
  @apply h-40 w-full rounded-md object-cover;
}

.card__content {
  @apply text-lg font-semibold text-gray-800;
}
```

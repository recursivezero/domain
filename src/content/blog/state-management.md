---
title: "The new era of state management with Zustand ?"
description: "The simple and easy to understand all about Zustand the new and simple way to manage the state in client side. "
date: 2024-12-12
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
---

## Zustand Documentation

## What is Zustand?

Zustand is a small, fast, and flexible state management library for React. It allows you to manage global state with minimal setup, using React hooks to access and modify the state directly within your components.

---

## How Zustand is Used in This Project

In this project, Zustand is used to manage the search state across the application. This includes handling the user's search query, selected category, price range, sorting options, and rating filters.

---

## Creating the Store

We create a Zustand store using the `create` function. The store manages various pieces of state related to search functionality, such as the search query, category, price range, sort options, and ratings.

```ts
import { create } from "zustand";

interface SearchStore {
  searchQuery: string;
  selectCategory: string;
  priceRange: string;
  selectSortOption: string;
  selectRating: string;

  setSearchQuery: (query: string) => void;
  setSelectCategory: (category: string) => void;
  setPriceRange: (range: string) => void;
  setSelectSortOption: (option: string) => void;
  setSelectRating: (rating: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  selectCategory: "",
  priceRange: "",
  selectSortOption: "",
  selectRating: "",

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectCategory: (category) => set({ selectCategory: category }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSelectSortOption: (option) => set({ selectSortOption: option }),
  setSelectRating: (rating) => set({ selectRating: rating })
}));

export default useSearchStore;
```

#### Store State and Actions

- **State Variables:**

  - searchQuery: The current search query input by the user.
  - selectCategory: The category filter selected by the user.
  - priceRange: The price range filter.
  - selectSortOption: The sort option applied to the search results.
  - selectRating: The rating filter applied to the results.

- **Actions (Setters):**

  - setSearchQuery(query): Updates the search query.
  - setSelectCategory(category): Updates the selected category.
  - setPriceRange(range): Updates the price range.
  - setSelectSortOption(option): Updates the sorting option.
  - setSelectRating(rating): Updates the selected rating.

#### Accessing the Store in Components

To use Zustand state and actions in your React components, you use the useSearchStore hook.

**Example: Search Input Component**
The SearchInput component allows users to input a search query. It uses the global searchQuery from the store and updates it with setSearchQuery:

```ts
const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <Input
      type="search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="search-input"
    />
  );
};
```

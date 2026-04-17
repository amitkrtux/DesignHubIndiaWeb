---
title: "Design Tokens: The Foundation of Scalable Design Systems"
description: "An intermediate guide to understanding design tokens and how to implement them using Style Dictionary for multi-platform consistency."
date: "2026-03-20T00:00:00Z"
category: "intermediate"
tags: ["design-systems", "tokens", "figma", "engineering"]
image: ""
---

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

## Why Tokens Matter

Before tokens, designers and developers maintained separate copies of values like `#0ea5e9` for "brand blue". When the brand refreshed, every instance needed manual updates. Tokens solve this by creating a single source of truth.

## Types of Tokens

- **Global tokens** — raw values (e.g., `color-blue-500: #0ea5e9`)
- **Alias tokens** — semantic references (e.g., `color-action-primary: {color-blue-500}`)
- **Component tokens** — component-specific (e.g., `button-bg-primary: {color-action-primary}`)

## Implementation with Style Dictionary

Style Dictionary by Amazon transforms a single JSON source into platform-specific outputs (CSS variables, Android XML, iOS Swift).

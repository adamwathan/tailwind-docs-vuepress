---
title: "Functions &amp; Directives"
description: null
titleBorder: true
---

Tailwind exposes a few custom CSS functions and directives that can be used in your actual CSS files.

## @tailwind

Use the `@tailwind` directive to insert Tailwind's `base`, `utilities` and `screens` styles into your CSS. Here's a full example of how you might do this:

```css
/**
 * This injects Tailwind's base styles, which is a combination of
 * Normalize.css and some additional base styles.
 */
@tailwind base;

/**
 * This injects any component classes registered by plugins.
 */
@tailwind components;

/**
 * This injects all of Tailwind's utility classes, generated based on your
 * config file. It also injects any utility classes registered by plugins.
 */
@tailwind utilities;

/**
 * Use this directive to control where Tailwind injects the responsive
 * variations of each utility.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */
 @tailwind screens;
```

## @apply

Use `@apply` to mix-in the contents of existing classes into your custom CSS.

This is extremely useful when you find a common utility pattern in your HTML that you'd like to extract to a new component.

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
```

Rules can be listed on a single line or with multiple calls to `@apply`:

```css
.btn {
  @apply font-bold;
  @apply py-2;
  @apply px-4;
  @apply rounded;
}
```

You can mix `@apply` declarations with normal CSS declarations too of course:

```css
.btn:hover {
  @apply bg-blue-700;
  transform: translateY(-1px);
}
```

Any rules mixed in with `@apply` will have `!important` **removed** by default to avoid specificity issues:

```css
/* Input */
.foo {
  @apply bar;
}

.bar {
  color: blue !important;
}

/* Output */
.foo {
  color: blue;
}

.bar {
  color: blue !important;
}
```

If you'd like to `@apply` an existing class and make it `!important`, simply add `!important` to the end of the declaration:


```css
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}
```

Note that `@apply` **will not work** for mixing in hover, focus, or responsive variants of another utility. Instead, mix in the plain version of that utility into the appropriate pseudo-selector or a new media query:

```css
/* Won't work: */
.btn {
  @apply block bg-red-500;
  @apply hover:bg-blue-500;
  @apply md:inline-block;
}

/* Do this instead: */
.btn {
  @apply block bg-red-500;
}
.btn:hover {
  @apply bg-blue-500;
}
@screen md {
  .btn {
    @apply inline-block;
  }
}
```

If you've [configured a prefix](/docs/configuration/#prefix) for your utilities, you can optionally omit the prefix when using `@apply` if you prefer a terser syntax:

```css
/* Both of these will work */
.btn {
  @apply tw-font-bold tw-py-2 tw-px-4 tw-rounded;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
```

## @variants

You can generate `responsive`, `hover`, `focus`, `active`, and `group-hover` versions of your own utilities by wrapping their definitions in the `@variants` directive

```css
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}
```

This will generate the following CSS:

```css
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-90 {
  transform: rotate(90deg);
}

.focus\:rotate-0:focus {
  transform: rotate(0deg);
}
.focus\:rotate-90:focus {
  transform: rotate(90deg);
}

.hover\:rotate-0:hover {
  transform: rotate(0deg);
}
.hover\:rotate-90:hover {
  transform: rotate(90deg);
}
```

It's important to note that **variants are generated in the order you specify them**.

So if you want focus utilities to take priority over hover utilities for example, make sure focus comes *after* hover in the list:

```css
/* Input */
@variants hover, focus {
  .banana {
    color: yellow;
  }
}

/* Output */
.banana {
  color: yellow;
}
.hover\:banana:hover {
  color: yellow;
}
.focus\:banana:focus {
  color: yellow;
}
```

The `@variants` at-rule supports all of the values that are supported in the `variants` section of your config file:

- `responsive`
- `hover`
- `focus`
- `active`
- `group-hover`
- `focus-within`

...as well as any [custom variants](/docs/plugins/#adding-variants) added through plugins.

## @responsive

You can generate responsive versions of your own classes by wrapping their definitions in the `@responsive` directive:

```css
@responsive {
  .bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
}
```

Using the default breakpoints, this would generate these classes:

```css
.bg-gradient-brand {
  background-image: linear-gradient(blue, green);
}

/* ... */

@media (min-width: 640px) {
  .sm\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media (min-width: 768px) {
  .md\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media (min-width: 1024px) {
  .lg\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}

@media (min-width: 1280px) {
  .xl\:bg-gradient-brand {
    background-image: linear-gradient(blue, green);
  }
  /* ... */
}
```

The responsive versions will be added to Tailwind's existing media queries **at the end of your stylesheet.** This makes sure that classes with a responsive prefix always defeat non-responsive classes that are targeting the same CSS property.

## @screen

The `@screen` directive allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.

For example, say you have a `sm` breakpoint at `640px` and you need to write some custom CSS that references this breakpoint.

Instead of writing a raw media query that duplicates that value like this:

```css
{{ '@media (min-width: 640px) {' }}
  /* ... */
}
```

...you can use the `@screen` directive and reference the breakpoint by name:

```css
@screen sm {
  /* ... */
}
```

## theme()

While it's recommended to use the `@apply` directive to compose custom CSS out of existing utility classes whenever possible, sometimes you need direct access to your Tailwind config values.

Use the `theme()` function to access your Tailwind config values using dot notation:

```css
/* Source */
.error {
  font-size: theme('fontSize.xs');
  color: theme('colors.red.700');
}

/* Output */
.error {
  font-size: .75rem;
  color: #a61611;
}
```

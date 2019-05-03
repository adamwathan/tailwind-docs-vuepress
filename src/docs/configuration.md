---
title: "Configuration"
description: "A guide to configuring and customizing your Tailwind installation."
titleBorder: true
---

Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.

By default, Tailwind will look for an optional `tailwind.config.js` file at the root of your project where you can define any customizations.

```js
// Example `tailwind.config.js` file

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
```

Every section of the config file is optional, so you only have to specify what you'd like to change. Any missing sections will fall back to Tailwind's [default configuration](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js).

## Creating your configuration file

Generate a Tailwind config file for your project using the Tailwind CLI utility included when you install the `tailwindcss` npm package:

```bash
npx tailwind init
```

This will create a minimal `tailwind.config.js` file at the root of your project:

```js
// tailwind.config.js
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}
```

### Using a different file name

To use a name other than `tailwind.config.js`, pass it as an argument on the command-line:

```bash
npx tailwind init tailwindcss-config.js
```

If you use a custom file name, you will need to specify it when including Tailwind as a plugin in your PostCSS configuration as well:

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss')('./tailwindcss-config.js'),
  ],
}
```

### Scaffolding the entire default configuration

For most users we encourage you to keep your config file as minimal as possible, and only specify the things you want to customize.

If you'd rather scaffold a complete configuration file that includes all of Tailwind's default configuration, use the `--full` option:

```bash
npx tailwind init --full
```

You'll get a file that matches the [default configuration file](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js) Tailwind uses internally.

## Theme

The `theme` section is where you define your color palette, font stacks, type scale, border sizes, breakpoints — anything related to the visual design of your site.

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}
```

Learn more about the default theme and how to customize it in the [theme configuration guide](/docs/theme/).

## Variants

The `variants` section lets you control which [variants](/docs/state-variants/) are generated for each core utility plugin.

```js
// tailwind.config.js
module.exports = {
  variants: {
    appearance: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    fill: [],
  },
}
```

Learn more in the [variants configuration guide](/docs/configuring-variants/).

## Plugins

The `plugins` section allows you to register third-party plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-transforms'),
    require('tailwindcss-transitions'),
    require('tailwindcss-border-gradients'),
  ],
}
```

Learn more about writing your own plugins in the [plugin authoring guide](/docs/plugins/).

## Prefix

The `prefix` option allows you to add a custom prefix to all of Tailwind's generated utility classes. This can be really useful when layering Tailwind on top of existing CSS where there might be naming conflicts.

For example, you could add a `tw-` prefix by setting the `prefix` option like so:

```js
// tailwind.config.js
module.exports = {
  prefix: 'tw-',
}
```

Now every utility will be generated with the configured prefix:

```css
.tw-text-left {
  text-align: left;
}
.tw-text-center {
  text-align: center;
}
.tw-text-right {
  text-align: right;
}
/* etc. */
```

It's important to understand that this prefix is added to the beginning of each *utility* name, not to the entire class name.

That means that classes with responsive or state prefixes like `sm:` or `hover:` will still have the responsive or state prefix *first*, with your custom prefix appearing after the colon:

```html
<div class="tw-text-lg md:tw-text-xl tw-bg-red-500 hover:tw-bg-blue-500">
  <!-- -->
</div>
```

Prefixes are only added to classes generated by Tailwind; **no prefix will be added to your own custom classes.**

That means if you add your own responsive utility like this:

```css
@responsive {
  .bg-brand-gradient { /* ... */ }
}
```

...the generated responsive classes will not have your configured prefix:

```css
.bg-brand-gradient { /* ... */ }
@media (min-width: 640px) {
  .sm\:bg-brand-gradient { /* ... */ }
}
@media (min-width: 768px) {
  .md\:bg-brand-gradient { /* ... */ }
}
@media (min-width: 992) {
  .lg\:bg-brand-gradient { /* ... */ }
}
@media (min-width: 1280px) {
  .xl\:bg-brand-gradient { /* ... */ }
}
```

If you'd like to prefix your own utilities as well, just add the prefix to the class definition:

```css
@responsive {
  .tw-bg-brand-gradient { /* ... */ }
}
```

## Important

The `important` option lets you control whether or not Tailwind's utilities should be marked with `!important`. This can be really useful when using Tailwind with existing CSS that has high specificity selectors.

To generate utilities as `!important`, set the `important` key in your configuration options to `true`:

```js
// tailwind.config.js
module.exports = {
  important: true,
}
```

Now all of Tailwind's utility classes will be generated as `!important`:

```css
.leading-none {
  line-height: 1 !important;
}
.leading-tight {
  line-height: 1.25 !important;
}
.leading-snug {
  line-height: 1.375 !important;
}
/* etc. */
```

Note that any of your own custom utilities **will not** automatically be marked as `!important` by enabling this option.

If you'd like to make your own utilities `!important`, just add `!important` to the end of each declaration yourself:

```css
@responsive {
  .bg-brand-gradient {
    background-image: linear-gradient(#3490dc, #6574cd) !important;
  }
}
```

## Separator

The `separator` option lets you customize what character or string should be used to separate state variant prefixes (screen sizes, `hover`, `focus`, etc.) from utility names (`text-center`, `items-end`, etc.).

We use a colon by default (`:`), but it can be useful to change this if you're using a templating language like [Pug](https://pugjs.org) that doesn't support special characters in class names.

```js
// tailwind.config.js
module.exports = {
  separator: '_',
}
```

## Core Plugins

The `corePlugins` section lets you completely disable classes that Tailwind would normally generate by default if you don't need them for your project.

If you don't provide any `corePlugins` configuration, all core plugins will be enabled by default:

```js
// tailwind.config.js
module.exports = {}
```

If you'd like to disable specific core plugins, provide an object for `corePlugins` that sets those plugins to `false`:

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  }
}
```

If you'd like to whitelist which core plugins should be enabled, provide an array that includes a list of the core plugins you'd like to use:

```js
// tailwind.config.js
module.exports = {
  corePlugins: [
    'margin',
    'padding',
    'backgroundColor',
    // ...
  ]
}
```

If you'd like to disable all of Tailwind's core plugins and simply use Tailwind as a tool for processing your own custom plugins, provide an empty array:

```js
// tailwind.config.js
module.exports = {
  corePlugins: []
}
```


Here's a list of every core plugin for reference:

| Core Plugin | Description |
| --- | --- |
| `preflight` | Tailwind's base/reset styles |
| `container` | The `.container` component |
| `alignContent` | The `align-content` utilities like `content-between` |
| `alignItems` | The `align-items` utilities like `items-start`  |
| `alignSelf` | The `align-self` utilities like `self-end` |
| `appearance` | The `appearance` utilities like `appearance-none` |
| `backgroundAttachment` | The `background-attachment` utilities like `bg-fixed` |
| `backgroundColor` | The `background-color` utilities like `bg-gray-200` |
| `backgroundPosition` | The `background-position` utilities like `bg-center` |
| `backgroundRepeat` | The `background-repeat` utilities like `bg-no-repeat` |
| `backgroundSize` | The `background-size` utilities like `bg-cover` |
| `borderCollapse` | The `border-collapse` utilities like `border-separate` |
| `borderColor` | The `border-color` utilities like `border-gray-300` |
| `borderRadius` | The `border-radius` utilities like `rounded-lg` |
| `borderStyle` | The `border-style` utilities like `border-dashed` |
| `borderWidth` | The `border-width` utilities like `border-2` |
| `boxShadow` | The `box-shadow` utilities like `shadow-xl` |
| `cursor` | The `cursor` utilities like `cursor-pointer` |
| `display` | The `display` utilities like `block` |
| `fill` | The `fill` utilities like `fill-current` |
| `flex` | The `flex` utilities like `flex-1` |
| `flexDirection` | The `flex-direction` utilities like `flex-col` |
| `flexGrow` | The `flex-grow` utilities like `flex-grow-0` |
| `flexShrink` | The `flex-shrink` utilities like `flex-shrink-0` |
| `flexWrap` | The `flex-wrap` utilities like `flex-no-wrap` |
| `float` | The `float` utilities like `float-left` |
| `fontFamily` | The `font-family` utilities like `font-sans` |
| `fontSize` | The `font-size` utilities like `text-xl` |
| `fontSmoothing` | The `font-smoothing` utilities like `antialiased` |
| `fontStyle` | The `font-style` utilities like `italic` |
| `fontWeight` | The `font-weight` utilities like `font-bold` |
| `height` | The `height` utilities like `h-8` |
| `inset` | The `inset` utilities like `top-0` |
| `justifyContent` | The `justify-content` utilities like `justify-between` |
| `letterSpacing` | The `letter-spacing` utilities like `tracking-tight` |
| `lineHeight` | The `line-height` utilities like `leading-normal` |
| `listStylePosition` | The `list-style-position` utilities like `list-inside` |
| `listStyleType` | The `list-style-type` utilities like `list-disc` |
| `margin` | The `margin` utilities like `mt-4` |
| `maxHeight` | The `max-height` utilities like `max-h-screen` |
| `maxWidth` | The `max-width` utilities like `max-w-full` |
| `minHeight` | The `min-height` utilities like `min-h-screen` |
| `minWidth` | The `min-width` utilities like `min-w-0` |
| `negativeMargin` | The `negative-margin` utilities like `-mx-6` |
| `objectFit` | The `object-fit` utilities like `object-cover` |
| `objectPosition` | The `object-position` utilities like `object-center` |
| `opacity` | The `opacity` utilities like `opacity-50` |
| `outline` | The `outline` utilities like `outline-none` |
| `overflow` | The `overflow` utilities like `overflow-hidden` |
| `padding` | The `padding` utilities like `py-12` |
| `pointerEvents` | The `pointer-events` utilities like `pointer-events-none` |
| `position` | The `position` utilities like `absolute` |
| `resize` | The `resize` utilities like `resize-y` |
| `stroke` | The `stroke` utilities like `stroke-current` |
| `tableLayout` | The `table-layout` utilities like `table-fixed` |
| `textAlign` | The `text-align` utilities like `text-center` |
| `textColor` | The `text-color` utilities like `text-red-600` |
| `textDecoration` | The `text-decoration` utilities like `underline` |
| `textTransform` | The `text-transform` utilities like `uppercase` |
| `userSelect` | The `user-select` utilities like `user-select-none` |
| `verticalAlign` | The `vertical-align` utilities like `align-middle` |
| `visibility` | The `visibility` utilities like `invisible` |
| `whitespace` | The `whitespace` utilities like `whitespace-no-wrap` |
| `width` | The `width` utilities like `w-1/2` |
| `wordBreak` | The `word-break` utilities like `break-all` |
| `zIndex` | The `z-index` utilities like `z-50` |

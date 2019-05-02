---
title: "Theme Configuration"
description: "Customizing the default theme for your project."
titleBorder: true
---

The `theme` section of your `tailwind.config.js` file is where you define your project's color palette, type scale, font stacks, breakpoints, border radius values, and more.

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

We provide a sensible [default theme](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js#L5) with a very generous set of values to get you started, but don't be afraid to change it or extend; you're encouraged to customize it as much as you need to to fit the goals of your design.

## Theme structure

The `theme` object contains keys for `screens`, `colors`, and `spacing`, as well as a key for each customizable [core plugin](/docs/core-plugins).

See the [theme configuration reference](#configuration-reference) or the [default theme](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js#L5) for a complete list of theme options.

### Screens

The `screens` key allows you to customize the responsive breakpoints in your project.

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  }
}
```

To learn more, see the [breakpoint customization documentation](/docs/breakpoints).

### Colors

The `colors` key allows you to customize the global color palette for your project.

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      
      // ...
    }
  }
}
```

By default, these colors are inherited by the `backgroundColor`, `textColor`, and `borderColor` core plugins.

To learn more, see the [color customization documentation](/docs/colors).

### Spacing

The `spacing` key allows you to customize the global spacing and sizing scale for your project.

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    }
  }
}
```

By default, these values are inherited by the `padding`, `margin`, `negativeMargin`, `width`, and `height` core plugins.

To learn more, see the [spacing customization documentation](/docs/spacing).

### Core plugins

The rest of the `theme` section is used to configure which values are available for each individual core plugin.

For example, the `borderRadius` key lets you customize which border radius utilities will be generated:

```js
module.exports = {
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  }
}
```

The keys determine the suffix for the generated classes, and the values determine the value of the actual CSS declaration.

The example `borderRadius` configuration above would generate the following CSS classes:

```css
.rounded-none { border-radius: 0 }
.rounded-sm   { border-radius: .125rem }
.rounded      { border-radius: .25rem }
.rounded-lg   { border-radius: .5rem }
.rounded-full { border-radius: 9999px }
```

You'll notice that using a key of `default` in the theme configuration created the class `rounded` with no suffix. This is a common convention in Tailwind supported by many (although not all) of the core plugins.

To learn more about customizing a specific core plugin, visit the documentation for that plugin.

For a complete reference of available theme properties and their default values, [see the default theme configuration](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js#L5).

## Customizing the default theme

Out of the box, your project will automatically inherit the values from [the default theme configuration](https://github.com/tailwindcss/tailwindcss/blob/next/stubs/defaultConfig.stub.js#L5). If you would like to customize the default theme, you have a few different options depending on your goals.

### Overriding the default theme

To override an option in the default theme, create a `theme` section in your `tailwind.config.js` file and add the key you'd like to override.

```js
// tailwind.config.js
module.exports = {
  theme: {
    // Replaces all of the default `opacity` values
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    }
  }
}
```

This will completely replace Tailwind's default configuration for that key, so in the example above none of the default opacity utilities would be generated.

Any keys you **do not** provide will be inherited from the default theme, so in the above example, the default theme configuration for things like colors, spacing, border radius, background position, etc. would be preserved.

### Extending the default theme

If you'd like to preserve the default values for a theme option but also add new values, add your extensions under the `theme.extend` key.

For example, if you wanted to add an extra breakpoint but preserve the existing ones, you could extend the `screens` property:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '2xl': '1440px',
      }
    }
  }
}
```

You can of course both override some parts of the default theme and extend other parts of the default theme within the same configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      screens: {
        '2xl': '1440px',
      }
    }
  }
}
```

### Referencing other values

If you need to reference another value in your theme, you can do so by providing a closure instead of a static value. The closure will receive a `theme()` function that you can use to look up other values in your theme using dot notation.

For example, you could generate `fill` utilities for every color in your color palette by referencing `theme('colors')` in your `fill` configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      // ...
    },
    fill: theme => theme('colors')
  }
}
```

The `theme()` function attempts to find the value you are looking for from the fully merged theme object, so it can reference your own customizations as well as the default theme values. It also works recursively, so as long as there is a static value at the end of the chain it will be able to resolve the value you are looking for.

### Referencing the default theme

If you'd like to reference a value in the default theme for any reason, you can import it from `tailwindcss/defaultTheme`.

One example of where this is useful is if you'd like to add a font family to one of Tailwind's default font stacks:

```js
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    }
  }
}
```

### Disabling an entire core plugin

If you don't want to generate any classes for a certain core plugin, it's better to set that plugin to false in your `corePlugins` configuration than to provide an empty object for that key in your `theme` configuration.

<p class="flex items-center mt-8 -mb-2">
  <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fed7d7"/><path fill="#f56565" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"/></svg>
  <strong class="text-s  font-semibold text-gray-600">Don't assign an empty object in your theme configuration</strong>
</p>

```js
// tailwind.config.js
module.exports = {
  theme: {
    opacity: {},
  }
}
```

<p class="flex items-center mt-8 -mb-2">
  <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle class="text-green-200 fill-current" cx="12" cy="12" r="10" /><path class="text-green-600 fill-current" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"/></svg>
  <strong class="text-s  font-semibold text-gray-600">Do disable the plugin in your corePlugins configuration</strong>
</p>

```js
// tailwind.config.js
module.exports = {
  corePlugins: {
    opacity: false,
  }
}
```

The end result is the same, but since many core plugins expose no configuration they can only be disabled using `corePlugins` anyways, so it's better to be consistent.

### Adding your own keys

There are a number of situations where it can be useful to add your own keys to the `theme` object.

One example of this is adding new keys to create a single source of truth for values that are common between multiple core plugins. For example, you could extract a shared `positions` object that could be referenced by both the `backgroundPosition` and `objectPosition` plugins:

```js
// tailwind.config.js
module.exports = {
  theme: {
    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundPosition: theme => theme('positions'),
    objectPosition: theme => theme('positions'),
  }
}
```

Another example is adding a new key to reference inside a custom plugin. For example, if you've written a `gradients` plugin for your project, you might add a `gradients` key to your `theme` object that the plugin references:

```js
// tailwind.config.js
module.exports = {
  theme: {
    gradients: theme => ({
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')],
      // ...
    })
  },
  plugins: [
    require('./plugins/gradients')
  ],
}
```

Since the entire `theme` object is available in your CSS using the [theme function](/docs/functions-and-directives#theme), you might also add a key just to be able to reference it in your CSS.

## Configuration reference

Except for `screens`, `colors`, and `spacing`, all of the keys in the `theme` object map to one of Tailwind's [core plugins](/docs/core-plugins). Since many plugins are responsible for CSS properties that only accept a static set of values (like `float` for example), note that not every plugin has a corresponding key in the `theme` object.

All of these keys are also available under the `theme.extend` key to enable [extending the default theme](#extending-the-default-theme).

| Key | Description |
| --- | --- |
| `screens` | Your project's responsive breakpoints |
| `colors` | Your project's color palette |
| `spacing` | Your project's spacing scale |
| `container` | Configuration for the `container` plugin |
| `backgroundColor` | Values for the `background-color` property |
| `backgroundPosition` | Values for the `background-position` property |
| `backgroundSize` | Values for the `background-size` property |
| `borderColor` | Values for the `border-color` property |
| `borderRadius` | Values for the `border-radius` property |
| `borderStyle` | Values for the `border-style` property |
| `borderWidth` | Values for the `border-width` property |
| `boxShadow` | Values for the `box-shadow` property |
| `cursor` | Values for the `cursor` property |
| `fill` | Values for the `fill` property |
| `flex` | Values for the `flex` property |
| `flexGrow` | Values for the `flex-grow` property |
| `flexShrink` | Values for the `flex-shrink` property |
| `fontFamily` | Values for the `font-family` property |
| `fontSize` | Values for the `font-size` property |
| `fontWeight` | Values for the `font-weight` property |
| `height` | Values for the `height` property |
| `inset` | Values for the `inset` property |
| `letterSpacing` | Values for the `letter-spacing` property |
| `lineHeight` | Values for the `line-height` property |
| `listStyleType` | Values for the `list-style-type` property |
| `margin` | Values for the `margin` property |
| `maxHeight` | Values for the `max-height` property |
| `maxWidth` | Values for the `max-width` property |
| `minHeight` | Values for the `min-height` property |
| `minWidth` | Values for the `min-width` property |
| `negativeMargin` | Values for the `negative-margin` property |
| `objectPosition` | Values for the `object-position` property |
| `opacity` | Values for the `opacity` property |
| `padding` | Values for the `padding` property |
| `stroke` | Values for the `stroke` property |
| `textColor` | Values for the `text-color` property |
| `width` | Values for the `width` property |
| `zIndex` | Values for the `z-index` property |




---
title: "Font Weight"
description: "Utilities for controlling the font weight of an element."
features:
  responsive: true
  customizable: true
  hover: true
  focus: false
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.font-hairline',
      'font-weight: 100;',
      'Set the font weight of an element to hairline.',
    ],
    [
      '.font-thin',
      'font-weight: 200;',
      'Set the font weight of an element to thin.',
    ],
    [
      '.font-light',
      'font-weight: 300;',
      'Set the font weight of an element to light.',
    ],
    [
      '.font-normal',
      'font-weight: 400;',
      'Set the font weight of an element to normal.',
    ],
    [
      '.font-medium',
      'font-weight: 500;',
      'Set the font weight of an element to medium.',
    ],
    [
      '.font-semibold',
      'font-weight: 600;',
      'Set the font weight of an element to semibold.',
    ],
    [
      '.font-bold',
      'font-weight: 700;',
      'Set the font weight of an element to bold.',
    ],
    [
      '.font-extrabold',
      'font-weight: 800;',
      'Set the font weight of an element to extrabold.',
    ],
    [
      '.font-black',
      'font-weight: 900;',
      'Set the font weight of an element to black.',
    ],
  ]
])

## Usage

Control the font weight of an element using the `.font-{weight}` utilities.

@component('_partials.code-sample', ['class' => 'font-sans'])
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-hairline</p>
  <p class="font-hairline text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-thin</p>
  <p class="font-thin text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-light</p>
  <p class="font-light text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-normal</p>
  <p class="font-normal text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-medium</p>
  <p class="font-medium text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-semibold</p>
  <p class="font-semibold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-bold</p>
  <p class="font-bold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.font-extrabold</p>
  <p class="font-extrabold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600">.font-black</p>
  <p class="font-black text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
@slot('code')
<p class="font-hairline ...">The quick brown fox ...</p>
<p class="font-thin ...">The quick brown fox ...</p>
<p class="font-light ...">The quick brown fox ...</p>
<p class="font-normal ...">The quick brown fox ...</p>
<p class="font-medium ...">The quick brown fox ...</p>
<p class="font-semibold ...">The quick brown fox ...</p>
<p class="font-bold ...">The quick brown fox ...</p>
<p class="font-extrabold ...">The quick brown fox ...</p>
<p class="font-black ...">The quick brown fox ...</p>
@endslot
@endcomponent

## Responsive

To control the font weight of an element at a specific breakpoint, add a `{screen}:` prefix to any existing font weight utility. For example, use `md:font-bold` to apply the `font-bold` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design/) documentation.

@component('_partials.responsive-code-sample', ['class' => 'font-sans'])
@slot('none')
<p class="font-normal text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('sm')
<p class="font-bold text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('md')
<p class="font-thin text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('lg')
<p class="font-semibold text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('xl')
<p class="font-black text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('code')
<p class="none:font-normal sm:font-bold md:font-thin lg:font-semibold xl:font-black ...">The quick brown fox jumped over the lazy dog.</p>
@endslot
@endcomponent

## Hover

To control the font weight of an element on hover, add the `hover:` prefix to any existing style and decoration utility. For example, use `hover:font-bold` to apply the `font-bold` utility on hover.

@component('_partials.code-sample')
<div class="text-center text-blue-700">
  <a href="#" class="font-normal hover:font-bold">Hover over this link</a>
</div>
@endcomponent

Hover utilities can also be combined with responsive utilities by adding the responsive `{screen}:` prefix *before* the `hover:` prefix.

```html
<a href="#" class="... md:font-normal md:hover:font-bold ...">Link</a>
```

## Focus

To control the font weight of an element on focus, add the `focus:` prefix to any existing style and decoration utility. For example, use `focus:font-bold` to apply the `font-bold` utility on focus.

@component('_partials.code-sample', ['lang' => 'html'])
<div class="max-w-xs w-full mx-auto">
  <input class="bg-white font-normal focus:font-bold focus:shadow-outline text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">
</div>

@slot('code')
<input class="font-normal focus:font-bold ..." value="Focus me">
@endslot
@endcomponent

Focus utilities can also be combined with responsive utilities by adding the responsive `{screen}:` prefix *before* the `focus:` prefix.

```html
<input class="... md:font-normal md:focus:font-bold ..." value="Focus me">
```

## Customizing

### Font Weights

By default Tailwind provides 10 `font-weight` utilities. You change, add, or remove these by editing the `theme.fontWeight` section of your Tailwind config.

@component('_partials.customized-config', ['key' => 'theme.fontWeight'])
- hairline: 100,
+ 'extra-light': 100,
- thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
- semibold: 600,
  bold: 700,
- extrabold: 800,
+ 'extra-bold': 800,
  black: 900,
@endcomponent

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'font weight',
        'property' => 'fontWeight',
    ],
    'variants' => [
        'responsive',
        'hover',
        'focus',
    ],
])

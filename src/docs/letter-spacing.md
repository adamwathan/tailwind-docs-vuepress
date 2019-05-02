---
title: "Letter Spacing"
description: "Utilities for controlling the tracking (letter spacing) of an element."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.tracking-tighter',
      'letter-spacing: -0.05em;',
      'Set the letter spacing of an element to <code>-0.05em</code>.',
    ],
    [
      '.tracking-tight',
      'letter-spacing: -0.025em;',
      'Set the letter spacing of an element to <code>-0.025em</code>.',
    ],
    [
      '.tracking-normal',
      'letter-spacing: 0;',
      'Set the letter spacing of an element to <code>0</code>.',
    ],
    [
      '.tracking-wide',
      'letter-spacing: 0.025em;',
      'Set the letter spacing of an element to <code>0.025em</code>.',
    ],
    [
      '.tracking-wider',
      'letter-spacing: 0.05em;',
      'Set the letter spacing of an element to <code>0.05em</code>.',
    ],
    [
      '.tracking-widest',
      'letter-spacing: 0.1em;',
      'Set the letter spacing of an element to <code>0.1em</code>.',
    ],
  ]
])

## Usage

Control the letter spacing of an element using the `.tracking-{size}` utilities.

@component('_partials.code-sample')
<div class="mb-6">
  <p class="text-sm text-gray-600">.tracking-tighter</p>
  <p class="tracking-tighter text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.tracking-tight</p>
  <p class="tracking-tight text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.tracking-normal</p>
  <p class="tracking-normal text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.tracking-wide</p>
  <p class="tracking-wide text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.tracking-wider</p>
  <p class="tracking-wider text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600">.tracking-widest</p>
  <p class="tracking-widest text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
@slot('code')
<p class="tracking-tighter ...">The quick brown fox ...</p>
<p class="tracking-tight ...">The quick brown fox ...</p>
<p class="tracking-normal ...">The quick brown fox ...</p>
<p class="tracking-wide ...">The quick brown fox ...</p>
<p class="tracking-wider ...">The quick brown fox ...</p>
<p class="tracking-widest ...">The quick brown fox ...</p>
@endslot
@endcomponent

## Responsive

To control the letter spacing of an element at a specific breakpoint, add a `{screen}:` prefix to any existing letter spacing utility. For example, use `md:tracking-wide` to apply the `tracking-wide` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.

@component('_partials.responsive-code-sample')
@slot('none')
<p class="tracking-tight text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('sm')
<p class="tracking-normal text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('md')
<p class="tracking-wide text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('lg')
<p class="tracking-normal text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('xl')
<p class="tracking-tight text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
@endslot
@slot('code')
<p class="none:tracking-tight sm:tracking-normal md:tracking-wide lg:tracking-normal xl:tracking-tight ...">The quick brown fox jumped over the lazy dog.</p>
@endslot
@endcomponent

## Customizing

### Letter Spacings

By default Tailwind provides six tracking utilities. You can change, add, or remove these by editing the `theme.letterSpacing` section of your Tailwind config.

@component('_partials.customized-config', ['key' => 'theme.letterSpacing'])
+ tightest: '-.075em',
  tighter: '-.05em',
- tight: '-.025em',
  normal: '0',
- wide: '.025em',
  wider: '.05em',
- widest: '.1em',
+ widest: '.25em',
@endcomponent

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'tracking',
        'property' => 'letterSpacing',
    ],
    'variants' => [
        'responsive',
    ],
])

---
title: "List Style Position"
description: "Utilities for controlling the position of bullets/numbers in lists."
features:
  responsive: true
  customizable: false
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'rows' => [
    [
      '.list-inside',
      "list-style-position: inside;",
    ],
    [
      '.list-outside',
      "list-style-position: outside;",
    ],
  ]
])

## Usage

Control the position of the markers in a list using the `list-inside` and `list-outside` utilities.

@component('_partials.code-sample', ['class' => 'px-8'])
<div class="mb-6">
  <p class="text-sm text-gray-600">.list-inside</p>
  <ul class="list-disc list-inside bg-gray-200 text-gray-800 py-2">
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
    <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
    <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
  </ul>
</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600">.list-outside</p>
  <ul class="list-disc list-outside bg-gray-200 text-gray-800 py-2">
    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
    <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
    <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
  </ul>
</div>
@slot('code')
<ul class="list-inside bg-gray-200 ...">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  ...
</ul>

<ul class="list-outside bg-gray-200 ...">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  ...
</ul>
@endslot
@endcomponent

## Responsive

To control the list style position of a list element at a specific breakpoint, add a `{screen}:` prefix to any existing list utility. For example, use `.md:list-inside` to apply the `.list-inside` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.

@component('_partials.responsive-code-sample')
@slot('none')
<ul class="list-disc list-inside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@slot('sm')
<ul class="list-disc list-outside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@slot('md')
<ul class="list-disc list-inside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@slot('lg')
<ul class="list-disc list-outside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@slot('xl')
<ul class="list-disc list-inside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@slot('code')
<ul class="none:list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
  <li>Assumenda, quia temporibus eveniet a libero incidunt suscipit</li>
  <li>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</li>
</ul>
@endslot
@endcomponent

## Customizing

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'list style position',
        'property' => 'listStylePosition',
    ],
    'variants' => [
        'responsive',
    ],
])

---
title: "Box Shadow"
description: "Utilities for controlling the box shadow of an element."
features:
  responsive: true
  customizable: true
  hover: false
  focus: false
---

@include('_partials.class-table', [
  'scroll' => true,
  'rows' => $page->config['theme']['boxShadow']->map(function ($value, $name) {
    $class = $name === 'default' ? '.shadow' : ".shadow-{$name}";
    $code = "box-shadow: {$value};";
    $description = "Set the width of an element to <code>{$value}</code>.";
    return [$class, $code, $description];
  })
])

## Outer shadow

Use the `.shadow`, `.shadow-md`, `.shadow-lg`, `.shadow-xl`, or `.shadow-2xl` utilities to apply different sized outer box shadows to an element.

@component('_partials.code-sample', ['class' => 'bg-gray-200 flex justify-around items-center text-sm py-8'])
<div class="text-center px-2">
  <div class="mb-1 text-xs text-gray-600">base</div>
  <div class="h-8 w-8 text-xs bg-white rounded p-4 shadow"></div>
</div>
<div class="text-center px-2">
  <div class="mb-1 text-xs text-gray-600">md</div>
  <div class="h-10 w-10 text-xs bg-white rounded p-4 shadow-md"></div>
</div>
<div class="text-center px-2">
  <div class="mb-1 text-xs text-gray-600">lg</div>
  <div class="h-12 w-12 text-xs bg-white rounded p-4 shadow-lg"></div>
</div>
<div class="text-center px-2">
  <div class="mb-1 text-xs text-gray-600">xl</div>
  <div class="h-16 w-16 text-xs bg-white rounded p-4 shadow-xl"></div>
</div>
<div class="text-center px-2">
  <div class="mb-1 text-xs text-gray-600">2xl</div>
  <div class="h-20 w-20 text-xs bg-white rounded p-4 shadow-2xl"></div>
</div>
@slot('code')
<div class="shadow"></div>
<div class="shadow-md"></div>
<div class="shadow-lg"></div>
<div class="shadow-xl"></div>
<div class="shadow-2xl"></div>
@endslot
@endcomponent

## Inner shadow

Use the `.shadow-inner` utility to apply a subtle inset box shadow to an element. This can be useful for things like form controls or wells.

@component('_partials.code-sample', ['class' => 'flex justify-around text-sm py-8'])
<div class="rounded p-4 bg-gray-200 shadow-inner">.shadow-inner</div>
@slot('code')
<div class="shadow-inner"></div>
@endslot
@endcomponent

## Outline shadow

Use the `.shadow-outline` utility to apply a focus-ring-style shadow to an element. This can be useful when combined with `.focus:outline-none` to create a better looking focus style that follows an element's border radius.

@component('_partials.code-sample', ['class' => 'flex justify-center text-sm py-8'])
<button class="focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32 mr-6">
  Unfocused
</button>
<button class="focus:outline-none shadow-outline bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32">
  Focused
</button>
@slot('code')
<button class="focus:outline-none focus:shadow-outline ...">
  Button
</button>
@endslot
@endcomponent

## No shadow

Use `.shadow-none` to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.

@component('_partials.code-sample', ['class' => 'flex justify-around text-sm py-8'])
<div class="rounded p-4 shadow-none bg-gray-200">.shadow-none</div>
@slot('code')
<div class="shadow-none"></div>
@endslot
@endcomponent

## Responsive

To control the shadow of an element at a specific breakpoint, add a `{screen}:` prefix to any existing shadow utility. For example, use `md:shadow-lg` to apply the `shadow-lg` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.


@component('_partials.responsive-code-sample', ['class' => 'bg-gray-200 flex justify-around items-center text-sm py-8'])
@slot('none')
<div class="h-16 w-16 bg-white rounded shadow"></div>
@endslot
@slot('sm')
<div class="h-16 w-16 bg-white rounded shadow-md"></div>
@endslot
@slot('md')
<div class="h-16 w-16 bg-white rounded shadow-lg"></div>
@endslot
@slot('lg')
<div class="h-16 w-16 bg-white rounded shadow-xl"></div>
@endslot
@slot('xl')
<div class="h-16 w-16 bg-white rounded shadow-2xl"></div>
@endslot
@slot('code')
<div class="none:shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl ...">
  <!-- ... -->
</div>
@endslot
@endcomponent

## Customizing

### Box Shadows

By default Tailwind provides three drop shadow utilities, one inner shadow utility, and a utility for removing existing shadows. You can change, add, or remove these by editing the `theme.boxShadow` section of your Tailwind config.

If a `default` shadow is provided, it will be used for the non-suffixed `.shadow` utility. Any other keys will be used as suffixes, for example the key `'2'` will create a corresponding `.shadow-2` utility.

@component('_partials.customized-config', ['key' => 'theme.boxShadow'])
  default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)'
  md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)'
  lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)'
  xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)'
  2xl: '0 25px 50px -12px rgba(0, 0, 0, .25)'
+ 3xl: '0 35px 60px -15px rgba(0, 0, 0, .3)'
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)'
- outline: '0 0 0 3px rgba(66,153,225,0.5)'
+ focus: '0 0 0 3px rgba(66,153,225,0.5)'
  'none': 'none',
@endcomponent

@include('_partials.variants-and-disabling', [
    'utility' => [
        'name' => 'box shadow',
        'property' => 'boxShadow',
    ],
    'variants' => [
        'responsive',
        'hover',
        'focus',
    ],
])

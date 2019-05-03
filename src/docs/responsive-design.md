---
title: "Responsive Design"
description: "Using responsive utility variants to build adaptive user interfaces."
titleBorder: true
---

<WorkInProgress />

To Document:

- Use a better/more realistic example.
- Explain mobile-first approach in more detail.
- Explain that unlike what you might be used to with other approaches, in Tailwind a single class never applies different styles at different breakpoints. Instead, you conditionally apply a different class at different breakpoints to get different results.

---

Tailwind allows you to build responsive designs in the same way you build the rest of your design &mdash; using utility classes. Every utility in Tailwind is also available in screen-size specific variations. For example, the `.font-bold` utility can be used on small screen sizes using the `.sm:font-bold` class, on medium screen sizes using the `.md:font-bold` class, on large screen sizes using the `.lg:font-bold` class and on extra large screen sizes using the `.xl:font-bold` class.

This is done using predefined screen sizes (media query breakpoints), each of which are given a unique name like `sm`, `md`, `lg` and `xl`. By default Tailwind takes a "mobile first" approach, where each screen size represents a minimum viewport width. Any classes you apply at smaller screen sizes are also applied to larger sizes, unless of course you override them, which is the whole point! This approach, while simple, is actually very powerful and can be used to build complex, beautiful, responsive designs.

## Responsive example

<responsive-code-sample>
  <div></div>
  <template #none>
    <div class="flex justify-center">
      <div class="bg-purple-500 text-white w-24 h-24 rounded-full text-xs font-semibold flex items-center justify-center">Tailwind</div>
    </div>
  </template>
  <template #sm>
    <div class="flex justify-center">
      <div class="bg-green-500 text-white w-24 h-24 rounded-full text-xs font-semibold flex items-center justify-center">Tailwind</div>
    </div>
  </template>
  <template #md>
    <div class="flex justify-center">
      <div class="bg-blue-500 text-yellow-500 w-24 h-24 rounded-full text-xs font-semibold flex items-center justify-center">Tailwind</div>
    </div>
  </template>
  <template #lg>
    <div class="flex justify-center">
      <div class="bg-red-500 text-yellow-500 w-24 h-24 rounded-full text-xs font-semibold flex items-center justify-center">Tailwind</div>
    </div>
  </template>
  <template #xl>
    <div class="flex justify-center">
      <div class="bg-orange-500 text-yellow-500 w-24 h-24 rounded-full text-xs font-semibold flex items-center justify-center">Tailwind</div>
    </div>
  </template>
  <template #code>
    <div class="none:bg-purple-500 none:text-white sm:bg-green-500 md:bg-blue-500 md:text-yellow-500 lg:bg-red-500 xl:bg-orange-500 ...">
      ...
    </div>
  </template>
</responsive-code-sample>

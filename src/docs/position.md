---
title: "Position"
description: "Utilities for controlling how an element is positioned in the DOM."
features:
  responsive: true
  customizable: false
  hover: false
  focus: false
---

<ClassTable :rows="[
  [
    '.static',
    'position: static;',
  ],
  [
    '.fixed',
    'position: fixed;',
  ],
  [
    '.absolute',
    'position: absolute;',
  ],
  [
    '.relative',
    'position: relative;',
  ],
  [
    '.sticky',
    'position: sticky;',
  ],
]" />

## Static <span class="ml-2 font-semibold text-gray-600 text-sm uppercase tracking-wide">Default</span>

Use `.static` to position an element according to the normal flow of the document.

Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.

<code-sample>
  <div class="relative bg-gray-400 p-4">
    <div class="static h-32 bg-gray-600 p-4 text-gray-900">
      <p>Static parent</p>
      <div class="absolute bottom-0 left-0 bg-gray-800 p-4 text-gray-400">
        <p>Absolute child</p>
      </div>
    </div>
  </div>
  <template #code>
    :::escape    
    <div class="static bg-gray-600">
      Static parent
      <div class="absolute bottom-0 left-0 bg-gray-800">
        Absolute child
      </div>
    </div>
    :::
  </template>
</code-sample>

## Relative

Use `.relative` to position an element according to the normal flow of the document.

Offsets are calculated relative to the element's normal position and the element *will* act as a position reference for absolutely positioned children.

<code-sample>
  <div class="relative bg-gray-400 p-4">
    <div class="relative h-32 bg-gray-600 p-4 text-gray-900">
      <p>Relative parent</p>
      <div class="absolute bottom-0 left-0 bg-gray-800 p-4 text-gray-400">
        <p>Absolute child</p>
      </div>
    </div>
  </div>
  <template #code>
    :::escape    
    <div class="relative bg-gray-600">
      Relative parent
      <div class="absolute bottom-0 left-0 bg-gray-800">
        Absolute child
      </div>
    </div>
    :::
  </template>
</code-sample>

## Absolute

Use `.absolute` to position an element *outside* of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist.

Offsets are calculated relative to the nearest parent that has a position other than `static`, and the element *will* act as a position reference for other absolutely positioned children.

<code-sample>
  <p class="text-sm text-gray-600 mb-1">With static positioning</p>
  <div class="relative bg-gray-400 px-4 pt-2 pb-4 mb-6">
    <p class="mb-2 text-gray-700">Relative parent</p>
    <div class="static bg-gray-500 p-4 text-gray-700">
      <p class="mb-2">Static parent</p>
      <div class="static bottom-0 left-0 bg-gray-800 p-4 text-gray-400 inline-block">
        <p>Static child</p>
      </div>
      <div class="bg-gray-400 p-4 text-gray-700 inline-block">
        <p>Static sibling</p>
      </div>
    </div>
  </div>

  <p class="text-sm text-gray-600 mb-1">With absolute positioning</p>
  <div class="relative bg-gray-400 px-4 pt-2 pb-4">
    <p class="mb-2 text-gray-700">Relative parent</p>
    <div class="static bg-gray-500 p-4 text-gray-700">
      <p class="mb-2">Static parent</p>
      <div class="absolute top-0 right-0 bg-gray-800 p-4 text-gray-400 inline-block">
        <p>Absolute child</p>
      </div>
      <div class="bg-gray-400 p-4  text-gray-700 inline-block">
        <p>Static sibling</p>
      </div>
    </div>
  </div>
  <template #code>
    :::escape    
    <div class="relative bg-gray-400">
      Relative parent
      <div class="static bg-gray-600">
        Static parent
        <div class="absolute top-0 right-0 bg-gray-800">
          Absolute child
        </div>
        <div class="bg-gray-400 inline-block">
          Static sibling
        </div>
      </div>
    </div>
    :::
  </template>
</code-sample>


## Fixed

Use `.fixed` to position an element relative to the browser window.

Offsets are calculated relative to the viewport and the element *will* act as a position reference for absolutely positioned children.

<code-sample>
  <div class="rounded-b overflow-hidden max-w-md mx-auto mt-4 mb-4">
    <div class="rounded-t border-t border-l border-r border-gray-400 bg-gray-200 flex px-4 py-3">
      <div class="mr-6">
        <span class="inline-block rounded-full bg-gray-500 h-3 w-3 mr-1"></span>
        <span class="inline-block rounded-full bg-gray-500 h-3 w-3 mr-1"></span>
        <span class="inline-block rounded-full bg-gray-500 h-3 w-3"></span>
      </div>
      <div class="flex-1 bg-white border border-gray-400 rounded mr-4"></div>
    </div>
    <div class="relative bg-gray-400 h-64">
      <!-- Hey fellow nerd! Yes, we're using position absolute instead of position fixed in the demo; it's the best way we could come up with to demonstrate how position fixed works without totally jacking up the layout of the entire documentation site. Forgive us! 😄 -->
      <div class="absolute left-0 right-0 top-0 bg-gray-800 text-gray-400 z-10 px-4 py-3">
        Fixed child
        <div class="absolute top-0 bottom-0 right-0 px-4 py-3 bg-gray-500 text-gray-800">
          Absolute child
        </div>
      </div>
      <div class="absolute inset-0 overflow-auto pt-16 px-4 pb-4">
        <p class="mb-4">Scroll me!</p>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>
        <p class="mb-4">Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        <p class="mb-4">Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p>
        <p class="mb-4">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
        <p class="mb-4">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
        <p class="mb-4">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
        <p class="mb-4">Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. </p>
        <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>
      </div>
    </div>
  </div>
  <template #code>
    :::escape    
    <div class="bg-gray-400 pt-16">
      <div class="fixed bg-gray-600">
        Fixed child
        <div class="absolute top-0 right-0 bg-gray-800">
          Absolute child
        </div>
      </div>

      Scroll me!

      Lorem ipsum...
    </div>
    :::
  </template>
</code-sample>

## Sticky

<div class="text-sm bg-blue-100 text-blue-700 font-semi-bold px-4 py-2 mb-4 rounded">
  <div class="flex items-center">
    <div class="mr-2">
      <svg class="block text-blue-400 h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628.22-.67.635-1.828 1.411-3.121 1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z"/></svg>
    </div>
    <div>
      <p class="font-semibold">Note that sticky positioning is not supported in IE11.</p>
    </div>
  </div>
</div>

Use `.sticky` to position an element as `relative` until it crosses a specified threshold, then treat it as fixed until its parent is off screen.

Offsets are calculated relative to the element's normal position and the element *will* act as a position reference for absolutely positioned children.

<code-sample>
  <div class="h-64 w-full overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 1</div>
        <p class="py-4">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
    </div>
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 2</div>
        <p class="py-4">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
    </div>
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 3</div>
        <p class="py-4">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
    </div>
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 4</div>
        <p class="py-4">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>
    </div>
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 5</div>
        <p class="py-4">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>
    </div>
    <div>
        <div class="sticky top-0 bg-gray-400 px-2 py-1 font-bold text-gray-700">Sticky Heading 6</div>
        <p class="py-4">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>
    </div>
  </div>
  <template #code>
    :::escape    
    <div>
        <div class="sticky top-0 ...">Sticky Heading 1</div>
        <p class="py-4">Quisque cursus...</p>
    </div>
    <div>
        <div class="sticky top-0 ...">Sticky Heading 2</div>
        <p class="py-4">Integer lacinia...</p>
    </div>
    <div>
        <div class="sticky top-0 ...">Sticky Heading 3</div>
        <p class="py-4">Nullam mauris...</p>
    </div>
    <!-- etc. -->
    :::
  </template>
</code-sample>

## Responsive

To change how an element is positioned only at a specific breakpoint, add a `{screen}:` prefix to any existing position utility. For example, adding the class `md:absolute` to an element would apply the `absolute` utility at medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design/) documentation.

<responsive-code-sample>
  <div></div>
  <template #none>
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="relative inset-x-0 bottom-0 bg-gray-800 p-4 text-gray-500">Responsive element</div>
    </div>
  </template>
  <template #sm>
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="absolute inset-x-0 bottom-0 bg-gray-800 p-4 text-gray-500">Responsive element</div>
    </div>
  </template>
  <template #md>
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="fixed inset-x-0 bottom-0 z-100 bg-gray-800 p-4 text-gray-500">Responsive element</div>
    </div>
  </template>
  <template #lg>
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="absolute inset-x-0 bottom-0 bg-gray-800 p-4 text-gray-500">Responsive element</div>
    </div>
  </template>
  <template #xl>
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="relative inset-x-0 bottom-0 bg-gray-800 p-4 text-gray-500">Responsive element</div>
    </div>
  </template>
  <template #code>
    :::escape    
    <div class="relative h-32 bg-gray-400 p-4">
      <div class="inset-x-0 bottom-0 none:relative sm:absolute md:fixed lg:absolute xl:relative"></div>
    </div>
    :::
  </template>
</responsive-code-sample>

## Customizing

<variants-and-disabling
  :utility="{ name: 'position', property: 'position' }"
  :variants="['responsive']"
></variants-and-disabling>

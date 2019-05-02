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
    <div class="static bg-gray-600">
      Static parent
      <div class="absolute bottom-0 left-0 bg-gray-800">
        Absolute child
      </div>
    </div>
  </template>
</code-sample>

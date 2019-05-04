# Tailwind Docs: VuePress Edition

Guillaume (@Akryum) asked me if I wouldn't mind outlining some of the pain points I encountered when trying to migrate the Tailwind docs to VuePress, so I've put together a list of things I ran into that eventually lead me to abandon the migration and stick with the existing codebase.

Just to be clear, **many of these obstacles aren't bugs with VuePress**. This is simply a list of challenges I encountered when attempting to port the site. Some _are_ issues with VuePress, others are things that are just challenging to do in Vue (like passing escaped HTML to a component as a prop), and others were just time consuming because it took a while to figure out/find how to do them.

## 1. Pretty URLs

The existing Tailwind docs use URLs like `tailwindcss.com/docs/installation`, and VuePress wants me to use URLs like `tailwindcss.com/docs/installation.html`. Using the `.html` extension isn't a dealbreaker but I wanted to keep the URLs the same so I didn't have to create a bunch of server redirect rules to avoid breaking old links.

There is nothing that shows up in the VuePress 1.0 docs search for "pretty" or "clean", so I had to Google for a solution. I eventually found [this issue](https://github.com/vuejs/vuepress/issues/608) which led me to [this pull request](https://github.com/vuejs/vuepress/pull/1339) that added a plugin for clean URLs.

There are no links to the plugin in the docs, and it took me a long time to eventually find the docs at [vuepress.github.io/en/plugins/clean-urls/](https://vuepress.github.io/en/plugins/clean-urls/) which is a completely different site than the docs, and I'm not really sure how people are supposed to find it.

I installed the plugin and followed the installation instructions and immediately stumbled on [a bug](https://github.com/vuepress/vuepress-plugin-clean-urls/issues/1) where using an empty suffix (to avoid the trailing slash) caused the homepage to break, even though the documentation includes that specific value as [an example](https://github.com/vuepress/vuepress-plugin-clean-urls#indexsuffix).

This is no big deal, software has bugs, and it's free and open source so I have no right to bitch and moan about it :) Instead I copied the source of the plugin into my VuePress project (it's barely any code) and tried to fix the bug myself. I spent probably an hour on this but couldn't fix it.

I decided to just live with the trailing slashes (`tailwindcss.com/docs/installation/`) even though the current site doesn't have them, because the links still work either way, even though I really prefer not having the trailing slashes aesthetically.

I also eventually learned that you can use the `permalink` frontmatter instead of using the plugin at all, but it also doesn't support no trailing slashes.

No big deal, I can live with the trailing slashes.

Approximate time spent trying to solve this: **4-5 hours**.

## 2. Passing escaped HTML as a prop to a component

One of the components in the Tailwind docs (currently implemented as a [Blade component](https://laravel.com/docs/5.8/blade#components-and-slots) since the site is built with Jigsaw) is a code sample/example component that shows some HTML source code and a preview of what that looks like.

[Here's an example from the current docs](https://next.tailwindcss.com/docs/examples/alerts/#traditional).

Building this in Vue was really challenging because I had to figure out an ergonomic way of passing a literal HTML string to a component as a prop.

My first successful efforts looked something like this:

```html
<code-sample :code="`&lt;div class=&quot;static bg-gray-600&quot;&gt;
  Static Parent
  &lt;div class=&quot;absolute bottom-0 left-0 bg-gray-800&quot;&gt;
    Absolute Child
  &lt;/div&gt;
&lt;/div&gt;  
`">
  <div class="static bg-gray-600">
    Static Parent
    <div class="absolute bottom-0 left-0 bg-gray-800">
      Absolute Child
    </div>
  </div>
</code-sample>
```

This is obviously insane and not reasonable, there are dozens if not hundreds of these examples in the docs and converting them all to this style (plus authoring new ones in this style) would be torture.

I asked for some help [on Twitter](https://twitter.com/adamwathan/status/1124096090687643653) and thanks to @Akryum found a way to author the examples like this by writing a custom markdown extension:

```html
<code-sample>
  <div class="static bg-gray-600">
    Static parent
    <div class="absolute bottom-0 left-0 bg-gray-800">
      Absolute child
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
```

I also eventually learned of a few other ways to solve this problem, but I was working on it (either in front of my computer or keeping me awake thinking about it in bed) from Thursday afternoon until Friday morning.

Again, this one isn't a VuePress problem, it's just a hard thing I ran into that slowed down the migration and took up a lot of the time budget I had allocated to this project.

This one in particular is really easily solved in React, and I even started porting the site to Next.js because of it but once the community helped me find a solution I decided to stick with VuePress because I didn't want to learn a whole new front end framework when I'm very experienced and productive with Vue.

Approximate time spent trying to solve this: **8-10 hours**.

## 3. Bug when using the new named slot syntax

Next I ran into [a bug](https://github.com/vuejs/vuepress/issues/1578) where you can't use the new named slot syntax without a work around.

Not the end of the deal because there is a work around, but still lost an hour or so on this and it raised my frustration level, pushing me to explore alternative tools again.

Approximate time spent trying to solve this: **1 hour**.

## 4. My workflow animation broke

I have no idea what changed that made this happen still but for some reason, when using VuePress, [this workflow animation component](https://codesandbox.io/s/nw10kz7m3j) is slightly broken — the edit cursor in the code doesn't move.

There's literally no difference in the code so no idea why the behavior would be different. I spent a few hours pairing with @reinink on this and eventually we came up with a solution which was basically "write the code differently", and the new solution is probably better/more robust, but the old solution worked perfectly in the old environment (as well as CodeSandbox). Seriously no idea about this one. Probably not a bug in VuePress, just some weird hard to track down difference

Approximate time spent trying to solve this: **3-4 hours**.

## 5. Anchor links don't seem to work properly

If I link to `/docs/state-variants#focus` from another page, it doesn't seem to scroll to the `#focus` ID. I could never really figure out what was going on with this behavior exactly.

I spent about an hour on this and then just gave up and decided I had to use a different tool.

**Update**: Writing this got me wondering what the hell was going on here again so I tinkered a bit. Couldn't fix it but confirmed that at least in this project, anchor links like that just don't even work at all, for example `http://localhost:8080/docs/plugins/#adding-variants` never scrolls to the "Adding Variants" heading if you type that URL into the browser directly or visit it from a link. Frustrating!

## 6. One of my inline SVG background images is broken but only when building the static export

The inlined URL encoded SVG background image on this div gets broken by the production build process:

```
    <div class="bg-center bg-repeat-x -mb-8" style="height: 100px; margin-top: -100px; background-image: url(&quot;data:image/svg+xml,%3Csvg width='1440' height='100' viewBox='0 0 1440 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1440 100H0V45C0 45 202.817 0 360 0C517.183 0 720 45 720 45C720 45 922.817 90 1080 90C1237.18 90 1440 45 1440 45V100Z' fill='white'/%3E%3C/svg%3E%0A&quot;);">
```

This is fixable I'm sure, probably by binding a proper style object that uses template strings instead of using a static style tag and having to escape the quotes, but I didn't bother trying to fix it because I had already given up.

---

All in all I spent about 4 solid days working on the port but barely got to do any actual porting work because so much of my time was spent trying to come up with solutions to frustrating problems I never expected to run in to. Again, very little of this is truly the fault of VuePress, I'm simply telling the story in case this particular anecdote is useful to anyone. Still think VuePress is an awesome tool and hopefully one day I will have the time to fight through all of the hard problems necessary to get the site ported over because the current site is awful to work on :)


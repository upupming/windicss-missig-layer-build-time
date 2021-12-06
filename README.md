# windicss-missig-layer-build-time

This is a bug of `windicss`, same tag in different layers are merged incorrectly.

## Bug 1 -- CSSParser

Input:

```css
@layer utilities {
    h1 {
        color: blue;
    }
}

@layer components {
    h1 {
        color: red;
    }
}

@layer base {
    h1 {
        color: green;
    }
}

```

Output:

```css
/* windicss layer utilities */
h1 {
  color: blue;
  color: red;
  color: green;
}
```

A PR to fix this issue has been submitted to: https://github.com/windicss/windicss/pull/584

## Bug 2 -- build time `@layer` missing

Input [App.vue](src/App.vue):

```vue
<style>
.test-1 {
  @apply bg-light-700;
}

@layer base {
  .test-2 {
    color: red;
  }
}
</style>

```

Output:

```css
.test-1 {
  --tw-bg-opacity: 1;
  background-color: rgba(233, 236, 239, var(--tw-bg-opacity));
}
```

You can see the `.test-2` is missing in the built output, this is caused by the `load` hook (`ctx.utils.generateCSS('base')`) is ran before `transform` (`transformCSS(code, id)`).

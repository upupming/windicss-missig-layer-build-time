# windicss-missig-layer-build-time

This is a bug of `windicss`, same tag in different layers are merged incorrectly.

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

# Tasks

## Task 1: Wire header-links component with CV data ✓

[x] Uncomment the `<header-links>` component in `user-header` so it is rendered.
[x] Migrate the links currently displayed by `SidebarLinksComponent` (which receives `[links]="cvData().links"`) into `HeaderLinksComponent`. Right now `HeaderLinksComponent` has its links hardcoded rather than read from an `@Input()`. Replace the hardcoded data with an `@Input() links` property bound to `cvData().links`.
[x] Icon is derived automatically from the link URL (no icon field in data); Instagram and generic fallback icons added.


## Task 2: Bye CSS, only TailwindCSS

[] Remove all imported `.css` files that define utility classes (e.g. `sidebar-block` and similar). Replace every usage with equivalent Tailwind v4 classes applied directly in the template.
[] Where the same combination of Tailwind classes repeats across multiple elements or components, extract them into a shared location (e.g. a Tailwind `@apply` rule in a single shared stylesheet, or a host-class constant) to avoid duplication.

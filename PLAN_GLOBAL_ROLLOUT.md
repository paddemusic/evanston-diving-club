# Global Background Rollout Plan

## Objective
Extend the "Northwestern Cinematic Water" background (white + subtle ripples) to all pages, removing flat white/gray blockers while preserving text readability.

## Page-by-Page Execution

### 1. About Page (`src/pages/about.tsx`)
- **Hero Section:** Remove `bg-white`. Add `.glass-card` to the content container if needed, or leave transparent for the "open" feel.
- **Mission Section:** Remove `bg-gray-50`. The `Card` components inside are already white; add `.glass-card` to them for the subtle blur effect.
- **"What Sets Us Apart":** Remove `bg-white`. Add `.glass-card` to the feature cards.
- **CTA Section:** Keep `bg-[#4E2A84]` (Purple) for contrast, or convert to a floating glass card? *Decision: Keep purple background for visual weight, but check if it can be floating.*

### 2. Coaches Page (`src/pages/coaches.tsx`)
- **Hero:** Remove `bg-white`.
- **Coach Grid:** Remove `bg-gray-50`.
- **Coach Cards:** Add `.glass-card` class to the `Card` components. This is crucial for the "floating on water" look.

### 3. Courses Page (`src/pages/courses.tsx`)
- **Hero:** Remove `bg-white`.
- **Programs List:** Remove `bg-white`.
- **Program Cards:** The complex grid layout needs `.glass-card` on the `Card` wrappers to ensure the text doesn't blend into the water ripples.

### 4. Schedule Page (`src/pages/schedule.tsx`)
- **Weekly Schedule:** Remove `bg-white`.
- **Day Tabs:** Ensure the non-selected tabs have a semi-transparent background (`bg-white/50`) instead of solid gray.
- **Calendar Section:** The Google Calendar embed needs a solid white or `.glass-card` wrapper to look clean.
- **Facility Info:** Remove `bg-white`. The card already has `backdrop-blur`, just needs to be standardized to `.glass-card`.

### 5. FAQ Page (`src/pages/faq.tsx`)
- **Hero:** Currently `bg-[#4E2A84]`. *Keep this* for brand identity, as white text is used.
- **Accordion Section:** Remove `bg-white`.
- **Accordion Items:** Add `.glass-card` to the `AccordionItem` or the main wrapper so the questions float over the water.

### 6. Gallery Page (`src/pages/gallery.tsx`)
- **Hero:** Remove `bg-white`.
- **Grid:** Remove `bg-gray-50`.
- **Images:** The images are self-contained. The background will show nicely in the gaps between images.

## Technical Rules
1. **Search & Destroy:** `bg-white`, `bg-gray-50`, `bg-gray-100` on `<section>` tags.
2. **Apply Glass:** `<Card className="...">` becomes `<Card className="glass-card ...">`.
3. **Verify Contrast:** Ensure no dark text ends up on a dark background (checked: global background is white).

## Execution Order
1. Update `about.tsx`
2. Update `coaches.tsx`
3. Update `courses.tsx`
4. Update `schedule.tsx`
5. Update `faq.tsx`
6. Update `gallery.tsx`
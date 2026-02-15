# Comprehensive Background Implementation Plan: Northwestern "Cinematic Depth"

**Objective:** Create a professional, subtle, animated background that applies globally to the application, starting with the homepage.
**Problem:** Previous attempts relied on section-specific CSS classes (`bg-water-splash`, etc.) which were overridden by Tailwind defaults (`bg-white`) or blocked by z-index stacking contexts.
**Solution:** Implement a fixed `GlobalBackground` component that sits at `z-index: -1` and make all page sections transparent.

---

## 1. Architecture: The `GlobalBackground` Component

We will create a new component `src/components/ui/GlobalBackground.tsx`.

**Specifications:**
- **Position:** `fixed inset-0` (Cover entire viewport, stay fixed during scroll).
- **Z-Index:** `-50` (Behind everything).
- **Base Color:** `#FDFCFE` (Very slight off-white/purple tint for warmth, not harsh #FFFFFF).
- **Elements:**
  1.  **Gradient Orb 1 (Top Left):** Radial gradient, Northwestern Purple (#4E2A84), Opacity 0.05, Blur 100px. Animate: Slow float.
  2.  **Gradient Orb 2 (Bottom Right):** Radial gradient, Northwestern Purple (#4E2A84), Opacity 0.08, Blur 120px. Animate: Slow pulse.
  3.  **Texture Overlay:** A very fine noise pattern (opacity 0.02) to prevent "banding" and add professional finish.

**Code Structure (Preview):**
```tsx
export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#FDFCFE]">
      {/* Orb 1 */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4E2A84] rounded-full mix-blend-multiply filter blur-[100px] opacity-5 animate-blob" />
      
      {/* Orb 2 */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#4E2A84] rounded-full mix-blend-multiply filter blur-[120px] opacity-5 animate-blob animation-delay-2000" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] mix-blend-overlay"></div>
    </div>
  );
}
```

---

## 2. Integration: `Layout.tsx`

We will add `<GlobalBackground />` to the main Layout wrapper. This ensures it appears on **every page** automatically.

**File:** `src/components/layout/Layout.tsx`
```tsx
import { GlobalBackground } from "../ui/GlobalBackground";

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative"> {/* relative is key */}
      <GlobalBackground />
      <Header />
      <main className="flex-1 relative z-10"> {/* z-10 ensures content sits above background */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
```

---

## 3. The Cleanup: Unblocking the View (`index.tsx`)

This is the most critical step. We must remove the "paint" from the walls so we can see the landscape outside.

**Target File:** `src/pages/index.tsx`

| Section | Current Class (To Remove) | New Class (To Add) | Reason |
| :--- | :--- | :--- | :--- |
| **Hero** | `bg-water-splash` | `bg-transparent` | Show top-left gradient orb. |
| **Practice Hours** | `bg-water-subtle` | `bg-transparent` | Show global depth. |
| **Join Team** | `bg-water-ripple` | `bg-transparent` | Show global depth. |
| **Facilities** | `bg-water-waves` | `bg-transparent` | Show bottom-right gradient orb. |

**Content Cards:**
The cards inside these sections (e.g., the "Practice Hours" card) must have backgrounds to be readable.
- **Change:** Ensure `Card` components have `bg-white/80 backdrop-blur-sm` (Glassmorphism) instead of solid `bg-white`.

---

## 4. CSS Animation (`globals.css`)

Add the "breathing" animation for the orbs.

```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 20s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
```

---

## 5. Execution Steps for Creative Tool

1.  **Create** `src/components/ui/GlobalBackground.tsx` with the code above.
2.  **Update** `globals.css` to add the `@keyframes blob` animations.
3.  **Update** `src/components/layout/Layout.tsx` to import and render `<GlobalBackground />`.
4.  **Refactor** `src/pages/index.tsx`:
    *   Remove ALL `bg-water-*` classes.
    *   Remove ALL `bg-white` classes from `<section>` tags.
    *   Add `bg-white/90 backdrop-blur-md` to the *content containers* (Cards) only, not the sections.

This plan separates concerns: **The Layout handles the background. The Pages handle the content.** No more conflicts.
# Evanston Diving Club - Version Information

## Current Version: 1.2.0
**Last Updated:** February 15, 2026

---

## Version History

### Version 1.2.0 (February 15, 2026)
**Major Updates:**
- ✅ **Northwestern University Rebranding Complete**
  - All pages updated to Northwestern Purple (#4E2A84)
  - Removed all teal, cyan, green, and orange colors
  - Updated Schedule page with brand-compliant colors and icons

- ✅ **Global Navigation Enhancements**
  - Added "Shop Merch" button to header (links to: https://elsmoreswim.com/collections/evanston-diving-club)
  - Added "Member Login" button to header (links to: https://user.sportngin.com/users/sign_in)
  - Both buttons display on single line with compact styling
  - Buttons appear on all pages globally

- ✅ **Design Improvements**
  - Northwestern Cinematic Water background applied globally
  - Glass card effects on components
  - Improved contrast and accessibility
  - Responsive mobile navigation

---

## Key Features

### Brand Identity
- **Primary Color:** Northwestern Purple (#4E2A84)
- **Typography:** Clean, modern sans-serif fonts
- **Design System:** Glass morphism with subtle water ripple effects

### Navigation Structure
- Home
- Schedule
- Coaches
- Programs
- Gallery
- About
- FAQ
- Shop Merch (External link)
- Member Login (External link)

### Technical Stack
- **Framework:** Next.js 15.5 (Page Router)
- **UI Library:** React 18.3 with TypeScript
- **Styling:** Tailwind CSS v3.4
- **Components:** Shadcn/UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation

### External Integrations
- Elsmore Swim Shop (Merchandise)
- SportsEngine (Member Portal)
- Google Calendar (Practice Schedule)

---

## File Structure Summary

```
src/
├── components/
│   ├── layout/
│   │   ├── header.tsx (Global navigation with Shop Merch & Member Login)
│   │   ├── footer.tsx
│   │   └── Layout.tsx
│   ├── ui/ (Shadcn/UI components)
│   ├── SEO.tsx
│   └── ThemeSwitch.tsx
├── pages/
│   ├── index.tsx (Homepage)
│   ├── schedule.tsx (Northwestern Purple branded)
│   ├── coaches.tsx
│   ├── courses.tsx
│   ├── gallery.tsx
│   ├── about.tsx
│   └── faq.tsx
├── styles/
│   └── globals.css (Northwestern Purple theme + water effects)
└── Services/
    └── Attendanceservices.ts
```

---

## Quick Verification Checklist

To verify you have the correct version, check:

1. ✅ **Header Navigation** (on any page):
   - "Shop Merch" button present (purple background)
   - "Member Login" button present (white background, purple border)
   - Both buttons display text on single line

2. ✅ **Schedule Page** (`/schedule`):
   - Northwestern Purple (#4E2A84) used for all interactive elements
   - No teal, cyan, green, or orange colors present
   - Purple background on selected day tabs
   - Purple "Monthly Practice Schedule" header

3. ✅ **Global Background**:
   - White background with subtle water ripple effects
   - Glass card effects on content sections

4. ✅ **External Links Working**:
   - Shop Merch → https://elsmoreswim.com/collections/evanston-diving-club
   - Member Login → https://user.sportngin.com/users/sign_in

---

## Support

For questions or issues with this version, contact:
- **Website:** Evanston Diving Club
- **Platform:** Softgen.ai

---

## Build Information

- **Node Version:** 18.x or higher
- **Package Manager:** npm
- **Build Command:** `npm run build`
- **Dev Server:** `npm run dev`
- **Deployment:** Vercel (configured)

---

*This file is automatically maintained and should be updated with each significant change.*
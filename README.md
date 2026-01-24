# 🧊 Karvyn3D (Developer Cheatsheet)

> **Private Documentation**
> *Built with Next.js 16 (Canary) + React 19 + Tailwind v4*

This README is designed to be a map of the codebase. Use it to quickly locate where to change text, images, or logic without hunting through folders.

---

## ⚡ Quick Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server (Turbopack) |
| `npm run build` | Builds for production |
| `npm run start` | Runs the built production build |
| `npm run lint` | Runs ESLint |

---

## 🗺️ The "Where is X?" Map

### 1. Main Page Structure (`app/page.tsx`)
This file is the skeleton of the landing page. It imports and stacks the sections in this order:
1.  **Navbar** (`components/Navbar.tsx`)
2.  **Hero** (`sections/Hero.tsx`)
3.  **Solutions/Portfolio** (`components/ServiceContent.tsx`)
4.  **Why Us/About** (`sections/About.tsx`)
5.  **Process/Workflow** (`sections/Process.tsx`)
6.  **Contact Form** (`sections/Contact.tsx`)
7.  **Footer** (Hardcoded directly at the bottom of `app/page.tsx`)

### 2. The "CMS" (Where to change Content)
Instead of editing complex components, most text and data are stored in these lists:

* **Portfolio/Services Items:** 📄 `constants/services.ts`
    * *What it controls:* The grid of cards in the "Solutions" section.
    * *How to edit:* Add/Remove objects in the `SERVICES` array. Each item needs a `title`, `description`, `icon`, and `imageUrl`.
    
* **"Why Us" Tiles:** 📄 `sections/About.tsx`
    * *What it controls:* The interactive "Why Karvyn3D?" section with the hover tiles.
    * *How to edit:* Look for the `aboutPoints` array at the top of the file.

* **Process Steps:** 📄 `sections/Process.tsx`
    * *What it controls:* The "How it Works" timeline.
    * *How to edit:* Look for the `steps` array (e.g., "Consultation", "Design", "Production").

### 3. Contact Info (Phone/Email/Address)
This info is repeated in a few places. If you change your number, update ALL of these:
1.  **Navbar Button:** `components/Navbar.tsx` (Top right "Contact Us" button).
2.  **Footer:** `app/page.tsx` (Scroll to the bottom `<footer` tag).
3.  **Contact Section:** `sections/Contact.tsx` (The text displayed next to the form).

---

## ⚙️ Logic & Functionality

### 📧 The Contact Form
* **File:** `app/actions/submit-form.ts`
* **Tech:** Server Actions + Resend API.
* **How it works:** 1.  The form in `sections/Contact.tsx` calls the `submitToGoogleSheets` function (named oddly, but it actually sends emails).
    2.  It uses `process.env.RESEND_API_KEY` to authenticate.
    3.  It sends an email **TO** `info@karvyn3d.com` **FROM** `Karvyn3D <onboarding@resend.dev>`.
    * *Note:* To change the "From" address, you must verify a domain in the Resend dashboard.

### 🖼️ Images & Assets
* **Location:** `public/images/`
* **Current Assets:**
    * `Alex_Gifting.jpg`, `Corporate Gifting.png` (Brand items)
    * `Drone.jpg`, `PCB.jpg`, `PCB Housing.jpg` (Engineering items)
    * `Lab Equipment.png`, `Labware.jpg` (Science items)
* **Logo:** `public/logo.svg`

### ⚠️ Unused/Hidden Files
* `sections/MaterialGuide.tsx`: This component exists in the codebase but is **NOT** currently imported into `app/page.tsx`. If you want to show a material guide, you need to import it into `page.tsx` and add `<MaterialGuide />`.

---

## 🚀 Deployment (Vercel)

1.  **Push code** to GitHub.
2.  **Import** project in Vercel.
3.  **Environment Variables:** You MUST set the following in Vercel Project Settings:
    * `RESEND_API_KEY`: (Get this from Resend.com)
4.  **Redeploy.**

---

## 🎨 Styling Notes (Tailwind v4)
* **Config:** `app/globals.css` (Tailwind v4 puts config in CSS, not js).
* **Primary Color:** `orange-600` is used for branding.
* **Selection Color:** Text selection is styled orange (`selection:bg-orange-100`).

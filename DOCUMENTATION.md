# Portfolio Website - Customization Guide

This guide explains how to customize your designer portfolio. Everything is easy to modify!

## 🎯 Getting Started

1. Open your project in VS Code
2. Run `npm run dev` to start the development server
3. Open `http://localhost:3000` in your browser
4. Edit any file in the `components/` folder
5. See changes instantly in your browser (hot reload)

## 📝 Component-by-Component Guide

### Navigation (`components/navigation.tsx`)
**What it does**: Shows your name at the top; clicking it scrolls to the top of the page

**To customize**:
\`\`\`tsx
// Find this line and update your name:
<span className="text-xl font-bold">Aliyan Khan</span>

// Change to:
<span className="text-xl font-bold">Your Name</span>
\`\`\`

### Hero Section (`components/hero.tsx`)
**What it does**: Large landing section with animated background, profile image, name, title, and CTA buttons

**To customize**:

1. **Replace profile image**:
   - Save your photo as `professional-portrait.png` in `public/` folder
   - Recommended size: 320x320px
   - The image automatically displays in the profile box

2. **Change name and title**:
   \`\`\`tsx
   // Find these lines:
   <h1>Aliyan Khan</h1>
   <p>Digital Marketing Professional | Hospitality Enthusiast</p>
   
   // Replace with:
   <h1>Your Name</h1>
   <p>Your Title | Your Specialty</p>
   \`\`\`

3. **Update the description**:
   \`\`\`tsx
   // Find the description paragraph and update it:
   <p>Your professional summary here...</p>
   \`\`\`

4. **Customize buttons**:
   \`\`\`tsx
   // Update button links:
   href="https://your-resume-link"  // Resume link
   href="https://your-portfolio-link" // Portfolio link
   \`\`\`

### About Section (`components/about.tsx`)
**What it does**: Tells your story and background

**To customize**:
\`\`\`tsx
// Find the about text and replace:
<p>Your detailed bio, background, and professional journey...</p>
\`\`\`

### Education Section (`components/education.tsx`)
**What it does**: Lists your qualifications

**To add/modify education**:
\`\`\`tsx
{
  degree: "Bachelor of Science",
  institution: "University Name",
  field: "Your Field of Study",
  year: "2020 - 2024",
  details: "Any relevant details, awards, or honors"
}
\`\`\`
Just add more objects to the education array to display more entries.

### Experience Section (`components/experience.tsx`)
**What it does**: Shows your work history and achievements

**To add/modify experience**:
\`\`\`tsx
{
  title: "Your Job Title",
  company: "Company Name",
  period: "2023 - Present",
  description: "Brief overview of your role",
  highlights: [
    "Key achievement or responsibility",
    "Another important accomplishment"
  ]
}
\`\`\`
Add more objects to show more job positions.

### Skills Section (`components/skills.tsx`)
**What it does**: Displays your technical and professional skills

**To customize**:
\`\`\`tsx
// Update skill categories and items:
const skillsData = [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  }
]
\`\`\`

**Note**: Proficiency bars are commented out. Uncomment them in the code if you want to add proficiency levels later.

### Languages Section (`components/languages.tsx`)
**What it does**: Lists languages you speak

**To customize**:
\`\`\`tsx
{
  name: "Language Name",
  proficiency: "Native / Fluent / Intermediate / Basic"
}
\`\`\`

### Hobbies Section (`components/hobbies.tsx`)
**What it does**: Shows your interests and hobbies

**To customize**:
- Replace each hobby item with your own interests
- Update descriptions to match your hobbies

### Contact Section (`components/contact.tsx`)
**What it does**: Contact form and social media links

**To customize social media links**:
\`\`\`tsx
// Find the social media section and update URLs:
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://facebook.com/yourprofile">Facebook</a>
<a href="https://twitter.com/yourprofile">Twitter</a>
\`\`\`

**To update WhatsApp number**:
\`\`\`tsx
// Find the WhatsApp button and update:
href={`https://wa.me/+923001234567`}  // Replace with your number
\`\`\`

## 🎨 Styling & Colors

### Edit Colors
All colors are defined in `app/globals.css` at the top:

\`\`\`css
:root {
  --background: oklch(0.08 0 0);      /* Dark background */
  --foreground: oklch(0.98 0 0);      /* Text color */
  --primary: oklch(0.5 0.3 280);      /* Purple */
  --accent: oklch(0.6 0.2 200);       /* Cyan */
}
\`\`\`

**To change colors**:
1. Open `app/globals.css`
2. Update the oklch values (or replace with hex colors like `#8B5CF6`)
3. All components automatically update

### Dark Theme Animations
The animated background uses these animations:
- `gradientShift`: Smooth color transitions
- `blobMove`: Floating geometric shapes
- `lineSlide`: Diagonal accent lines
- `shimmerPulse`: Glowing effects

To adjust animation speed, find animation definitions in `globals.css` and change the `duration` values.

## 📱 Responsive Design

The site uses Tailwind breakpoints:
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

To make elements responsive:
\`\`\`tsx
<div className="text-lg md:text-2xl lg:text-4xl">
  Text gets bigger on larger screens
</div>
\`\`\`

## 🚀 Common Tasks

### Task: Update profile image
1. Save your photo as `professional-portrait.png` in `public/` folder
2. Reload the page - it automatically displays

### Task: Change primary color to blue
1. Open `app/globals.css`
2. Find `--primary: oklch(0.5 0.3 280);`
3. Change to `--primary: #3B82F6;` (or any blue hex)

### Task: Add a new section
1. Create file: `components/my-section.tsx`
2. Use this template:
   \`\`\`tsx
   export default function MySection() {
     return (
       <section className="py-16 bg-background">
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl font-bold mb-8">Section Title</h2>
           {/* Your content */}
         </div>
       </section>
     )
   }
   \`\`\`
3. Import in `app/page.tsx`: `import MySection from "@/components/my-section"`
4. Add to page: `<MySection />`

### Task: Change fonts
1. Open `app/layout.tsx`
2. Import a new font from 'next/font/google'
3. Add to theme in `globals.css`

### Task: Slow down animations
1. Open `app/globals.css`
2. Find `@keyframes` animations
3. Increase `duration` values (e.g., from `3s` to `5s`)

## 🔍 File Quick Reference

| File | Purpose | Edit For |
|------|---------|----------|
| `app/globals.css` | Styling and colors | Colors, animations, spacing |
| `components/hero.tsx` | Landing page | Name, title, description, profile image |
| `components/contact.tsx` | Footer and contact | Social media links, WhatsApp |
| `components/education.tsx` | Education info | School, degree, dates |
| `components/experience.tsx` | Work history | Jobs, companies, achievements |
| `components/skills.tsx` | Skills display | Technical and soft skills |

## 🐛 Debugging

**Component not showing**:
- Check if it's imported in `app/page.tsx`
- Verify it has a `default export`
- Check browser console (F12) for errors

**Image not loading**:
- Place image in `public/` folder
- Use path like `/professional-portrait.png`
- Clear browser cache

**Styling looks wrong**:
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check for typos in Tailwind class names

**Hot reload not working**:
- Save the file you edited
- Check terminal for errors
- Restart dev server

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [shadcn/ui Components](https://ui.shadcn.com)

---

**Tip**: Your changes appear instantly when you save files. Just keep your dev server running and watch your portfolio update in real-time!

# Aliyan Khan - Designer Portfolio Website

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS. Features stunning animated backgrounds, dark theme optimization, and a fully responsive design perfect for showcasing your design work.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your machine
- npm or pnpm package manager
- A code editor (VS Code recommended)

### Local Setup

1. **Clone or download the project**
   \`\`\`bash
   # If using GitHub
   git clone <repository-url>
   cd portfolio-website
   
   # Or extract the downloaded ZIP file
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   pnpm dev
   \`\`\`

4. **View your portfolio**
   - Open your browser and navigate to `http://localhost:3000`
   - The portfolio will hot-reload as you make changes in real-time
   - Your changes appear instantly in the browser

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

### Deploy to Vercel (Recommended)
\`\`\`bash
# Push to GitHub first, then:
# 1. Go to vercel.com
# 2. Click "New Project" 
# 3. Select your GitHub repository
# 4. Vercel will auto-deploy with every push
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── page.tsx              # Main landing page (combines all sections)
│   ├── layout.tsx            # Root layout with dark theme setup
│   └── globals.css           # Global styles, animations & design tokens
├── components/
│   ├── navigation.tsx        # Header with name (clickable to scroll top)
│   ├── hero.tsx              # Hero section with animated background & profile image
│   ├── about.tsx             # About section
│   ├── education.tsx         # Education history
│   ├── experience.tsx        # Work experience
│   ├── skills.tsx            # Technical skills (proficiency bars commented)
│   ├── languages.tsx         # Languages section
│   ├── hobbies.tsx           # Hobbies and interests
│   ├── contact.tsx           # Contact form & social media links
│   └── ui/                   # shadcn/ui components
└── public/
    ├── professional-portrait.png  # Your profile image placeholder
    └── other-assets/

\`\`\`

## 🎨 Design Features

- **Dark Theme**: Optimized dark interface with vibrant purple and cyan accents
- **Animated Hero Background**: Sophisticated geometric animations with gradient shifts
- **Profile Image**: Placeholder for your professional photo (320x320px)
- **Responsive Design**: Mobile-first approach that works on all devices
- **Smooth Animations**: Modern motion effects on scroll and hover
- **Social Media Links**: Instagram, LinkedIn, Facebook, Twitter in footer
- **Clickable Name**: Click your name to scroll to top instantly

## ⚙️ Available Scripts

- `npm run dev` - Start development server (hot reload enabled)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: CSS keyframes and Tailwind transitions
- **Font**: Geist (sans-serif)

## 🖼️ Customization Quick Links

See **DOCUMENTATION.md** for detailed guides on:
- Replacing your profile image
- Adding your social media links
- Updating education, experience, and skills
- Changing colors and styling
- Adding custom sections

## 🆘 Troubleshooting

**Port 3000 is already in use:**
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

**Dependencies not installing:**
\`\`\`bash
rm -rf node_modules package-lock.json
npm install
\`\`\`

**Styles not applying:**
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the development server with `npm run dev`
- Check that Tailwind classes are correctly spelled

**Hot reload not working:**
- Save the file you edited
- Check the terminal for any errors
- Restart the dev server

---

For detailed customization instructions, see **DOCUMENTATION.md**

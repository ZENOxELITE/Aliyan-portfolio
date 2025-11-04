// "use client"

// import { useState } from "react"
// import { Menu, X } from "lucide-react"
// import Link from "next/link"

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { label: "About", href: "#about" },
//     { label: "Education", href: "#education" },
//     { label: "Experience", href: "#experience" },
//     { Label: "Languages", href: "#languages"},
//     { label: "Skills", href: "#skills" },
//     { label: "Contact", href: "#contact" },
//   ]

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-40">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="#" className="font-bold text-xl text-primary">
//             Aliyan Khan
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//             {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200 rounded"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }
"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Languages", href: "#languages" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="font-bold text-xl text-primary">
            Aliyan Khan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-${index}-mobile`}
                href={item.href}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

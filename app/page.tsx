"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Languages from '@/components/languages'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem("theme") === "dark"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-accent" />}
      </button> */}

      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Education />
      <Languages />
      <Experience />
      <Skills />
      <Contact />
    </div>
  )
}

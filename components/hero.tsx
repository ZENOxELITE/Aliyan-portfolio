"use client"

import { Download } from "lucide-react"

export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDownloadResume = () => {
    // Create a simple text file as a placeholder CV since we don't have the actual PDF
//     const cvContent = `ALIYAN KHAN
// Digital Marketer & Aspiring Hospitality Professional
// Karachi, Pakistan

// CONTACT INFORMATION
// Phone: +92 311 3819795
// Email: ak9520702@gmail.com
// WhatsApp: 0311 3819795
// Address: House no R-1118, Sector 15/B, Buffer Zone, Karachi, Pakistan

// PROFESSIONAL SUMMARY
// I'm an 18-year-old recent graduate passionate about hospitality management and digital marketing. I enjoy creating meaningful online campaigns, exploring new cultures, and continuously learning to grow both personally and professionally.

// EDUCATION
// Intermediate (2021–2024) – Govt. Degree Boys College 11/A Karachi
// Matriculation (2018–2024) – Mariam Academy (Engineering, Manufacturing & Construction)
// Diploma (2021) – FC Computer Collegiate (ACIT)

// EXPERIENCE
// Digital Marketing Intern (Apr 2023 – Oct 2023) – Karachi, Pakistan
// - Managed Facebook accounts and email communications
// - Ran paid and unpaid campaigns on Facebook & Instagram
// - Communicated with clients and managed social media presence

// SKILLS
// - Microsoft Word, Excel, PowerPoint
// - Social Media Marketing
// - Facebook & Instagram Ads (Paid & Unpaid)
// - Communication & Teamwork

// LANGUAGES
// - Urdu (Native)
// - English (Intermediate – B1/B2)

// INTERESTS
// - Football (Leadership, Teamwork, Strategy)
// - Traveling (Cultural Learning, Adaptability)
// - Gym & Exercise (Discipline, Health, Motivation)`

//     const element = document.createElement("a")
//     const file = new Blob([cvContent], { type: "text/plain" })
//     element.href = URL.createObjectURL(file)
//     element.download = "Aliyan_Khan_CV.pdf"
//     document.body.appendChild(element)
//     element.click()
const link = document.createElement("a")
link.href = "/cv.pdf"
link.download = "Aliyan_Khan_CV.pdf"
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
//     document.body.removeChild(element)
}
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center hero-background relative overflow-hidden">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <div className="animated-line line-1"></div>
      <div className="animated-line line-2"></div>

      <div className="accent-circle circle-1"></div>
      <div className="accent-circle circle-2"></div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-2">
              <h1
                onClick={scrollToTop}
                className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                Aliyan Khan
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-medium drop-shadow-md">
                Aspiring Hospitality Professional & Digital Marketer
              </p>
            </div>

            <p className="text-base md:text-lg text-white drop-shadow-md leading-relaxed max-w-xl">
              I'm a recent graduate passionate about business management and digital marketing. I enjoy creating impactful online campaigns, exploring new business strategies, and continuously learning to grow both personally and professionally.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-medium hover:bg-blue-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Me
              </a>
              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-center animate-in fade-in slide-in-from-right duration-700">
            <div className="w-80 h-80 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-2xl overflow-hidden group hover:border-white/50 transition-colors duration-300">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0 relative">
                {/* Image placeholder with guides */}
                <img
                  src="/professional-portrait.png"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay text for guidance */}
                {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium text-center px-4">
                    Replace with your professional photo
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

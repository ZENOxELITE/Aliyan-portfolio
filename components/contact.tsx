"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message link
    const message = `Hello Aliyan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const whatsappUrl = `https://wa.me/923113819795?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-in fade-in slide-in-from-left">
              <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href="tel:+923113819795"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+92 311 3819795</p>
                  </div>
                </a>

                <a
                  href="mailto:ak9520702@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">ak9520702@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923113819795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium text-foreground">0311 3819795</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">
                      House no R-1118, Sector 15/B,
                      <br />
                      Buffer Zone, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground">Follow Me</h3>
            <p className="text-muted-foreground text-sm mt-2">Connect with me on social media</p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

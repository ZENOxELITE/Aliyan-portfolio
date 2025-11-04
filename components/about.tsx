export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Personal Information
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Date of Birth:</span> 8 November 2006
                </p>
                <p>
                  <span className="font-semibold text-foreground">Nationality:</span> Pakistani
                </p>
                <p>
                  <span className="font-semibold text-foreground">Location:</span> Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I recently graduated from Govt. Degree Boys College 11/A Karachi with my FSC and previously studied at
              Mariam Academy. I've also completed a diploma in ACIT and learned social media marketing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to pursue a bachelor's in hospitality management and build a successful career in the
              hospitality industry while expanding my digital marketing expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

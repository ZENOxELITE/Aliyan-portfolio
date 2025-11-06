export default function Education() {
  const educationItems = [
    {
      degree: "Intermediate (FSC) PRE engineering",
      school: "Govt. Degree Boys College 11/A Karachi",
      year: "2021–2023",
    },
    {
      degree: "Matriculation",
      school: "Mariam Academy",
      year: "2018–2021",
      details: "Engineering, Manufacturing & Construction",
    },
    {
      degree: "Diploma in ACIT",
      school: "FC Computer Collegiate",
      year: "2024",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Education</h2>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 animate-in fade-in slide-in-from-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-muted-foreground mt-1">{item.school}</p>
                  {item.details && <p className="text-sm text-muted-foreground mt-1">{item.details}</p>}
                </div>
                <span className="text-sm font-medium text-primary whitespace-nowrap">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Software & Tools",
      skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
      level: 90,
    },
    {
      category: "Digital Marketing",
      skills: ["Social Media Marketing", "Facebook & Instagram Ads", "Campaign Management"],
      level: 85,
    },
    {
      category: "Soft Skills",
      skills: ["Communication", "Teamwork", "Problem Solving"],
      level: 88,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Skills & Tools</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg bg-card/50 hover:border-primary/50 transition-colors duration-200 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>

              <ul className="space-y-2 mb-6">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>

              {/* 
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Proficiency</p>
                <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "0%" }}
                    onLoad={() => {}}
                  ></div>
                </div>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

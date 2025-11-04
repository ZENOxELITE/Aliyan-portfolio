export default function EducationExperience() {
  const education = [
    {
      degree: "Intermediate (FSC)",
      institution: "Govt. Degree Boys College 11/A Karachi",
      year: "2021–2024",
      field: "Science",
    },
    {
      degree: "Matriculation",
      institution: "Mariam Academy",
      year: "2018–2021",
      field: "Engineering, Manufacturing & Construction",
    },
    {
      degree: "Diploma (ACIT)",
      institution: "FC Computer Collegiate",
      year: "2021",
      field: "Computer Information Technology",
    },
  ]

  const experience = [
    {
      title: "Digital Marketing Intern",
      company: "Freelance",
      period: "Apr 2023 – Oct 2023",
      location: "Karachi, Pakistan",
      responsibilities: [
        "Managed Facebook and Instagram accounts for multiple clients",
        "Designed and executed paid advertising campaigns",
        "Developed social media strategies to increase engagement",
        "Communicated with clients to understand marketing objectives",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Experience & Education</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Experience</h3>
            {experience.map((job, index) => (
              <div key={index} className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                  <p className="text-accent font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {job.period} • {job.location}
                  </p>
                </div>
                <ul className="space-y-2 ml-4">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="space-y-2 pb-6 border-b border-border last:border-b-0">
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <p className="text-sm text-muted-foreground">{edu.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

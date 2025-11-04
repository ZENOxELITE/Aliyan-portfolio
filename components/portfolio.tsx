import { ExternalLink } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Facebook Campaign Management",
      description:
        "Managed paid and organic Facebook campaigns for multiple clients with focus on engagement and conversion optimization.",
      skills: ["Facebook Ads", "Campaign Strategy", "Analytics"],
      link: "#",
    },
    {
      id: 2,
      title: "Instagram Marketing Strategy",
      description:
        "Developed and executed comprehensive Instagram marketing strategies including content creation, posting schedules, and audience growth.",
      skills: ["Instagram Ads", "Content Strategy", "Community Management"],
      link: "#",
    },
    {
      id: 3,
      title: "Email Marketing Campaigns",
      description:
        "Designed and executed targeted email campaigns to nurture leads and improve customer retention for hospitality businesses.",
      skills: ["Email Marketing", "Copy Writing", "Segmentation"],
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Content Creation",
      description:
        "Created engaging social media content across multiple platforms with consistent branding and messaging for better reach.",
      skills: ["Content Creation", "Copywriting", "Social Media"],
      link: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Digital marketing projects showcasing campaign strategy, content creation, and audience engagement across
            social media platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-lg border border-border bg-card hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-200 font-medium"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

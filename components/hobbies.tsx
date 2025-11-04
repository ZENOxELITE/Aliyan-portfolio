export default function Hobbies() {
  const hobbies = [
    {
      emoji: "⚽",
      name: "Football",
      description: "Leadership, teamwork, and strategic thinking",
    },
    {
      emoji: "🌍",
      name: "Traveling",
      description: "Cultural learning and adaptability",
    },
    {
      emoji: "🏋️",
      name: "Gym & Exercise",
      description: "Discipline, health, and motivation",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Hobbies & Interests</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg bg-card/50 hover:border-primary/50 hover:shadow-lg transition-all duration-200 text-center animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{hobby.emoji}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{hobby.name}</h3>
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

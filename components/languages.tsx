// export default function Languages() {
//   const languages = [
//     { name: "Urdu", level: "Native", proficiency: 100 },
//     { name: "English", level: "Intermediate (B1/B2)", proficiency: 75 },
//   ]

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Languages</h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           {languages.map((lang, index) => (
//             <div
//               key={index}
//               className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200"
//             >
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-lg font-semibold text-foreground">{lang.name}</h3>
//                 <span className="text-sm font-medium text-primary">{lang.level}</span>
//               </div>

//               <div className="w-full h-2 bg-border rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
//                   style={{ width: `${lang.proficiency}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
export default function Languages() {
  const languages = [
    { name: "Urdu", level: "Native/Fluent", proficiency: 100 },
    { name: "English", level: "Intermediate", proficiency: 75 },
    { name: "Deutsch", level: "Beginner", proficiency: 30 },
    { name: "Italian", level: "Beginner", proficiency: 25 },
  ]

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Languages</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 animate-in fade-in slide-in-from-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-foreground">{lang.name}</h3>
                <span className="text-sm font-medium text-primary">{lang.level}</span>
              </div>

              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${lang.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
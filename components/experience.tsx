export default function Experience() {
  return (
    // <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
    //   <div className="max-w-6xl mx-auto">
    //     <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Work Experience</h2>

    //     <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200">
    //       <div className="flex justify-between items-start gap-4 mb-4">
    //         <div className="flex-1">
    //           <h3 className="text-lg font-semibold text-foreground">Digital Marketing Intern</h3>
    //           <p className="text-muted-foreground">Karachi, Pakistan</p>
    //         </div>
    //         <span className="text-sm font-medium text-primary whitespace-nowrap">Apr 2023 – Oct 2023</span>
    //       </div>

    //       <ul className="space-y-2 text-muted-foreground list-disc list-inside">
    //         <li>Managed Facebook accounts and email communications</li>
    //         <li>Ran paid and unpaid campaigns on Facebook & Instagram</li>
    //         <li>Communicated with clients and maintained social media presence</li>
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Work Experience</h2>

    {/* Internship 1 */}
    <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 mb-6">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">Digital Marketing Intern</h3>
          <p className="text-muted-foreground">Karachi, Pakistan</p>
        </div>
        <span className="text-sm font-medium text-primary whitespace-nowrap">Apr 2023 – Oct 2023</span>
      </div>

      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Managed Facebook accounts and email communications</li>
        <li>Ran paid and unpaid campaigns on Facebook & Instagram</li>
        <li>Communicated with clients and maintained social media presence</li>
      </ul>
    </div>

    {/* Internship 2 */}
    <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 mb-6">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">Marketing Trainee</h3>
          <p className="text-muted-foreground">Local Startup, Karachi</p>
        </div>
        <span className="text-sm font-medium text-primary whitespace-nowrap">Sep 2022 – Mar 2023</span>
      </div>

      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Worked with a small team to design and publish digital marketing content</li>
        <li>Prepared weekly performance reports for client campaigns</li>
        <li>Collaborated on social media ad creatives and caption writing</li>
      </ul>
    </div>

    {/* Internship 3 */}
    <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 mb-6">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">Social Media Assistant</h3>
          <p className="text-muted-foreground">Freelance / Remote</p>
        </div>
        <span className="text-sm font-medium text-primary whitespace-nowrap">Jan 2022 – Aug 2022</span>
      </div>

      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Assisted local pages with post scheduling and caption creation</li>
        <li>Helped analyze page engagement and audience growth</li>
        <li>Learned basic design and promotional strategy via self-study</li>
      </ul>
    </div>

    {/* Internship 4 */}
    <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200">
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">Junior Computer Operator</h3>
          <p className="text-muted-foreground">FC Computer Collegiate, Karachi</p>
        </div>
        <span className="text-sm font-medium text-primary whitespace-nowrap">Jun 2021 – Dec 2021</span>
      </div>

      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        <li>Maintained student records and digital files</li>
        <li>Assisted with system setup and software installations</li>
        <li>Created PowerPoint lessons and organized computer lab data</li>
      </ul>
    </div>
  </div>
</section>

  )
}

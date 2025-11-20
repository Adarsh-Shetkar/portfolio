import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const mlFramework = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Matplotlib", "NumPy", "Pandas"
  ];

  const toolside= [ "VS Code", "IntelliJ", "Eclipse", "GitHub", "JIRA", "Postman", "Docker", "Terraform" ]

  const dbCloud = [
    "MySQL", "Snowflake", "Firebase", "MongoDB", "AWS", "Elasticsearch"
  ];

  const backendSkills = ["Node.js", "Python", "Java", "Spring Boot", "Flask"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-4">
            Passionate engineer focused on building scalable applications 
            and crafting reliable, user-centered lakehouse solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2"> Machine Learning Framework</h3>
                <div className="flex flex-wrap gap-2">
                  {mlFramework.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-2"> Databases & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {dbCloud.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E. in Information Technology </strong> - Chaitanya Bharathi Institute of Technology
                  (2020-2024) CGPA: 9.45/10
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Web Development, Cloud
                  Computing, Operating System and Computer Networks
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at JP Morgan Chase(2024 - Present){" "}
                  </h4>
                  <p>
                  I transform complex data into clear, actionable insights by building scalable analytical applications, seamless data integrations, and high-performance lakehouse pipelines.
                  </p>
                </div>

                {/* <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at JP Morgan Chase (2023){" "}
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
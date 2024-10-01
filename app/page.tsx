'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import headshot from './images/headshot.jpeg'


const skills = {
  languages: ['Python', 'JavaScript', 'Go', 'Rust', 'HTML', 'CSS', 'SQL'],
  frameworks: ['React.js', 'Node.js', 'Next.js', 'FastAPI'],
  technologies: ['Azure', 'AWS', 'Jenkins', 'UCD', 'TerraForm', 'Elasticsearch', 'MongoDB', 'MySQL', 'Firebase', 'Unix', 'Bash', 'Git', 'Gitlab']
}

const experiences = [
  {
    company: "Fannie Mae",
    position: "Full-Stack Software Engineer Intern",
    period: "June 2024 - Aug 2024",
    achievements: [
      "Refactored code base, achieving a 30% performance improvement and better maintainability.",
      "Architected and developed a new UI for filter and search functionalities, increasing user engagement by 25%.",
      "Leveraged FastAPI to integrate the database with search mechanics, boosting search speed by 50%."
    ]
  },
  {
    company: "HealthEquity",
    position: "Software Engineer Intern",
    period: "Mar 2024 - May 2024",
    achievements: [
      "Automated the integration of JIRA Board data into PowerBI, cutting down manual data entry by 80%.",
      "Integrated Microsoft Copilot with ServiceNow, enhancing efficiency by 35%.",
      "Spearheaded the integration and testing of Copilot features within the ServiceNow platform, boosting operational efficiency by 40%."
    ]
  },
  {
    company: "Arpa-Cloud",
    position: "Software Engineer Intern",
    period: "June 2023 - Aug 2023",
    achievements: [
      "Gained extensive expertise in configuring and maintaining cloud-based applications and services, effectively resolving complex issues to achieve 99.9% uptime.",
      "Leveraged scripting and automation tools to streamline cloud operations, boosting productivity by 25% and minimizing manual errors."
    ]
  },
  {
    company: "IWP Capital",
    position: "Data Engineer Intern",
    period: "Mar 2023 - May 2023",
    achievements: [
      "Developed a Python script using Pandas to web scrape SEC Edgar, efficiently extracting 10-K forms for analysis and research, reducing manual data collection time by 70%.",
      "Enhanced the Customer Relationship Management (CRM) database by systematically cleaning and updating records, significantly boosting data accuracy and providing deeper customer insights for more informed decision-making."
    ]
  },
  {
    company: "GM Financial",
    position: "Software Engineer Intern",
    period: "Oct 2021 - Aug 2022",
    achievements: [
      "Spearheaded the design of an advanced OCR/AI project, recognized as (Innovation of the Year,) by leveraging cutting-edge technologies to deliver a 25% improvement in processing accuracy and a 40% increase in system efficiency.",
      "Engineered and deployed Linux virtual machines in Azure using Terraform, which enhanced the testing environment's scalability and reliability, resulting in a 50% reduction in deployment time.",
      "Architected and implemented a RFID system for automated vehicle data collection, which streamlined operations, boosted data accuracy by 35%, and increased processing speed by 40%, leading to a 25% reduction in manual data entry errors."
    ]
  }
]

const projects = [
  {
    title: "Learn Leaf Organizer App",
    description: "A task/project management app using Node.js, Firebase, and React.js.",
    image:  "/learnleaf.png",
    tech: ["React.js", "Node.js", "Firebase"],
    achievements: [
      "Designed and built dynamic user interfaces",
      "Engineered task creation, prioritization, and calendar integration",
      "Accelerated task processing by 40%"
    ],
    github: "https://github.com/johnabot/LearnLeaf",
    demo: "https://learn-leaf-organizer.vercel.app"
  },
  {
    title: "Solana Gif App",
    description: "An app for adding GIFs to wallets on the Solana developer network.",
    image: "/solproject.png",
    tech: ["Rust", "React.js"],
    achievements: [
      "Created smooth blockchain integration and interaction",
      "Implemented efficient UI using React.js",
      "Reduced transaction processing time by 30%"
    ],
    github: "https://github.com/johnabot/Cookie-Monster-Solana-dApp",
    demo: "https://solana-gif-app.vercel.app"
  }
  ,
  {
    title: "Doctoral-Database Web App",
    description: "Developed a web-based application to manage doctoral research projects, providing an intuitive interface for both administrators and users",
    image: "/doctordb.png",
    tech: ["HTML","CSS", "SQL","PHP", "MySql"],
    achievements: [
      "A searchable database for doctoral projects",
      "Admin capabilities to add, edit, and delete research entries",
      "Secure storage and retrieval of data using MySQL"
    ],
    github: "https://github.com/vinsanite/doctoral-database",
    demo: "https://vinsanite.github.io/doctoral-database/"
  }
  
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="max-w-4xl mx-auto pt-16">
      <section id="home" className="mb-16">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors duration-300">
          <div className="p-6">
            <div className="flex items-center">
              <Image
                src= {headshot}
                alt="Johnathan-hung Doan"
                width={150}
                height={150}
                className="rounded-full"
              />
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Johnathan-hung Doan</h1>
                <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">Software Engineer</p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About Me</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I&apos;m a passionate software engineer with experience in full-stack development, cloud technologies, and blockchain. 
                Currently pursuing a B.S. in Computer Software Engineering at The University of Texas at Arlington, 
                I&apos;m dedicated to creating efficient, scalable, and user-friendly applications.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The University of Texas at Arlington | Bachelor of Science (B.S) in Computer Software Engineering (Dec 2024)
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Other Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technologies.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mb-16">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company} | {exp.position}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
                  <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mb-16">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  onMouseEnter={() => setActiveProject(null)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-auto object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {activeProject === index && (
                        <div className="mb-4">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Achievements</h4>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                            {project.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200"
                        >
                          <Github className="mr-2" /> GitHub
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <ExternalLink className="mr-2" /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mb-16">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-colors duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2" />
                <a href="mailto:johnathanhungdoan@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">johnathanhungdoan@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Github className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2" />
                <a href="https://github.com/johnabot" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">github.com/johnabot</a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-2" />
                <a href="https://linkedin.com/in/johnathandoan" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">linkedin.com/in/johnathandoan</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
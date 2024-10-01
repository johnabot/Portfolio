export default function Experience() {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-6">Professional Experience</h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Fannie Mae | Full-Stack Software Engineer Intern</h2>
                <p className="text-gray-400">June 2024 - Aug 2024</p>
                <ul className="mt-2 text-gray-300 list-disc list-inside">
                  <li>Refactored code base, achieving a 30% performance improvement and better maintainability.</li>
                  <li>Architected and developed a new UI for filter and search functionalities, increasing user engagement by 25%.</li>
                  <li>Leveraged FastAPI to integrate the database with search mechanics, boosting search speed by 50%.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">HealthEquity | Software Engineer Intern</h2>
                <p className="text-gray-400">Mar 2024 - May 2024</p>
                <ul className="mt-2 text-gray-300 list-disc list-inside">
                  <li>Automated the integration of JIRA Board data into PowerBI, cutting down manual data entry by 80%.</li>
                  <li>Integrated Microsoft Copilot with ServiceNow, enhancing efficiency by 35%.</li>
                  <li>Spearheaded the integration and testing of Copilot features within the ServiceNow platform, boosting operational efficiency by 40%.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Arpa-Cloud | Software Engineer Intern</h2>
                <p className="text-gray-400">June 2023 - Aug 2023</p>
                <ul className="mt-2 text-gray-300 list-disc list-inside">
                  <li>Gained extensive expertise in configuring and maintaining cloud-based applications and services, effectively resolving complex issues to achieve 99.9% uptime.</li>
                  <li>Leveraged scripting and automation tools to streamline cloud operations, boosting productivity by 25% and minimizing manual errors.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">GM Financial | Software Engineer Intern</h2>
                <p className="text-gray-400">Oct 2021 - Aug 2022</p>
                <ul className="mt-2 text-gray-300 list-disc list-inside">
                  <li>Spearheaded the design of an advanced OCR/AI project, recognized as "Innovation of the Year," delivering a 25% improvement in processing accuracy.</li>
                  <li>Engineered and deployed Linux virtual machines in Azure using Terraform, resulting in a 50% reduction in deployment time.</li>
                  <li>Architected and implemented a RFID system for automated vehicle data collection, boosting data accuracy by 35% and increasing processing speed by 40%.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
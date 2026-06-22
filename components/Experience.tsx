import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      title: "CRM ANALYST",
      year: "2025 - Present",
      company: "Governors State University, IL",
      link : "https://www.govst.edu/",
      logo: "/experience/governors.jpg",
      description:
        "​Support Enrollment Management teams by maintaining and optimizing CRM and student information systems. Provide technical assistance, troubleshoot system issues, and coordinate with IT to ensure smooth system operations. Manage data accuracy through validation, reporting, and maintenance of student and admissions records. Contribute to process improvements by testing new features, documenting workflows, and helping departments streamline their technology use.",
    },

    {
      title: "Data Engineer Intern",
      year: "2025 - 2025",
      company: "InsOps, Warrenville, IL",
      link: "https://insops.com/",
      logo: "/experience/insops_logo.jpeg",
      description:
      "Build and optimize scalable ETL pipelines to collect, clean, and migrate large datasets using SQL, Python, and GenAI, improving data accuracy and migration speed. Automate data workflows and integrate structured and unstructured sources by scripting in Python and leveraging cloud platforms such as AWS and Azure, enhancing operational efficiency. Support cloud-based data solutions and collaborate on data governance by using GenAI-powered tools to ensure secure, accurate, and timely data transfers across systems."
    },

    {
      title: "DATA COORDINATOR",
      year: "2023 - 2025",
      company: "DePaul University, Chicago, IL",
      link: "https://www.depaul.edu/Pages/default.aspx",
      logo: "/experience/depaul.png",
      description: "Manage Collaboratory, a national database tracking public service and community engagement activities. I collect, organize, and analyze faculty data using advanced Excel functions (VLOOKUP, PivotTables, data visualization) to support institutional reporting and transparency. I streamline data processes, generate reports, and coordinate with faculty, staff, and students to validate data, troubleshoot issues, and update activities efficiently."
    },

    {
      title: "DATA ANALYST",
      year: "2022 - 2023",
      company: "CME Group, Chicago, IL",
      link: "https://www.cmegroup.com/",
      logo: "/experience/cme.jpg",
      description: "Supported a data migration project for EBS (Electronic Broking Services) under CME, managing pre- and post-migration activities for 50+ clients and transitioning 100,000+ records with 99.9% data accuracy. Ensured seamless transitions by troubleshooting large data files, mapping complex data relationships, and coordinating with regional teams, leading to a 20% increase in customer satisfaction and improved access to EBS’s trading capabilities."
    },

    {
      title: "DATA SPECIALIST",
      year: "2021 - 2022",
      company: "Trinity Christian College, Palos Heights, IL ",
      link: "https://www.trnty.edu/",
      logo: "/experience/Trinity.webp",
      description: "Evaluated student transfer credits and maintained accurate records in the college's database, ensuring seamless integration into the Transfer Evaluation System (TES) and Transferology. Ran reports, cleaned data, and updated transfer guides to improve accuracy and streamline processes, while supporting audits, course substitutions, and graduation certifications in compliance with data privacy laws to safeguard student information."
    },

    {
      title: "DATA ANALYST",
      year: "2020 - 2021",
      company: "In Touch Networks, Chicago, IL",
      link: "https://en.wikipedia.org/wiki/In_Touch_Networks",
      logo: "/experience/in_touch.jpeg",
      description: "Conducted research and compiled data on leads, maintaining records in a home-grown CRM system. Cleaned, collected, coordinated, and interpreted datasets to support business decision-making and improve operations. Developed and maintained productive relationships with leads by ensuring profile accuracy and posting C-suite and board roles in the CRM, resulting in enhanced data quality and streamlined workflows."
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#ffffff] py-20 text-black"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">
        <h2
          className="
            text-[28px]
            font-bold
            md:text-[40px]
          "
        >
          EXPERIENCE
        </h2>

        <div className="relative mt-16">
          {/* Desktop / Tablet Timeline */}
          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-[3px]
              -translate-x-1/2
              bg-black
              md:block
            "
          />

          {/* Mobile Timeline */}
          <div
            className="
              absolute
              left-[20px]
              top-0
              h-full
              w-[3px]
              bg-black
              md:hidden
            "
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <div
                key={index}
                className="
                  relative
                  mb-24
                  md:flex
                  md:justify-between
                "
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div
                    className="
                      absolute
                      left-[8px]
                      top-0
                      h-6
                      w-6
                      rounded-full
                      bg-black
                    "
                  />

                  <div className="ml-16">
                    <div className="flex items-center gap-3">
                      <Image
                        src={exp.logo}
                        alt={exp.title}
                        width={40}
                        height={40}
                      />

                      <h3 className="text-[22px] font-bold">
                        {exp.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[18px] font-semibold">
                      {exp.year}
                    </p>

                    <a
  href={exp.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 block text-[17px] font-semibold underline hover:text-blue-600"
>
  {exp.company}
</a>

                    <p className="mt-4 text-[16px] leading-8">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Left Side */}
                <div
                  className={`
                    hidden md:block w-[44%]
                    ${isLeft ? "text-right" : "invisible"}
                  `}
                >
                  {isLeft && (
                    <>
                      <div className="flex items-center justify-end gap-3">
                        <h3 className="text-[26px] font-bold">
                          {exp.title}
                        </h3>

                        <Image
                          src={exp.logo}
                          alt={exp.title}
                          width={50}
                          height={50}
                        />
                      </div>

                      <p className="mt-2 text-[18px] font-semibold">
                        {exp.year}
                      </p>

                      <a
  href={exp.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 block text-[18px] font-semibold underline hover:text-blue-600"
>
  {exp.company}
</a>

                      <p className="mt-4 text-[18px] leading-10">
                        {exp.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    bg-black
                    md:block
                  "
                />

                {/* Right Side */}
                <div
                  className={`
                    hidden md:block w-[44%]
                    ${!isLeft ? "block" : "invisible"}
                  `}
                >
                  {!isLeft && (
                    <>
                      <div className="flex items-center gap-3">
                        <Image
                          src={exp.logo}
                          alt={exp.title}
                          width={50}
                          height={50}
                        />

                        <h3 className="text-[26px] font-bold">
                          {exp.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-[18px] font-semibold">
                        {exp.year}
                      </p>

                      <a
  href={exp.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 block text-[18px] font-semibold underline hover:text-blue-600"
>
  {exp.company}
</a>

                      <p className="mt-4 text-[18px] leading-10">
                        {exp.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
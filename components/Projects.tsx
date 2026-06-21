import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Project() {
  const projects = [
    {
      title: "Global Self-Harm & Substance Abuse Mortality Analysis (2017-2021)",
      image: "/projects/project1.png",
      link: "https://github.com/annesjebamony/global-self-harm-substance-abuse-analysis",
    },
    {
      title: "File Retrieval Engine Oct 2024 - Nov 2024",
      image: "/projects/project2.png",
      link: "https://github.com/annesjebamony/File-Retrieval-Engine-Application-Layering?tab=readme-ov-file",
    },
    {
      title: "Securities Lending Utilization Analysis",
      image: "/projects/project3.png",
      link: "https://github.com/annesjebamony/securities-lending-utilization-ml",
    },
    {
      title: "High-Value Invoice Analysis for Financial Reporting",
      image: "/projects/project4.png",
      link: "http://github.com/annesjebamony/excel-invoice-analysis",
    },
  ];

  return (
    <section
      id="project"
      className="bg-[#ffffff] py-20 text-black"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">
        {/* Heading */}
        <h2
          className="
            text-[28px]
            font-bold
            md:text-[40px]
          "
        >
          LATEST
          <br />
          PROJECTS
        </h2>

        {/* Grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
          "
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                h-[300px]
                overflow-hidden
                bg-black
              "
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                  
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/60
                  transition-all
                  duration-300
                  group-hover:bg-black/70
                "
              />

              {/* Title */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  px-8
                "
              >
                <h3
                  className="
                    text-center
                    text-[24px]
                    font-bold
                    text-white
                    md:text-[34px]
                  "
                >
                  {project.title}
                </h3>
              </div>

              {/* Link Icon */}
              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  text-white
                "
              >
                <ExternalLink size={36} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
import {
  Mail,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#ffffff] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-8 md:px-16 lg:px-28">

        {/* Heading */}
        <div className="text-center">
          <p
            className="
              font-serif
              italic
              text-[22px]
              text-black
            "
          >
            Who I Am?
          </p>

          <h2
            className="
              mt-6
              text-[34px]
              font-normal
              leading-tight
              text-black
              md:text-[45px]
            "
          >
            Turning Complex Data into Clear Decisions
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto mt-16 max-w-[1550px]">
          <p
            className="
              text-[14px]
              leading-[2]
              tracking-[0.02em]
              text-black
              md:text-[20px]
            "
          >
            I am a dedicated Data Professional with a Master's
            in Computer Science and over five years of
            experience in data management, analysis, and
            visualization across education, technology,
            healthcare, and financial domains. I have a solid
            background in working with large and complicated
            datasets gleaning beneficial findings that inform
            strategic choices, streamline operations, and
            stimulate creativity.

            My expertise includes working with financial
            datasets, healthcare data, and education-based
            analytics, ensuring data integrity, compliance,
            and efficiency. Using my skills in SQL, Python,
            Tableau, R, Power BI, and C++, I create dynamic
            dashboards, create predictive models, and find
            trends that affect business results.

            My proficiency in computer science enables me to
            work in software development, IT project
            management, AI engineering, and systems design in
            addition to data analytics, enhancing my capacity
            to develop comprehensive solutions that integrate
            technology and data science.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-300"></div>

        {/* Links */}
       <div
  className="
    mt-12
    grid
    grid-cols-2
    gap-y-10
    md:grid-cols-4
  "
>
  <a
    href="mailto:annesjebasingh@gmail.com"
    className="
      flex items-center
      justify-center
      gap-3
      text-[22px]
      text-black
      underline
      hover:opacity-70
    "
  >
    <Image
      src="/images/gmail.png"
      alt="Gmail"
      width={28}
      height={28}
    />
    Gmail
  </a>

  <a
    href="https://www.linkedin.com/in/annes-j-jebamony/"
    className="
      flex items-center
      justify-center
      gap-3
      text-[22px]
      text-black
      underline
      hover:opacity-70
    "
  >
    <Image
      src="/images/linkedin.png"
      alt="LinkedIn"
      width={28}
      height={28}
    />
    LinkedIn
  </a>

  <a
    href="https://github.com/annesjebamony"
    className="
      flex items-center
      justify-center
      gap-3
      text-[22px]
      text-black
      underline
      hover:opacity-70
    "
  >
    <Image
      src="/images/github.png"
      alt="Github"
      width={28}
      height={28}
    />
    Github
  </a>

  <a
    href="https://annesjebasingh.blogspot.com/"
    className="
      flex items-center
      justify-center
      gap-3
      text-[22px]
      text-black
      underline
      hover:opacity-70
    "
  >
    <Image
      src="/images/blogger.png"
      alt="Blogger"
      width={28}
      height={28}
    />
    Blogger
  </a>
</div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { link } from "fs";

export default function Recommendation() {
  const recommendations = [
    {
      image: "/recommendations/loren.png",
      linkedin: "https://www.linkedin.com/in/lorensm/",
      name: "Loren Stockman-Medina",
      role: "CRM Communications Coordinator",
      company: "Governors State University",
      text: "I have had the pleasure of working with Annes on many CRM projects. Annes possesses an excellent level of knowledge and proficiency in enrollment management technology. Her ability to bridge the gap between institutional goals and technical solutions has improved data integrity and provided better user experiences. Beyond her technical skills, Annes is a collaborative team player and brings an analytical approach to solutions."
    },
    {
      image: "/recommendations/kim.jpg",
      linkedin: "https://www.linkedin.com/in/kim-gonzalez-a0699362/",
      name: "Kim Gonzalez",
      role: "Associate Director of Alumni Relations",
      company: "Governors State University",
      text: "Annes possesses a strong foundation in computer science along with extensive expertise in data analytics and information technology, but what truly sets her apart is her ability to make complex concepts accessible to others. She is patient, informative, and always willing to meet colleagues where they are, regardless of their level of technical expertise. Whether helping organize data, troubleshoot a challenge, or explain a process, she approaches every project with professionalism and a genuine desire to help others succeed."
    },
    {
      image: "/recommendations/craig.jpg",
      linkedin: "https://www.linkedin.com/in/craig-berry-5450b56/",
      name: "Craig Berry",
      role: "Associate Director Of Admissions",
      company: "Governors State University",
      text: "Annes has consistently impressed with her knowledge, work ethic, and professionalism. She has been crucial in the maintenance and enhancement of our Slate CRM system and has provided timely, accurate data that supports enrollment decision-making. Annes effectively manages complex student records, resolves data issues, and ensures a reliable flow of analytics for our Admissions team. She is a major contributor to our department’s success and would remain a valuable member of our team if not for university-wide budget reductions."
    },
    {
      image: "/recommendations/linda.jpeg",
      linkedin: "https://www.linkedin.com/in/linda-bendixen-48422121/",
      name: "Linda Bendixen",
      role: "Department Assistant",
      company: "DePaul University",
      text: "I had the great pleasure of working with Annes at DePaul. She was instrumental in building up our Collaboratory database, interacting with staff and faculty, and managing and maintaining data integrity. She is precise and persistent, accurate and industrious. In addition to the highest level of professionalism, Annes is smart, friendly and a joy to be around. I can't say enough good things about her, and recommend her unwaveringly."
    },
    {
      image: "/recommendations/naomi.jpeg",
      linkedin: "https://www.linkedin.com/in/naomikent/",
      name: "Naomi Kent",
      role: "President, North America",
      company: "In Touch Networks",
      text: "Annes worked with In Touch during our analyst internship in 2021. She is hard working, diligent and very good with data. Highly recommend."
    },
    {
      image: "/recommendations/pagie.jpeg",
      linkedin: "https://www.linkedin.com/in/paige-a-boersma-87541611/",
      name: "Paige A. Boersma",
      role: "Associate Principal Spend Management",
      company: "Vizient",
      text: "Annes is a hard working individual with a positive attitude and an eagerness to learn. She is a pleasure to know and work with."
    },
    {
      image: "/recommendations/luke.jpeg",
      linkedin: "https://www.linkedin.com/in/luke-wulbecker/",
      name: "Luke Wulbecker",
      role: "Director, Permanent Recruitment",
      company: "Adecco",
      text: "Annes is a true professional. Highly detailed and proactive in her communication, Annes is eager to grow and push her own limits of knowledge to help any organization be more successful. She is highly organized, and she specializes in data integrity, analytics, and sales. Annes would make a great addition to any team."
    },
    {
      image: "/recommendations/barbara.png",
      linkedin: "https://www.depaul.edu/academics/research-and-innovation/institutes-centers-labs/steans-center-community-based-service-learning/about/staff/barbara-smith-weaver",
      name: "Barbara Smith-Weaver",
      role: "Associate Director, Compliance, Evaluation, and Community Partnership Management",
      company: "DePaul University",
      text: "Annes consistently exceeded expectations in all areas of her work. Her ability to quickly learn new systems, reliability, and high quality of work were invaluable to our team. Her contributions improved data collection processes, system utilization, and reporting efficiency. She is a skilled, dedicated, and thoughtful professional who would be an asset to any team"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
  };

  const item = recommendations[current];

  return (
    <section
      id="recommendation"
      className="bg-[#ffffff] py-20 text-black"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">

        {/* Heading */}
        <h2
          className="
            text-center
            text-[28px]
            font-bold
            md:text-[40px]
          "
        >
          RECOMMENDATIONS
        </h2>

        {/* Card */}
        <div
          className="
            mt-10
            border
            border-gray-300
            bg-white
            p-6
            md:p-10
          "
        >
          {/* Desktop Arrows */}
          <div className="hidden justify-end gap-4 lg:flex">
            <button onClick={prevSlide}>
              <ChevronLeft size={34} />
            </button>

            <button onClick={nextSlide}>
              <ChevronRight size={34} />
            </button>
          </div>

          <div
            className="
              mt-2
              grid
              grid-cols-1
              items-center
              gap-10

              lg:grid-cols-2
            "
          >
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative h-[250px] w-[250px] md:h-[320px] md:w-[320px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
<a
  href={item.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="
    text-[24px]
    font-bold
    underline
    md:text-[28px]
    hover:text-blue-600
    transition
  "
>
  {item.name}
</a>
              <p className="mt-2 text-[20px] font-semibold">
                {item.role}
              </p>

              <p className="text-[20px] font-semibold">
                {item.company}
              </p>

              {/* Mobile Arrows */}
              <div className="my-8 flex justify-between lg:hidden">
                <button onClick={prevSlide}>
                  <ChevronLeft size={40} />
                </button>

                <button onClick={nextSlide}>
                  <ChevronRight size={40} />
                </button>
              </div>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-[700px]
                  text-[18px]
                  leading-10
                "
              >
                "{item.text}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import { Eye } from "lucide-react";

const certificates = [
  {
    image: "/certifications/medcerts.jpeg",
    title: "Professionalism in Allied Health",
    description:
      "Gained essential skills in healthcare professionalism, focusing on effective communication, emotional intelligence, patient interaction, and cultural sensitivity to support quality care.",
    link: "https://www.coursera.org/account/accomplishments/verify/RUUHAGOXL4VT",
  },

  {
    image: "/certifications/coursera_logo.jpeg",
    title: "Microsoft SQL Server: Performance Tuning Essentials",
    description:
      "Learned to analyze and tune SQL queries, optimize indexing strategies, and apply performance best practices to enhance SQL Server efficiency, reduce latency, and ensure reliable database operations.",
    link: "https://www.coursera.org/account/accomplishments/verify/BHN2CT3QGPHQ",
  },

  {
    image: "/certifications/ibm_logo.jpeg",
    title: "Introduction to Data Engineering",
    description:
      "Explored core concepts of data engineering, including relational and NoSQL databases, data pipelines, and lifecycle stages. Gained foundational skills in data security, governance, and infrastructure tools for modern data systems.",
    link: "https://www.coursera.org/account/accomplishments/verify/BG9R6BOSNLID",
  },

  {
    image: "/certifications/udemy_logo.jpeg",
    title: "Tableau Data Analyst/Specialist Desktop Certification",
    description:
      "Learned to build interactive dashboards, create visualizations like line and map, and apply advanced features like calculated fields and parameters. Gained skills to confidently analyze data and prepare for the Tableau Desktop Specialist certification.",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-160a1974-35c9-4e4a-b8db-caa3c61ed174.pdf",
  },

  {
    image: "/certifications/datacampin_logo.jpeg",
    title: "Dealing with Missing Data in Python",
    description:
      "Learned to handle missing values in numerical, categorical, and time-series data using Python. Explored imputation techniques, pattern recognition, and evaluated data quality using real-world datasets like air quality and diabetes data.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/cc741273297041bbbc5cabd866a9ab68869e6117",
  },

  {
    image: "/certifications/datacampin_logo.jpeg",
    title: "Machine Learning with Tree-Based Models in Python",
    description:
      "Trained decision trees and ensemble models using scikit-learn. Learned to reduce overfitting, tune hyperparameters, and apply models to real-world datasets while balancing model flexibility and accuracy.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/12fa7da1c904d65adf49d1a2b9efa6fcf454eb20",
  },

  {
    image: "/certifications/datacampin_logo.jpeg",
    title: "Bayesian Data Analysis in Python",
    description:
      "Learned Bayesian methods for A/B testing, decision analysis, and regression modeling. Used the PyMC3 library to design, fit, and interpret Bayesian models on real-world datasets like advertising, sales, and rentals.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f5509b2fb3d3e9991340d2b554813671ba00f077",
  },

  {
    image: "/certifications/datacampin_logo.jpeg",
    title: "Understanding Machine Learning",
    description:
      "Explored foundational machine learning and AI concepts, including deep learning use cases like NLP and computer vision. Gained a clear understanding of ML workflows, jargon, and the real-world impact of intelligent systems.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a7210753ede8b439d595e95768d1eb868f328027",
  },

  {
    image: "/certifications/datacampin_logo.jpeg",
    title: "Working with Categorical Data in Python",
    description:
      "Learned to manipulate and visualize categorical data using pandas and seaborn. Practiced creating, updating, and analyzing non-numerical data with real-world datasets like dog adoption, trip reviews, and census info.",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/88bf3effd9a70db12bfabe783ea00b46bdfcb907",
  },
];

export default function Certification() {
  return (
    <section
      id="certification"
      className="bg-[#ffffff] py-20 text-black"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">

        <h2 className="text-[28px] font-bold md:text-[40px]">
          CERTIFICATIONS
        </h2>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-10

            sm:grid-cols-2

            xl:grid-cols-3
          "
        >
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="
                group
                h-[320px]
                [perspective:1000px]
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  transition-all
                  duration-500
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >
                {/* Front */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-lg
                    border
                    border-black
                    bg-white
                    [backface-visibility:hidden]
                  "
                >
                  <div className="flex flex-col items-center p-6">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      width={140}
                      height={140}
                      className="
                        -mt-10
                        h-[140px]
                        w-[140px]
                        rounded-full
                        border
                        border-black
                        object-cover
                      "
                    />

                    <h3
                      className="
                        mt-6
                        text-center
                        text-[22px]
                        font-semibold
                      "
                    >
                      {certificate.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-lg
                    bg-black
                    p-5
                    text-white
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <p className="text-[15px] leading-7">
                    {certificate.description}
                  </p>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      absolute
                      bottom-5
                      left-1/2
                      flex
                      -translate-x-1/2
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white
                      px-6
                      py-2
                      transition
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <Eye size={18} />
                    View
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
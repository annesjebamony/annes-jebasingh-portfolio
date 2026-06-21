export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#ffffff] py-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">

        {/* Heading */}
        <h2
          className="
            text-[28px]
            font-bold
            text-black
            md:text-[40px]
            lg:text-[40px]
          "
        >
          EDUCATION
        </h2>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-2
            items-stretch
          "
        >

          {/* Master's */}
          <div className="flex flex-col">
            <div
              className="
                rounded-[18px]
                bg-black
                px-5
                py-4
              "
            >
              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-white
                  md:text-[22px]
                "
              >
                Master of Science in Computer Science
              </h3>
            </div>

            <div
              className="
                mt-3
                flex-1
                rounded-[24px]
                border
                border-gray-300
                bg-white
                p-5
                md:p-6
              "
            >
              <div className="flex justify-between text-[14px] text-gray-500 md:text-[16px]">
                <p>DePaul University, Chicago, IL</p>
                <p>Mar 2025</p>
              </div>

              <div className="text-black">
                <p className="mt-5 text-[16px] leading-8 md:text-[18px] md:leading-9">
                  DePaul's MS in Computer Science offers flexible,
                  hands-on learning with a focus on Data Science,
                  helping me build technical expertise and apply
                  it to real-world scenarios.
                </p>

                <h4 className="mt-6 text-[18px] font-semibold md:text-[20px]">
                  Relevant Courses:
                </h4>

                <ul className="mt-3 list-disc pl-6 text-[16px] leading-8 md:text-[18px] md:leading-10">
                  <li>
                    Applied Algorithms and Structures (CSC 421)
                  </li>
                  <li>
                    Distributed Systems I (CSC 435)
                  </li>
                  <li>
                    Principles of Database Management Systems
                    (CSC 453)
                  </li>
                  <li>
                    Data Analysis and Regression (DSC 423)
                  </li>
                  <li>
                    Data Visualization (DSC 465)
                  </li>
                </ul>

                <h4 className="mt-6 text-[18px] font-semibold md:text-[20px]">
                  Tools & Technologies:
                </h4>

                <p className="mt-2 text-[16px] leading-8 md:text-[18px] md:leading-9">
                  Python, Java, C++, MySQL, SQL, GitHub, R,
                  Tableau, Power BI
                </p>
              </div>
            </div>
          </div>

          {/* Bachelor's */}
          <div className="flex flex-col">
            <div
              className="
                rounded-[18px]
                bg-black
                px-5
                py-4
              "
            >
              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-white
                  md:text-[22px]
                "
              >
                Bachelor of Arts in Computer Science
              </h3>
            </div>

            <div
              className="
                mt-3
                flex-1
                rounded-[24px]
                border
                border-gray-300
                bg-white
                p-5
                md:p-6
              "
            >
              <div className="flex justify-between text-[14px] text-gray-500 md:text-[16px]">
                <p>
                  Trinity Christian College, Palos Heights, IL
                </p>
                <p>Jan 2021</p>
              </div>

              <div className="text-black">
                <p className="mt-5 text-[16px] leading-8 md:text-[18px] md:leading-9">
                  Focused on Data Science with a strong
                  foundation in computer science principles,
                  complemented by a minor in Theology,
                  fostering analytical thinking and ethical
                  perspectives in technology.
                </p>

                <h4 className="mt-6 text-[18px] font-semibold md:text-[20px]">
                  Relevant Courses:
                </h4>

                <ul className="mt-3 list-disc pl-6 text-[16px] leading-8 md:text-[18px] md:leading-10">
                  <li>
                    Elements of Programming (CPSC 111,
                    CPSC 112)
                  </li>
                  <li>
                    Data Structures and Databases (CPSC 201)
                  </li>
                  <li>
                    Discrete Mathematics for Computing
                    (MATH 142)
                  </li>
                  <li>
                    Data Ethics, Privacy, and Laws
                    (DATA 230)
                  </li>
                  <li>Statistics (MATH 151)</li>
                </ul>

                <h4 className="mt-6 text-[18px] font-semibold md:text-[20px]">
                  Tools & Technologies:
                </h4>

                <p className="mt-2 text-[16px] leading-8 md:text-[18px] md:leading-9">
                  Java, C, Python, SQL, Excel, Math and
                  Data Visualization Tools
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
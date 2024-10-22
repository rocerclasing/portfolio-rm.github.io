import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Hi, I’m Robert Sebastián Muñoz Clasing, a FULL STACK developer with a passion for crafting seamless, efficient, and responsive web applications. 
            My expertise lies in working with modern technologies like React, Next.js, and Tailwind CSS to create high-performance web experiences.
          </p>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              I am always looking to improve my skills and stay up to date with the latest trends in web development. 
              My approach focuses on clean code, scalability, and ensuring optimal user experience across all devices.
            </p>
            <p>
              With experience working in Agile teams, I enjoy collaborating with designers, developers, and stakeholders to bring ideas to life. 
              I’m driven by problem-solving and always eager to take on new challenges.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700"
            aria-label="Contact Me"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;

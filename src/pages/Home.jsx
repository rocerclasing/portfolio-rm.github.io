import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Hi, I'm Robert Sebastián Muñoz Clasing
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          I'm a passionate full stack developer with a strong focus on building
          user-friendly and responsive web applications. I specialize in
          modern JavaScript frameworks like React and Next.js, and I'm
          always exploring the latest trends and tools to enhance web
          development projects.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium transition-transform transform hover:bg-blue-700 hover:scale-105 duration-300 ease-in-out"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md text-base font-medium transition-transform transform hover:bg-gray-800 hover:scale-105 duration-300 ease-in-out"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home;



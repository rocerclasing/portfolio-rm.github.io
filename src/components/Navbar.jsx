import { NavLink } from "react-router-dom";
import IconLinkedin from "./IconLinkedin";
import IconGithub from "./IconGithub";
import IconStack from "./IconStack";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-5 text-center shadow-lg rounded-md">
      <div>
        {/* Links de navegación */}
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/"
            className="hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            Some Projects
          </NavLink>
          <NavLink
            to="/blog"
            className="hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
          >
            Blog
          </NavLink>
        </div>

        {/* Sección de Iconos */}
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/robert-muñoz-clasing-151bb2128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
          >
            <IconLinkedin />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/rocerclasing?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
          >
            <IconGithub />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://stackoverflow.com/users/27819268/robertclasing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 transform transition-transform duration-200 hover:scale-110"
          >
            <IconStack />
            <span className="text-sm">Stack Overflow</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

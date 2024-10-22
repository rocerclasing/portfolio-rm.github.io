import IconGithub from "./IconGithub";
import Iconhtml from "./Iconhtml";
import IconJS from "./Iconjs";
import IconReact from "./IconsReact";
import { useEffect, useState } from "react";

const ProjectCard = () => {
  const cards = [
    { 
      title: "Portfolio", 
      description: "This consists of a webpage to showcase the different projects I have created.", 
      githubLink: "https://github.com/rocerclasing/portfolio-basic" 
    },
    { 
      title: "Blog", 
      description: "This consists of various posts on pagination.", 
      githubLink: "https://github.com/rocerclasing/blog-basic-ts-next-react-js.git" 
    },
    { 
      title: "Todo Form", 
      description: "This is a practice form using TypeScript and Next.js.", 
      githubLink: "https://github.com/rocerclasing/todos-ts-js-react-vite-basic.git" 
    },
    { 
      title: "Simple URL", 
      description: "A link shortener that adds, removes, and modifies links.", 
      githubLink: "https://github.com/rocerclasing/url-simple.git" 
    },
    { 
      title: "Formik", 
      description: "Good practice for forms using the Formik library.", 
      githubLink: "https://github.com/rocerclasing/formik-basic-react.git" 
    },
    { 
      title: "Firebase Basic Simple React", 
      description: "Good practice for connecting Firebase with React.", 
      githubLink: "https://github.com/rocerclasing/firebase-basic-simple-react.git" 
    },
    { 
      title: "Context API React Router 6.4", 
      description: "Good practice with Context in React.", 
      githubLink: "https://github.com/rocerclasing/context-api-react-router6.4.git" 
    },
    { 
      title: "React Router DOM Vite 6.4", 
      description: "Good practice with React Router DOM 6.4 with nested routes.", 
      githubLink: "https://github.com/rocerclasing/react-route-dom-vite6.4.git" 
    },
    { 
      title: "React Router DOM Vite 6.0", 
      description: "Good practice with React Router DOM 6.10.", 
      githubLink: "https://github.com/rocerclasing/react-route-dome-vite6.0.git" 
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen text-center">
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-lg transform transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105"
          >
            <div className="p-5">
              <a href={card.githubLink} target="_blank" rel="noopener noreferrer">
                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={card.githubLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex flex-col items-center">
                  <IconGithub className="w-full h-full" />
                  <span className="text-xs mt-1">GitHub</span>
                </a>
                <div className="w-10 h-10 flex flex-col items-center">
                  <Iconhtml className="w-full h-full" />
                  <span className="text-xs mt-1">HTML</span>
                </div>
                <div className="w-10 h-10 flex flex-col items-center">
                  <IconJS className="w-full h-full" />
                  <span className="text-xs mt-1">JavaScript</span>
                </div>
                <div className="w-10 h-10 flex flex-col items-center">
                  <IconReact className="w-full h-full" />
                  <span className="text-xs mt-1">React</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

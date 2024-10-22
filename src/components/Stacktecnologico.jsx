import IconsReact from "../components/IconsReact";
import Iconhtml from "../components/Iconhtml";
import Iconjs from "../components/Iconjs";
import IconGithub from "../components/IconGithub";
import IconTailwind from "./IconTailwind";
import IconVite from "./IconVite";
import IconNext from "./IconNext";
import IconFirebase from "../components/IconFirebase";
 // Asegúrate de que este archivo tenga el ícono

const StackTecnologico = () => {
  return (
    <div className="p-6 rounded-lg transform translate-y-[-20px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Stack Tecnológico</h1>
      <div className="flex justify-center items-center space-x-4">
        {/* Ajustar el tamaño de cada icono y agregar el label */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconsReact className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">React</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <Iconhtml className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <Iconjs className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconGithub className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">GitHub</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconTailwind className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">Tailwind</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconVite className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">Vite</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconNext className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center">
            <IconFirebase className="h-full w-full" />
          </div>
          <span className="text-sm text-gray-600 mt-2">Firebase</span>
        </div>
      </div>
    </div>
  );
};

export default StackTecnologico;

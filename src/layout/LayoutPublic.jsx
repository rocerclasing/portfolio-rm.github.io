import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stacktecnologico from "../components/stacktecnologico";

const LayoutPublic = () => {
    const location = useLocation();

    // Define las rutas donde quieres mostrar el stack tecnológico
    const showStack = ["/", "/about"].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen bg-black transition-colors duration-500 ease-in-out">
            <Navbar />
            <main className="flex-grow container mx-auto text-white">
                <Outlet />
                {/* Renderiza Stacktecnologico solo si showStack es verdadero */}
                {showStack && <Stacktecnologico />}
            </main>
            <footer className="bg-gray-800 text-white text-center py-4 mt-8">
                <div className="container mx-auto">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Realizado por Robert Muñoz octubre
                    </p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="/privacy" className="text-gray-400 hover:text-white">Política de Privacidad</a>
                        <span>|</span>
                        <a href="/terms" className="text-gray-400 hover:text-white">Términos de Servicio</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LayoutPublic;

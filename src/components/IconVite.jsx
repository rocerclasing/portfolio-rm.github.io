import viteIcon from '../assets/vite.png'; // Asegúrate de ajustar la ruta según la ubicación de tu imagen


const IconVite = () => {
  return (
    <img 
      src={viteIcon} 
      alt="Vite Icon" 
      className="vite-icon" 
      onError={(e) => { e.target.onerror = null; e.target.src = '../assets/placeholder.png'; }} // Cambia a una imagen de reserva si no se carga
    />
  );
}

export default IconVite;

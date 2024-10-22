


// Componente para el icono de Firebase
const IconFirebase = ({ size = 24, color = 'black' }) => {
  // Definir clases de Tailwind para el tamaño y color
  const sizeClasses = `${size === 24 ? 'w-6 h-6' : 'w-8 h-8'}`; // Ajustar el tamaño según el prop
  const colorClasses = color === 'black' ? 'text-black' : 'text-red-500'; // Ejemplo de color

  return (
    <div className={`${sizeClasses} ${colorClasses}`}>
      {/* Aquí puedes agregar el SVG o el contenido que represente el icono de Firebase */}
      <span role="img" aria-label="Firebase icon">🔥</span>
      {/* O incluir un SVG aquí */}
    </div>
  );
};

export default IconFirebase;


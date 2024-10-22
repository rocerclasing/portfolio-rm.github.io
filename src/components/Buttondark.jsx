import { useState } from 'react';

const Buttondark = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        darkMode ? "bg-gray-300 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Buttondark;

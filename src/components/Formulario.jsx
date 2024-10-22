import { useState } from "react"; 

const Formulario = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    messageDescription: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, emailAddress, messageDescription } = formData;

    // Validación de campos vacíos
    if (!fullName.trim() || !emailAddress.trim() || !messageDescription.trim()) {
      setError("Complete los campos requeridos.");
      setSuccess(""); // Limpiar mensaje de éxito si hay error
      return;
    }

    // Validación de formato de correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress)) {
      setError("Ingrese un correo electrónico válido.");
      setSuccess(""); // Limpiar mensaje de éxito si hay error
      return;
    }

    // Si pasa las validaciones
    alert("Correo enviado");

    setError("");
    setSuccess("El mensaje fue enviado con éxito."); // Mostrar mensaje de éxito

    // Opcional: Limpiar los campos del formulario después de enviar
    setFormData({
      fullName: "",
      emailAddress: "",
      messageDescription: ""
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

    // Limpiar mensajes de error/exito al cambiar valores
    setError("");
    setSuccess("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulario de contacto">
      {error && <div className="text-red-500" role="alert">{error}</div>}
      {success && <div className="text-green-500" role="alert">{success}</div>}

      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        required
        className="form-control mb-2 mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Robert Sebastian Muñoz Clasing"
        value={formData.fullName}
        onChange={handleChange}
        aria-required="true"
      />

      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        id="emailAddress"
        name="emailAddress"
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="you@example.com"
        value={formData.emailAddress}
        onChange={handleChange}
        aria-required="true"
      />

      <label htmlFor="messageDescription" className="block text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="messageDescription"
        name="messageDescription"
        rows="4"
        required
        className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Write your message here..."
        value={formData.messageDescription}
        onChange={handleChange}
        aria-required="true"
      ></textarea>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Enviar mensaje"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Formulario;

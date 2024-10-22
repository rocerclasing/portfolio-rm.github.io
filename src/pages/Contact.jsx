import Formulario from "../components/Formulario";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          I am available for new work opportunities and projects. Don't hesitate to send me a message through this form.
        </p>
        <div className="mt-10">
          <Formulario />
        </div>
      </div>
    </section>
  );
};

export default Contact;

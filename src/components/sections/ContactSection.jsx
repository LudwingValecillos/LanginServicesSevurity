import React, { useState } from "react";
import contactImage from "../../assets/images/cv.avif";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    tipo_servicio: "camaras",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="py-20 relative overflow-hidden bg-black/60"
      id="contacto"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-light text-blue-300 mb-4">Contacto</h2>
          <p className="text-gray-600 text-lg text-white">
            Solicita una cotización para tu sistema de seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="nombre">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="tipo_servicio"
                >
                  Tipo de servicio
                </label>
                <select
                  id="tipo_servicio"
                  name="tipo_servicio"
                  value={formData.tipo_servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                >
                  <option value="camaras">Cámaras de seguridad</option>
                  <option value="alarmas">Sistema de alarmas</option>
                  <option value="monitoreo">Servicio de monitoreo</option>
                  <option value="acceso">Control de acceso</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2980B9] focus:ring-2 focus:ring-[#2980B9]/20 transition-all duration-300"
                  required
                  placeholder="Describe tu proyecto o necesidades específicas..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2980B9] text-white py-3 rounded-lg hover:bg-[#2980B9]/90 transform hover:scale-105 transition-all duration-300"
              >
                Solicitar cotización
              </button>
            </form>
          </div>

          {/* Mapa e información */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895174!2d-58.38414908477038!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1626889475183!5m2!1sen!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Información de contacto */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-light text-[#2980B9] mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-[#2980B9] mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Oficina Central
                    </h4>
                    <p className="text-gray-600">Av. Corrientes 1234, CABA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-[#2980B9] mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Central de Monitoreo
                    </h4>
                    <p className="text-gray-600">0800-555-SEGURIDAD</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-[#2980B9] mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600">info@seguridadpro.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-[#2980B9] mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Horarios de atención
                    </h4>
                    <p className="text-gray-600">
                      Monitoreo: 24/7
                      <br />
                      Oficina: Lunes a Viernes 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

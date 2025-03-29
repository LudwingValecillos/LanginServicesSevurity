import React from "react";
import bgImage from "../../assets/images/puertomadero.jpg";
import image1 from "../../assets/images/Tipos-de-Cámaras.webp";
import image2 from "../../assets/images/instalacion-camaras-seguridad.jpg";
import image3 from "../../assets/images/instalacion-camaras-seguridad.jpg";
import image4 from "../../assets/images/seguridad.jpg";


const ServicesSection = () => {
  const services = [
    {
      title: "Cámaras de Seguridad",
      image: image1,
      description:
        "Instalación de cámaras IP y CCTV de alta definición con visión nocturna",
      features: [
        "Visión nocturna infrarroja",
        "Detección de movimiento",
        "Audio bidireccional",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L16 18l-4.447-2.276a1 1 0 00-.894 0L6.447 18l-4.553-2.276A1 1 0 011 14.382V7.618a1 1 0 01.553-.894L6 4.5l4.447 2.276a1 1 0 00.894 0L15 4.5l4.553 2.276A1 1 0 0121 7.618v.36"
          />
        </svg>
      ),
      delay: 0,
    },
    {
      title: "Monitoreo 24/7",
      image: image4,
      description:
        "Centro de monitoreo activo las 24 horas con personal capacitado",
      features: [
        "Alertas en tiempo real",
        "Respuesta inmediata",
        "Reportes diarios",
      ],
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      delay: 100,
    },
    {
      title: "Alarmas Inteligentes",
      image: image3,
      description:
        "Sistemas de alarma con sensores de movimiento y conexión a la app",
      features: [
        "Control desde el móvil",
        "Sensores inteligentes",
        "Notificaciones push",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      ),
      delay: 200,
    },
  ];

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/30 animate-fade-in" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:20px_20px] animate-subtle-zoom"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-light text-center mb-16 hover:text-shadow-glow transition-all duration-300"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Nuestros Servicios de Seguridad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              data-aos-duration="1000"
            >
              <div
                className="relative overflow-hidden rounded-xl shadow-2xl bg-black/60 backdrop-blur-sm 
                transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl 
                group-hover:shadow-[#2980B9]/20 border border-white/10 group-hover:border-white/30"
              >
                {/* Imagen Principal */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-all duration-700 
                    group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent 
                    opacity-60 group-hover:opacity-80 transition-all duration-500"
                  ></div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  {/* Icono y Título */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 bg-[#2980B9] rounded-lg transform transition-all duration-300 
                      group-hover:scale-110 group-hover:rotate-6"
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-light group-hover:text-shadow-glow transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-white/80 mb-4 transition-all duration-300 group-hover:text-white">
                    {service.description}
                  </p>

                  {/* Características */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-white/70 
                        transform transition-all duration-300 hover:translate-x-2 group-hover:text-white"
                      >
                        <svg
                          className="w-4 h-4 text-[#2980B9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <button
                    className="w-full bg-[#2980B9] text-white px-6 py-3 rounded-lg text-sm 
                    transform transition-all duration-500 
                    hover:bg-white hover:text-[#2980B9] hover:scale-105 hover:shadow-lg
                    group-hover:translate-y-0 flex items-center justify-center gap-2"
                  >
                    <span>Más información</span>
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

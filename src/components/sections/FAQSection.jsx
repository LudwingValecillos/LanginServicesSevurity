import React, { useState } from "react";
import faqImage from "../../assets/images/faq.jpg";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué tipo de cámaras de seguridad ofrecen?",
      answer:
        "Ofrecemos una amplia gama de cámaras de seguridad, incluyendo cámaras IP de alta definición, cámaras CCTV tradicionales, cámaras térmicas y cámaras con visión nocturna. Todas nuestras cámaras son de marcas reconocidas y cuentan con garantía.",
    },
    {
      question: "¿Cómo funciona el servicio de monitoreo 24/7?",
      answer:
        "Nuestro centro de monitoreo está activo las 24 horas del día, los 365 días del año. Personal capacitado supervisa las cámaras y responde inmediatamente ante cualquier incidente. Además, recibirás notificaciones en tiempo real a través de nuestra app móvil.",
    },
    {
      question: "¿Cuánto tiempo se almacenan las grabaciones?",
      answer:
        "El tiempo de almacenamiento depende del plan elegido. Ofrecemos opciones desde 15 días hasta 90 días de grabación continua, con la posibilidad de extender el almacenamiento mediante nuestro servicio en la nube.",
    },
  ];

  return (
    <section className="py-20 bg-[#E6EBED] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2980B9]/5 to-transparent"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 relative z-10">
        <div
          className="md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-[#2980B9]/10 rounded-lg transition-all duration-300 group-hover:bg-transparent"></div>
            <img
              src={faqImage}
              alt="Equipo de seguridad"
              className="rounded-lg shadow-2xl w-full transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500"
            />
          </div>
        </div>
        <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1200">
          <h2
            className="text-[#2980B9] text-4xl font-light mb-12 transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-102 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <h3 className="text-[#2980B9] font-medium text-lg">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="#2980B9"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-48 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

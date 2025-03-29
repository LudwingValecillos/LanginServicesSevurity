import React from "react";
import image from "../../assets/images/puertomadero2.jpg";
const ProjectsSection = () => {
  const videos = [
    {
      title: "Nuestra Historia",
      description:
        "Conoce más sobre nosotros y nuestra trayectoria en el mundo de la seguridad",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      stats: "15+ años de experiencia",
    },
    {
      title: "Servicios de Seguridad",
      description:
        "Descubre cómo protegemos tu hogar y negocio con tecnología de vanguardia",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      stats: "1000+ clientes satisfechos",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-black/50" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundBlendMode: "overlay" }}>
      <div className="absolute "></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-light text-blue-300 mb-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Conoce Nuestra Empresa
          </h2>
          <p
            className="text-gray-600 text-lg text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Videos informativos sobre nuestros servicios y trayectoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="relative aspect-video">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-light text-[#2980B9] mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{video.stats}</span>
                  <button className="bg-[#2980B9] text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-colors duration-300">
                    Ver más
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

export default ProjectsSection;

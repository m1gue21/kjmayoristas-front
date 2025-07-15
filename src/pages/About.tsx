import React from "react";
import { Award, Users, Globe, Heart, Target, Sparkles } from "lucide-react";
import { useState } from "react";

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Calidad Excepcional",
      description:
        "Cada pieza pasa por rigurosos controles de calidad para garantizar la excelencia que nuestros socios merecen.",
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "Pasión por el Arte",
      description:
        "Creemos que la joyería es más que un accesorio; es una expresión de arte, amor y momentos especiales.",
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Relaciones Duraderas",
      description:
        "Construimos alianzas a largo plazo con nuestros socios, basadas en confianza mutua y crecimiento conjunto.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      title: "Innovación Constante",
      description:
        "Mantenemos nuestras colecciones frescas con diseños innovadores que siguen las últimas tendencias.",
    },
  ];

  const milestones = [
    {
      year: "2014",
      event: "Fundación de Kevin Jewelry",
      description: "Inicio de nuestra aventura con un pequeño taller artesanal",
    },
    {
      year: "2017",
      event: "Primera Colección Premium",
      description: "Lanzamiento de nuestra línea de joyería de lujo",
    },
    {
      year: "2019",
      event: "Expansión Nacional",
      description: "Llegamos a todas las regiones del país",
    },
    {
      year: "2021",
      event: "Programa de Mayoristas",
      description: "Creación de nuestra red exclusiva de socios comerciales",
    },
    {
      year: "2023",
      event: "500+ Socios Activos",
      description: "Alcanzamos la marca de 500 mayoristas y empresarios",
    },
    {
      year: "2024",
      event: "Plataforma Digital",
      description: "Lanzamiento de nuestra plataforma online exclusiva",
    },
  ];

  const empresaVideos = [
    {
      name: "Pasión y Precisión",
      description:
        "Así luce el corazón de Kevin Jewelry: pasión, dedicación y calidad.",
      video: "/media/vid1.mp4",
      thumbnail: "/media/jewerly.png",
    },
    {
      name: "Excelencia en Cada Detalle",
      description:
        "Nuestros procesos hablan por sí solos. Compromiso total con cada joya.",
      video: "/media/vid2.mp4",
      thumbnail: "/media/jewerly.png",
    },
  ];

  const [currentEmpresaIndex, setCurrentEmpresaIndex] = useState(0);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-50 to-gold-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 leading-tight">
                  Nuestra Historia de
                  <span className="text-gold-600 block">Excelencia</span>
                </h1>
                <p className="text-xl text-charcoal-600 leading-relaxed">
                  Nuestro proposito es ayudarte a ti a crear tu propia empresa
                  exitosa en la industria del oro 18K laminado, KEVIN JEWELRY
                  lleva 8 años de trayectoria, iniciamos en Colombia y en 2021
                  en España y en 2022 en Ecuador, Somos fabricantes directos y
                  nuestras joyas son elaboradas con los mas altos estándares de
                  calidad internacional, inicio como una empresa que solo vendia
                  joyas a cliente final y en el camino fuimos transformando lo
                  que es la empresa, hoy nuestro principal foco es ayudar a la
                  mayor cantidad de personas posibles a crear su propia joyería
                  y tener los maximos resultados posibles.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 to-cream-200/30 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <img
                  src="/media/kevin.webp"
                  alt="Kevin Jewelry - Artesanía Premium"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Nuestra <span className="text-gold-600">Esencia</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Más que joyas, creamos símbolos de propósito, elegancia y
              conexión. Conoce lo que guía nuestro camino y nos hace únicos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Misión */}
            <div className="bg-gradient-to-br from-gold-50 to-cream-50 p-10 rounded-3xl shadow-[0_12px_24px_-10px_rgba(212,175,55,0.25)] hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gold-200 rounded-2xl mb-6 shadow-md">
                <Target className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-3xl font-display font-bold text-charcoal-800 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Inspiramos conexiones reales a través de joyas que cuentan
                historias, celebran logros y perduran en el tiempo. Nuestra
                misión es ofrecer valor con propósito: fortaleciendo alianzas
                duraderas basadas en la confianza, la excelencia artesanal y el
                crecimiento mutuo.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-gold-50 to-cream-50 p-10 rounded-3xl shadow-[0_12px_24px_-10px_rgba(212,175,55,0.25)] hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gold-200 rounded-2xl mb-6 shadow-md">
                <Globe className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-3xl font-display font-bold text-charcoal-800 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Convertirnos en la marca de referencia en joyería premium en
                toda Latinoamérica, no solo por nuestra calidad impecable, sino
                por nuestra capacidad de inspirar confianza, fomentar el
                emprendimiento, e impulsar el éxito de cientos de mayoristas que
                buscan transformar sus negocios con elegancia y distinción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-cream-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Nuestros <span className="text-gold-600">Valores</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada pieza que creamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gold-100 shadow-[0_15px_30px_-10px_rgba(255,215,0,0.25)] hover:shadow-[0_20px_40px_-12px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 text-gold-600 rounded-2xl mb-6 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Nuestro <span className="text-gold-600">Camino</span>
            </h2>
            <p className="text-xl text-charcoal-600">
              Una década de crecimiento, innovación y éxitos compartidos.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-300 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white to-cream-50 p-6 rounded-3xl shadow-lg border border-gold-100 hover:shadow-2xl transition-all duration-300">
                    <div className="text-2xl font-bold text-gold-600 mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-500 border-4 border-white rounded-full shadow-md z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-cream-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Nuestro <span className="text-gold-600">Compromiso</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Cada joya es mucho más que un accesorio: es el reflejo de un
              legado de excelencia, dedicación y pasión por el detalle.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-[0_12px_24px_-10px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold text-charcoal-800">
                  Artesanía con Propósito
                </h3>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  En Kevin Jewelry, cada joya nace de un profundo respeto por la
                  tradición artesanal y una apuesta firme por la innovación.
                  Nuestros artesanos, diseñadores y orfebres trabajan con
                  pasión, cuidando cada curva, cada piedra, cada milímetro, para
                  entregar piezas que perduren más allá del tiempo.
                </p>
                <p className="text-lg text-charcoal-700 leading-relaxed">
                  Pero nuestro compromiso no termina ahí. Creemos en las
                  relaciones humanas duraderas, por eso acompañamos a nuestros
                  socios comerciales con herramientas, asesoría y una red de
                  apoyo constante. Más que proveedores, somos aliados en el
                  crecimiento.
                </p>
              </div>

              {/* Image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/media/Captura de pantalla 2025-07-12 002016.png"
                  alt="Equipo Kevin Jewelry"
                  className="w-full h-[22rem] object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Empresa - Carrusel con videos verticales */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Nuestra <span className="text-gold-600">Empresa</span>
            </h2>
            <p className="text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto">
              Así se vive la esencia de Kevin Jewelry: precisión, compromiso y
              pasión por el detalle.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[280px] sm:w-[300px] md:w-[340px] h-[520px] overflow-hidden rounded-3xl shadow-md bg-white">
              <video
                key={empresaVideos[currentEmpresaIndex].video}
                className="w-full h-full object-cover rounded-3xl"
                src={empresaVideos[currentEmpresaIndex].video}
                autoPlay
                loop={false}
                muted
                playsInline
                onEnded={() =>
                  setCurrentEmpresaIndex(
                    (prev) => (prev + 1) % empresaVideos.length
                  )
                }
                poster={empresaVideos[currentEmpresaIndex].thumbnail}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white px-4 py-3 rounded-b-3xl backdrop-blur-sm shadow-sm">
                <h3 className="text-base font-semibold">
                  {empresaVideos[currentEmpresaIndex].name}
                </h3>
                <p className="text-xs text-white/80">
                  {empresaVideos[currentEmpresaIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

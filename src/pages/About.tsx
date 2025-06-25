import React from 'react';
import { Award, Users, Globe, Heart, Target, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Calidad Excepcional",
      description: "Cada pieza pasa por rigurosos controles de calidad para garantizar la excelencia que nuestros socios merecen."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "Pasión por el Arte",
      description: "Creemos que la joyería es más que un accesorio; es una expresión de arte, amor y momentos especiales."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Relaciones Duraderas",
      description: "Construimos alianzas a largo plazo con nuestros socios, basadas en confianza mutua y crecimiento conjunto."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gold-500" />,
      title: "Innovación Constante",
      description: "Mantenemos nuestras colecciones frescas con diseños innovadores que siguen las últimas tendencias."
    }
  ];

  const milestones = [
    { year: "2014", event: "Fundación de Kevin Jewelry", description: "Inicio de nuestra aventura con un pequeño taller artesanal" },
    { year: "2017", event: "Primera Colección Premium", description: "Lanzamiento de nuestra línea de joyería de lujo" },
    { year: "2019", event: "Expansión Nacional", description: "Llegamos a todas las regiones del país" },
    { year: "2021", event: "Programa de Mayoristas", description: "Creación de nuestra red exclusiva de socios comerciales" },
    { year: "2023", event: "500+ Socios Activos", description: "Alcanzamos la marca de 500 mayoristas y empresarios" },
    { year: "2024", event: "Plataforma Digital", description: "Lanzamiento de nuestra plataforma online exclusiva" }
  ];

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
                  Desde 2014, Kevin Jewelry ha sido sinónimo de calidad, elegancia 
                  y confianza en el mundo de la joyería premium. Conoce la historia 
                  detrás de nuestra marca y nuestra visión para el futuro.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 to-cream-200/30 rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg"
                  alt="Kevin Jewelry - Artesanía Premium"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-50 rounded-2xl">
                <Target className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-charcoal-800 mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  Crear joyería excepcional que capture momentos especiales y emociones 
                  únicas, mientras construimos una red sólida de socios comerciales que 
                  compartan nuestra pasión por la excelencia y el servicio al cliente.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-50 rounded-2xl">
                <Globe className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-charcoal-800 mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  Ser la marca líder en joyería premium a nivel nacional, reconocida 
                  por nuestra calidad excepcional, innovación constante y por empoderar 
                  a cientos de mayoristas y empresarios a construir negocios prósperos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada pieza que creamos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-50 rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-4">
              Nuestro Camino
            </h2>
            <p className="text-xl text-charcoal-600">
              Una década de crecimiento, innovación y éxitos compartidos.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold-200 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gold-100">
                    <div className="text-2xl font-bold text-gold-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-charcoal-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-4">
              Nuestro Compromiso
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              Detrás de cada pieza hay un equipo dedicado de artesanos, diseñadores 
              y profesionales comprometidos con la excelencia.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-charcoal-800">
                  Artesanía con Propósito
                </h3>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  Cada pieza de Kevin Jewelry es creada con precisión artesanal y 
                  atención meticulosa al detalle. Nuestro equipo combina técnicas 
                  tradicionales con tecnología moderna para crear joyas que duran 
                  generaciones.
                </p>
                <p className="text-lg text-charcoal-600 leading-relaxed">
                  Más que crear joyería, construimos relaciones duraderas con 
                  nuestros socios comerciales, ofreciendo no solo productos 
                  excepcionales, sino también el apoyo y las herramientas 
                  necesarias para que sus negocios prosperen.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg"
                  alt="Equipo Kevin Jewelry"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
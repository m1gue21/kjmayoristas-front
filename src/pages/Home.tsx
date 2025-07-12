import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Truck,
  Users,
  Award,
  Star,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Home: React.FC = () => {
  const videoRefDesktop = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.muted = false;
            video.play().catch(() => {
              video.muted = true;
              video.play().catch(console.error);
            });
          } else {
            video.muted = true;
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (videoRefDesktop.current) observer.observe(videoRefDesktop.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      title: "Calidad Garantizada",
      description:
        "Productos de la más alta calidad con certificación internacional y garantía completa.",
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Red de Socios",
      description:
        "Únete a nuestra exclusiva red de mayoristas y empresarios exitosos.",
    },
    {
      icon: <Truck className="w-8 h-8 text-gold-500" />,
      title: "Envío Nacional",
      description:
        "Entrega rápida y segura a todo el país con seguimiento en tiempo real.",
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Precios Preferenciales",
      description:
        "Acceso a precios mayoristas y condiciones especiales para empresarios.",
    },
  ];

  const testimonials = [
    {
      name: "María García",
      business: "Joyería Elegancia",
      comment:
        "Kevin Jewelry ha transformado mi negocio. La calidad es excepcional y el servicio impecable.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      business: "Accesorios Premium",
      comment:
        "Los precios mayoristas y la atención personalizada hacen la diferencia. Muy recomendado.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      business: "Boutique Sofia",
      comment:
        "La variedad del catálogo exclusivo y la rapidez en las entregas son extraordinarias.",
      rating: 5,
    },
  ];

  const collections = [
     
    {
      name: "Oro",
      description: "Elegancia clásica en cada pieza.",
      video: "/media/vid3.mp4",
      thumbnail: "/media/jewerly.png",
    },
    {
      name: "Exclusiva",
      description: "Diseños únicos y sofisticados para un público selecto.",
      video: "/media/vid4.mp4",
      thumbnail: "/media/jewerly.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Avanzar al siguiente video cuando termine el actual
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % collections.length);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-50 to-gold-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-cream-100/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-charcoal-800 leading-tight">
                  Joyería Premium para
                  <span className="text-gold-600 block">Tu Negocio</span>
                </h1>
                <p className="text-xl text-charcoal-600 leading-relaxed max-w-xl">
                  Únete a nuestra exclusiva red de mayoristas y empresarios.
                  Descubre precios especiales, catálogos exclusivos y el mejor
                  servicio personalizado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/registro"
                  className="bg-gold-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Registrarse Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/catalogo"
                  className="border-2 border-gold-500 text-gold-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-500 hover:text-white transition-all flex items-center justify-center"
                >
                  Ver Catálogo
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-charcoal-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ Socios Activos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Entrega Nacional</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <video
                  ref={videoRefDesktop}
                  className="w-full max-h-[500px] object-contain rounded-2xl"
                  src="https://kevinjewelry.com/cdn/shop/videos/c/vp/2155e633f53b4ed3992b941de29293fa/2155e633f53b4ed3992b941de29293fa.HD-1080p-7.2Mbps-42844374.mp4?v=0"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              ¿Por qué elegir{" "}
              <span className="text-gold-600">Kevin Jewelry</span>?
            </h2>
            <p className="text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto">
              Con más de una década en la industria de la joyería, nos hemos
              consolidado como el aliado perfecto de mayoristas y empresarios.
              Calidad, confianza y elegancia definen cada una de nuestras
              piezas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-cream-50 hover:bg-white border border-gold-100 hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-100 to-cream-100 rounded-xl mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}

      <section className="py-24 bg-gradient-to-br from-cream-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-4">
              Colecciones <span className="text-gold-600">Destacadas</span>
            </h2>
            <p className="text-lg md:text-xl text-charcoal-600 max-w-3xl mx-auto">
              Cada colección ha sido diseñada meticulosamente para reflejar
              lujo, elegancia y estilo contemporáneo. Elige lo que represente
              mejor a tu marca.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <video
                ref={videoRef}
                key={collections[currentIndex].video}
                className="w-full h-[600px] object-contain rounded-t-3xl"
                src={collections[currentIndex].video}
                autoPlay
                muted
                playsInline
                poster={collections[currentIndex].thumbnail}
                onEnded={handleVideoEnd}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 rounded-b-3xl shadow-md">
                <h3 className="text-xl font-semibold">
                  {collections[currentIndex].name}
                </h3>
                <p className="text-sm text-white/80">
                  {collections[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalogo"
              className="inline-flex items-center bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-all group shadow-md hover:shadow-lg"
            >
              Ver Catálogo Completo
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-4">
              Lo que dicen nuestros socios
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
              La confianza de cientos de mayoristas y empresarios nos respalda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cream-50 to-gold-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-gold-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-charcoal-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-gold-200 pt-4">
                  <div className="font-semibold text-charcoal-800">
                    {testimonial.name}
                  </div>
                  <div className="text-charcoal-600 text-sm">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra red exclusiva de socios y accede a precios
            mayoristas, catálogos exclusivos y soporte personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registro"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Registrarse Gratis
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gold-600 transition-all"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  return (
    <div>
      {/* Sección: Nuestra Empresa */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-extrabold text-charcoal-800 mb-6">
              Conoce <span className="text-gold-600">Kevin Jewelry</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
              Somos más que una joyería: somos una plataforma de crecimiento
              real para mayoristas y emprendedores. Aquí, el lujo se vuelve
              accesible, la comunidad es el motor y las oportunidades son
              ilimitadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "💎",
                title: "Calidad Certificada",
                description:
                  "Joyas con estándares internacionales, garantía completa y diseño exclusivo que eleva tu marca.",
              },
              {
                icon: "🤝",
                title: "Red de Empresarios",
                description:
                  "Conecta con líderes de éxito, accede a formación exclusiva y transforma tu negocio.",
              },
              {
                icon: "🚚",
                title: "Envío Seguro y Rápido",
                description:
                  "Cobertura nacional, seguimiento en tiempo real y entrega garantizada. Confianza en cada pedido.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl border border-gold-100 p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gold-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-28 text-center">
            <h3 className="text-4xl font-extrabold text-charcoal-800 mb-6 tracking-tight">
              Historias que <span className="text-gold-600">inspiran</span>
            </h3>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto mb-16">
              Nuestros socios no solo venden joyas, construyen libertad,
              comunidad y crecimiento real.
            </p>

            <div className="grid md:grid-cols-2 gap-10 px-4 sm:px-0">
              {[
                {
                  quote:
                    "Desde que me uní a Kevin Jewelry, mis ingresos se triplicaron y ahora tengo independencia financiera.",
                  name: "Carolina M.",
                  role: "Empresaria",
                  icon: "",
                  bg: "bg-gold-50",
                },
                {
                  quote:
                    "La calidad de las joyas es espectacular. Pero lo mejor es la comunidad: nunca me he sentido tan acompañado.",
                  name: "Andrés T.",
                  role: "Mayorista",
                  icon: "",
                  bg: "bg-white",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`relative ${t.bg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left`}
                >
                  <div className="text-4xl mb-4">{t.icon}</div>
                  <p className="text-charcoal-700 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-gold-600">{`— ${t.name}`}</p>
                    <p className="text-sm text-charcoal-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
              No es solo joyería. Es tu entrada al éxito.
            </h3>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Ya sea que busques independencia financiera, construir una marca o
              transformar tu vida, Kevin Jewelry te da las herramientas para
              lograrlo. Tu momento es ahora.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gold-50 p-8 rounded-2xl shadow-inner text-center">
          <p className="text-xl font-semibold text-charcoal-700">
            +200 empresarios confiando en Kevin Jewelry · 100% de satisfacción
            en entregas · Garantía total
          </p>
        </div>
      </section>

      {/* Sección: Beneficios Empresario */}
      <section className="py-32 bg-gradient-to-br from-gold-50 to-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-charcoal-800 leading-tight mb-6">
              Conviértete en un{" "}
              <span className="text-gold-600">Empresario Kevin</span>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto font-medium">
              Accede a un modelo probado que transforma tu pasión en ingresos.
              Con herramientas, respaldo y una comunidad que impulsa tu éxito.
            </p>
          </div>

          {/* Comparativa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Mayorista */}
            <div className="bg-white border border-gold-100 rounded-3xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
                Mayorista
              </h3>
              <ul className="text-charcoal-700 text-base space-y-3">
                <li>✅ Joyas con diseño exclusivo</li>
                <li>✅ Precios al por mayor</li>
                <li>✅ Catálogo premium</li>
                <li>✅ Atención personalizada</li>
              </ul>
            </div>

            {/* Empresario */}
            <div className="bg-gold-500/10 border-2 border-gold-300 rounded-3xl shadow-xl p-8 scale-105 hover:scale-110 transition">
              <h3 className="text-2xl font-bold text-gold-700 mb-4">
                Empresario Premium
              </h3>
              <ul className="text-charcoal-800 text-base font-medium space-y-3">
                <li>🌟 30% de descuento adicional sobre precio mayorista</li>
                <li>
                  🌟 Capacitaciones profesionales (ventas, redes, marca
                  personal)
                </li>
                <li>🌟 Acompañamiento estratégico 24/7</li>
                <li>🌟 Herramientas digitales listas para vender</li>
                <li>🌟 Comunidad exclusiva de líderes y emprendedores</li>
              </ul>
              <p className="mt-6 text-sm text-charcoal-600">
                Empieza hoy en{" "}
                <a
                  href="https://kevinjewelry.com"
                  target="_blank"
                  className="text-gold-600 underline"
                >
                  kevinjewelry.com
                </a>
              </p>
            </div>
          </div>

          {/* Beneficios destacados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Devolución total garantizada",
                description:
                  "Si no logras vender, te devolvemos el 100% de tu inversión. Tu éxito es nuestra prioridad.",
              },
              {
                title: "Garantía de por vida",
                description:
                  "Tus clientes estarán protegidos con productos respaldados de por vida.",
              },
              {
                title: "Rotación de inventario",
                description:
                  "Cambia lo que no vendas sin pérdida. Siempre tendrás joyas actuales y deseables.",
              },
              {
                title: "Formación constante y gratuita",
                description:
                  "Incluye entrenamientos en ventas, publicidad, Instagram, WhatsApp Business y más (valorado en más de $1,000).",
              },
              {
                title: "Recursos visuales listos para usar",
                description:
                  "Fotos profesionales, videos, reels y más para que promociones con impacto sin esfuerzo.",
              },
              {
                title: "Acompañamiento real y comunidad activa",
                description:
                  "Tendrás mentores, soporte constante y acceso a una red de empresarios que te apoyarán en cada paso.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border border-gold-100 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gold-700 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-charcoal-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Botón CTA */}
          <div className="text-center mt-24">
            <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
              ¿Listo para llevar tu marca al siguiente nivel?
            </h3>
            <p className="text-charcoal-600 mb-6">
              Da el primer paso hacia un negocio más rentable y una comunidad
              que te respalda.
            </p>
            <Link
              to="/registro"
              className="inline-flex items-center bg-gold-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-all group shadow-md hover:shadow-2xl"
            >
              ¡Quiero ser Empresario!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;

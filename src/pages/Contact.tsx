import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      title: "Ubicación",
      details: ["Av. Principal 123", "Lima, Perú"]
    },
    {
      icon: <Phone className="w-6 h-6 text-gold-500" />,
      title: "Teléfono",
      details: ["+51 999 123 456", "+51 999 654 321"]
    },
    {
      icon: <Mail className="w-6 h-6 text-gold-500" />,
      title: "Email",
      details: ["info@kevinjewelry.com", "ventas@kevinjewelry.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-500" />,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 AM - 6:00 PM", "Sáb: 9:00 AM - 2:00 PM"]
    }
  ];

  const subjects = [
    "Consulta General",
    "Información Mayorista",
    "Programa Empresarios",
    "Soporte Técnico",
    "Sugerencias",
    "Otros"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-gold-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal-800 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Ya sea que tengas una consulta sobre nuestros productos, 
            quieras unirte a nuestro programa de mayoristas o necesites soporte, no dudes en contactarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gold-50 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-charcoal-800">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-charcoal-600">Te responderemos en menos de 24 horas</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-charcoal-600">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-gold-600 hover:text-gold-700 font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona un asunto</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gold-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-charcoal-600 mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">
                ¿Interesado en ser Mayorista?
              </h3>
              <p className="text-gold-100 mb-4 text-sm leading-relaxed">
                Únete a nuestra red exclusiva de socios comerciales y accede a precios especiales.
              </p>
              <a
                href="/registro"
                className="inline-flex items-center bg-white text-gold-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cream-50 transition-all group"
              >
                Registrarse Ahora
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-6">
              <h2 className="text-2xl font-display font-bold text-white">
                Nuestra Ubicación
              </h2>
              <p className="text-gold-100">
                Visítanos en nuestro showroom principal
              </p>
            </div>
            <div className="h-96 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">
                  Mapa interactivo próximamente
                </p>
                <p className="text-sm text-gray-400">
                  Av. Principal 123, Lima, Perú
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
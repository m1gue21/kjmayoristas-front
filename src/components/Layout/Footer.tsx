import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="font-display text-lg font-bold">Kevin Jewelry</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Joyería premium para mayoristas y empresarios. Calidad excepcional, 
              diseños únicos y precios competitivos para hacer crecer tu negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Venta al por Mayor</li>
              <li className="text-gray-300 text-sm">Programa de Empresarios</li>
              <li className="text-gray-300 text-sm">Asesoría Personalizada</li>
              <li className="text-gray-300 text-sm">Envío a Nivel Nacional</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Av. Principal 123<br />
                  Lima, Perú
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+51 999 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@kevinjewelry.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kevin Jewelry. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacidad" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
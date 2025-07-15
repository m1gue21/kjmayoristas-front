import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut, ShoppingBag } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const publicNavItems = [
    { path: "/", label: "Inicio" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/catalogo", label: "Catálogo" },
    { path: "/contacto", label: "Contacto" },
  ];

  const privateNavItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/catalogo-exclusivo", label: "Catálogo Exclusivo" },
    { path: "/pedidos", label: "Mis Pedidos" },
    { path: "/reuniones", label: "Reuniones" },
  ];

  const navItems =
    isAuthenticated && user?.status === "approved"
      ? privateNavItems
      : publicNavItems;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/media/Captura de pantalla 2025-07-12 003613.png"
              alt="Kevin Jewelry"
              className="h-14 w-auto object-contain" // Puedes probar con h-16 o más si quieres que crezca
              
            />
            <span className="font-display text-2xl font-bold text-gray-800">
                Kevin Jewelry
              </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-gold-600 border-b-2 border-gold-600"
                    : "text-charcoal-700 hover:text-gold-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Menu / Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-charcoal-700 hover:text-gold-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <Link
                      to="/perfil"
                      className="block px-4 py-2 text-sm text-charcoal-700 hover:bg-gold-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Mi Perfil
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-charcoal-700 hover:bg-gold-50 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-sm font-medium text-charcoal-700 hover:text-gold-600 transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/registro"
                  className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-600 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-charcoal-700 hover:text-gold-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pt-4 pb-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-gold-600 bg-gold-50 rounded-lg"
                      : "text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Auth Section */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="px-3 py-2 text-sm text-charcoal-600">
                    Bienvenido, {user?.name}
                  </div>
                  <Link
                    to="/perfil"
                    className="block px-3 py-2 text-base font-medium text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mi Perfil
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/registro"
                    className="block px-3 py-2 text-base font-medium bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

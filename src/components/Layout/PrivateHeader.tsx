import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, User, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Calendar,
  FolderOpen,
  Home,
} from "lucide-react";

const PrivateHeader: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gold-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo - only visible on mobile */}
          <Link
            to="/dashboard"
            className="lg:hidden flex items-center space-x-2"
          >
            <img
              src="/media/Captura de pantalla 2025-07-12 003613.png"
              alt="Kevin Jewelry"
              className="h-14 w-auto object-contain" // Puedes probar con h-16 o más si quieres que crezca
            />
            <span className="font-display text-lg font-bold text-charcoal-800">
              Kevin Jewelry
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-gold-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gold-600" />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-sm font-medium text-charcoal-800">
                    {user?.name}
                  </div>
                  <div className="text-xs text-charcoal-600 capitalize">
                    {user?.businessType}
                  </div>
                </div>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="text-sm font-medium text-charcoal-800">
                      {user?.name}
                    </div>
                    <div className="text-xs text-charcoal-600">
                      {user?.email}
                    </div>
                  </div>
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
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Fondo oscurecido al hacer overlay */}
          <div
            className="fixed inset-0 bg-black opacity-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Panel lateral */}
          <div className="relative w-72 h-full bg-white shadow-xl z-50 flex flex-col">
            {/* Botón para cerrar (arriba a la derecha dentro del panel) */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-charcoal-700 hover:text-gold-600 transition"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido desplazable del panel */}
            <div className="flex-1 overflow-y-auto px-4 pb-6">
              {/* Menú de navegación */}
              <nav className="space-y-1">
                {[
                  {
                    path: "/dashboard",
                    label: "Dashboard",
                    icon: <LayoutDashboard className="w-5 h-5" />,
                  },
                  {
                    path: "/catalogo-exclusivo",
                    label: "Catálogo Exclusivo",
                    icon: <Package className="w-5 h-5" />,
                  },
                  {
                    path: "/pedidos",
                    label: "Mis Pedidos",
                    icon: <ShoppingCart className="w-5 h-5" />,
                  },
                  {
                    path: "/reuniones",
                    label: "Reuniones",
                    icon: <Calendar className="w-5 h-5" />,
                  },
                  {
                    path: "/recursos",
                    label: "Recursos",
                    icon: <FolderOpen className="w-5 h-5" />,
                  },
                  {
                    path: "/perfil",
                    label: "Mi Perfil",
                    icon: <User className="w-5 h-5" />,
                  },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-gold-50 text-gold-700 border-r-2 border-gold-500"
                        : "text-charcoal-600 hover:bg-gold-50 hover:text-gold-700"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Sitio público */}
              <div className="mt-6">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center px-2 py-2 text-sm font-medium text-charcoal-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  <span className="ml-3">Sitio Público</span>
                </Link>
              </div>

              {/* Botón cerrar sesión */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center px-2 py-2 text-sm font-medium text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="ml-3">Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PrivateHeader;

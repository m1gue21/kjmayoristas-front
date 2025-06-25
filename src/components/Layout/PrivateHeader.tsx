import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PrivateHeader: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gold-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - only visible on mobile */}
          <Link to="/dashboard" className="lg:hidden flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded transform rotate-45"></div>
            </div>
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
                    <div className="text-sm font-medium text-charcoal-800">{user?.name}</div>
                    <div className="text-xs text-charcoal-600">{user?.email}</div>
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
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default PrivateHeader;
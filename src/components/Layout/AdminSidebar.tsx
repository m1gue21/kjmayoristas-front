import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Boxes,
  Home
} from 'lucide-react';

const adminMenuItems = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />
  },
  {
    path: '/admin/usuarios',
    label: 'Usuarios',
    icon: <Users className="w-5 h-5" />
  },
  {
    path: '/admin/productos',
    label: 'Productos',
    icon: <Package className="w-5 h-5" />
  },
  {
    path: '/admin/pedidos',
    label: 'Pedidos',
    icon: <ShoppingCart className="w-5 h-5" />
  },
  {
    path: '/admin/inventario',
    label: 'Inventario',
    icon: <Boxes className="w-5 h-5" />
  }
];

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:pt-16">
      <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-4 mb-8">
            <Link to="/admin" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="font-display text-xl font-bold text-charcoal-800">
                Kevin Jewelry Admin
              </span>
            </Link>
          </div>

          {/* Navegación */}
          <nav className="flex-1 px-2 space-y-1">
            {adminMenuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-gold-50 text-gold-700 border-r-2 border-gold-500'
                    : 'text-charcoal-600 hover:bg-gold-50 hover:text-gold-700'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Volver al sitio público */}
          <div className="px-2 mt-6">
            <Link
              to="/"
              className="group flex items-center px-2 py-2 text-sm font-medium text-charcoal-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="ml-3">Sitio Público</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar; 
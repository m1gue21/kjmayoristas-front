import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder for AdminHeader */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="font-display text-xl font-bold text-charcoal-800">
                Kevin Jewelry Admin
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex">
        {/* Placeholder for AdminSidebar */}
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:pt-16">
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="flex-1 px-2 space-y-1">
                <div className="text-sm font-medium text-charcoal-600 px-2 py-2">
                  Panel de Administración
                </div>
              </nav>
            </div>
          </div>
        </aside>
        
        <main className="flex-1 lg:ml-64">
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
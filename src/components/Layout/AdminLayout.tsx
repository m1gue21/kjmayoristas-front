import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

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
        {/* Sidebar de navegación para admin */}
        <AdminSidebar />
        
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
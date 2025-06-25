import React from 'react';
import { Outlet } from 'react-router-dom';
import PrivateHeader from './PrivateHeader';
import PrivateSidebar from './PrivateSidebar';

const PrivateLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PrivateHeader />
      <div className="flex">
        <PrivateSidebar />
        <main className="flex-1 lg:ml-64">
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
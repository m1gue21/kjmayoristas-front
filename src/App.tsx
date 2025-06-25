import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import PrivateLayout from './components/Layout/PrivateLayout';
import AdminLayout from './components/Layout/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import PublicCatalog from './pages/PublicCatalog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Private Pages
import Dashboard from './pages/private/Dashboard';
import ExclusiveCatalog from './pages/private/ExclusiveCatalog';
import Orders from './pages/private/Orders';
import Meetings from './pages/private/Meetings';
import Profile from './pages/private/Profile';
import Resources from './pages/private/Resources';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import ProductManagement from './pages/admin/ProductManagement';
import OrderManagement from './pages/admin/OrderManagement';
import InventoryManagement from './pages/admin/InventoryManagement';

// Route Protection Components
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
      </div>
    );
  }
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  if (user.status !== 'approved') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500"></div>
      </div>
    );
  }
  
  if (!isAuthenticated || !user || (user.businessType !== 'admin' && user.id !== '1')) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="nosotros" element={<About />} />
              <Route path="catalogo" element={<PublicCatalog />} />
              <Route path="contacto" element={<Contact />} />
            </Route>
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            
            {/* Private Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <PrivateLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="catalogo-exclusivo" element={<ExclusiveCatalog />} />
              <Route path="pedidos" element={<Orders />} />
              <Route path="reuniones" element={<Meetings />} />
              <Route path="perfil" element={<Profile />} />
              <Route path="recursos" element={<Resources />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="usuarios" element={<UserManagement />} />
              <Route path="productos" element={<ProductManagement />} />
              <Route path="pedidos" element={<OrderManagement />} />
              <Route path="inventario" element={<InventoryManagement />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
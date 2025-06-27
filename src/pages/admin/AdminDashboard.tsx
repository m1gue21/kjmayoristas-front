import React from 'react';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  Calendar
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    {
      title: 'Usuarios Totales',
      value: '248',
      change: '+12%',
      changeType: 'positive' as const,
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Productos Activos',
      value: '156',
      change: '+5%',
      changeType: 'positive' as const,
      icon: <Package className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Pedidos del Mes',
      value: '89',
      change: '+18%',
      changeType: 'positive' as const,
      icon: <ShoppingCart className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Ingresos del Mes',
      value: 'S/ 125,400',
      change: '+22%',
      changeType: 'positive' as const,
      icon: <DollarSign className="w-6 h-6 text-gold-500" />
    }
  ];

  const pendingApprovals = [
    { id: '1', name: 'María González', business: 'Joyería Elegante', type: 'mayorista', date: '2024-01-15' },
    { id: '2', name: 'Carlos Ruiz', business: 'Accesorios Premium', type: 'empresario', date: '2024-01-14' },
    { id: '3', name: 'Ana Martínez', business: 'Boutique Sofia', type: 'mayorista', date: '2024-01-13' }
  ];

  const recentOrders = [
    { id: 'KJ-089', customer: 'Juan Pérez', amount: 2500, status: 'processing', date: '2024-01-15' },
    { id: 'KJ-088', customer: 'María García', amount: 1800, status: 'shipped', date: '2024-01-15' },
    { id: 'KJ-087', customer: 'Carlos López', amount: 3200, status: 'completed', date: '2024-01-14' },
    { id: 'KJ-086', customer: 'Ana Rodríguez', amount: 950, status: 'pending', date: '2024-01-14' }
  ];

  const lowStockProducts = [
    { name: 'Anillo Compromiso Elegance', stock: 3, minStock: 10 },
    { name: 'Collar Perlas Premium', stock: 5, minStock: 15 },
    { name: 'Pulsera Artesanal Gold', stock: 2, minStock: 8 }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { label: 'Pendiente', color: 'bg-yellow-100 text-yellow-800', icon: <Clock className="w-4 h-4" /> };
      case 'processing':
        return { label: 'Procesando', color: 'bg-blue-100 text-blue-800', icon: <Package className="w-4 h-4" /> };
      case 'shipped':
        return { label: 'Enviado', color: 'bg-purple-100 text-purple-800', icon: <ShoppingCart className="w-4 h-4" /> };
      case 'completed':
        return { label: 'Completado', color: 'bg-green-100 text-green-800', icon: <CheckCircle className="w-4 h-4" /> };
      default:
        return { label: 'Desconocido', color: 'bg-gray-100 text-gray-800', icon: <AlertCircle className="w-4 h-4" /> };
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
          Panel de Administración
        </h1>
        <p className="text-charcoal-600">
          Resumen general de la plataforma Kevin Jewelry
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                {stat.icon}
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-charcoal-800 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-charcoal-600">
              {stat.title}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-800">
              Aprobaciones Pendientes
            </h3>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              {pendingApprovals.length}
            </div>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-gold-600" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal-800">{user.name}</div>
                    <div className="text-sm text-charcoal-600">{user.business}</div>
                    <div className="text-xs text-charcoal-500 capitalize">{user.type}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors">
                    Aprobar
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors">
                    Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-800">
              Pedidos Recientes
            </h3>
            <button className="text-gold-600 hover:text-gold-700 text-sm font-medium">
              Ver todos
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => {
              const statusInfo = getStatusInfo(order.status);
              return (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="font-medium text-charcoal-800">#{order.id}</div>
                    <div className="text-sm text-charcoal-600">{order.customer}</div>
                    <div className="text-xs text-charcoal-500">
                      {new Date(order.date).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-charcoal-800">
                      S/ {order.amount.toLocaleString()}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full flex items-center space-x-1 ${statusInfo.color}`}>
                      {statusInfo.icon}
                      <span>{statusInfo.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-800">
              Stock Bajo
            </h3>
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>
          <div className="space-y-4">
            {lowStockProducts.map((product, index) => (
              <div key={index} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-charcoal-800 text-sm">
                    {product.name}
                  </div>
                  <div className="text-red-600 font-bold">
                    {product.stock}
                  </div>
                </div>
                <div className="w-full bg-red-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${(product.stock / product.minStock) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-red-600 mt-1">
                  Mínimo requerido: {product.minStock}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart Placeholder */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-800">
              Ventas del Mes
            </h3>
            <BarChart3 className="w-6 h-6 text-gold-500" />
          </div>
          <div className="h-64 bg-gradient-to-t from-gold-50 to-transparent rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gold-400 mx-auto mb-3" />
              <p className="text-charcoal-600">Gráfico de ventas</p>
              <p className="text-sm text-charcoal-500">Próximamente</p>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-charcoal-800">
              Actividad Reciente
            </h3>
            <Calendar className="w-6 h-6 text-gold-500" />
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm font-medium text-charcoal-800">
                  Nuevo usuario registrado
                </div>
                <div className="text-xs text-charcoal-500">María González - Hace 2 horas</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm font-medium text-charcoal-800">
                  Pedido completado #KJ-087
                </div>
                <div className="text-xs text-charcoal-500">Carlos López - Hace 4 horas</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm font-medium text-charcoal-800">
                  Producto actualizado
                </div>
                <div className="text-xs text-charcoal-500">Anillo Elegance - Hace 6 horas</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
              <div>
                <div className="text-sm font-medium text-charcoal-800">
                  Catálogo actualizado
                </div>
                <div className="text-xs text-charcoal-500">Colección Primavera - Hace 1 día</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
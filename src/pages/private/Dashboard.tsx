import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  Calendar, 
  TrendingUp, 
  Bell, 
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (user?.status !== 'approved') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-charcoal-800 mb-4">
            Cuenta en Revisión
          </h2>
          <p className="text-charcoal-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            Tu cuenta está siendo revisada por nuestro equipo. Este proceso puede tomar entre 24-48 horas. 
            Te notificaremos por email una vez que sea aprobada y tengas acceso completo a la plataforma.
          </p>
          <div className="bg-gold-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-charcoal-800 mb-2">Información de tu registro:</h3>
            <div className="text-sm text-charcoal-600 space-y-1">
              <p><strong>Nombre:</strong> {user?.name}</p>
              <p><strong>Empresa:</strong> {user?.businessName}</p>
              <p><strong>Tipo:</strong> {user?.businessType}</p>
              <p><strong>Estado:</strong> {user?.status}</p>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all"
          >
            Volver al Inicio
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'Pedidos del Mes',
      value: '12',
      change: '+8%',
      changeType: 'positive' as const,
      icon: <ShoppingCart className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Productos Favoritos',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: <Package className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Reuniones Agendadas',
      value: '3',
      change: '0%',
      changeType: 'neutral' as const,
      icon: <Calendar className="w-6 h-6 text-purple-500" />
    },
    {
      title: user?.businessType === 'empresario' ? 'Margen de Beneficio' : 'Descuento Promedio',
      value: user?.businessType === 'empresario' ? '70%' : '25%',
      change: '+2%',
      changeType: 'positive' as const,
      icon: <TrendingUp className="w-6 h-6 text-gold-500" />
    }
  ];

  const recentOrders = [
    { id: '001', date: '2024-01-15', status: 'completed', total: 2500, items: 'Anillo Compromiso + Collar' },
    { id: '002', date: '2024-01-12', status: 'shipped', total: 1800, items: 'Pulsera Premium' },
    { id: '003', date: '2024-01-10', status: 'processing', total: 3200, items: 'Conjunto Esmeralda' }
  ];

  const notifications = [
    { 
      id: 1, 
      type: 'success', 
      message: 'Tu pedido #002 ha sido enviado', 
      time: '2 horas',
      icon: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    { 
      id: 2, 
      type: 'info', 
      message: 'Nueva colección disponible en catálogo', 
      time: '1 día',
      icon: <Bell className="w-5 h-5 text-blue-500" />
    },
    { 
      id: 3, 
      type: 'warning', 
      message: 'Reunión programada para mañana a las 3PM', 
      time: '2 días',
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />
    }
  ];

  const quickActions = [
    {
      title: 'Ver Catálogo Exclusivo',
      description: 'Explora productos con precios especiales',
      link: '/catalogo-exclusivo',
      icon: <Package className="w-8 h-8 text-gold-500" />,
      color: 'from-gold-500 to-gold-600'
    },
    {
      title: 'Hacer Pedido',
      description: 'Añade productos a tu carrito',
      link: '/catalogo-exclusivo',
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Agendar Reunión',
      description: 'Programa una cita con nuestro equipo',
      link: '/reuniones',
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">
              ¡Bienvenido, {user?.name}!
            </h1>
            <p className="text-gold-100 text-lg">
              Panel de control para {user?.businessType}s • {user?.businessName}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <div className="text-sm text-gold-100">Estado de cuenta</div>
              <div className="font-semibold">Activa</div>
            </div>
          </div>
        </div>
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
                stat.changeType === 'positive' ? 'text-green-600' : 
                stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
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
        {/* Quick Actions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-display font-bold text-charcoal-800">
            Acciones Rápidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
                  {action.title}
                </h3>
                <p className="text-charcoal-600 text-sm">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-charcoal-800">
                Pedidos Recientes
              </h3>
              <Link
                to="/pedidos"
                className="text-gold-600 hover:text-gold-700 font-medium text-sm flex items-center group"
              >
                Ver todos
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <div className="font-medium text-charcoal-800">
                        Pedido #{order.id}
                      </div>
                      <div className="text-sm text-charcoal-600">
                        {order.items}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-charcoal-800">
                      S/ {order.total.toLocaleString()}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'completed' ? 'Completado' :
                       order.status === 'shipped' ? 'Enviado' : 'Procesando'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-charcoal-800">
            Notificaciones
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  {notification.icon}
                  <div className="flex-1">
                    <p className="text-sm text-charcoal-800 mb-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-charcoal-500">
                      Hace {notification.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="text-gold-600 hover:text-gold-700 text-sm font-medium w-full text-center">
                Ver todas las notificaciones
              </button>
            </div>
          </div>

          {/* Business Type Info */}
          <div className="bg-gradient-to-br from-cream-50 to-gold-50 rounded-2xl p-6">
            <h3 className="font-semibold text-charcoal-800 mb-3">
              Tu Plan: {user?.businessType === 'empresario' ? 'Empresario' : 'Mayorista'}
            </h3>
            <div className="text-sm text-charcoal-600 space-y-2">
              {user?.businessType === 'empresario' ? (
                <>
                  <p>• Compra a precio empresario</p>
                  <p>• 70% de margen de beneficio</p>
                  <p>• Paga solo el 30% a Kevin Jewelry</p>
                  <p>• Soporte personalizado</p>
                </>
              ) : (
                <>
                  <p>• Precios mayoristas preferenciales</p>
                  <p>• Descuentos por volumen</p>
                  <p>• Términos de pago flexibles</p>
                  <p>• Asesoría comercial</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  Truck, 
  AlertCircle, 
  Eye, 
  Download,
  Filter,
  Search,
  Calendar,
  ShoppingCart
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Orders: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  // Mock orders data
  const orders = [
    {
      id: 'KJ-001',
      date: '2024-01-15',
      status: 'completed',
      total: 4500,
      items: [
        { name: 'Anillo de Compromiso Elegance', quantity: 2, price: 1750 },
        { name: 'Collar Perlas Clásico', quantity: 1, price: 1000 }
      ],
      shippingAddress: 'Av. Principal 123, Lima',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-01-18'
    },
    {
      id: 'KJ-002',
      date: '2024-01-12',
      status: 'shipped',
      total: 2800,
      items: [
        { name: 'Pulsera Artesanal Premium', quantity: 3, price: 665 },
        { name: 'Aretes Diamantes Eternos', quantity: 1, price: 1470 }
      ],
      shippingAddress: 'Jr. Comercio 456, Arequipa',
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-01-16'
    },
    {
      id: 'KJ-003',
      date: '2024-01-10',
      status: 'processing',
      total: 6200,
      items: [
        { name: 'Conjunto Esmeralda Real', quantity: 2, price: 3100 }
      ],
      shippingAddress: 'Av. Central 789, Cusco',
      trackingNumber: null,
      estimatedDelivery: '2024-01-20'
    },
    {
      id: 'KJ-004',
      date: '2024-01-08',
      status: 'pending',
      total: 1950,
      items: [
        { name: 'Anillo Solitario Clásico', quantity: 1, price: 1225 },
        { name: 'Pulsera Artesanal Premium', quantity: 1, price: 665 }
      ],
      shippingAddress: 'Calle Nueva 321, Trujillo',
      trackingNumber: null,
      estimatedDelivery: null
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Pendiente',
          icon: <Clock className="w-4 h-4" />,
          color: 'bg-yellow-100 text-yellow-800',
          description: 'Esperando confirmación'
        };
      case 'processing':
        return {
          label: 'Procesando',
          icon: <Package className="w-4 h-4" />,
          color: 'bg-blue-100 text-blue-800',
          description: 'En preparación'
        };
      case 'shipped':
        return {
          label: 'Enviado',
          icon: <Truck className="w-4 h-4" />,
          color: 'bg-purple-100 text-purple-800',
          description: 'En camino'
        };
      case 'completed':
        return {
          label: 'Completado',
          icon: <CheckCircle className="w-4 h-4" />,
          color: 'bg-green-100 text-green-800',
          description: 'Entregado'
        };
      default:
        return {
          label: 'Desconocido',
          icon: <AlertCircle className="w-4 h-4" />,
          color: 'bg-gray-100 text-gray-800',
          description: 'Estado desconocido'
        };
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getOrderTotal = (order: any) => {
    if (user?.businessType === 'empresario') {
      // For entrepreneurs, show what they pay (30% of public price)
      return order.total;
    }
    // For wholesalers, show wholesale price
    return order.total;
  };

  const getProfit = (order: any) => {
    if (user?.businessType === 'empresario') {
      // Calculate profit for entrepreneurs (70% margin)
      const publicPrice = order.total / 0.3; // Reverse calculate public price
      return publicPrice - order.total;
    }
    return 0;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Mis Pedidos
          </h1>
          <p className="text-charcoal-600">
            Gestiona y rastrea todos tus pedidos • {user?.businessName}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-gold-50 px-4 py-2 rounded-lg">
            <div className="text-sm text-gold-700 font-medium">
              Total de pedidos: {orders.length}
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por ID o producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              <option value="all">Todos los estados</option>
              <option value="pending">Pendiente</option>
              <option value="processing">Procesando</option>
              <option value="shipped">Enviado</option>
              <option value="completed">Completado</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order) => {
          const statusInfo = getStatusInfo(order.status);
          const isExpanded = selectedOrder === order.id;
          
          return (
            <div key={order.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal-800">
                        Pedido {order.id}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-charcoal-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(order.date).toLocaleDateString('es-ES')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Package className="w-4 h-4" />
                          <span>{order.items.length} producto{order.items.length !== 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 ${statusInfo.color}`}>
                      {statusInfo.icon}
                      <span>{statusInfo.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-charcoal-800">
                        S/ {getOrderTotal(order).toLocaleString()}
                      </div>
                      {user?.businessType === 'empresario' && (
                        <div className="text-sm text-green-600 font-medium">
                          Ganancia: S/ {getProfit(order).toLocaleString()}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedOrder(isExpanded ? null : order.id)}
                      className="p-2 text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Order Status Progress */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm text-charcoal-600 mb-2">
                    <span>Estado del pedido</span>
                    {order.trackingNumber && (
                      <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                        {order.trackingNumber}
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        order.status === 'completed' ? 'bg-green-500 w-full' :
                        order.status === 'shipped' ? 'bg-purple-500 w-3/4' :
                        order.status === 'processing' ? 'bg-blue-500 w-1/2' :
                        'bg-yellow-500 w-1/4'
                      }`}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-charcoal-500 mt-1">
                    <span>Pendiente</span>
                    <span>Procesando</span>
                    <span>Enviado</span>
                    <span>Entregado</span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Order Items */}
                      <div>
                        <h4 className="font-semibold text-charcoal-800 mb-3">Productos</h4>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-charcoal-800">{item.name}</div>
                                <div className="text-sm text-charcoal-600">Cantidad: {item.quantity}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-charcoal-800">
                                  S/ {(item.price * item.quantity).toLocaleString()}
                                </div>
                                <div className="text-xs text-charcoal-500">
                                  S/ {item.price.toLocaleString()} c/u
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping Info */}
                      <div>
                        <h4 className="font-semibold text-charcoal-800 mb-3">Información de Envío</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm text-charcoal-600 mb-1">Dirección de envío</div>
                            <div className="font-medium text-charcoal-800">{order.shippingAddress}</div>
                          </div>
                          {order.estimatedDelivery && (
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-charcoal-600 mb-1">Entrega estimada</div>
                              <div className="font-medium text-charcoal-800">
                                {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}
                              </div>
                            </div>
                          )}
                          {order.trackingNumber && (
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="text-sm text-charcoal-600 mb-1">Número de seguimiento</div>
                              <div className="font-mono text-charcoal-800">{order.trackingNumber}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="flex items-center space-x-2 bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors">
                        <Download className="w-4 h-4" />
                        <span>Descargar Factura</span>
                      </button>
                      {order.trackingNumber && (
                        <button className="flex items-center space-x-2 border border-gold-500 text-gold-600 px-4 py-2 rounded-lg hover:bg-gold-50 transition-colors">
                          <Truck className="w-4 h-4" />
                          <span>Rastrear Envío</span>
                        </button>
                      )}
                      <button className="flex items-center space-x-2 border border-gray-300 text-charcoal-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Package className="w-4 h-4" />
                        <span>Reordenar</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Package className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
            No se encontraron pedidos
          </h3>
          <p className="text-charcoal-600">
            {searchTerm || statusFilter !== 'all' 
              ? 'Intenta con otros términos de búsqueda o filtros.'
              : 'Aún no has realizado ningún pedido.'}
          </p>
        </div>
      )}

      {/* Summary Card for Entrepreneurs */}
      {user?.businessType === 'empresario' && orders.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
            Resumen de Ganancias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                S/ {orders.reduce((sum, order) => sum + getProfit(order), 0).toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-600">Ganancia Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-charcoal-800">
                S/ {orders.reduce((sum, order) => sum + getOrderTotal(order), 0).toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-600">Total Pagado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold-600">70%</div>
              <div className="text-sm text-charcoal-600">Margen Promedio</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
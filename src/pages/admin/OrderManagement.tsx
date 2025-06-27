import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Package, 
  Truck, 
  CheckCircle, 
  Clock,
  User,
  Calendar,
  DollarSign,
  Download
} from 'lucide-react';

const OrderManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const orders = [
    {
      id: 'KJ-089',
      customer: {
        name: 'Juan Pérez',
        email: 'juan@joyeriaeldorado.com',
        businessName: 'Joyería El Dorado',
        businessType: 'mayorista'
      },
      items: [
        { name: 'Anillo de Compromiso Elegance', quantity: 2, price: 1750, total: 3500 },
        { name: 'Collar Perlas Clásico', quantity: 1, price: 1260, total: 1260 }
      ],
      subtotal: 4760,
      discount: 260,
      total: 4500,
      status: 'processing',
      paymentMethod: 'Transferencia Bancaria',
      shippingAddress: 'Av. Principal 123, Lima',
      notes: 'Entrega urgente para evento especial',
      createdAt: '2024-01-15T10:30:00',
      updatedAt: '2024-01-15T14:20:00',
      estimatedDelivery: '2024-01-20'
    },
    {
      id: 'KJ-088',
      customer: {
        name: 'María García',
        email: 'maria@accesoriospremium.com',
        businessName: 'Accesorios Premium',
        businessType: 'empresario'
      },
      items: [
        { name: 'Pulsera Artesanal Premium', quantity: 3, price: 285, total: 855 },
        { name: 'Aretes Diamantes Eternos', quantity: 1, price: 960, total: 960 }
      ],
      subtotal: 1815,
      discount: 15,
      total: 1800,
      status: 'shipped',
      paymentMethod: 'Tarjeta de Crédito',
      shippingAddress: 'Jr. Comercio 456, Arequipa',
      notes: '',
      createdAt: '2024-01-14T09:15:00',
      updatedAt: '2024-01-15T11:45:00',
      estimatedDelivery: '2024-01-18',
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'KJ-087',
      customer: {
        name: 'Carlos López',
        email: 'carlos@boutiquesol.com',
        businessName: 'Boutique Sol',
        businessType: 'mayorista'
      },
      items: [
        { name: 'Conjunto Esmeralda Real', quantity: 1, price: 3150, total: 3150 }
      ],
      subtotal: 3150,
      discount: 0,
      total: 3150,
      status: 'completed',
      paymentMethod: 'Transferencia Bancaria',
      shippingAddress: 'Calle Nueva 789, Cusco',
      notes: 'Cliente VIP - Envío express',
      createdAt: '2024-01-12T16:20:00',
      updatedAt: '2024-01-14T10:30:00',
      estimatedDelivery: '2024-01-16',
      trackingNumber: 'TRK987654321',
      deliveredAt: '2024-01-14T15:30:00'
    },
    {
      id: 'KJ-086',
      customer: {
        name: 'Ana Rodríguez',
        email: 'ana@eleganciajoyas.com',
        businessName: 'Elegancia Joyas',
        businessType: 'empresario'
      },
      items: [
        { name: 'Anillo Solitario Clásico', quantity: 1, price: 525, total: 525 },
        { name: 'Pulsera Artesanal Premium', quantity: 1, price: 285, total: 285 }
      ],
      subtotal: 810,
      discount: 10,
      total: 800,
      status: 'pending',
      paymentMethod: 'Por Definir',
      shippingAddress: 'Av. Central 321, Trujillo',
      notes: 'Esperando confirmación de pago',
      createdAt: '2024-01-13T14:45:00',
      updatedAt: '2024-01-13T14:45:00',
      estimatedDelivery: null
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return { 
          label: 'Pendiente', 
          color: 'bg-yellow-100 text-yellow-800', 
          icon: <Clock className="w-4 h-4" /> 
        };
      case 'processing':
        return { 
          label: 'Procesando', 
          color: 'bg-blue-100 text-blue-800', 
          icon: <Package className="w-4 h-4" /> 
        };
      case 'shipped':
        return { 
          label: 'Enviado', 
          color: 'bg-purple-100 text-purple-800', 
          icon: <Truck className="w-4 h-4" /> 
        };
      case 'completed':
        return { 
          label: 'Completado', 
          color: 'bg-green-100 text-green-800', 
          icon: <CheckCircle className="w-4 h-4" /> 
        };
      default:
        return { 
          label: 'Desconocido', 
          color: 'bg-gray-100 text-gray-800', 
          icon: <Clock className="w-4 h-4" /> 
        };
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
    // In a real app, this would make an API call
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Gestión de Pedidos
          </h1>
          <p className="text-charcoal-600">
            Administra y procesa todos los pedidos de la plataforma
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {orders.length}
              </div>
              <div className="text-sm text-charcoal-600">Total Pedidos</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {orders.filter(o => o.status === 'pending').length}
              </div>
              <div className="text-sm text-charcoal-600">Pendientes</div>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {orders.filter(o => o.status === 'processing' || o.status === 'shipped').length}
              </div>
              <div className="text-sm text-charcoal-600">En Proceso</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                S/ {orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-600">Valor Total</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
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
              placeholder="Buscar pedidos..."
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
              <option value="pending">Pendientes</option>
              <option value="processing">Procesando</option>
              <option value="shipped">Enviados</option>
              <option value="completed">Completados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Pedido</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Productos</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Total</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const statusInfo = getStatusInfo(order.status);
                const isExpanded = selectedOrder === order.id;
                
                return (
                  <React.Fragment key={order.id}>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-mono font-medium text-charcoal-800">
                          #{order.id}
                        </div>
                        {order.trackingNumber && (
                          <div className="text-xs text-charcoal-500 font-mono">
                            {order.trackingNumber}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-charcoal-800">{order.customer.name}</div>
                          <div className="text-sm text-charcoal-600">{order.customer.businessName}</div>
                          <div className="text-xs text-charcoal-500 capitalize">
                            {order.customer.businessType}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium text-charcoal-800">
                            {order.items.length} producto{order.items.length !== 1 ? 's' : ''}
                          </div>
                          <div className="text-charcoal-600">
                            {order.items[0].name}
                            {order.items.length > 1 && ` +${order.items.length - 1} más`}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-charcoal-800">
                          S/ {order.total.toLocaleString()}
                        </div>
                        {order.discount > 0 && (
                          <div className="text-xs text-green-600">
                            Desc: S/ {order.discount}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                          {statusInfo.icon}
                          <span>{statusInfo.label}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="text-charcoal-800">
                            {new Date(order.createdAt).toLocaleDateString('es-ES')}
                          </div>
                          <div className="text-charcoal-500">
                            {new Date(order.createdAt).toLocaleTimeString('es-ES', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => setSelectedOrder(isExpanded ? null : order.id)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-charcoal-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          
                          {/* Status Update Buttons */}
                          {order.status === 'pending' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'processing')}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              title="Aprobar"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                          
                          {order.status === 'processing' && (
                            <button 
                              onClick={() => updateOrderStatus(order.id, 'shipped')}
                              className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                              title="Marcar como enviado"
                            >
                              <Truck className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded Details */}
                    {isExpanded && (
                      <tr>
                        <td colSpan={7} className="px-6 py-6 bg-gray-50">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Order Details */}
                            <div>
                              <h4 className="font-semibold text-charcoal-800 mb-3">Detalles del Pedido</h4>
                              <div className="space-y-3">
                                {order.items.map((item, index) => (
                                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <div>
                                      <div className="font-medium text-charcoal-800">{item.name}</div>
                                      <div className="text-sm text-charcoal-600">
                                        Cantidad: {item.quantity} × S/ {item.price.toLocaleString()}
                                      </div>
                                    </div>
                                    <div className="font-semibold text-charcoal-800">
                                      S/ {item.total.toLocaleString()}
                                    </div>
                                  </div>
                                ))}
                                
                                <div className="border-t pt-3 space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-charcoal-600">Subtotal:</span>
                                    <span className="text-charcoal-800">S/ {order.subtotal.toLocaleString()}</span>
                                  </div>
                                  {order.discount > 0 && (
                                    <div className="flex justify-between text-sm">
                                      <span className="text-charcoal-600">Descuento:</span>
                                      <span className="text-green-600">-S/ {order.discount.toLocaleString()}</span>
                                    </div>
                                  )}
                                  <div className="flex justify-between font-semibold">
                                    <span className="text-charcoal-800">Total:</span>
                                    <span className="text-charcoal-800">S/ {order.total.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Shipping & Payment Info */}
                            <div>
                              <h4 className="font-semibold text-charcoal-800 mb-3">Información de Envío y Pago</h4>
                              <div className="space-y-4">
                                <div className="p-3 bg-white rounded-lg">
                                  <div className="text-sm text-charcoal-600 mb-1">Dirección de envío</div>
                                  <div className="font-medium text-charcoal-800">{order.shippingAddress}</div>
                                </div>
                                
                                <div className="p-3 bg-white rounded-lg">
                                  <div className="text-sm text-charcoal-600 mb-1">Método de pago</div>
                                  <div className="font-medium text-charcoal-800">{order.paymentMethod}</div>
                                </div>
                                
                                {order.estimatedDelivery && (
                                  <div className="p-3 bg-white rounded-lg">
                                    <div className="text-sm text-charcoal-600 mb-1">Entrega estimada</div>
                                    <div className="font-medium text-charcoal-800">
                                      {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}
                                    </div>
                                  </div>
                                )}
                                
                                {order.notes && (
                                  <div className="p-3 bg-white rounded-lg">
                                    <div className="text-sm text-charcoal-600 mb-1">Notas</div>
                                    <div className="text-charcoal-800">{order.notes}</div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <ShoppingCart className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
            No se encontraron pedidos
          </h3>
          <p className="text-charcoal-600">
            Intenta con otros términos de búsqueda o filtros.
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
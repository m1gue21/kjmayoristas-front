import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  Clock,
  Mail,
  Phone,
  Building,
  Eye,
  MoreVertical
} from 'lucide-react';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const users = [
    {
      id: '1',
      name: 'Juan Pérez',
      email: 'juan@joyeriaeldorado.com',
      phone: '+51 999 123 456',
      businessName: 'Joyería El Dorado',
      businessType: 'mayorista',
      status: 'approved',
      ruc: '12345678901',
      address: 'Av. Principal 123, Lima',
      createdAt: '2024-01-15',
      lastLogin: '2024-01-20',
      totalOrders: 12,
      totalSpent: 25400
    },
    {
      id: '2',
      name: 'María García',
      email: 'maria@accesoriospremium.com',
      phone: '+51 999 654 321',
      businessName: 'Accesorios Premium',
      businessType: 'empresario',
      status: 'approved',
      ruc: '10987654321',
      address: 'Jr. Comercio 456, Arequipa',
      createdAt: '2024-02-01',
      lastLogin: '2024-01-19',
      totalOrders: 8,
      totalSpent: 18200
    },
    {
      id: '3',
      name: 'Carlos Mendoza',
      email: 'carlos@boutiquesol.com',
      phone: '+51 999 789 123',
      businessName: 'Boutique Sol',
      businessType: 'mayorista',
      status: 'pending',
      ruc: '11223344556',
      address: 'Calle Nueva 789, Cusco',
      createdAt: '2024-01-18',
      lastLogin: null,
      totalOrders: 0,
      totalSpent: 0
    },
    {
      id: '4',
      name: 'Ana Rodríguez',
      email: 'ana@eleganciajoyas.com',
      phone: '+51 999 456 789',
      businessName: 'Elegancia Joyas',
      businessType: 'empresario',
      status: 'suspended',
      ruc: '99887766554',
      address: 'Av. Central 321, Trujillo',
      createdAt: '2023-12-10',
      lastLogin: '2024-01-10',
      totalOrders: 15,
      totalSpent: 32100
    },
    {
      id: '5',
      name: 'Luis Torres',
      email: 'luis@joyasmodernas.com',
      phone: '+51 999 321 654',
      businessName: 'Joyas Modernas',
      businessType: 'mayorista',
      status: 'pending',
      ruc: '55443322110',
      address: 'Jr. Libertad 654, Piura',
      createdAt: '2024-01-20',
      lastLogin: null,
      totalOrders: 0,
      totalSpent: 0
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'approved':
        return { 
          label: 'Aprobado', 
          color: 'bg-green-100 text-green-800', 
          icon: <CheckCircle className="w-4 h-4" /> 
        };
      case 'pending':
        return { 
          label: 'Pendiente', 
          color: 'bg-yellow-100 text-yellow-800', 
          icon: <Clock className="w-4 h-4" /> 
        };
      case 'suspended':
        return { 
          label: 'Suspendido', 
          color: 'bg-red-100 text-red-800', 
          icon: <XCircle className="w-4 h-4" /> 
        };
      default:
        return { 
          label: 'Desconocido', 
          color: 'bg-gray-100 text-gray-800', 
          icon: <Clock className="w-4 h-4" /> 
        };
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.businessName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesType = typeFilter === 'all' || user.businessType === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleApprove = (userId: string) => {
    console.log('Approving user:', userId);
    // In a real app, this would make an API call
  };

  const handleSuspend = (userId: string) => {
    console.log('Suspending user:', userId);
    // In a real app, this would make an API call
  };

  const handleDelete = (userId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      console.log('Deleting user:', userId);
      // In a real app, this would make an API call
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Gestión de Usuarios
          </h1>
          <p className="text-charcoal-600">
            Administra mayoristas y empresarios registrados en la plataforma
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-gold-50 px-4 py-2 rounded-lg">
            <div className="text-sm text-gold-700 font-medium">
              {filteredUsers.length} usuarios
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {users.filter(u => u.status === 'approved').length}
              </div>
              <div className="text-sm text-charcoal-600">Usuarios Activos</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {users.filter(u => u.status === 'pending').length}
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
                {users.filter(u => u.businessType === 'mayorista').length}
              </div>
              <div className="text-sm text-charcoal-600">Mayoristas</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Building className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {users.filter(u => u.businessType === 'empresario').length}
              </div>
              <div className="text-sm text-charcoal-600">Empresarios</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-500" />
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
              placeholder="Buscar usuarios..."
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
              <option value="approved">Aprobados</option>
              <option value="pending">Pendientes</option>
              <option value="suspended">Suspendidos</option>
            </select>
            
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              <option value="all">Todos los tipos</option>
              <option value="mayorista">Mayoristas</option>
              <option value="empresario">Empresarios</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Usuario</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Negocio</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Estadísticas</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => {
                const statusInfo = getStatusInfo(user.status);
                return (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-gold-600" />
                        </div>
                        <div>
                          <div className="font-medium text-charcoal-800">{user.name}</div>
                          <div className="text-sm text-charcoal-600 flex items-center space-x-1">
                            <Mail className="w-3 h-3" />
                            <span>{user.email}</span>
                          </div>
                          <div className="text-sm text-charcoal-600 flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-charcoal-800">{user.businessName}</div>
                        <div className="text-sm text-charcoal-600">{user.ruc}</div>
                        <div className="text-sm text-charcoal-500">{user.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                        user.businessType === 'mayorista' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {user.businessType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                        {statusInfo.icon}
                        <span>{statusInfo.label}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-charcoal-800 font-medium">
                          {user.totalOrders} pedidos
                        </div>
                        <div className="text-charcoal-600">
                          S/ {user.totalSpent.toLocaleString()}
                        </div>
                        <div className="text-charcoal-500">
                          {user.lastLogin 
                            ? `Último: ${new Date(user.lastLogin).toLocaleDateString('es-ES')}`
                            : 'Nunca'
                          }
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        
                        {user.status === 'pending' && (
                          <button 
                            onClick={() => handleApprove(user.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        
                        {user.status === 'approved' && (
                          <button 
                            onClick={() => handleSuspend(user.id)}
                            className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        )}
                        
                        <button 
                          onClick={() => handleDelete(user.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* No Results */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Users className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
            No se encontraron usuarios
          </h3>
          <p className="text-charcoal-600">
            Intenta con otros términos de búsqueda o filtros.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
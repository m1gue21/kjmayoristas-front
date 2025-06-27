import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Plus, 
  Edit, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  Download,
  Upload,
  RefreshCw,
  Filter
} from 'lucide-react';

const InventoryManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'rings', name: 'Anillos' },
    { id: 'necklaces', name: 'Collares' },
    { id: 'bracelets', name: 'Pulseras' },
    { id: 'earrings', name: 'Aretes' },
    { id: 'sets', name: 'Conjuntos' }
  ];

  const inventory = [
    {
      id: '1',
      name: 'Anillo de Compromiso Elegance',
      sku: 'KJ-R001',
      category: 'rings',
      currentStock: 15,
      minStock: 10,
      maxStock: 50,
      reservedStock: 3,
      availableStock: 12,
      cost: 1200,
      lastRestockDate: '2024-01-10',
      lastSaleDate: '2024-01-18',
      monthlyMovement: -8,
      supplier: 'Proveedor Premium',
      location: 'Almacén A - Estante 1'
    },
    {
      id: '2',
      name: 'Collar Perlas Clásico',
      sku: 'KJ-N002',
      category: 'necklaces',
      currentStock: 8,
      minStock: 15,
      maxStock: 40,
      reservedStock: 2,
      availableStock: 6,
      cost: 900,
      lastRestockDate: '2024-01-05',
      lastSaleDate: '2024-01-17',
      monthlyMovement: -12,
      supplier: 'Perlas del Pacífico',
      location: 'Almacén A - Estante 2'
    },
    {
      id: '3',
      name: 'Pulsera Artesanal Premium',
      sku: 'KJ-B003',
      category: 'bracelets',
      currentStock: 12,
      minStock: 8,
      maxStock: 30,
      reservedStock: 1,
      availableStock: 11,
      cost: 450,
      lastRestockDate: '2024-01-12',
      lastSaleDate: '2024-01-19',
      monthlyMovement: -5,
      supplier: 'Artesanos Unidos',
      location: 'Almacén B - Estante 1'
    },
    {
      id: '4',
      name: 'Aretes Diamantes Eternos',
      sku: 'KJ-E004',
      category: 'earrings',
      currentStock: 0,
      minStock: 5,
      maxStock: 20,
      reservedStock: 0,
      availableStock: 0,
      cost: 1800,
      lastRestockDate: '2023-12-20',
      lastSaleDate: '2024-01-15',
      monthlyMovement: -5,
      supplier: 'Diamantes Selectos',
      location: 'Almacén A - Estante 3'
    },
    {
      id: '5',
      name: 'Conjunto Esmeralda Real',
      sku: 'KJ-S005',
      category: 'sets',
      currentStock: 3,
      minStock: 5,
      maxStock: 15,
      reservedStock: 1,
      availableStock: 2,
      cost: 2500,
      lastRestockDate: '2024-01-08',
      lastSaleDate: '2024-01-16',
      monthlyMovement: -3,
      supplier: 'Esmeraldas de Colombia',
      location: 'Almacén A - Caja Fuerte'
    }
  ];

  const getStockStatus = (item: any) => {
    if (item.currentStock === 0) {
      return { status: 'out_of_stock', label: 'Agotado', color: 'bg-red-100 text-red-800' };
    } else if (item.currentStock <= item.minStock) {
      return { status: 'low_stock', label: 'Stock Bajo', color: 'bg-yellow-100 text-yellow-800' };
    } else if (item.currentStock >= item.maxStock * 0.8) {
      return { status: 'high_stock', label: 'Stock Alto', color: 'bg-blue-100 text-blue-800' };
    } else {
      return { status: 'normal', label: 'Normal', color: 'bg-green-100 text-green-800' };
    }
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.min((current / max) * 100, 100);
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const stockStatus = getStockStatus(item).status;
    const matchesStock = stockFilter === 'all' || 
                        (stockFilter === 'low_stock' && (stockStatus === 'low_stock' || stockStatus === 'out_of_stock')) ||
                        (stockFilter === 'normal' && stockStatus === 'normal') ||
                        (stockFilter === 'high_stock' && stockStatus === 'high_stock');
    return matchesSearch && matchesCategory && matchesStock;
  });

  const totalValue = inventory.reduce((sum, item) => sum + (item.currentStock * item.cost), 0);
  const lowStockItems = inventory.filter(item => getStockStatus(item).status === 'low_stock' || getStockStatus(item).status === 'out_of_stock').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Gestión de Inventario
          </h1>
          <p className="text-charcoal-600">
            Control y seguimiento del stock de productos
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all flex items-center space-x-2">
            <Upload className="w-5 h-5" />
            <span>Importar</span>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Exportar</span>
          </button>
          <button className="bg-gold-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-all flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nuevo Movimiento</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {inventory.length}
              </div>
              <div className="text-sm text-charcoal-600">Productos en Inventario</div>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                S/ {totalValue.toLocaleString()}
              </div>
              <div className="text-sm text-charcoal-600">Valor Total del Inventario</div>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {lowStockItems}
              </div>
              <div className="text-sm text-charcoal-600">Productos con Stock Bajo</div>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {inventory.reduce((sum, item) => sum + item.availableStock, 0)}
              </div>
              <div className="text-sm text-charcoal-600">Stock Disponible Total</div>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-500" />
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
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            
            <select
              value={stockFilter}
              onChange={(e) => setStockFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              <option value="all">Todos los niveles</option>
              <option value="low_stock">Stock Bajo/Agotado</option>
              <option value="normal">Stock Normal</option>
              <option value="high_stock">Stock Alto</option>
            </select>
            
            <button className="p-3 border border-gray-200 rounded-lg text-charcoal-600 hover:bg-gray-50 transition-colors">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Producto</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Stock Actual</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Disponible</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Nivel de Stock</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Movimiento</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Ubicación</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInventory.map((item) => {
                const stockStatus = getStockStatus(item);
                const stockPercentage = getStockPercentage(item.currentStock, item.maxStock);
                
                return (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-charcoal-800">{item.name}</div>
                        <div className="text-sm text-charcoal-600 font-mono">{item.sku}</div>
                        <div className="text-sm text-charcoal-500 capitalize">
                          {categories.find(c => c.id === item.category)?.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-charcoal-800">
                          {item.currentStock}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              stockStatus.status === 'out_of_stock' ? 'bg-red-500' :
                              stockStatus.status === 'low_stock' ? 'bg-yellow-500' :
                              stockStatus.status === 'high_stock' ? 'bg-blue-500' : 'bg-green-500'
                            }`}
                            style={{ width: `${stockPercentage}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-charcoal-500">
                          Min: {item.minStock} | Max: {item.maxStock}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-lg font-semibold text-green-600">
                          {item.availableStock}
                        </div>
                        {item.reservedStock > 0 && (
                          <div className="text-sm text-yellow-600">
                            Reservado: {item.reservedStock}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${stockStatus.color}`}>
                        {stockStatus.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-charcoal-800">
                          S/ {(item.currentStock * item.cost).toLocaleString()}
                        </div>
                        <div className="text-sm text-charcoal-600">
                          Costo: S/ {item.cost.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {item.monthlyMovement < 0 ? (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        )}
                        <span className={`text-sm font-medium ${
                          item.monthlyMovement < 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {item.monthlyMovement}
                        </span>
                      </div>
                      <div className="text-xs text-charcoal-500">
                        Este mes
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-charcoal-800">{item.location}</div>
                        <div className="text-charcoal-600">{item.supplier}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                        {stockStatus.status === 'low_stock' || stockStatus.status === 'out_of_stock' ? (
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <AlertTriangle className="w-4 h-4" />
                          </button>
                        ) : null}
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
      {filteredInventory.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Package className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-charcoal-600">
            Intenta con otros términos de búsqueda o filtros.
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
          Acciones Rápidas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Productos con Stock Bajo</div>
                <div className="text-sm text-charcoal-600">{lowStockItems} productos necesitan restock</div>
              </div>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Reporte de Movimientos</div>
                <div className="text-sm text-charcoal-600">Ver historial de entradas y salidas</div>
              </div>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <RefreshCw className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Actualización Masiva</div>
                <div className="text-sm text-charcoal-600">Actualizar precios y stock en lote</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Image,
  DollarSign,
  Tag,
  BarChart3,
  Filter
} from 'lucide-react';

const ProductManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('table');

  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'rings', name: 'Anillos' },
    { id: 'necklaces', name: 'Collares' },
    { id: 'bracelets', name: 'Pulseras' },
    { id: 'earrings', name: 'Aretes' },
    { id: 'sets', name: 'Conjuntos' }
  ];

  const products = [
    {
      id: '1',
      name: 'Anillo de Compromiso Elegance',
      sku: 'KJ-R001',
      category: 'rings',
      material: 'Oro blanco 18k, Diamante',
      publicPrice: 2500,
      wholesalePrice: 1750,
      entrepreneurPrice: 750,
      stock: 15,
      minStock: 10,
      status: 'active',
      image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
      description: 'Anillo de compromiso en oro blanco 18k con diamante central de 1 quilate.',
      createdAt: '2024-01-15',
      lastUpdated: '2024-01-20'
    },
    {
      id: '2',
      name: 'Collar Perlas Clásico',
      sku: 'KJ-N002',
      category: 'necklaces',
      material: 'Perlas naturales, Oro amarillo 14k',
      publicPrice: 1800,
      wholesalePrice: 1260,
      entrepreneurPrice: 540,
      stock: 8,
      minStock: 15,
      status: 'active',
      image: 'https://images.pexels.com/photos/1454428/pexels-photo-1454428.jpeg',
      description: 'Collar de perlas naturales con cierre en oro amarillo.',
      createdAt: '2024-01-12',
      lastUpdated: '2024-01-18'
    },
    {
      id: '3',
      name: 'Pulsera Artesanal Premium',
      sku: 'KJ-B003',
      category: 'bracelets',
      material: 'Plata sterling 925, Cuero genuino',
      publicPrice: 950,
      wholesalePrice: 665,
      entrepreneurPrice: 285,
      stock: 12,
      minStock: 8,
      status: 'active',
      image: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg',
      description: 'Pulsera tejida a mano con detalles en plata sterling.',
      createdAt: '2024-01-10',
      lastUpdated: '2024-01-15'
    },
    {
      id: '4',
      name: 'Aretes Diamantes Eternos',
      sku: 'KJ-E004',
      category: 'earrings',
      material: 'Platino, Diamantes naturales',
      publicPrice: 3200,
      wholesalePrice: 2240,
      entrepreneurPrice: 960,
      stock: 0,
      minStock: 5,
      status: 'out_of_stock',
      image: 'https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg',
      description: 'Aretes con diamantes naturales en montadura de platino.',
      createdAt: '2024-01-08',
      lastUpdated: '2024-01-12'
    },
    {
      id: '5',
      name: 'Conjunto Esmeralda Real',
      sku: 'KJ-S005',
      category: 'sets',
      material: 'Oro amarillo 18k, Esmeraldas',
      publicPrice: 4500,
      wholesalePrice: 3150,
      entrepreneurPrice: 1350,
      stock: 3,
      minStock: 5,
      status: 'low_stock',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      description: 'Conjunto de collar y aretes con esmeraldas colombianas.',
      createdAt: '2024-01-05',
      lastUpdated: '2024-01-10'
    }
  ];

  const getStatusInfo = (status: string, stock: number, minStock: number) => {
    if (stock === 0) {
      return { label: 'Agotado', color: 'bg-red-100 text-red-800' };
    } else if (stock <= minStock) {
      return { label: 'Stock Bajo', color: 'bg-yellow-100 text-yellow-800' };
    } else {
      return { label: 'Disponible', color: 'bg-green-100 text-green-800' };
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'active' && product.stock > product.minStock) ||
                         (statusFilter === 'low_stock' && product.stock <= product.minStock && product.stock > 0) ||
                         (statusFilter === 'out_of_stock' && product.stock === 0);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Gestión de Productos
          </h1>
          <p className="text-charcoal-600">
            Administra el catálogo completo de joyería y sus precios
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Nuevo Producto</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {products.length}
              </div>
              <div className="text-sm text-charcoal-600">Total Productos</div>
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
                {products.filter(p => p.stock > p.minStock).length}
              </div>
              <div className="text-sm text-charcoal-600">Disponibles</div>
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
                {products.filter(p => p.stock <= p.minStock && p.stock > 0).length}
              </div>
              <div className="text-sm text-charcoal-600">Stock Bajo</div>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Tag className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-charcoal-800">
                {products.filter(p => p.stock === 0).length}
              </div>
              <div className="text-sm text-charcoal-600">Agotados</div>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-red-500" />
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
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              <option value="all">Todos los estados</option>
              <option value="active">Disponibles</option>
              <option value="low_stock">Stock Bajo</option>
              <option value="out_of_stock">Agotados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Producto</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">SKU</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Precios</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-charcoal-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => {
                const statusInfo = getStatusInfo(product.status, product.stock, product.minStock);
                return (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <div className="font-medium text-charcoal-800">{product.name}</div>
                          <div className="text-sm text-charcoal-600">{product.material}</div>
                          <div className="text-sm text-charcoal-500 capitalize">
                            {categories.find(c => c.id === product.category)?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-mono text-sm text-charcoal-800">
                        {product.sku}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="text-charcoal-600">Público:</span>
                          <span className="font-medium text-charcoal-800 ml-2">
                            S/ {product.publicPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-charcoal-600">Mayorista:</span>
                          <span className="font-medium text-blue-600 ml-2">
                            S/ {product.wholesalePrice.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-charcoal-600">Empresario:</span>
                          <span className="font-medium text-purple-600 ml-2">
                            S/ {product.entrepreneurPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-charcoal-800">
                          {product.stock}
                        </div>
                        <div className="text-sm text-charcoal-600">
                          Mín: {product.minStock}
                        </div>
                        {product.stock <= product.minStock && (
                          <div className="w-full bg-red-200 rounded-full h-1">
                            <div 
                              className="bg-red-500 h-1 rounded-full" 
                              style={{ width: `${Math.max((product.stock / product.minStock) * 100, 10)}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <Image className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
      {filteredProducts.length === 0 && (
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
    </div>
  );
};

export default ProductManagement;
import React, { useState } from 'react';
import { Search, Filter, Grid, List, Eye, ShoppingCart, Download, Star, Package } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ExclusiveCatalog: React.FC = () => {
  const { user } = useAuth();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { id: 'all', name: 'Todos' },
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
      category: 'rings',
      image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
      publicPrice: 2500,
      wholesalePrice: 1750,
      entrepreneurPrice: 750,
      description: 'Anillo de compromiso en oro blanco 18k con diamante central de 1 quilate.',
      material: 'Oro blanco 18k, Diamante',
      sku: 'KJ-R001',
      inStock: true,
      quantity: 15
    },
    {
      id: '2',
      name: 'Collar Perlas Clásico',
      category: 'necklaces',
      image: 'https://images.pexels.com/photos/1454428/pexels-photo-1454428.jpeg',
      publicPrice: 1800,
      wholesalePrice: 1260,
      entrepreneurPrice: 540,
      description: 'Collar de perlas naturales con cierre en oro amarillo.',
      material: 'Perlas naturales, Oro amarillo 14k',
      sku: 'KJ-N002',
      inStock: true,
      quantity: 8
    },
    {
      id: '3',
      name: 'Pulsera Artesanal Premium',
      category: 'bracelets',
      image: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg',
      publicPrice: 950,
      wholesalePrice: 665,
      entrepreneurPrice: 285,
      description: 'Pulsera tejida a mano con detalles en plata sterling.',
      material: 'Plata sterling 925, Cuero genuino',
      sku: 'KJ-B003',
      inStock: true,
      quantity: 12
    },
    {
      id: '4',
      name: 'Aretes Diamantes Eternos',
      category: 'earrings',
      image: 'https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg',
      publicPrice: 3200,
      wholesalePrice: 2240,
      entrepreneurPrice: 960,
      description: 'Aretes con diamantes naturales en montadura de platino.',
      material: 'Platino, Diamantes naturales',
      sku: 'KJ-E004',
      inStock: false,
      quantity: 0
    },
    {
      id: '5',
      name: 'Conjunto Esmeralda Real',
      category: 'sets',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      publicPrice: 4500,
      wholesalePrice: 3150,
      entrepreneurPrice: 1350,
      description: 'Conjunto de collar y aretes con esmeraldas colombianas.',
      material: 'Oro amarillo 18k, Esmeraldas',
      sku: 'KJ-S005',
      inStock: true,
      quantity: 3
    },
    {
      id: '6',
      name: 'Anillo Solitario Clásico',
      category: 'rings',
      image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
      publicPrice: 1750,
      wholesalePrice: 1225,
      entrepreneurPrice: 525,
      description: 'Anillo solitario en oro rosa con diamante certificado.',
      material: 'Oro rosa 14k, Diamante certificado',
      sku: 'KJ-R006',
      inStock: true,
      quantity: 20
    }
  ];

  const getPrice = (product: any) => {
    if (user?.businessType === 'empresario') {
      return product.entrepreneurPrice;
    }
    return product.wholesalePrice;
  };

  const getPriceLabel = () => {
    return user?.businessType === 'empresario' ? 'Precio Empresario' : 'Precio Mayorista';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const downloadCatalog = (type: 'complete' | 'client') => {
    // Mock download functionality
    const filename = type === 'complete' 
      ? `catalogo-completo-${user?.businessName?.replace(/\s+/g, '-').toLowerCase()}.pdf`
      : 'catalogo-clientes.pdf';
    
    // In a real implementation, this would trigger a PDF download
    alert(`Descargando: ${filename}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Catálogo Exclusivo
          </h1>
          <p className="text-charcoal-600">
            Acceso completo con {getPriceLabel().toLowerCase()}s • {user?.businessName}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Cart Summary */}
          <div className="bg-gold-50 px-4 py-2 rounded-lg flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-gold-600" />
            <span className="font-medium text-gold-800">
              {getTotalCartItems()} productos
            </span>
          </div>
          
          {/* Download Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => downloadCatalog('complete')}
              className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Catálogo Completo</span>
            </button>
            <button
              onClick={() => downloadCatalog('client')}
              className="border border-gold-500 text-gold-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-50 transition-all flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Para Clientes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Business Type Info */}
      <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-charcoal-800 mb-2">
              Plan {user?.businessType === 'empresario' ? 'Empresario' : 'Mayorista'}
            </h3>
            <div className="text-sm text-charcoal-600">
              {user?.businessType === 'empresario' ? (
                <p>Pagas solo el 30% del precio público • Tu margen: 70%</p>
              ) : (
                <p>Precios mayoristas preferenciales • Descuentos por volumen</p>
              )}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gold-600">
              {user?.businessType === 'empresario' ? '70%' : '30%'}
            </div>
            <div className="text-sm text-charcoal-600">
              {user?.businessType === 'empresario' ? 'Tu margen' : 'Descuento promedio'}
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
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-gold-600' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-gold-600' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} relative`}>
              <img
                src={product.image}
                alt={product.name}
                className={`${
                  viewMode === 'list' ? 'h-full' : 'h-64'
                } w-full object-cover group-hover:scale-105 transition-transform duration-500`}
              />
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Agotado
                </div>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gold-600 hover:bg-white hover:scale-110 transition-all">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className={`${viewMode === 'list' ? 'w-2/3' : 'w-full'} p-6`}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-charcoal-800 group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="text-xs text-gray-500 font-mono">
                    {product.sku}
                  </div>
                </div>
                
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="text-sm text-gold-600 font-medium">
                  {product.material}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-charcoal-800">
                      S/ {getPrice(product).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500 line-through">
                      Público: S/ {product.publicPrice.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? `Stock: ${product.quantity}` : 'Agotado'}
                    </div>
                    {product.inStock && (
                      <button
                        onClick={() => addToCart(product.id)}
                        className="bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all flex items-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Añadir</span>
                      </button>
                    )}
                  </div>
                </div>

                {user?.businessType === 'empresario' && (
                  <div className="bg-green-50 rounded-lg p-3 mt-3">
                    <div className="text-xs text-green-700 font-medium mb-1">
                      Tu ganancia por pieza:
                    </div>
                    <div className="text-lg font-bold text-green-800">
                      S/ {(product.publicPrice - product.entrepreneurPrice).toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
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
            Intenta con otros términos de búsqueda o categorías.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExclusiveCatalog;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Eye, ShoppingBag, ArrowRight } from 'lucide-react';

const PublicCatalog: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      description: 'Anillo de compromiso en oro blanco 18k con diamante central de 1 quilate.',
      material: 'Oro blanco 18k, Diamante',
      inStock: true
    },
    {
      id: '2',
      name: 'Collar Perlas Clásico',
      category: 'necklaces',
      image: 'https://images.pexels.com/photos/1454428/pexels-photo-1454428.jpeg',
      publicPrice: 1800,
      description: 'Collar de perlas naturales con cierre en oro amarillo.',
      material: 'Perlas naturales, Oro amarillo 14k',
      inStock: true
    },
    {
      id: '3',
      name: 'Pulsera Artesanal Premium',
      category: 'bracelets',
      image: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg',
      publicPrice: 950,
      description: 'Pulsera tejida a mano con detalles en plata sterling.',
      material: 'Plata sterling 925, Cuero genuino',
      inStock: true
    },
    {
      id: '4',
      name: 'Aretes Diamantes Eternos',
      category: 'earrings',
      image: 'https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg',
      publicPrice: 3200,
      description: 'Aretes con diamantes naturales en montadura de platino.',
      material: 'Platino, Diamantes naturales',
      inStock: false
    },
    {
      id: '5',
      name: 'Conjunto Esmeralda Real',
      category: 'sets',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      publicPrice: 4500,
      description: 'Conjunto de collar y aretes con esmeraldas colombianas.',
      material: 'Oro amarillo 18k, Esmeraldas',
      inStock: true
    },
    {
      id: '6',
      name: 'Anillo Solitario Clásico',
      category: 'rings',
      image: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
      publicPrice: 1750,
      description: 'Anillo solitario en oro rosa con diamante certificado.',
      material: 'Oro rosa 14k, Diamante certificado',
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-4">
            Catálogo de Joyería
          </h1>
          <p className="text-lg text-charcoal-600 max-w-3xl">
            Descubre nuestra exquisita colección de joyería premium. 
            <span className="text-gold-600 font-semibold"> Precios mayoristas disponibles al registrarse como socio.</span>
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
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
                  <h3 className="text-xl font-semibold text-charcoal-800 group-hover:text-gold-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="text-sm text-gold-600 font-medium">
                    {product.material}
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-2xl font-bold text-charcoal-800">
                      S/ {product.publicPrice.toLocaleString()}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'Disponible' : 'Agotado'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <ShoppingBag className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-charcoal-600">
              Intenta con otros términos de búsqueda o categorías.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            ¿Interesado en precios mayoristas?
          </h2>
          <p className="text-gold-100 text-lg mb-8 max-w-2xl mx-auto">
            Regístrate como mayorista o empresario y accede a precios preferenciales, 
            catálogos exclusivos y condiciones especiales de compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registro"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cream-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center group"
            >
              Registrarse Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gold-600 transition-all"
            >
              Contactar Asesor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicCatalog;
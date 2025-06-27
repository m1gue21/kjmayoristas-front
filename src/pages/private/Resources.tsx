import React, { useState } from 'react';
import { 
  Download, 
  Image, 
  Video, 
  FileText, 
  Folder, 
  Search, 
  Filter,
  Eye,
  Share,
  BookOpen,
  Palette,
  Camera,
  Play
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Resources: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'Todos los Recursos', icon: <Folder className="w-5 h-5" /> },
    { id: 'images', name: 'Imágenes de Productos', icon: <Image className="w-5 h-5" /> },
    { id: 'videos', name: 'Videos Promocionales', icon: <Video className="w-5 h-5" /> },
    { id: 'catalogs', name: 'Catálogos', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'marketing', name: 'Material de Marketing', icon: <Palette className="w-5 h-5" /> },
    { id: 'training', name: 'Capacitación', icon: <FileText className="w-5 h-5" /> }
  ];

  const resources = [
    {
      id: '1',
      name: 'Catálogo Completo 2024',
      category: 'catalogs',
      type: 'PDF',
      size: '15.2 MB',
      description: 'Catálogo completo con todos los productos y precios actualizados',
      thumbnail: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      name: 'Imágenes HD - Anillos de Compromiso',
      category: 'images',
      type: 'ZIP',
      size: '45.8 MB',
      description: 'Pack de imágenes en alta resolución de anillos de compromiso',
      thumbnail: 'https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-12'
    },
    {
      id: '3',
      name: 'Video Promocional - Colección Primavera',
      category: 'videos',
      type: 'MP4',
      size: '120.5 MB',
      description: 'Video promocional de la nueva colección primavera 2024',
      thumbnail: 'https://images.pexels.com/photos/1454428/pexels-photo-1454428.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-10'
    },
    {
      id: '4',
      name: 'Guía de Ventas para Mayoristas',
      category: 'training',
      type: 'PDF',
      size: '8.3 MB',
      description: 'Manual completo con técnicas de venta y argumentarios',
      thumbnail: 'https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-08'
    },
    {
      id: '5',
      name: 'Plantillas de Redes Sociales',
      category: 'marketing',
      type: 'ZIP',
      size: '25.7 MB',
      description: 'Plantillas editables para Instagram, Facebook y WhatsApp',
      thumbnail: 'https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-05'
    },
    {
      id: '6',
      name: 'Imágenes HD - Collares Premium',
      category: 'images',
      type: 'ZIP',
      size: '38.2 MB',
      description: 'Colección de imágenes profesionales de collares premium',
      thumbnail: 'https://images.pexels.com/photos/1454428/pexels-photo-1454428.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-03'
    },
    {
      id: '7',
      name: 'Catálogo para Clientes Finales',
      category: 'catalogs',
      type: 'PDF',
      size: '12.1 MB',
      description: 'Catálogo sin precios para compartir con clientes finales',
      thumbnail: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg',
      downloadUrl: '#',
      lastUpdated: '2024-01-01'
    },
    {
      id: '8',
      name: 'Tutorial: Fotografía de Joyería',
      category: 'training',
      type: 'MP4',
      size: '85.4 MB',
      description: 'Video tutorial sobre cómo fotografiar joyería profesionalmente',
      thumbnail: 'https://images.pexels.com/photos/8978842/pexels-photo-8978842.jpeg',
      downloadUrl: '#',
      lastUpdated: '2023-12-28'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-500" />;
      case 'zip':
        return <Folder className="w-6 h-6 text-blue-500" />;
      case 'mp4':
        return <Play className="w-6 h-6 text-green-500" />;
      default:
        return <FileText className="w-6 h-6 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-red-100 text-red-800';
      case 'zip':
        return 'bg-blue-100 text-blue-800';
      case 'mp4':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Recursos y Materiales
          </h1>
          <p className="text-charcoal-600">
            Accede a catálogos, imágenes, videos y material de marketing • {user?.businessName}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-gold-50 px-4 py-2 rounded-lg">
            <div className="text-sm text-gold-700 font-medium">
              {filteredResources.length} recursos disponibles
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-charcoal-800 mb-4">
          Categorías de Recursos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                selectedCategory === category.id
                  ? 'border-gold-500 bg-gold-50 text-gold-700'
                  : 'border-gray-200 bg-white hover:border-gold-300 text-charcoal-600'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                {category.icon}
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar recursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-gold-600' : 'text-gray-500'
                }`}
              >
                <Image className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-gold-600' : 'text-gray-500'
                }`}
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid/List */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div className={`${viewMode === 'list' ? 'w-1/4' : 'w-full'} relative`}>
              <img
                src={resource.thumbnail}
                alt={resource.name}
                className={`${
                  viewMode === 'list' ? 'h-full' : 'h-48'
                } w-full object-cover group-hover:scale-105 transition-transform duration-500`}
              />
              <div className="absolute top-4 left-4">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gold-600 hover:bg-white hover:scale-110 transition-all">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className={`${viewMode === 'list' ? 'w-3/4' : 'w-full'} p-6`}>
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-charcoal-800 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {resource.name}
                  </h3>
                  {getTypeIcon(resource.type)}
                </div>
                
                <p className="text-charcoal-600 text-sm leading-relaxed line-clamp-2">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-charcoal-500">
                  <span>{resource.size}</span>
                  <span>{new Date(resource.lastUpdated).toLocaleDateString('es-ES')}</span>
                </div>
                
                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gold-600 transition-all flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Descargar</span>
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg text-charcoal-600 hover:bg-gray-50 transition-colors">
                    <Share className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <Folder className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-charcoal-800 mb-2">
            No se encontraron recursos
          </h3>
          <p className="text-charcoal-600">
            Intenta con otros términos de búsqueda o categorías.
          </p>
        </div>
      )}

      {/* Quick Access */}
      <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
          Acceso Rápido
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Catálogos Actualizados</div>
                <div className="text-sm text-charcoal-600">Últimas versiones disponibles</div>
              </div>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Imágenes HD</div>
                <div className="text-sm text-charcoal-600">Fotos profesionales de productos</div>
              </div>
            </div>
          </button>
          
          <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all text-left group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-charcoal-800">Material de Marketing</div>
                <div className="text-sm text-charcoal-600">Plantillas y recursos promocionales</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
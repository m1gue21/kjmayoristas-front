import React, { useState } from 'react';
import { User, Mail, Phone, Building, MapPin, Edit, Save, X, Camera, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    businessName: user?.businessName || '',
    address: user?.address || '',
    ruc: user?.ruc || ''
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setIsEditing(false);
    // In a real app, this would update the user context
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      businessName: user?.businessName || '',
      address: user?.address || '',
      ruc: user?.ruc || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Mi Perfil
          </h1>
          <p className="text-charcoal-600">
            Gestiona tu información personal y de negocio
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all flex items-center space-x-2"
            >
              <Edit className="w-5 h-5" />
              <span>Editar Perfil</span>
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center space-x-2 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Guardando...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>Guardar</span>
                  </>
                )}
              </button>
              <button
                onClick={handleCancel}
                className="border border-gray-300 text-charcoal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center space-x-2"
              >
                <X className="w-5 h-5" />
                <span>Cancelar</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Picture and Status */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-16 h-16 text-gold-600" />
                </div>
                <button className="absolute bottom-2 right-2 bg-gold-500 text-white p-2 rounded-full hover:bg-gold-600 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <h2 className="text-xl font-semibold text-charcoal-800 mb-2">
                {user?.name}
              </h2>
              <p className="text-charcoal-600 mb-4 capitalize">
                {user?.businessType}
              </p>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                user?.status === 'approved' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                <Shield className="w-4 h-4 mr-2" />
                {user?.status === 'approved' ? 'Cuenta Activa' : 'Pendiente de Aprobación'}
              </div>
            </div>
          </div>

          {/* Account Statistics */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-4">
              Estadísticas de Cuenta
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-charcoal-600">Miembro desde</span>
                <span className="font-medium text-charcoal-800">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('es-ES', {
                    month: 'long',
                    year: 'numeric'
                  }) : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal-600">Pedidos realizados</span>
                <span className="font-medium text-charcoal-800">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal-600">Última actividad</span>
                <span className="font-medium text-charcoal-800">Hace 2 días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-6">
              Información Personal
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Nombre Completo
                </label>
                {isEditing ? (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-charcoal-800">{user?.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Email
                </label>
                {isEditing ? (
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-charcoal-800">{user?.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Teléfono
                </label>
                {isEditing ? (
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-charcoal-800">{user?.phone}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Tipo de Negocio
                </label>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Building className="w-5 h-5 text-gray-400" />
                  <span className="text-charcoal-800 capitalize">{user?.businessType}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-6">
              Información del Negocio
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Nombre del Negocio
                </label>
                {isEditing ? (
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Building className="w-5 h-5 text-gray-400" />
                    <span className="text-charcoal-800">{user?.businessName}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  RUC / Documento Fiscal
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="ruc"
                    value={formData.ruc}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Número de RUC"
                  />
                ) : (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-charcoal-800">{user?.ruc || 'No especificado'}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Estado de la Cuenta
                </label>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className={`font-medium ${
                    user?.status === 'approved' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {user?.status === 'approved' ? 'Aprobada' : 'Pendiente de Aprobación'}
                  </span>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Dirección
                </label>
                {isEditing ? (
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                      placeholder="Dirección completa"
                    />
                  </div>
                ) : (
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <span className="text-charcoal-800">{user?.address || 'No especificada'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal-800 mb-6">
              Configuración de Seguridad
            </h3>
            
            <div className="space-y-4">
              <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-charcoal-800">Cambiar Contraseña</div>
                    <div className="text-sm text-charcoal-600">Actualiza tu contraseña de acceso</div>
                  </div>
                  <Edit className="w-5 h-5 text-gray-400" />
                </div>
              </button>
              
              <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-charcoal-800">Autenticación de Dos Factores</div>
                    <div className="text-sm text-charcoal-600">Añade una capa extra de seguridad</div>
                  </div>
                  <div className="text-sm text-yellow-600 font-medium">Configurar</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
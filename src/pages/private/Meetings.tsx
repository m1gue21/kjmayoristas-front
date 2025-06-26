import React, { useState } from 'react';
import { Calendar, Clock, Video, Plus, ExternalLink, User, MapPin, Phone, Mail } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Meetings: React.FC = () => {
  const { user } = useAuth();
  const [selectedMeetingType, setSelectedMeetingType] = useState<'consultation' | 'product-review' | 'business-planning' | 'other'>('consultation');

  const meetingTypes = [
    {
      id: 'consultation' as const,
      title: 'Consulta General',
      description: 'Asesoría sobre productos, precios y condiciones comerciales',
      duration: '30 minutos',
      icon: <User className="w-6 h-6 text-blue-500" />
    },
    {
      id: 'product-review' as const,
      title: 'Revisión de Productos',
      description: 'Presentación de nuevas colecciones y productos exclusivos',
      duration: '45 minutos',
      icon: <MapPin className="w-6 h-6 text-green-500" />
    },
    {
      id: 'business-planning' as const,
      title: 'Planificación Comercial',
      description: 'Estrategias de venta y crecimiento para tu negocio',
      duration: '60 minutos',
      icon: <Phone className="w-6 h-6 text-purple-500" />
    },
    {
      id: 'other' as const,
      title: 'Otro Tema',
      description: 'Reunión personalizada según tus necesidades específicas',
      duration: 'Variable',
      icon: <Mail className="w-6 h-6 text-gold-500" />
    }
  ];

  const upcomingMeetings = [
    {
      id: '1',
      title: 'Consulta sobre Nueva Colección',
      date: '2024-01-25',
      time: '15:00',
      type: 'consultation',
      status: 'confirmed',
      meetLink: 'https://meet.google.com/abc-defg-hij'
    },
    {
      id: '2',
      title: 'Revisión de Estrategia Comercial',
      date: '2024-01-28',
      time: '10:30',
      type: 'business-planning',
      status: 'pending',
      meetLink: null
    }
  ];

  const generateGoogleCalendarLink = (meetingType: typeof meetingTypes[0]) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 7); // Una semana desde hoy
    startDate.setHours(14, 0, 0, 0); // 2:00 PM

    const endDate = new Date(startDate);
    const durationMinutes = meetingType.duration === 'Variable' ? 60 : parseInt(meetingType.duration);
    endDate.setMinutes(endDate.getMinutes() + durationMinutes);

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `${meetingType.title} - Kevin Jewelry`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: `Reunión con Kevin Jewelry - ${meetingType.description}\n\nEmpresa: ${user?.businessName}\nContacto: ${user?.name}\nEmail: ${user?.email}`,
      location: 'Google Meet (enlace se enviará por confirmación)',
      sf: 'true',
      output: 'xml'
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const generateGoogleMeetLink = () => {
    return 'https://meet.google.com/new';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal-800 mb-2">
            Reuniones y Citas
          </h1>
          <p className="text-charcoal-600">
            Agenda reuniones con nuestro equipo comercial • {user?.businessName}
          </p>
        </div>
        
        <div className="flex gap-3">
          <a
            href={generateGoogleMeetLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all flex items-center space-x-2"
          >
            <Video className="w-5 h-5" />
            <span>Crear Meet</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-charcoal-800 mb-4">
          Agendar Nueva Reunión
        </h2>
        <p className="text-charcoal-600 mb-6">
          Selecciona el tipo de reunión que necesitas y te ayudaremos a programarla.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {meetingTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedMeetingType(type.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedMeetingType === type.id
                  ? 'border-gold-500 bg-gold-50'
                  : 'border-gray-200 bg-white hover:border-gold-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                {type.icon}
                <span className="font-semibold text-charcoal-800">{type.title}</span>
              </div>
              <p className="text-sm text-charcoal-600 mb-2">{type.description}</p>
              <div className="flex items-center space-x-1 text-xs text-gold-600">
                <Clock className="w-3 h-3" />
                <span>{type.duration}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={generateGoogleCalendarLink(meetingTypes.find(t => t.id === selectedMeetingType)!)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-all flex items-center justify-center space-x-2 group"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar en Google Calendar</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="border-2 border-gold-500 text-gold-600 px-6 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-all flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Solicitar Llamada</span>
          </button>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-charcoal-800">
            Próximas Reuniones
          </h2>
          <span className="text-sm text-charcoal-600">
            {upcomingMeetings.length} reuniones programadas
          </span>
        </div>

        {upcomingMeetings.length > 0 ? (
          <div className="space-y-4">
            {upcomingMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        meeting.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <h3 className="font-semibold text-charcoal-800">
                        {meeting.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        meeting.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {meeting.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-charcoal-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(meeting.date).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    {meeting.meetLink && (
                      <a
                        href={meeting.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-all flex items-center space-x-2"
                      >
                        <Video className="w-4 h-4" />
                        <span>Unirse</span>
                      </a>
                    )}
                    <button className="text-charcoal-600 hover:text-gold-600 p-2 rounded-lg hover:bg-gold-50 transition-all">
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
              No hay reuniones programadas
            </h3>
            <p className="text-charcoal-600 mb-4">
              Agenda tu primera reunión con nuestro equipo comercial.
            </p>
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-br from-cream-50 to-gold-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-charcoal-800 mb-4">
          Información de Contacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <div className="font-medium text-charcoal-800">Teléfono</div>
              <div className="text-sm text-charcoal-600">+51 999 123 456</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <div className="font-medium text-charcoal-800">Email</div>
              <div className="text-sm text-charcoal-600">reuniones@kevinjewelry.com</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-gold-600" />
            </div>
            <div>
              <div className="font-medium text-charcoal-800">Horarios</div>
              <div className="text-sm text-charcoal-600">Lun - Vie: 9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
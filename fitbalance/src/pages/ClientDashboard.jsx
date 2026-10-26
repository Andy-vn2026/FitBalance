import React from 'react';
import {
  Search,
  MapPin,
  Dumbbell,
  Apple,
  Activity,
  Users,
  Star,
  Home,
  Calendar,
  Bell,
  ChevronDown,
} from 'lucide-react';

// Imágenes
import personalImg from '../assets/personal.jpg';
import nutricionistaImg from '../assets/femalenutricio.jpg';
import coachImg from '../assets/fitnesscoach.jpg';
import yogaImg from '../assets/personalportrait.jpg';
import lifestyleImg from '../assets/lifestyle.png';

export function ClientDashboard({
  userName,
  onSelectProfessional,
  onGoToProgress,
  onGoToBooking,
}) {
  const categories = [
    {
      name: 'Entrenadores personales',
      desc: 'Rutinas y entrenamiento según tu objetivo',
      icon: Dumbbell,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      name: 'Nutricionistas',
      desc: 'Planes de alimentación saludable',
      icon: Apple,
      color: 'from-rose-400 to-pink-500',
    },
    {
      name: 'Clases y actividades',
      desc: 'Yoga, baile, calistenia y más',
      icon: Activity,
      color: 'from-sky-400 to-blue-500',
    },
    {
      name: 'Otros especialistas',
      desc: 'Fisioterapia, asesoría deportiva, etc.',
      icon: Users,
      color: 'from-violet-400 to-purple-500',
    },
  ];

  const professionals = [
    {
      id: 1,
      name: 'Carlos Ramírez',
      role: 'Entrenador personal',
      rating: 5.0,
      reviews: 48,
      location: 'Nuevo Chimbote',
      price: 'S/ 40',
      image: personalImg,
      tag: 'Presencial',
    },
    {
      id: 2,
      name: 'Lucía Torres',
      role: 'Nutricionista',
      rating: 4.9,
      reviews: 36,
      location: 'Nuevo Chimbote',
      price: 'S/ 50',
      image: nutricionistaImg,
      tag: 'Planes personalizados',
    },
    {
      id: 3,
      name: 'Diego Salazar',
      role: 'Entrenador funcional',
      rating: 4.8,
      reviews: 27,
      location: 'Nuevo Chimbote',
      price: 'S/ 35',
      image: coachImg,
      tag: 'Hipertrofia',
    },
    {
      id: 4,
      name: 'Valeria Mendoza',
      role: 'Instructora de Yoga',
      rating: 4.9,
      reviews: 42,
      location: 'Nuevo Chimbote',
      price: 'S/ 30',
      image: yogaImg,
      tag: 'Mindfulness',
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh-8rem)]">
      {/* ===================== SIDEBAR ===================== */}
      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 p-6 flex-col justify-between hidden lg:flex sticky top-20 h-[calc(100vh-5rem)]">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl shadow-lg shadow-emerald-500/20">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              FITBALANCE
            </span>
          </div>

          {/* Navegación */}
          <nav className="space-y-1.5">
            {/* Inicio */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25"
            >
              <Home className="w-5 h-5" />
              <span>Inicio</span>
            </button>

            {/* Buscar profesionales */}
            <button
              onClick={() => {
                const section = document.getElementById('profesionales');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all duration-200"
            >
              <Search className="w-5 h-5" />
              <span>Buscar profesionales</span>
            </button>

            {/* Mis servicios */}
            <button
              onClick={() => {
                if (typeof onGoToBooking === 'function') onGoToBooking();
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all duration-200"
            >
              <Calendar className="w-5 h-5" />
              <span>Mis servicios</span>
            </button>

            {/* Mi progreso */}
            <button
              onClick={() => {
                if (typeof onGoToProgress === 'function') onGoToProgress();
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 transition-all duration-200"
            >
              <Activity className="w-5 h-5" />
              <span>Mi progreso</span>
            </button>
          </nav>
        </div>

        {/* Footer del sidebar */}
        <div className="pt-6 border-t border-slate-200/60">
          <p className="text-[11px] text-slate-400 text-center">
            FitBalance • UTP 2026
          </p>
        </div>
      </aside>

      {/* ===================== CONTENIDO PRINCIPAL ===================== */}
      <main className="flex-1 p-6 lg:p-10 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">
              Hola, {userName || 'Aarón'} 👋
            </p>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              ¿Qué quieres{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                hacer hoy?
              </span>
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button className="relative p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:scale-105 transition-all duration-200 shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
            </button>

            <div className="flex items-center space-x-3 bg-white border border-slate-200 pl-1.5 pr-3 py-1.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <img
                src={lifestyleImg}
                alt="Avatar"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-sm font-bold text-slate-800 hidden sm:block">
                {userName || 'Aarón'}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Buscador premium */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center space-x-3 px-4 py-2.5 w-full">
              <Search className="w-5 h-5 text-emerald-500" />
              <input
                type="text"
                placeholder="¿Qué servicio necesitas hoy?"
                className="w-full text-sm outline-none text-slate-800 placeholder-slate-400 bg-transparent"
              />
            </div>

            <div className="hidden md:flex items-center space-x-2 px-4 py-2.5 border-l border-slate-200">
              <MapPin className="w-4 h-4 text-slate-400" />
              <select className="text-sm outline-none bg-transparent text-slate-700 font-medium">
                <option>Nuevo Chimbote</option>
                <option>Chimbote</option>
                <option>Virtual</option>
              </select>
            </div>

            <button className="w-full md:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98]">
              Buscar
            </button>
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-slate-800 text-lg">Explora por categoría</h3>
            <span className="text-sm font-semibold text-emerald-600">
              4 categorías
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`relative p-3 rounded-xl w-fit mb-4 bg-gradient-to-br ${cat.color} text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profesionales recomendados */}
        <div className="mb-12" id="profesionales">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-slate-800 text-lg">
              Profesionales recomendados
            </h3>
            <span className="text-sm font-semibold text-emerald-600">
              {professionals.length} disponibles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {professionals.map((pro) => (
              <div
                key={pro.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30">
                      {pro.tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 text-sm">{pro.name}</h4>
                  <p className="text-xs text-slate-500 mb-2">{pro.role}</p>

                  <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold mb-3">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{pro.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({pro.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                        Desde
                      </span>
                      <p className="text-base font-black text-slate-900">
                        {pro.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectProfessional(pro)}
                      className="bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/30"
                    >
                      Ver perfil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de progreso */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 text-white shadow-xl shadow-emerald-600/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-emerald-100 text-sm font-medium mb-1">
                Tu progreso esta semana
              </p>
              <h3 className="text-2xl font-black">¡Vas por muy buen camino!</h3>
              <p className="text-emerald-100 text-sm mt-1">
                8 entrenamientos • 12 días activos • 1,250 kcal
              </p>
            </div>
            <button
              onClick={() => {
                if (typeof onGoToProgress === 'function') onGoToProgress();
              }}
              className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-emerald-50 transition-all shadow-lg"
            >
              Ver mi progreso
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
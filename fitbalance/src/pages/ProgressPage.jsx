import React from 'react';
import { Activity, Scale, TrendingUp, Dumbbell, Plus } from 'lucide-react';
import progressImg from '../assets/progressfit.webp';

export function ProgressPage() {
  const stats = [
    { label: 'Peso actual', value: '72.5 kg', change: '-1.2 kg', positive: true },
    { label: '% Grasa', value: '18.4%', change: '-0.8%', positive: true },
    { label: 'Masa muscular', value: '34.1 kg', change: '+0.6 kg', positive: true },
    { label: 'Entrenamientos', value: '8', change: 'este mes', positive: true },
  ];

  const recentWorkouts = [
    { date: '24 Oct', name: 'Full Body A', exercises: 8, duration: '55 min' },
    { date: '22 Oct', name: 'Piernas + Core', exercises: 7, duration: '48 min' },
    { date: '20 Oct', name: 'Push (Pecho/Hombros)', exercises: 6, duration: '50 min' },
    { date: '18 Oct', name: 'Pull (Espalda/Bíceps)', exercises: 7, duration: '52 min' },
  ];

  const bodyMeasures = [
    { date: '25 Oct 2026', peso: 72.5, cintura: 81, grasa: 18.4 },
    { date: '18 Oct 2026', peso: 73.1, cintura: 82, grasa: 18.9 },
    { date: '11 Oct 2026', peso: 73.7, cintura: 83, grasa: 19.2 },
  ];

  return (
    <div className="space-y-8">
      {/* Header con imagen */}
      <div className="relative overflow-hidden rounded-3xl h-48 sm:h-56">
        <img
          src={progressImg}
          alt="Progreso"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        <div className="relative h-full flex flex-col justify-center px-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Mi Progreso Físico</h1>
          <p className="text-slate-300 text-sm max-w-md">
            Seguimiento de entrenamientos, medidas corporales y evolución real
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-xs text-slate-500 mb-1 font-medium">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            <p className={`text-xs font-bold mt-1 ${stat.positive ? 'text-emerald-600' : 'text-red-500'}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entrenamientos */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-slate-800 flex items-center space-x-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Dumbbell className="w-4 h-4 text-emerald-600" />
              </div>
              <span>Últimos entrenamientos</span>
            </h3>
          </div>

          <div className="space-y-3">
            {recentWorkouts.map((w, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors cursor-pointer group"
              >
                <div>
                  <p className="font-semibold text-sm text-slate-800 group-hover:text-emerald-700">
                    {w.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {w.exercises} ejercicios • {w.duration}
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-white px-2.5 py-1 rounded-lg">
                  {w.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Medidas */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-slate-800 flex items-center space-x-2">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Scale className="w-4 h-4 text-emerald-600" />
              </div>
              <span>Historial de medidas</span>
            </h3>
            <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1">
              <Plus className="w-3.5 h-3.5" />
              <span>Agregar</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-slate-500 border-b border-slate-100">
                  <th className="pb-3 font-semibold">Fecha</th>
                  <th className="pb-3 font-semibold">Peso</th>
                  <th className="pb-3 font-semibold">Cintura</th>
                  <th className="pb-3 font-semibold">% Grasa</th>
                </tr>
              </thead>
              <tbody>
                {bodyMeasures.map((m, idx) => (
                  <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                    <td className="py-3.5 text-slate-600">{m.date}</td>
                    <td className="py-3.5 font-bold text-slate-900">{m.peso} kg</td>
                    <td className="py-3.5 text-slate-600">{m.cintura} cm</td>
                    <td className="py-3.5 text-slate-600">{m.grasa}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Motivación */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative flex items-start space-x-4">
          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-lg">Evolución positiva</p>
            <p className="text-emerald-100 text-sm mt-1 max-w-lg">
              Has perdido <strong>1.2 kg</strong> y reducido <strong>0.8%</strong> de grasa corporal en las últimas 2 semanas. ¡La constancia es tu mejor aliada!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
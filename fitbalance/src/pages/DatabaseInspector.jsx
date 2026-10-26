import React, { useState } from 'react';
import { Database, Table, CheckCircle, Server } from 'lucide-react';

export function DatabaseInspector() {
  const tables = [
    { name: 'usuarios', desc: 'Credenciales, nombres, roles y autenticación', count: 12 },
    { name: 'perfiles_usuario', desc: 'Antropometría inicial, edad, género y meta', count: 12 },
    { name: 'profesionales', desc: 'Catálogo de especialistas y valoraciones', count: 8 },
    { name: 'servicios', desc: 'Ofertas de asesoría y planes de entrenamiento', count: 15 },
    { name: 'reservas', desc: 'Transacciones de contratación y estados de citas', count: 24 },
    { name: 'planes_nutricionales', desc: 'Pautas de alimentación estructuradas', count: 10 },
    { name: 'comidas_plan', desc: 'Detalle de comidas, calorías y macronutrientes', count: 42 },
    { name: 'rutinas', desc: 'Programas de entrenamiento semanal', count: 18 },
    { name: 'ejercicios', desc: 'Biblioteca de ejercicios con grupo muscular', count: 65 },
    { name: 'rutina_ejercicios', desc: 'Relación de series, repeticiones y descansos', count: 110 },
    { name: 'registro_entrenamiento', desc: 'Cargas reales levantadas en cada sesión', count: 85 },
    { name: 'actividad_fisica', desc: 'Registro de cardio, pasos y distancia', count: 30 },
    { name: 'medidas_corporales', desc: 'Histórico de pliegues, peso y músculo', count: 40 },
  ];

  const [selectedTable, setSelectedTable] = useState(tables[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Inspector de Base de Datos</h1>
        <p className="text-slate-500 text-sm mt-1">
          Estructura relacional de 13 tablas expuestas mediante PostgREST.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de tablas */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <h3 className="font-bold text-slate-800 px-3 py-2 text-sm flex items-center justify-between">
            <span>Tablas del Esquema Public</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-mono">
              13
            </span>
          </h3>

          <div className="space-y-1 max-h-[500px] overflow-y-auto">
            {tables.map((t) => (
              <button
                key={t.name}
                onClick={() => setSelectedTable(t)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs ${
                  selectedTable.name === t.name
                    ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20'
                    : 'hover:bg-slate-50 text-slate-700 font-medium'
                }`}
              >
                <div className="flex items-center space-x-2 truncate">
                  <Table className="w-4 h-4 shrink-0" />
                  <span className="font-mono truncate">{t.name}</span>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    selectedTable.name === t.name
                      ? 'bg-emerald-700 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {t.count} filas
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detalle de la tabla */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-xl font-mono font-bold text-slate-800">
                    {selectedTable.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-1">{selectedTable.desc}</p>
              </div>

              <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-100">
                <Server className="w-3.5 h-3.5" />
                <span>PostgREST API OK</span>
              </div>
            </div>

            <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner">
              <p className="text-slate-500 mb-2">// Endpoint REST disponible:</p>
              <p className="text-white">GET http://localhost:3000/{selectedTable.name}</p>
              <p className="text-white">POST http://localhost:3000/{selectedTable.name}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Restricciones de clave foránea e integridad activa</span>
            </span>
            <span className="font-mono">PostgreSQL 16</span>
          </div>
        </div>
      </div>
    </div>
  );
}
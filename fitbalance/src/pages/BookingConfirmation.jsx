import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  CheckCircle,
  User,
} from 'lucide-react';

export function BookingConfirmation({ professional, onBackToHome }) {
  const [step, setStep] = useState(1); // 1 = datos, 2 = confirmado
  const [form, setForm] = useState({
    fecha: '',
    hora: '10:00',
    metodoPago: 'yape',
  });

  // Si no hay profesional seleccionado, mostramos uno por defecto
  const pro = professional || {
    name: 'Carlos Ramírez',
    role: 'Entrenador personal',
    price: 'S/ 40',
    location: 'Nuevo Chimbote',
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!form.fecha) {
      alert('Selecciona una fecha');
      return;
    }
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">
          ¡Reserva confirmada!
        </h2>
        <p className="text-slate-500 mb-8">
          Tu sesión con <strong>{pro.name}</strong> ha sido agendada correctamente.
        </p>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-left mb-8 shadow-sm">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Profesional</span>
              <span className="font-semibold text-slate-800">{pro.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Fecha</span>
              <span className="font-semibold text-slate-800">{form.fecha}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Hora</span>
              <span className="font-semibold text-slate-800">{form.hora}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Monto</span>
              <span className="font-semibold text-emerald-600">{pro.price}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onBackToHome}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition-all"
        >
          Volver al Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBackToHome}
        className="flex items-center space-x-2 text-sm text-slate-500 hover:text-emerald-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al inicio</span>
      </button>

      <h1 className="text-2xl font-black text-slate-900 mb-2">Confirmar reserva</h1>
      <p className="text-slate-500 text-sm mb-8">
        Completa los datos para agendar tu sesión
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Resumen del profesional */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-fit">
          <div className="w-full h-36 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-400 font-bold">
            {pro.name}
          </div>
          <h3 className="font-bold text-slate-800">{pro.name}</h3>
          <p className="text-xs text-slate-500 mb-3">{pro.role}</p>
          <div className="flex items-center space-x-1 text-xs text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{pro.location}</span>
          </div>
          <div className="pt-3 border-t border-slate-100 mt-3">
            <span className="text-xs text-slate-400">Precio de la sesión</span>
            <p className="text-xl font-black text-emerald-600">{pro.price}</p>
          </div>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleConfirm}
          className="md:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Fecha de la sesión
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="date"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Hora
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={form.hora}
                onChange={(e) => setForm({ ...form, hora: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
              >
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Método de pago
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select
                value={form.metodoPago}
                onChange={(e) => setForm({ ...form, metodoPago: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
              >
                <option value="yape">Yape</option>
                <option value="plin">Plin</option>
                <option value="tarjeta">Tarjeta de crédito/débito</option>
                <option value="efectivo">Efectivo (presencial)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-600/20 mt-4"
          >
            Confirmar y pagar {pro.price}
          </button>
        </form>
      </div>
    </div>
  );
}
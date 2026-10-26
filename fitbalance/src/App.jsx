import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RegisterPage } from './pages/RegisterPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { BookingConfirmation } from './pages/BookingConfirmation';
import { ProgressPage } from './pages/ProgressPage';
import { DatabaseInspector } from './pages/DatabaseInspector';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('register'); // 'register' | 'app'
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'booking' | 'progress' | 'inspector'
  const [userName, setUserName] = useState('Aarón');
  const [selectedPro, setSelectedPro] = useState(null);

  const handleRegisterSuccess = (name) => {
    setUserName(name || 'Aarón');
    setCurrentScreen('app');
    setActiveTab('dashboard');
  };

  const handleSelectProfessional = (pro) => {
    setSelectedPro(pro);
    setActiveTab('booking');
  };

  // Pantalla de Registro
  if (currentScreen === 'register') {
    return <RegisterPage onRegisterSuccess={handleRegisterSuccess} />;
  }

  // Aplicación principal
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navbar superior */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenido principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <ClientDashboard
            userName={userName}
            onSelectProfessional={handleSelectProfessional}
            onGoToProgress={() => setActiveTab('progress')}
            onGoToBooking={() => setActiveTab('booking')}
          />
        )}

        {activeTab === 'booking' && (
          <BookingConfirmation
            professional={selectedPro}
            onBackToHome={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'progress' && <ProgressPage />}

        {activeTab === 'inspector' && <DatabaseInspector />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <div>
            FitBalance - Proyecto Integrador UTP (ATF2/3) • Desarrollado por Andy Villegas & Aaron Aponte
          </div>

          <button
            onClick={() => setActiveTab('inspector')}
            className="text-xs text-slate-400 hover:text-emerald-600 underline underline-offset-2 transition-colors"
          >
            Ver esquema de Base de Datos (Docente)
          </button>
        </div>
      </footer>
    </div>
  );
}
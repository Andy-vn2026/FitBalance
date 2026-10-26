// src/services/api.js
// Servicio de API para FitBalance
// Actualmente usa datos mock. Cuando tengas PostgREST corriendo,
// solo cambia BASE_URL y descomenta las llamadas reales.

const BASE_URL = 'http://localhost:3000'; // URL de PostgREST

// ========== HELPERS ==========
async function request(endpoint, options = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // PostgREST a veces devuelve 204 (sin contenido)
    if (response.status === 204) return null;

    return await response.json();
  } catch (error) {
    console.warn('API no disponible, usando datos mock:', error.message);
    return null; // Permite fallback a mock
  }
}

// ========== USUARIOS ==========
export async function registerUser(data) {
  // return await request('/usuarios', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });

  // Mock
  return {
    id_usuario: Math.floor(Math.random() * 1000),
    nombre: data.nombre,
    correo: data.correo,
    tipo_usuario: 'usuario',
  };
}

export async function loginUser(correo, password) {
  // return await request(`/usuarios?correo=eq.${correo}&password=eq.${password}`);
  return { id_usuario: 1, nombre: 'Aarón', correo };
}

// ========== PROFESIONALES ==========
export async function getProfessionals() {
  // const data = await request('/profesionales?select=*,usuarios(nombre)');
  // if (data) return data;

  // Mock
  return [
    {
      id: 1,
      name: 'Carlos Ramírez',
      role: 'Entrenador personal',
      rating: 5.0,
      reviews: 48,
      location: 'Nuevo Chimbote',
      price: 'S/ 40',
    },
    {
      id: 2,
      name: 'Lucía Torres',
      role: 'Nutricionista',
      rating: 4.9,
      reviews: 36,
      location: 'Nuevo Chimbote',
      price: 'S/ 50',
    },
    {
      id: 3,
      name: 'Diego Salazar',
      role: 'Entrenador funcional',
      rating: 4.8,
      reviews: 27,
      location: 'Nuevo Chimbote',
      price: 'S/ 35',
    },
    {
      id: 4,
      name: 'Valeria Mendoza',
      role: 'Clases de Yoga',
      rating: 4.9,
      reviews: 42,
      location: 'Nuevo Chimbote',
      price: 'S/ 30',
    },
  ];
}

// ========== RESERVAS ==========
export async function createReservation(data) {
  // return await request('/reservas', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });

  return {
    id_reserva: Math.floor(Math.random() * 1000),
    ...data,
    estado: 'confirmada',
  };
}

// ========== MEDIDAS CORPORALES ==========
export async function getBodyMeasures(userId) {
  // return await request(`/medidas_corporales?id_usuario=eq.${userId}&order=fecha.desc`);
  return [
    { fecha: '2026-10-25', peso: 72.5, cintura: 81, grasa_corporal: 18.4 },
    { fecha: '2026-10-18', peso: 73.1, cintura: 82, grasa_corporal: 18.9 },
    { fecha: '2026-10-11', peso: 73.7, cintura: 83, grasa_corporal: 19.2 },
  ];
}

export async function addBodyMeasure(data) {
  // return await request('/medidas_corporales', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });
  return { id_medida: Math.floor(Math.random() * 1000), ...data };
}

// ========== REGISTRO DE ENTRENAMIENTO ==========
export async function getWorkoutHistory(userId) {
  // return await request(`/registro_entrenamiento?id_usuario=eq.${userId}&order=fecha.desc`);
  return [];
}

export default {
  registerUser,
  loginUser,
  getProfessionals,
  createReservation,
  getBodyMeasures,
  addBodyMeasure,
  getWorkoutHistory,
};
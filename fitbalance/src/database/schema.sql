-- 1. Tabla: usuarios
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL CHECK (tipo_usuario IN ('usuario', 'profesional', 'admin')),
    foto VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla: perfiles_usuario
CREATE TABLE perfiles_usuario (
    id_perfil SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL UNIQUE REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    edad INT,
    sexo VARCHAR(10),
    altura DECIMAL(5,2),
    peso_actual DECIMAL(5,2),
    objetivo VARCHAR(50),
    nivel_actividad VARCHAR(50)
);

-- 3. Tabla: profesionales
CREATE TABLE profesionales (
    id_profesional SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL UNIQUE REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    especialidad VARCHAR(50) NOT NULL,
    descripcion TEXT,
    experiencia INT,
    ubicacion VARCHAR(100),
    modalidad VARCHAR(20) CHECK (modalidad IN ('presencial', 'virtual', 'ambos')),
    calificacion_promedio DECIMAL(3,2) DEFAULT 0.0
);

-- 4. Tabla: servicios
CREATE TABLE servicios (
    id_servicio SERIAL PRIMARY KEY,
    id_profesional INT NOT NULL REFERENCES profesionales(id_profesional) ON DELETE CASCADE,
    nombre_servicio VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(8,2) NOT NULL,
    duracion_min INT,
    tipo_servicio VARCHAR(30)
);

-- 5. Tabla: reservas
CREATE TABLE reservas (
    id_reserva SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_servicio INT NOT NULL REFERENCES servicios(id_servicio) ON DELETE CASCADE,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    estado VARCHAR(20) DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'confirmada', 'cancelada', 'completada')),
    metodo_pago VARCHAR(50),
    monto DECIMAL(8,2) NOT NULL
);

-- 6. Tabla: planes_nutricionales
CREATE TABLE planes_nutricionales (
    id_plan SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_profesional INT NOT NULL REFERENCES profesionales(id_profesional) ON DELETE CASCADE,
    nombre_plan VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    objetivo VARCHAR(50),
    estado VARCHAR(20) DEFAULT 'activo'
);

-- 7. Tabla: comidas_plan
CREATE TABLE comidas_plan (
    id_comida SERIAL PRIMARY KEY,
    id_plan INT NOT NULL REFERENCES planes_nutricionales(id_plan) ON DELETE CASCADE,
    dia VARCHAR(10) NOT NULL,
    tipo_comida VARCHAR(20) CHECK (tipo_comida IN ('desayuno', 'almuerzo', 'cena', 'snack')),
    descripcion TEXT,
    calorias INT,
    imagen VARCHAR(255)
);

-- 8. Tabla: rutinas
CREATE TABLE rutinas (
    id_rutina SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_profesional INT REFERENCES profesionales(id_profesional) ON DELETE SET NULL,
    nombre_rutina VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    objetivo VARCHAR(50),
    estado VARCHAR(20) DEFAULT 'activa'
);

-- 9. Tabla: ejercicios
CREATE TABLE ejercicios (
    id_ejercicio SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    grupo_muscular VARCHAR(50),
    descripcion TEXT,
    imagen VARCHAR(255),
    video VARCHAR(255)
);

-- 10. Tabla: rutina_ejercicios (Intermedia)
CREATE TABLE rutina_ejercicios (
    id_rutina_ejercicio SERIAL PRIMARY KEY,
    id_rutina INT NOT NULL REFERENCES rutinas(id_rutina) ON DELETE CASCADE,
    id_ejercicio INT NOT NULL REFERENCES ejercicios(id_ejercicio) ON DELETE CASCADE,
    series INT NOT NULL,
    repeticiones INT NOT NULL,
    peso_recomendado DECIMAL(5,2),
    descanso_seg INT,
    orden INT
);

-- 11. Tabla: registro_entrenamiento
CREATE TABLE registro_entrenamiento (
    id_registro SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    id_rutina_ejercicio INT NOT NULL REFERENCES rutina_ejercicios(id_rutina_ejercicio) ON DELETE CASCADE,
    fecha DATE DEFAULT CURRENT_DATE,
    series_realizadas INT,
    repeticiones_realizadas INT,
    peso_utilizado DECIMAL(5,2),
    tiempo_descanso INT
);

-- 12. Tabla: actividad_fisica
CREATE TABLE actividad_fisica (
    id_actividad SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    tipo_actividad VARCHAR(50) NOT NULL,
    tiempo_min INT,
    distancia_km DECIMAL(5,2),
    calorias INT,
    fecha DATE DEFAULT CURRENT_DATE,
    ubicacion VARCHAR(100),
    notas TEXT
);

-- 13. Tabla: medidas_corporales
CREATE TABLE medidas_corporales (
    id_medida SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    fecha DATE DEFAULT CURRENT_DATE,
    peso DECIMAL(5,2) NOT NULL,
    cintura DECIMAL(5,2),
    cadera DECIMAL(5,2),
    brazo DECIMAL(5,2),
    muslo DECIMAL(5,2),
    grasa_corporal DECIMAL(5,2),
    masa_muscular DECIMAL(5,2)
);

SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
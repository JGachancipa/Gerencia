# Base de Datos de Universidad

Este proyecto contiene el esquema de base de datos para gestionar la información de docentes, materias, horarios y estudiantes en una universidad. La base de datos está diseñada en MySQL y almacena información relevante para generar horarios y administrar clases en bloques horarios específicos, tanto en la mañana como en la noche.

## Estructura de la Base de Datos

### Tablas Principales

1. **teachers**: Almacena información sobre los docentes.
2. **subjects**: Almacena la información de las materias.
3. **time_blocks**: Define los bloques horarios.
4. **schedules**: Almacena la asignación de clases de los docentes.
5. **students**: Almacena la información de los estudiantes.
6. **student_schedules**: Define los horarios asignados a cada estudiante.
7. **teacher_subjects**: Relaciona las materias que los docentes enseñan y los horarios específicos.

### Esquema de Base de Datos

A continuación se presenta el script SQL que crea las tablas y las relaciones.

```sql
-- Crear la base de datos
-- Tabla de profesores
CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabla de asignaturas
CREATE TABLE subjects (
    subject_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabla de estudiantes
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabla de bloques de tiempo
CREATE TABLE time_blocks (
    block_id INT PRIMARY KEY,
    block_time VARCHAR(100) NOT NULL
);

-- Tabla de asignaturas de profesores
CREATE TABLE teacher_subjects (
    teacher_id INT,
    subject_id INT,
    weekday ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday') NOT NULL,
    block_id INT NOT NULL,
    PRIMARY KEY (teacher_id, subject_id, weekday),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    FOREIGN KEY (block_id) REFERENCES time_blocks(block_id),
    UNIQUE (teacher_id, weekday, block_id)
);

-- Tabla de asignaturas de estudiantes
CREATE TABLE student_subjects (
    student_id INT,
    teacher_id INT,
    subject_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    PRIMARY KEY (student_id, teacher_id, subject_id)
);

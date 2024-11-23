import React, { useState, FormEvent } from "react";

// Define la estructura de la respuesta esperada
interface ScheduleResponse {
    schedule: Subject[];
    message: string;
}

interface Subject {
    nrc: number;
    materia: string;
    profesor: string;
    horario: string;
    creditos: number;
    dias: string[]; // Aquí se agrega la propiedad "dias"
    campus: string; // Aquí se agrega la propiedad "campus"
}

const subjects: Subject[] = [
    { "nrc": 123456, "materia": "Estructuras de Datos", "profesor": "Carlos Pérez", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 234567, "materia": "Bases de Datos", "profesor": "Ana Gómez", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 345678, "materia": "Redes de Computadores", "profesor": "Luis Martínez", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 456789, "materia": "Sistemas Operativos", "profesor": "María López", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 567890, "materia": "Ingeniería de Software", "profesor": "Pedro Sánchez", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 678901, "materia": "Algoritmos Avanzados", "profesor": "Carolina Jiménez", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 789012, "materia": "Desarrollo Web", "profesor": "Fernando Castillo", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 890123, "materia": "Programación Orientada a Objetos", "profesor": "Laura Medina", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 901234, "materia": "Inteligencia Artificial", "profesor": "Santiago Vargas", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 123789, "materia": "Arquitectura de Computadores", "profesor": "Luisa Mora", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 124567, "materia": "Seguridad Informática", "profesor": "Andrés Gómez", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 132456, "materia": "Cálculo Diferencial", "profesor": "Julieta Romero", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 145678, "materia": "Matemáticas Discretas", "profesor": "Juan Castaño", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 156789, "materia": "Teoría de la Computación", "profesor": "Valeria Peña", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 167890, "materia": "Ingeniería de Requisitos", "profesor": "David Ramírez", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 178901, "materia": "Desarrollo de Aplicaciones Móviles", "profesor": "Lucía Quintero", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 189012, "materia": "Machine Learning", "profesor": "Camilo Salazar", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 190123, "materia": "Programación Funcional", "profesor": "Paola Ocampo", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 212345, "materia": "Ciencia de Datos", "profesor": "Sergio Correa", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 223456, "materia": "Diseño de Interfaces", "profesor": "Alejandra Restrepo", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 234567, "materia": "Gestión de Proyectos", "profesor": "Federico Arango", "horario": "8:20 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 345678, "materia": "Redes de Computadores Avanzadas", "profesor": "Martín Pérez", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 456789, "materia": "Arquitectura de Software", "profesor": "Carlos Ramírez", "horario": "2:00 a 4:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 567890, "materia": "Tecnologías Emergentes", "profesor": "Marta López", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 678901, "materia": "Análisis de Sistemas", "profesor": "Ricardo Díaz", "horario": "12:00 a 2:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 789012, "materia": "Programación de Sistemas", "profesor": "Andrés Ramírez", "horario": "8:00 a 10:00", "creditos": 4, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 890123, "materia": "Estadística Avanzada", "profesor": "Carlos Gómez", "horario": "4:00 a 6:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 901345, "materia": "Simulación de Sistemas", "profesor": "Antonio García", "horario": "6:40 a 9:40", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 912456, "materia": "Tecnologías de la Información", "profesor": "Pedro Gutiérrez", "horario": "6:40 a 8:10", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 923567, "materia": "Desarrollo de Software Ágil", "profesor": "Laura Rodríguez", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 934678, "materia": "Computación Cuántica", "profesor": "Víctor Martínez", "horario": "2:00 a 4:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 945789, "materia": "Desarrollo de Juegos", "profesor": "José Silva", "horario": "10:00 a 12:00", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 956890, "materia": "Computación en la Nube", "profesor": "Luis Ortega", "horario": "12:00 a 2:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 967901, "materia": "Seguridad en Redes", "profesor": "Lucía Castillo", "horario": "6:40 a 9:40", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 978012, "materia": "Sistemas Distribuidos", "profesor": "Santiago Hernández", "horario": "2:00 a 4:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 989123, "materia": "Redes Sociales y Tecnología", "profesor": "Carolina Fernández", "horario": "4:00 a 6:00", "creditos": 3, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 100234, "materia": "Ética Profesional", "profesor": "Eduardo Morales", "horario": "10:00 a 12:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 101345, "materia": "Análisis y Diseño de Algoritmos", "profesor": "Raúl Díaz", "horario": "6:40 a 9:40", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 102456, "materia": "Computación Gráfica", "profesor": "Carlos Torres", "horario": "12:00 a 2:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 103567, "materia": "Desarrollo de Aplicaciones Backend", "profesor": "Sandra Gómez", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 104678, "materia": "Desarrollo de Aplicaciones Frontend", "profesor": "Carlos Pérez", "horario": "8:20 a 9:40", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 103567, "materia": "Desarrollo de Aplicaciones Backend", "profesor": "Sandra Gómez", "horario": "6:40 a 8:10", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 104678, "materia": "Desarrollo de Aplicaciones Frontend", "profesor": "Carlos Pérez", "horario": "8:20 a 9:40", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 105789, "materia": "Bases de Datos NoSQL", "profesor": "Luis Medina", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 106890, "materia": "Algoritmos de Optimización", "profesor": "Carlos Morales", "horario": "2:00 a 4:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 107901, "materia": "Estrategias de Desarrollo de Software", "profesor": "Marta Fernández", "horario": "4:00 a 6:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 108012, "materia": "Programación en Python", "profesor": "José Hernández", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "city campus" },
    { "nrc": 109123, "materia": "Diseño y Arquitectura de Software", "profesor": "Raúl Sánchez", "horario": "8:00 a 10:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 110234, "materia": "Gestión de Bases de Datos", "profesor": "Paula Ruiz", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "city campus" },
    { "nrc": 111345, "materia": "Programación de Microservicios", "profesor": "Federico González", "horario": "2:00 a 4:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "campus principal" },
    { "nrc": 112456, "materia": "Desarrollo de Aplicaciones Móviles", "profesor": "Lucía Rodríguez", "horario": "12:00 a 2:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "city campus" },
    { "nrc": 113567, "materia": "Análisis de Requisitos de Software", "profesor": "Raquel Pérez", "horario": "4:00 a 6:00", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 114678, "materia": "Gestión de Proyectos Ágiles", "profesor": "Jorge Salazar", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 115789, "materia": "Redes de Computadores Avanzadas", "profesor": "Natalia López", "horario": "8:00 a 10:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 116890, "materia": "Diseño de Interfaces de Usuario", "profesor": "Esteban Gutiérrez", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 117901, "materia": "Ciberseguridad en Aplicaciones Web", "profesor": "Juan Álvarez", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 118012, "materia": "Programación Funcional", "profesor": "Carlos Ortega", "horario": "2:00 a 4:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 119123, "materia": "Machine Learning y Deep Learning", "profesor": "María López", "horario": "6:40 a 9:40", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 120234, "materia": "Computación Cuántica", "profesor": "Pedro Torres", "horario": "8:00 a 10:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 121345, "materia": "Desarrollo de Videojuegos", "profesor": "José López", "horario": "4:00 a 6:00", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 122456, "materia": "Introducción a la Inteligencia Artificial", "profesor": "Santiago Martín", "horario": "2:00 a 4:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 123567, "materia": "Computación en la Nube", "profesor": "Ricardo García", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 124678, "materia": "Redes de Comunicación", "profesor": "Ana Ramos", "horario": "12:00 a 2:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 125789, "materia": "Sistemas Distribuidos", "profesor": "Daniel Pérez", "horario": "6:40 a 9:40", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 126890, "materia": "Gestión de Infraestructuras IT", "profesor": "Sofía Sánchez", "horario": "4:00 a 6:00", "creditos": 3, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 127901, "materia": "Optimización de Algoritmos", "profesor": "Valeria Mendoza", "horario": "8:00 a 10:00", "creditos": 4, "dias": ["lunes", "miércoles"], "campus": "campus principal" },
    { "nrc": 128012, "materia": "Arquitectura de Computadores", "profesor": "Carlos Ramírez", "horario": "10:00 a 12:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" },
    { "nrc": 129123, "materia": "Fundamentos de Programación", "profesor": "Mónica García", "horario": "6:40 a 9:40", "creditos": 3, "dias": ["lunes", "miércoles", "viernes"], "campus": "campus principal" },
    { "nrc": 130234, "materia": "Desarrollo Ágil de Software", "profesor": "José Hernández", "horario": "4:00 a 6:00", "creditos": 4, "dias": ["martes", "jueves"], "campus": "city campus" }

];



const ScheduleForm: React.FC = () => {
    const [studentId, setStudentId] = useState<string>("");
    const [preferences, setPreferences] = useState<string>("");
    const [scheduleResponse, setScheduleResponse] = useState<ScheduleResponse | null>(null);
    const [subjectName, setSubjectName] = useState<string>("");
    const [professorName, setProfessorName] = useState<string>("");
    const [campus, setCampus] = useState<string>("");
    const [selectedCampus, setSelectedCampus] = useState<string>("");
    const [selectedDays, setSelectedDays] = useState<{ day: string; timeSlot: string }[]>([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectedDays([...selectedDays, { day: name, timeSlot: "" }]);
        } else {
            setSelectedDays(selectedDays.filter((item) => item.day !== name));
        }
    };

    // Manejador de campus
    const handleCampusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCampus(e.target.value);
    };

    // Manejador de días
    const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const day = e.target.name;
        setSelectedDays((prevDays) =>
            prevDays.some(item => item.day === day)
                ? prevDays.filter(item => item.day !== day)
                : [...prevDays, { day, timeSlot: "" }]
        );
    };

    // Manejador de horario
    const handleTimeSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeSlot(e.target.value);
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Filtrar por los días seleccionados, campus y horario
        const filteredSubjects = subjects.filter((subject) => {
            const isCorrectCampus = selectedCampus ? subject.campus.toLowerCase().includes(selectedCampus.toLowerCase()) : true;
            const isCorrectDays = selectedDays.length
                ? selectedDays.every((item) => subject.dias.includes(item.day.toLowerCase()))  // Accede a day aquí
                : true;

            const isCorrectTimeSlot = selectedTimeSlot ? subject.horario === selectedTimeSlot : true;
            const isCorrectMateria = subject.materia.toLowerCase().includes(subjectName.toLowerCase());
            const isCorrectProfesor = subject.profesor.toLowerCase().includes(professorName.toLowerCase());

            return isCorrectCampus && isCorrectDays && isCorrectTimeSlot && isCorrectMateria && isCorrectProfesor;
        });

        if (filteredSubjects.length > 0) {
            setScheduleResponse({
                schedule: filteredSubjects,  // Asignar array de objetos Subject
                message: "Horarios disponibles para la búsqueda."
            });
        } else {
            setScheduleResponse({
                schedule: [],  // Asignar array vacío en lugar de una cadena
                message: "No se encontraron horarios que coincidan con los filtros seleccionados."
            });
        }
    };


    return (
        <div style={{ width: '100%', marginLeft: '100px' }}>
        <div className="container mt-5 justify-content-center mt-4" >
            <div className="card shadow-lg" >
                <div className="card-header  text-white text-center header">
                    <h4>Filtros de Materias</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Materia</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={subjectName}
                                    onChange={(e) => setSubjectName(e.target.value)}
                                    placeholder="Escribe el nombre de la materia"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Profesor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={professorName}
                                    onChange={(e) => setProfessorName(e.target.value)}
                                    placeholder="Nombre del profesor"
                                />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Campus</label>
                            <input
                                type="text"
                                className="form-control"
                                value={campus}
                                onChange={handleCampusChange}
                                placeholder="Ingresa el campus"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Días</label>
                            <div className="row">
                                {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((day) => (
                                    <div className="col-md-4 col-sm-6" key={day}>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name={day}
                                                onChange={handleDayChange}
                                                id={`check-${day}`}
                                            />
                                            <label className="form-check-label" htmlFor={`check-${day}`}>
                                                {day}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label">Horario</label>
                            <select
                                className="form-select"
                                onChange={handleTimeSlotChange}
                                value={selectedTimeSlot}
                            >
                                <option value="">Seleccione un horario</option>
                                <option value="6:40 a 8:10">6:40 a 8:10</option>
                                <option value="8:20 a 9:40">8:20 a 9:40</option>
                                <option value="6:40 a 9:40">6:40 a 9:40</option>
                            </select>
                        </div>
                        <div className="form-group mb-3 text-center">
                            <button type="submit" className="btn btn-success btn-lg">
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
        {scheduleResponse && (
            <div className="container mt-5" style={{ width: '100%' }}>
                <div className="card shadow-lg">
                    <div className="card-header bg-success text-white">
                        <h5 className="mb-0">Resultado de la búsqueda</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-striped table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">NRC</th>
                                    <th scope="col">Materia</th>
                                    <th scope="col">Profesor</th>
                                    <th scope="col">Horario</th>
                                    <th scope="col">Días</th>
                                    <th scope="col">Créditos</th>
                                    <th scope="col">Campus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduleResponse.schedule.map((Subject) => (
                                    <tr key={Subject.nrc}>
                                        <td>{Subject.nrc}</td>
                                        <td>{Subject.materia}</td>
                                        <td>{Subject.profesor}</td>
                                        <td>{Subject.horario}</td>
                                        <td>{Subject.dias.join(", ")}</td>
                                        <td>{Subject.creditos}</td>
                                        <td>{Subject.campus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="text-center mt-3">{scheduleResponse.message}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
    
    );
};

export default ScheduleForm;
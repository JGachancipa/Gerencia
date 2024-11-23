import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import subjects from '../data/subjectsAvailable.json'; // Ruta al archivo JSON
import '../styles/Header.css'; 

const SubjectTable = () => {
    return (
        <div className="d-flex justify-content-center align-items-center "style={{ width: '100%' }}>
            <div className="card shadow-lg" >
                <div className="card-header text-white text-center header " >
                    <h4>Lista de Materias Disponibles</h4>
                </div>
                <div className="card-body p-4">
                    <table className="table table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>NRC</th>
                                <th>Materia</th>
                                <th>Semestre</th>
                                <th>Créditos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map(subject => (
                                <tr key={subject.id}>
                                    <td>{subject.id}</td>
                                    <td>{subject.nombre}</td>
                                    <td>{subject.semestre}</td>
                                    <td>{subject.creditos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubjectTable;

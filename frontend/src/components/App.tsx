import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubjectTable from './studentTable';
import Header from './header';
import ScheduleForm from './pruebas1';
import '../styles/App.css'; // Archivo adicional para estilos específicos

const App = () => {
  return (
    <div className="scroll">
      <Header />
      <div className="schedule-section text-center">
        <h1 className="schedule-title">Horario - Ingeniería de Sistemas</h1>
        <h2 className="schedule-subtitle">Semestre de Agosto-Diciembre</h2>
      </div>
      <div className='d-flex justify-content-center align-items-baseline w-100 mb-5'>
      <ScheduleForm />
      <SubjectTable />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormularioDosColumnas = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card" style={{ maxWidth: '800px', width: '100%' }}>
                <div className="card-header text-center">
                    <h2>Formulario de Registro</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        placeholder="Ingresa tu nombre"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Ingresa tu correo electrónico"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pais">País</label>
                                    <select className="form-control" id="pais">
                                        <option>Selecciona tu país</option>
                                        <option>México</option>
                                        <option>Colombia</option>
                                        <option>Argentina</option>
                                        <option>Perú</option>
                                        <option>Chile</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="apellido"
                                        placeholder="Ingresa tu apellido"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Ingresa tu contraseña"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="ciudad">Ciudad</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ciudad"
                                        placeholder="Ingresa tu ciudad"
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3">
                            Aplicar Filtros
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioDosColumnas;

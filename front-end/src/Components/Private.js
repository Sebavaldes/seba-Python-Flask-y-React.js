import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function PrivatePage() {
    const navigate = useNavigate();

    // Función para cerrar sesión
    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Página privada</h2>
            <p>Bienvenido a la página privada.</p>
            <Button variant="primary" onClick={handleLogout}>Cerrar sesión</Button>
        </div>
    );
}

export default PrivatePage;

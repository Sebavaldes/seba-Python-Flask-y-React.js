import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                // Redirigir al usuario a la página de inicio de sesión después del registro
                navigate('/');
            } else {
                console.error('Error al registrarse');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (


        <div className="container">
            <h2>Registro de usuario</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse.
                </Button>
            </Form>
            {/* Enlace para dirigirse a la página de inicio de sesión */}
            <p>¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link></p>
        </div>
    );
}

export default Signup;

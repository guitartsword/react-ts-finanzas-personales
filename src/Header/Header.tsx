import React from 'react';
import './Header.scss';

export default function Login() {
    return <header className="header">
        <div className="logo" ><img src="/logo.svg" alt="logo" /> </div>
        <h1 className="title"> React con Typescript </h1>
        <div className="actions"> <a>Entrar</a> | <a>Registrarse</a> </div>
    </header>
}
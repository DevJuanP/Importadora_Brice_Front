import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'

const Login = () => {
  const [nombre, setnombre] = useState('')
  const [contraseña, setcontraseña] = useState('')
  const [mensaje, setmensaje] = useState('')
  const navigate = useNavigate()

  const entrar = (e) => {
    e.preventDefault()
    if (nombre.trim() === '' || contraseña.trim() === '') {
      setmensaje('Por favor, completa todos los campos.')
      return
    }

    console.log('Nombre:', nombre)
    console.log('Contraseña:', contraseña)
    setmensaje('Sesión iniciada correctamente.')
    setnombre('')
    setcontraseña('')
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }
  return (
    <div className="contenedor">
      <div className="login">
        <i
          class="bi bi-person-square"
          style={{ fontSize: '100px', color: '#464646' }}
        ></i>
        <p className="Iniciartxt">¡Bienvenido a Importadora Brice!</p>
        <p className="texto1">
          Ingresa tu usuario y contraseña para iniciar sesión
        </p>
        <div>
          <div className="entrada">
            <i class="bi bi-person-fill icon-per"></i>
            <input
              className="input-text"
              type="text"
              placeholder="Correo electronico o DNI"
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="entrada">
            <i class="bi bi-lock-fill icon-per"></i>
            <input
              className="input-text"
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setcontraseña(e.target.value)}
            />
          </div>
          <p
            style={{
              color:
                mensaje === 'Sesión iniciada correctamente.' ? 'green' : 'red',
            }}
          >
            {mensaje}
          </p>
        </div>
        <div className="recordar">
          <input type="checkbox" />
          <p>Recuerdame</p>
        </div>
        <button className="BTN" onClick={entrar}>
          Iniciar sesión
        </button>
        <div>
          <button className="google">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google logo"
              style={{ width: '24px', height: '24px' }}
            />
            <p className="mb-0">Continue con google</p>
          </button>
          <div className="text-center">
            ¿No tienes cuenta?
            <Link
              href="#"
              className="text-decoration-none fw-bold ms-2"
              style={{ color: '#464646' }}
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login

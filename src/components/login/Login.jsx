import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';




import './Login.css'

const Login = () => {

  const[nombre, setnombre]=useState("")
  const[contraseña, setcontraseña]=useState("") 
  const[mensaje, setmensaje]=useState("")
  const navigate = useNavigate();
  

  const entrar = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || contraseña.trim() === "") {
      setmensaje("Por favor, completa todos los campos.");
      return
    }
   
    console.log("Nombre:", nombre);
    console.log("Contraseña:", contraseña);
    setmensaje("Sesión iniciada correctamente.");
    setnombre("");
    setcontraseña("");
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  return (
   <div className="contenedor">
    <div className="login">
      <div className='icono'>
        <img  src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt='login-icon'  style={{ width: '120px', height: '120px' }} />
      </div>
      <p id='Iniciartxt'>Inicia sesión</p>
       <div >
        <div className='entrada' >
        <img  src="https://cdn-icons-png.flaticon.com/512/456/456212.png"  alt="Icono de usuario"  style={{ width: '30px', marginRight: '30px' }} />
        <input type="text" placeholder='Usuario' value={nombre} onChange={(e) => setnombre(e.target.value)} />
        </div>
      </div>
      <div >
        <div className='entrada'>
          <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt=""  style={{ width: '30px', marginRight: '30px' }}  />
          <input type="text" placeholder='Contraseña' value={contraseña} onChange={(e) => setcontraseña(e.target.value)} />
        </div>
        <p style={{ color: mensaje === "Sesión iniciada correctamente." ? 'green' : 'red' }}>{mensaje}</p>
      </div>
      <div className='recordar'>
        <input type="checkbox" />
        <p>Recuerdame</p>
      </div>
      <div className='BTN'onClick={entrar}>
        Iniciar sesión
      </div>
      <div>
         <div className='google'>
          <img  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google logo"  style={{ width: '100px', height: '45px', marginRight: '5px' }}  />
          <div>Continue con google</div>
        </div>
        <div>No tienes cuenta?
          <a href="/">Regístrate</a>
        </div>
       
      </div>
    </div>
  </div>
    
  )
}
export default Login;

import axios from 'axios'
import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'

const Banner = () => {
  const [imgs, SetImgs] = useState([])

  useEffect( () => {

    const getIngsBanner = async () =>{
      try {
        const result = await axios.get('http://localhost:4000/banner')
        SetImgs(result.data)
        console.log('imgs banner', imgs)
      } catch (error) {
        console.log(error)
      }
    }

    getIngsBanner();

    return () => {
      
    }
  }, )

  /*    const [user, setUser] = useState();

    const prueba = async () => {
        try {
            const result = await axios.get('http://localhost:4000/users')
            setUser(result.data)
        } catch (error) {
            console.log(error); 
        }
    } 

        { <ol>{user && user.map(u =>(
            <li key={u.Id}>{u.Nombre}</li>
        )) }</ol>
        <button type="button" onClick={prueba}>Mostrar usuarios</button> }*/

  return (
    <div className="container d-flex justify-content-center align-items-center p-5">
      <div
        className="carousel slide col-12 col-md-12 col-lg-12"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-cont-item h-40">
          <div className="carousel-item active">
            <img
              src={imgs[0]}
              className=""
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src={imgs[1]} className="" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imgs[2]} className="" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Banner

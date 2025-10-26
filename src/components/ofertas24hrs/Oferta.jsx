import React from 'react'
import './Oferta.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Oferta() {
  const [ofertas, SetOfertas] = useState([])

  useEffect(() => {
    const getOfertas = async () => {
      try {
        const result = await axios.get(
          'http://localhost:4000/productos/Electrónica y Tecnología'
        )
        SetOfertas(result.data)
        //console.log('imgs banner', ofertas)
        console.log('Datos obtenidos:', result.data)
      } catch (error) {
        console.log(error)
      }
    }

    getOfertas()

    return () => {}
  })

  return (
    <div className="container">
      <div className="row text-white d-flex justify-content-center p-4 gap-4">
        {ofertas.slice(0, 2).map((oferta, index) => (
          <div
            className="card card-gr p-0 col-12 col-md-12 col-lg-5"
            key={index}
          >
            <img src={oferta.img} alt="" className="card-header p-0" />
            <h3 className="card-text text-center">{oferta.nombre} </h3>
            <h4 className="card-precio text-center">S/ {oferta.precio} </h4>
          </div>
        ))}

        {ofertas.slice(3, 7).map((oferta, index) => (
          <div className="card card-pe p-0 col-md-5 col-lg-2" key={index}>
            <img src={oferta.img} alt="" className="card-header p-0" />
            <h5 className="card-text text-center">{oferta.nombre} </h5>
            <h5 className="card-precio text-center">S/ {oferta.precio} </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

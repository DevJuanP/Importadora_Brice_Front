import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import Oferta from './components/ofertas24hrs/Oferta'


function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />

        <Oferta />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

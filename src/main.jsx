import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './pages/login/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import ThemeCustomization from './themes/index.jsx'
import ScrollTop from './components/ScrollTop.jsx'

import { lazy } from 'react'

import DashboardLayout from './layout/Dashboard/index.jsx'
import Loadable from './components/Loadable.jsx'

import ProductList from './components/ProductList/ProductList.jsx'

const DashboardDefault = Loadable(
  lazy(() => import('./pages/dashboard/Default.jsx'))
)
const Typography = Loadable(
  lazy(() => import('./pages/component-overview/typography.jsx'))
)
const Color = Loadable(
  lazy(() => import('./pages/component-overview/color.jsx'))
)
const Shadow = Loadable(
  lazy(() => import('./pages/component-overview/shadows.jsx'))
)
const SamplePage = Loadable(
  lazy(() => import('./pages/extra-pages/sample-page.jsx'))
)



const RegisterPage = Loadable(lazy(() => import('./pages/auth/Register.jsx')));

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/*aquí ponen las otras rutas para que rendericen en el Oulet de app.jsx*/}
         
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
         <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
=======
=======
>>>>>>> 7e60cb9468e1caa6d40fde9d1742d43646839033
    <ThemeCustomization>
      <ScrollTop>
        <BrowserRouter>
          <Routes>
            {/* Layout principal (tu App.jsx con Header y Footer) */}
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="productos" element={<ProductList />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>

            {/* Página de login fuera del layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Rutas del Dashboard (con su propio layout) */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardDefault />} />
              <Route path="default" element={<DashboardDefault />} />
              <Route path="typography" element={<Typography />} />
              <Route path="color" element={<Color />} />
              <Route path="shadow" element={<Shadow />} />
              <Route path="sample-page" element={<SamplePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ScrollTop>
    </ThemeCustomization>
<<<<<<< HEAD
 54407d973df0be11cbf3bc716c244e00ea30e691
=======
>>>>>>> 7e60cb9468e1caa6d40fde9d1742d43646839033
  </StrictMode>
)

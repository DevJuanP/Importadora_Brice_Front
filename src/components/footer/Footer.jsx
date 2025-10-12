import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="datos">
        <div className="MediosDePago">
            <h3>Medios de pago</h3> 
            <div className="imgs">
            <img src="https://logosenvector.com/logo/img/logo-yape-negro-38214.png" alt="Medios de pago" />
            <img src="https://logosenvector.com/logo/img/icon-plin-38302.png" alt="Medios de pago" />
            <img src="https://tse1.mm.bing.net/th/id/OIP.U962GH1FINqCjHDKFW0QBAHaGE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Medios de pago" />
           </div>

        </div>
       <div className="RedesSociales">
         <h3>Redes Sociales</h3>
          <div className="imgs">
            <img src="https://c0.klipartz.com/pngpicture/259/480/gratis-png-iconos-de-computadora-facebook-inc-facebook.png" alt="" />
            <img src="https://thumbs.dreamstime.com/b/logotipo-de-instagram-blanco-y-negro-cuadrado-en-con-archivo-ai-vectorial-f%C3%A1cil-editar-fondo-alta-resoluci%C3%B3n-192780656.jpg" alt="Instagram" />
            <img src="https://img.freepik.com/fotos-premium/icone-de-ilustracao-do-logotipo-do-tiktok_895118-4885.jpg" alt="TikTok" />
         </div>
      </div>

        <div className="InfoContacto">
            <h3>Informacion de contacto</h3>
            <div className="imgs">
              <img src="https://img.favpng.com/0/8/18/computer-icons-microsoft-outlook-microsoft-office-png-favpng-N5yPRPh6gAJmugk3xAaz3VATP.jpg" alt="" />
              <img src="https://static.vecteezy.com/system/resources/previews/021/514/902/original/google-gmail-symbol-logo-black-design-illustration-free-vector.jpg" alt="" />
              <img src="https://tse4.mm.bing.net/th/id/OIP.G6hwHCTGa4-8xdd4AHsBtQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
        </div>
     
        
       </div> 
      
    </footer>
    
  )
}

export default Footer
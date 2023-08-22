import React from 'react'
import './footer.css'

import { Container , Row , Col} from 'reactstrap'




function Footer() {
  return (
    <section className="footer-section" id='footer'>
    
      <div className="content-footer">
        <h2>SUIVEZ-NOUS SUR LES RÉSEAUX SOCIAUX</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/company/bigup-conseils/" target="_blank">
            <img src="/assets/images/linkedin.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/assets/images/instagram.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="/assets/images/facebook.svg" alt="" />
          </a>
        </div>
      </div>


      <Row className='footer-row'>
        <Col lg='3' md='3'>
            <h5 className='titles'>Bigup-Conseils</h5>
            <hr />



        </Col>

        <Col lg='3' md='3'>
            <h5 className='titles'>Liens Utiles</h5>
            <hr />

            <div className="menu">
                            <a href="#section-info">Accueil</a>
                        </div>

          
            <div className='menu'><a href="#company">Société</a></div>
            <div className='menu'> <a href="#expertise">Expertise</a></div>
            <div className='menu'><a href="#footer">Contact</a></div>
            
        </Col>

        <Col lg='3' md='3'>
        <h5 className='titles'>Contact</h5>
            <hr />
            <div className='contact'>
            <i class="ri-home-5-line"></i> Courbevoie, Île-de-France 92400, FR
            </div>

            <div className='contact'>
            <i class="ri-phone-fill"></i> +33 7 50 14 48 37
            </div>

            <div className="contact">
<i class="ri-whatsapp-fill"></i> +33 7 50 14 48 37
</div>

            <div className='contact'>
            <i class="ri-mail-line" > </i>rs@bigup-conseils.fr 
            </div>

           
            
        </Col>

        <div className='copyright'>Copyright : Bigup-Conseils</div>

      </Row>
   
  </section>
  )
}

export default Footer

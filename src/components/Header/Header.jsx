import React from 'react'
import './header.css'
import { Container } from 'reactstrap'


function Header() {
  return (
<section id="menu">
    <header className='header' >
        <Container>
        <div className="navigation">
            <div className="logo">
              <a href="#menu">  <img className="logo" src="/assets/images/logo.png" alt="logo" /> </a>
            </div>

            <div className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <a href="#menu">Accueil</a>
                        </li>

                        <li className="nav__item">
                            <a href="#company">Société</a>
                        </li>

                       

                        <li className="nav__item">
                            <a href="#expertise">Expertise</a>
                        </li>

                       

                        <li className="nav__item">
                            <a href="#footer">Contact</a>
                        </li>

                     
                    </ul>
                </div>
            </div>
        </div>
        </Container>
    </header>
    </section>
  )
}

export default Header

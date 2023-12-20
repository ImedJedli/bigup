import React from 'react'
import './company.css'
import { Container , Row , Col} from 'reactstrap';
import  { useEffect, useRef } from 'react';




function Company() {

    const companyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    });

    observer.observe(companyRef.current);

    return () => observer.unobserve(companyRef.current);
  }, []);

  return (
    <section className='company' ref={companyRef} id="company">

        <Container>
            <Row className='row'>
                <Col lg='6' md='6'>
                    <div  className="about__img">
                      <br />
                        <img src="/assets/images/meet.webp" alt="" />
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div  className="about__content">
                  
                        <h4>A propos de nous :</h4>
                        <p>Fondée en 2020 et basée à Courbevoie, Île-de-France, BIGUP-CONSEILS est une entreprise spécialisée dans les services informatiques, offrant des solutions personnalisées et de pointe pour répondre aux besoins technologiques de nos clients. Forts d'une expertise approfondie dans le secteur de l'IT, nous nous engageons à fournir des services de qualité, des conseils stratégiques et des solutions sur mesure.
                        </p>
                        <h4>Notre Mission :</h4>
                        <p>Notre mission est de catalyser la transformation numérique de nos clients en leur offrant des solutions informatiques adaptées à leurs besoins spécifiques. Nous nous efforçons d'être un partenaire de confiance dans leur parcours technologique, en maximisant la valeur des investissements informatiques et en favorisant l'innovation continue.</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Company

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
                        <img src="/assets/images/about_company.png" alt="" />
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div  className="about__content">
                        <h2>A propos de nous</h2>
                        <hr />
                        <p>Chez Bigup-Conseils, notre équipe d'experts collabore pour résoudre les défis complexes que les entreprises rencontrent aujourd'hui. Nos spécialités incluent le DevOps, le développement agile et la transformation numérique. Notre approche personnalisée garantit que chaque client reçoit des solutions adaptées à ses besoins uniques.</p>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Company

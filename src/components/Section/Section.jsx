
import React from 'react'
import './section.css'
import { Container , Row , Col} from 'reactstrap'
import  { useEffect, useRef } from 'react';


function Section() {

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
    <section className='section-info' ref={companyRef} id='section-info'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="section__content">

                    <h2 className='mb-4'>Bienvenue chez <span className='title'>Bigup-Conseils</span></h2>
                    <p className='mb-4'>Fondé en 2020 et basé à Courbevoie, Île-de-France, Bigup-Conseils se distingue par son expertise en technologie, en intelligence artificielle et en consulting. Notre passion est de vous aider à croître durablement et à réussir.</p>

                    </div>
                    

                </Col>

                <Col lg='6' md='6'>
                    <img src="/assets/images/bigup.png" alt=""  width={'80%'} className='bigup'/>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Section

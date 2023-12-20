
import React from 'react'
import './section.css'
import { Container, Row, Col } from 'reactstrap'
import { useEffect, useRef } from 'react';


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
          <div className="image">
            <img src="/assets/images/programmer.webp" alt="" width={'200%'} height={'700%'} className='bigup' />
            <div className='centered'>  
          <br />
          <br />
            <h2 >BIGUP POUR AVANCER ENSEMBLE!</h2>
            </div>
          </div>



        </Col>
      </Row>

      </Container>









    </section>
  )
}

export default Section

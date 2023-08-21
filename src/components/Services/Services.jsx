import React from 'react'
import './services.css'
import { Container , Row , Col} from 'reactstrap'

import  { useEffect, useRef } from 'react';


function Services() {

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
<section className="skills" id="skills" ref={companyRef}>

  <Container>
  <div>
      <h1>Nos Technologies</h1>
      <hr />

      <br />
      </div>
    <Row>

   
    <Col lg='8' md='6'>
    <div class="container-skills">
    
      <div class="content-skills">

      <div class="skill"> <img src="/assets/images/ms.svg" alt=""  /></div>
            


            <div class="skill"><img src="/assets/images/spring.svg" alt="" /></div>
            <div class="skill"> <img src="/assets/images/ansible.svg" alt=""  /></div>
            <div class="skill"><img src="/assets/images/reactjs.svg" alt=""  /></div>
            <div class="skill"><img src="/assets/images/angular.svg" alt=""  /></div>
            <div class="skill"><img src="/assets/images/js.jpg" alt="" />
</div>
            <div class="skill"><img src="/assets/images/html.svg" alt=""  /></div>
            <div class="skill">  <img src="/assets/images/css.svg" alt=""  /></div>
            <div class="skill"><img src="/assets/images/kubernates.svg" alt=""  /></div>
            <div class="skill"> <img src="/assets/images/CI_CD.png" alt=""  /></div>
         
      </div>
</div>
    </Col >

    <Col lg='4' md='6'>
    <div className="container-images">

<img src="/assets/images/table.svg" alt=""  />
</div>
    </Col>

    </Row>


  </Container>



</section>


  )
}

export default Services

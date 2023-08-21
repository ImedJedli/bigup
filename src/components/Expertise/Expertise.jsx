import React from "react";
import "./expertise.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import  { useEffect, useRef } from 'react';

function Expertise() {

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
    <section className="expertise" ref={companyRef} id="expertise">
      <Container>
      <div>
      <h1>Expertise</h1>
      <hr />

      <br />
      </div>
      

        <Row>
          <Col lg="6" md="6" className="expertise-col">
            <h4 className="text">
              Une offre complète digitale, métier et technologique
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              deserunt pariatur iusto error illo, quia nam accusamus veritatis
              molestiae voluptates maxime veniam nulla nostrum aspernatur unde,
              nisi voluptas! Deleniti, unde?
            </p>
          

            <button className="expertise-btn" onClick={() => window.location.href = "#skills"}>
  Voir nos expertises
</button>
          </Col>

          <Col lg="6" md="6" className="expertise-col">
            <div className="ex">
              <div>
                <img src="/assets/images/web&mobile.png" alt=""  />
                <p>  Web & Mobile</p>
              </div>

              <div>
                <img src="/assets/images/cloud.png" alt=""  />
                <p> Cloud & DevOps</p>
              </div>


              <div>
                <img src="/assets/images/ai.png" alt=""  />
                <p> Data & AI</p>
              </div>

              
            </div>


            <div className="ex">
              <div>
                <img src="/assets/images/plateforme.png" alt=""  />
                <p> Plateforme Digitale</p>
              </div>

              <div>
                <img src="/assets/images/conseil.png" alt=""  />
                <p> Conseil & Expertise</p>
              </div>


              <div>
                <img src="/assets/images/innovation.png" alt=""  />
                <p> Innovation</p>
              </div>

              
            </div>

            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Expertise;

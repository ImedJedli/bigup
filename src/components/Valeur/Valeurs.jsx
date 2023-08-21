import React from 'react'
import './valeurs.css'
import { Container , Row , Col} from 'reactstrap'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import  { useEffect, useRef } from 'react';

function Valeurs() {

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
   <section className='valeur' ref={companyRef}>
    <Container >

    <div>
      <h1>Nos Valeurs</h1>
      <hr />

      <br />
      </div>

             <div className="box">
               

                <div className="card">
                <i class="ri-verified-badge-fill"></i>
                 <h5>Qualité</h5>
                <p>S'engager à fournir des produits et services de haute qualité, en
respectant les normes de l'industrie et les attentes des clients.</p>
                 </div>

                 <div className="card">
                 <i class="ri-code-box-fill"></i>
                 <h5>Expertise Technique</h5>
                 <p>Afficher un haut niveau de compétence et de
savoir-faire dans les domaines de l'informatique et de la technologie.</p>
                </div>

                <div className="card">
                <i class="ri-funds-fill"></i>
            
                <h5>Innovation</h5>
                <p>Chercher constamment de nouvelles solutions et idées pour
résoudre les problèmes et répondre aux besoins changeants des clients.</p>
                </div>
            </div>


            <div className="box">
               

               <div className="card">
               <i class="ri-team-fill"></i>
                <h5>Responsabilité Sociale</h5>
               <p>Prendre en compte les impacts sociaux et
environnementaux de vos activités, et œuvrer pour un impact positif.</p>
                </div>

                <div className="card">
                <i class="ri-shake-hands-fill"></i>

                <h5>Engagement envers l'Apprentissage</h5>
                <p>Rechercher constamment de nouvelles
connaissances et compétences pour rester à jour dans un domaine en
constante évolution.</p>
               </div>

               <div className="card">
               <i class="ri-group-2-fill"></i>
               <h5>Diversité et Inclusion</h5>
               <p>Favoriser un environnement inclusif qui valorise la
diversité des talents et des perspectives.</p>
               </div>
           </div>

    </Container>
    
   </section>
  )
}

export default Valeurs

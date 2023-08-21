import React from 'react'
import './info.css'
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';

import { Container , Row , Col} from 'reactstrap'


function Company() {
  return (
    <section>
        <Container>
        <Row className='company-row'>
            
            <Col lg='3' md='3' className='company-col'>
           
            <h4 className='animate-charcter'>Des Valeurs Partagées</h4>
            </Col>

            <Col lg='3' md='3' className='company-col'>

            <h4 className='animate-charcter'>un Objectif Unique</h4>
            </Col>

            <Col lg='5' md='3' className='company-col'>

            <h4 className='animate-charcter'>BigUp pour Avancer Ensemble!</h4>
        
            </Col>

        
            
            


        </Row>
        </Container>


        
    </section>
  )
}

export default Company

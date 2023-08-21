import logo from './logo.svg';
import './App.css';
import Home from './components/Header/Home';
import Section from './components/Section/Section';
import { Fragment } from 'react';
import Info from './components/Informations/info';
import Company from './components/Company/Company';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Valeurs from './components/Valeur/Valeurs.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
<Fragment>

<Home/>
<Section/>
<Info/>
<Company/>
<Expertise/>
<Services/>


<Valeurs />

<Footer/>
</Fragment>
      
      
    
  );
}

export default App;

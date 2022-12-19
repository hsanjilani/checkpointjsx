import React from 'react';
import Projet1 from './Projet/projet1';
import Projet2 from './Projet/projet2';
import Projet3 from './Projet/projet3';
import Projet4 from './Projet/projet4';
import './Projet/Projet.css';

const Projet =()=>{
    return(<div id="projects">
    <h2 class="text-important">Projects</h2>
    <div class="projects-container">
        <Projet1/>
        <Projet2/>
        <Projet3/>
        <Projet4/>

   </div>
   </div>
    )
}

export default Projet;
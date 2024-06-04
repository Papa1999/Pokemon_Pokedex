import React from 'react'; 
import logo from '../assets/logo.jpg'; 
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; 


export default function Navbar() {
  
  return (
    <div className = 'Navbar'>
        <img src= { logo } alt=' Logo de Pokemon'  />
        <div className='links'>
          <Link to = "/" > Liste Pokemon </Link>
          <Link to = "/pokedex" > Mon Pokedex </Link>
        </div>
        
    </div>
  )
}

import React from 'react'
import  NavBar  from '../Components/NavBar';
import AboutHome from '../Components/AboutHome';
import {StaffSlider} from '../Components/StaffSlider';
import  Footer  from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function About() {
  return (
    <div> 
      <NavBar/>
     <AboutHome/>
     <StaffSlider/>
     <Footer/>
    </div>
  )
}

export default About
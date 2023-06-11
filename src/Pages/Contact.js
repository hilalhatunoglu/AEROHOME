import React from 'react'
import  NavBar  from '../Components/NavBar';
import { ContactBody } from '../Components/ContactBody';
import  Footer  from '../Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
  return (
    <div>
    <NavBar/>
    <ContactBody/>
    <Footer/>
    </div>
  )
}

export default Contact
import React from 'react';
import  NavBar  from '../Components/NavBar';
import {HeaderHome} from '../Components/HeaderHome';
import {Banner} from  "../Components/Banner";
import  Footer  from '../Components/Footer';
function index() {
  return (
    <div>

        <NavBar/>
        <HeaderHome/>
        <Banner/>
        <Footer/>
   
        </div>
  )
}

export default index
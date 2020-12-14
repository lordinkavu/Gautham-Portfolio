import React from "react"
import '../styles/global.css'

import {Helmet} from 'react-helmet';

import Header from '../components/Header'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SocialButtons from '../components/SocialButtons'

 const Home = () => {
  return (
    <>
     <Helmet>
          <meta charSet="utf-8" />
          <title>Gautham</title>
       
      </Helmet>
      <SocialButtons/>
    <Header/>
    <Landing/>
    <About/>
    <Projects/>
    <Contact/>
    <p id="footer-text">Designed and Developed by Gautham.</p>
    

    </>
  )
}

export default Home;

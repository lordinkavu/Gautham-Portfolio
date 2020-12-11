import React from "react"
import '../styles/global.css'

import {Helmet} from 'react-helmet';

import Header from '../components/Header'
import Landing from '../components/Landing'
import About from '../components/About'
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
    

    </>
  )
}

export default Home;

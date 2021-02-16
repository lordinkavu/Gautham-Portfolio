import React from "react"
import "./About.css"

const About = () => {
  return (
    <>
      
     
      <section id="about" className="content">
      <h1 id="aboutsec">About</h1>
      
   

      <div>
        <p>
          Hi, I am <span>Gautham Shankar</span>. Born and raised in Payyanur, I am currently
          pursuing engineering from <span>CET, Trivandrum</span>.
      
          I love the process of building things on the web. My style involves
          <span> clean, minimalistic and pixel perfect</span> designs, striving to achieve the
          <span> perfect form-function balance</span>.


        </p>
      </div>
    </section>
    
    
    <section id="skills" className="content">
        <h1>Skills</h1>
        <div>
            <span>Javascript (ES6+)</span>
            <span>ReactJS</span>
            <span>HTML & CSS</span>
            <span>NodeJS</span>
          
            <span>ExpressJS</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
            <span style={{color:"#ffffff80"}}>MongoDB</span>
            <span style={{color:"#ffffff80"}}>Firebase</span>
            


        </div>


    </section>
    </>
    
    
  )
}

export default About

'use client';

import React from "react"
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "../components/NavBar";
import FrontC from "@/components/FrontC";
import Node from "@/components/Node";
import BackC from "@/components/BackC";
import FullStackC from "@/components/FullStackC";
import Security from "@/components/Security";


var currentYear = new Date().getFullYear();

const page = () => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My SkillSet</title>
       
        
        
      </head> 
      <body>
        <NavBar />

       <p className="REM lg:text-6xl md:text-5xl sm:text-5xl">
        <span>My Website To Showcase </span> 
        <br />
        <span className="skills web"><span className="SecWor">The Web Dev Skillset</span> </span>
        <br /> 
        <span>I Possess.</span>
       </p>
 
         <h2 className="submain FC lg:text-4xl md:text-3xl sm:text-3xl">Front-End</h2>

       <FrontC />
        
           <h2 className="submain lg:text-4xl md:text-3xl sm:text-3xl">Node.js</h2>
  

       <Node />

           <h2 className="submain lg:text-4xl md:text-3xl sm:text-3xl">Back-End</h2>

       <BackC />    

           <h2 className="submain lg:text-4xl md:text-3xl sm:text-3xl">Full-Stack</h2>

       <FullStackC />

           <h2 className="submain lg:text-4xl md:text-3xl sm:text-3xl">Authentication</h2> 

       <Security />

       <br />
       <br />
  

       
       <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item nav-link px-2 text-body-secondary"><h3 className="footer">Created With ❤️ By Aashrith</h3></li>
    </ul>
    <p className="footer text-center">&copy; {currentYear} Company, Inc</p>
  </footer>
       </div>
      



      </body>
   </html>

  );
}


export default page;
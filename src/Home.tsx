import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import NavbarComponent from './Navbar';
import { useFileContent } from './readFile';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';



function visitLinkedIn() {
  window.location.href = 'https://www.linkedin.com/in/avisebron/';
  console.log('Visiting LinkedIn...');
}

function openResume() {
  window.open('src/files/SoftwareResume.pdf');
  console.log('Opening resume...');
}

function Home() {

  

  return (
    <div className="Home">
      <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 site-title">
                            <h4 className="title-text text-uppercase">Full-Stack Developer</h4>
                            <div className="site-buttons">
                                <div className="d-flex flex-row flex-wrap">
                                    <button id="linkedIn" type="button" className="btn button primary-button mr-4 text-uppercase" onClick={visitLinkedIn}>Hire Me</button>
                                    <button id="resume" type="button" className="btn button secondary-button text-uppercase" onClick={openResume}>Get Resume</button>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-md-12 banner-image">
                            <img id='banner' src="/img/Banner.jpg" alt="banner img"/>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Home

import React from 'react';
import { useFileContent } from './readFile';
import './index.css';


const AboutMe: React.FC = () => {
  const filePath = 'aboutME.txt'; // Replace this with the actual path to your text file
  const aboutMeText = useFileContent(filePath);

  return (
    <div className="col-lg-6 col-md-12 site-title">
      <h4 className="title-text text-uppercase">Full-Stack Developer</h4>
      <div className="about-me-content">
        {aboutMeText && <p className='aboutMeText'>{aboutMeText}</p>}
      </div>
    </div>
  );
};

export default AboutMe;
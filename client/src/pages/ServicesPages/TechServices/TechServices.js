import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import Header from '../../../components/Header/Header';
import './TechServices.css'; // Make sure to import your CSS file

const TechServices = () => {
  return (
    <div className="tech-container">
        
        <Navigation />
        <Header />
        
        <br></br>

        <div className="top-tech-container">
            <h1>Technology Services</h1>
        </div>
        
        <div className='main-content'>
`          <section>
            <h2>Our Services</h2>

            <br></br>
            <p>
              <b>1. Web Development</b>
              <br></br>We specialize in building custom websites that are designed to meet the specific needs of each business. Whether it's a simple informational site or a complex e-commerce platform, we have the expertise to create a professional and user-friendly website.

              <br></br><br></br>
              <b>2. Mobile App Development</b>
              <br></br>Our team can develop mobile applications for both iOS and Android platforms, tailored to your business requirements. From utility apps to gaming applications, we have the skills to bring your ideas to life.

              <br></br><br></br>
             <b>3. Software Development</b>
              <br></br>We also offer desktop software development services, including building custom applications and scripts to automate processes and improve efficiency.

              <br></br><br></br>
              <b>4. Algorithmic Solutions</b>
              <br></br>Our team can create specific algorithmic solutions tailored to address unique business needs, helping businesses optimize their workflows and increase productivity.

              <br></br>
              <br></br>
              <b>5. Technology Repair</b>
              <br></br>In addition to development services, we provide technology repair services for computers, phones, and tablets. Whether it's updating drivers, replacing hardware, or troubleshooting issues, we can help keep your technology running smoothly.

              <br></br>
              <br></br>
              <b>6. Point of Sale Integration</b>
              <br></br>We specialize in integrating point-of-sale systems both in-person and online, with a focus on small business owners' financial needs. Our goal is to streamline the sales process and improve overall operational efficiency.
              </p>
        </section>

        </div>

    </div>
  );
};

export default TechServices;

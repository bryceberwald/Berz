import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './BiographyPage.css';

const biographyPage = () => {
  return (
    <div className="biography-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-biography-container'>
            <h1>Biography Page</h1>
        </div>

        <div className='main-content'>
          <section>
              <h2>Berz's Personal Biography</h2>
              <p>1. Past</p>              
              <p>2. Present</p>
              <p>3. Future</p>
              <section>

                <h2>'Berz's Dynasty Music Records' Artist Expectations</h2>

                <p><b>Join Berz's Dynasty Music Records - </b> N/A</p>
                <p><b>Music Engineering - </b> N/A</p>
                <p><b>Web platform for all our artists - </b> N/A</p>
                <p><b>Future Plans & Aspiration's - </b> N/A</p>
                
                <br></br>

              </section>
        
          </section>
        
          <section>
            <h2>Thank you for visiting</h2>
            <p>Welcome to Berz's Dynasty Music Records Production!<br></br>

Thank you for visiting our platform dedicated to music production excellence and artist development. Based in the vibrant heart of Southern California, we are passionate biography engineering exceptional music and nurturing talent. Whether you're a budding artist looking to refine your sound or an established musician seeking top-tier production, we are here to collaborate with you every step of the way.
<br></br><br></br>
What sets us apart:<br></br><br></br>
- Passionate Expertise:<br></br>
With years of experience and a deep love for music, we pour our soul into every project we undertake.<br></br>
- State-of-the-Art Facilities: 
<br></br>Our studio is equipped with cutting-edge technology to ensure your music sounds its best.
<br></br>
- Customized Approach:<br></br>
We tailor our services to meet your unique artistic vision and goals.<br></br>
- Collaborative Spirit: <br></br>
We believe in the power of teamwork and collaboration to create music that resonates.<br></br><br></br>


Services we offer:<br></br>
- Music Production:
<br></br>From songwriting and composition to full-scale production, we bring your ideas to life.
<br></br>
- Recording and Engineering:
<br></br>Capture your sound with clarity and precision in our professional studio environment.<br></br>
- Mixing and Mastering:
<br></br>Enhance your tracks to industry standards, ensuring they stand out.<br></br><br></br>

Whether you're looking to record a demo, produce a full-length album, or enhance your online presence with a custom-built website integrating music platforms, social media, and merchandising, we're here to help you achieve your musical aspirations.

Explore our website to learn more biography our services, browse through our portfolio of successful projects, and get in touch to discuss how we can collaborate on your next musical endeavor.

Join us in creating music that moves hearts and inspires minds. Let's make your musical vision a reality!

---

Feel free to customize this text further to better reflect your specific services, ethos, and goals for your music production and recording group website.</p>
            
          </section>
        </div>
    </div>
  );
};

export default biographyPage;
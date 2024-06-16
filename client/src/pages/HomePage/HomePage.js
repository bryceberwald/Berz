import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

const HomePage = () => {
  return (
    <div className="home-container">

        <Navigation />
        <Header />
        <br></br>
        
        <div className='top-home-container'>
            <h1>Home Page</h1>
        </div>

      <div className='main-content'>
        <section>
          <h2>About Me</h2>
          <p>
          My name is Berz, and I am a passionate music engineer and musician based in Southern California. Currently, I am balancing my professional career and completing my education while dedicating my spare time to engineering music for emerging artists. Music production is not only a hobby but also a deep passion of mine, and I pour my heart and soul into every project I undertake.

At 30 years old, I bring a blend of enthusiasm, dedication, and technical skill to the table. While I continue to refine my own musical style, I have been fortunate to collaborate with talented artists, helping them achieve their sonic visions. I understand the importance of crafting legendary tracks that resonate with audiences and leave a lasting impact.

I am reaching out because I am eager to offer my expertise and collaborate with Berz's Dynasty Music Records and your talented roster of artists. My goal is to contribute to the creation of hits and to support artists who are on the brink of breakthroughs in their careers. I am flexible and understand the financial constraints that emerging artists often face, which is why I am open to discussing terms that are mutually beneficial and manageable.

If you are interested in exploring a collaboration or would like to discuss how I can assist in engineering music for your artists, I would be thrilled to connect. I am happy to provide samples of my work and discuss any further details you may require.

Thank you for considering my passion and dedication to music. I look forward to the possibility of working together to create impactful and memorable music experiences.          </p>
        </section>

        <section>
          <h2>Information</h2>
          <p>
          Music engineering to enhance and refine each artist's sound.
          Technological integration for creating web platforms that integrate music platforms, social media links, and automated email systems.
          Development of online stores/marketplaces to sell merchandise and music directly to fans.
          I believe that by combining my expertise in music engineering and technological integration with Berz's Dynasty Music Records' platform and resources, we can significantly elevate the reach and impact of your artists. I am keen to explore how we can collaborate to support and amplify the success of your roster.

          Could we arrange a meeting or call to discuss how my services could benefit Berz's Dynasty Music Records and your artists? I would be delighted to provide more details about my work and demonstrate examples of successful collaborations.

          Thank you for considering this proposal. I look forward to the possibility of working together to achieve greater heights in the music industry.          
          </p>
        </section>

        <section>
        <h2>Berz's Dynasty Music Records - (Example Email Request)</h2>
          <p>
          Subject: Inquiry About Signing New Artist to Berz's Dynasty Music Records<br></br><br></br>

          Dear Berz's Dynasty Music Records Team,<br></br><br></br>

          I hope this message finds you well. My name is [Your Name], and I am reaching out on behalf of a promising new artist who I believe would be a great fit for your label. We are impressed by Berz's Dynasty Music Records' reputation for nurturing talent and creating impactful music, which aligns perfectly with the vision we have for this artist.<br></br><br></br>

          [Artist's Name] is a [describe genre/style briefly] artist with a unique sound and a growing fan base. Their recent work has garnered attention locally and online, and we believe that with the right support and platform, they could reach a broader audience and achieve significant success.

          We would be thrilled to discuss the possibility of collaboration with Berz's Dynasty Music Records. Could you please provide information regarding your process for considering new artists, as well as any submission guidelines or requirements you may have?    <br></br><br></br>
          Looking forward to your response and the possibility of working together to bring [Artist's Name]'s music to a wider audience.    <br></br><br></br>

          Thank you for your time and consideration. <br></br>

          Best regards, <br></br>

          [Your Full Name] <br></br>
          [Your Position (if applicable)] <br></br>
          [Your Contact Information] <br></br>
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

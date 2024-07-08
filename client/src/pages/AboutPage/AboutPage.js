/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './AboutPage.css';

const aboutPage = () => {
  return (
    <div className="about-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-about-container'>
            <h1>About Page</h1>
        </div>

        <div className='main-content'>
          <section>
              <h2>Personal Introduction</h2>
              <p>1. <b>Past -</b> Growing up in a supportive and loving family, I enjoyed an enriching childhood filled with sports, camaraderie with friends, and an insatiable curiosity about technology. My brother and I spent countless hours playing a computer game that fascinated us both. This game sparked a dream in me at the age of 11: to become one of the staff members who developed and maintained it. Although I was quite young, my ambition drove me to dive into extensive research on game development and programming.
                  During high school, I took a few programming classes that laid the foundation for my technical skills. However, my true passion for programming flourished as I pursued higher education and began to teach myself. I immersed myself in various programming languages, tools, and technologies, driven by the same curiosity that had inspired me as a child.</p>              
              <p><b>2. Present -</b> Today, I am a dedicated and skilled programmer with a robust understanding of software development. My journey from a curious child to a proficient developer has been marked by continuous learning and perseverance. I have honed my skills through college coursework, self-study, and hands-on projects, always striving to push the boundaries of my knowledge.
                  In my current role, I leverage my programming expertise to solve complex problems, develop innovative solutions, and contribute to impactful projects. My passion for technology and programming remains as strong as ever, driving me to stay updated with the latest advancements in the field. I take pride in my ability to collaborate effectively with teams, bringing creativity and technical prowess to every endeavor.</p>
              <p><b>3. Future -</b> Looking ahead, I envision a future where I continue to grow as a professional in the tech industry. I am eager to take on new challenges, explore emerging technologies, and contribute to groundbreaking projects that make a difference. My goal is to lead and inspire others, sharing my knowledge and experience to foster a culture of innovation and excellence.
                  I aspire to work on projects that blend my love for gaming and technology, perhaps even revisiting my childhood dream of developing engaging and immersive games. With a strong foundation, a passion for learning, and a commitment to excellence, I am excited about the endless possibilities that lie ahead in my professional journey.</p>
          </section>
          <br>
          </br>
          <h1>My Geographic Location - Orange County, CA</h1>
\          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46292.26475895748!2d-117.9966637387506!3d33.76986970582969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1720294815137!5m2!1sen!2sus" width="100%" height="750px"></iframe>
        </div>
    </div>
  );
};
 
export default aboutPage;
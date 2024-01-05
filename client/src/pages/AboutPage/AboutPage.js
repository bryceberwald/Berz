import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
        
        <Navigation />
        <Header />
        <br></br>

        <div className='top-about-container'>
            <h1>About Page</h1>
        </div>

        <section className="main-content">
        
            <h1>Bryce Berwald also known as "Berz" is a Software Engineer</h1> 
            <br></br>
            
            <br></br>
            <h2>Brief Introduction</h2>

            <p>My name is Bryce Berwald, and you may know me by the nickname "Berz". I am on an exhilarating journey into the realms of software engineering and computer science. My passion lies in the creation of innovative and impactful technologies, spanning web applications, desktop applications, games, and a diverse array of software solutions.</p>
            <p>As a student dedicated to the ever-evolving field of technology, I find joy in unraveling the complexities of algorithms and crafting elegant solutions. This quest for knowledge and creativity has led me to embark on projects that not only challenge my skills but also contribute to the ever-growing landscape of digital innovation.</p>
            <p>This corner of the internet is my personal haven – a virtual space where I proudly present my identity, aspirations, and achievements. Welcome to my personal website, a hub brimming with exciting updates, a playground for developing and crafting using the powerful toolset of ReactJS. Whether you are a friend, family member, or a potential future employer, I invite you to explore this digital realm and witness the fruits of my endeavors.</p>
            
            <br></br>
            <h2>What to Expect</h2>

            <p><b>News and Updates Page:</b> Stay tuned for the latest developments and insights into my journey. From personal milestones to technological breakthroughs, this page will keep you informed about my adventures.</p>
            <p><b>Projects Showcase:</b> Delve into a curated collection of my diverse projects. Each creation is a testament to my skills, creativity, and the journey of continuous improvement. I am excited to share these pieces of work with you.</p>
            <p><b>Development Playground:</b> This website serves as a living testament to my proficiency with ReactJS. It's not just a showcase; it's a dynamic space where I experiment, refine, and push the boundaries of web development.</p>
            <p><b>Future Plans:</b> The journey doesn't end here. In the pipeline are plans for a dynamic chat room and other interactive features. As this digital space evolves, so too will the opportunities for connection and collaboration.</p>
            
            <br></br>
            <h2>Thank you for visiting</h2>

            <p>I extend my heartfelt gratitude to each one of you for taking the time to explore my personal website. Your presence adds a special significance to this digital space, and I appreciate your curiosity and interest in my journey. As I continuously strive to enhance and expand this platform, I encourage you to return regularly. The journey doesn't stop here; new features, exciting content, and updates are in the pipeline. Your support and engagement mean the world to me, and I look forward to sharing more of my projects and endeavors with you. Stay tuned, and let's embark on this evolving adventure together. Thank you for being a part of this digital exploration!</p>
        </section>
    </div>
  );
};

export default AboutPage;
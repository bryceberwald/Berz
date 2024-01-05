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

      <section>
        <h2>Introduction</h2>
        <p>
            I am 30 years old and on a continuous quest for knowledge in computer science utilizing my creativity by developing web applications, software, scripts and/or anything else that could be useful to myself and others. This website serves as a canvas where I can showcase my projects, share news and updates, and experiment with the latest technologies, especially using the power of ReactJS for personal gain.
        </p>
      </section>

      <section>
        <h2>Overview</h2>
        <p>
            Take a look at the News and Updates page to catch up on all the cool stuff I've been up to lately. The Projects Showcase is like a treasure trove of my creations, each with its own story of innovation and dedication. And don't miss out on the Development Playground – it's where the ReactJS magic happens, and I'm always tinkering with new ideas. Join the fun, explore, and see what's cooking in my digital playground!
        </p>
      </section>

      <section>
      <h2>More</h2>
        <p>
            Thank you for visiting! I invite you to explore, engage, and revisit as I continue to add new features, content, and updates. Your support is invaluable, and I look forward to sharing this digital space with you making it a fun little community.
        </p>
      </section>

    </div>
  );
};

export default HomePage;

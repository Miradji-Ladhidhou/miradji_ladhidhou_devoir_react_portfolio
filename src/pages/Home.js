import React from 'react';
import herobg from '../images/hero-bg.jpg';
import Button from '../components/Button';
import AboutSkills from '../components/AboutSkills';

const Home = () => {
  return (
    <div className='div-john'>
        <div className='john'>
            <h1>Bonjour, je suis John Doe </h1>
            <h2>Développeur web full</h2>
            <Button />
        </div>
        <div>
            <img src={herobg} alt='hero bg'/>
        </div>
        <AboutSkills/>
    </div>
 
  );
};

export default Home;

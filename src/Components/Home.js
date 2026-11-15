import React from 'react';
import Typed from './Typed.js';

const Home = () => (
  <main>
    <section className="HomePage">
      <div className="HomeText">
        <h1>Hello, I'm</h1>
        <h1><b>NGEVAO FORYOH</b></h1>
        <Typed />
        <p className="homeLead">Computer Science student and certified ICT specialist from Kailahun Town, Sierra Leone. Building practical skills in software development, web design, ICT and technical support.</p>
        <a className="primaryLink" href="mailto:ngevaoaforyoh@gmail.com">Contact me</a>
      </div>
      <img
        className="illustration"
        src="/images/developer-at-work.png"
        alt="Professional developer working on a laptop at a desk"
        loading="eager"
      />
    </section>

    <section className="AboutPage homeIntro">
      <div className="AboutText">
        <h2 className="AboutTextHeading">A little <b>about me</b></h2>
        <p>I am a Year Two Computer Science student at Njala University with a GPA of 4.49/5.00. I also hold a Certificate in Information and Communication Technology from Government Technical Institute, Kailahun, where I received recognition for top academic performance.</p>
        <p>My experience includes academic coding exercises in Python and Java, responsive webpage development with HTML and CSS, technical documentation, community advocacy volunteering and student leadership.</p>
      </div>
    </section>
  </main>
);

export default Home;

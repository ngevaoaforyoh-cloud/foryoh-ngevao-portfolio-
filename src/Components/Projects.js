import React from 'react';

const items = [
  {
    title: 'Responsive Webpage Development',
    type: 'Web development practice',
    description: 'Designed responsive webpages using HTML and CSS layout techniques as part of academic and practical learning.'
  },
  {
    title: 'Python Programming Exercises',
    type: 'Programming practice',
    description: 'Worked through programming exercises, solved logical problems and built small software tools using Python.'
  },
  {
    title: 'Java Programming Exercises',
    type: 'Programming practice',
    description: 'Practised problem-solving and core programming concepts by completing exercises and building small tools in Java.'
  },
  {
    title: 'Research & Technical Documentation',
    type: 'Academic and practical work',
    description: 'Reviewed software development models, maintained structured records and managed technical files with attention to accuracy.'
  }
];

const Projects = () => (
  <main className="projectsPage">
    <h1 className="projectHeading">Academic &amp; Practical <b>Work</b></h1>
    <p className="projectsIntro">Academic &amp; Practical Coding Projects · Njala University &amp; GTI Labs · 2023–Present<br/>Selected areas of work described in my CV. These entries reflect learning activities and are not presented as commercial deployments.</p>
    <div className="project">
      {items.map(item => (
        <article className="projectBox projectTextCard" key={item.title}>
          <span className="projectType">{item.type}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
    <section className="experienceSection">
      <h2>Community &amp; Leadership <b>Experience</b></h2>
      <div className="experienceItem">
        <h3>Children Forum Network  Advocacy Volunteer</h3>
        <p>Kailahun, Sierra Leone · 2021–Present</p>
        <p>Participated in community initiatives promoting children's rights, education and equal opportunities.</p>
      </div>
      <div className="experienceItem">
        <h3>Methodist Secondary School  Member, Prefectorial Board</h3>
        <p>2022–2023</p>
        <p>Supported student leadership, guided younger students and assisted school staff with event administration and coordination.</p>
      </div>
    </section>
  </main>
);

export default Projects;

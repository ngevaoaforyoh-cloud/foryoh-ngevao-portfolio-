import React from 'react';

const skillGroups = [
  { title: 'Software & Web Development', items: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript (Basics)', 'Web Design'] },
  { title: 'Data & Productivity', items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Data Entry', 'Digital Documentation'] },
  { title: 'Systems & Workflows', items: ['Windows OS', 'Technical Support', 'Guideline Adherence', 'Remote Tools'] },
  { title: 'Languages & Strengths', items: ['English (Fluent)', 'Kissi (Native)', 'Teamwork', 'Communication', 'Organization'] }
];

const About = () => (
  <main>
    <section className="AboutPage">
      <div className="AboutText">
        <h1 className="AboutTextHeading">Get to <b>know me</b></h1>
        <p>I am Ngevao Foryoh, a Computer Science student at Njala University in Sierra Leone. I am interested in software development and practical applications of information and communication technology.</p>
        <p>My academic and practical work has helped me develop skills in Python, Java, HTML, CSS, basic JavaScript, web design, data entry, digital documentation and technical support.</p>
        <p>I have volunteered with Children Forum Network on initiatives promoting children's rights, education and equal opportunities. I also served on the Prefectorial Board at Methodist Secondary School, supporting student leadership and school activities.</p>
        <p>I am open to remote and onsite internship opportunities, entry-level roles and meaningful opportunities to learn, contribute and grow.</p>
      </div>
      <div className="aboutFacts">
        <h2>Education</h2>
        <p><b>Njala University</b><br/>Bachelor of Science in Computer Science  Year Two<br/>2024–Present · GPA: 4.49/5.00<br/>Key subjects: Software Development, Web Programming, Data Structures, Applied Mathematics and Systems Analysis.</p>
        <p><b>Government Technical Institute, Kailahun</b><br/>Certificate in Information &amp; Communication Technology<br/>2023–2024<br/>Coursework: Networking, Data Communication, Office Applications and Operating Systems.<br/>Recognition: Top-Achieving Student for high grades across all subjects.</p>
        <p><b>Methodist Secondary School, Kailahun</b><br/>Senior Secondary Education &amp; WASSCE<br/>2021–2023</p>
      </div>
    </section>

    <h2 className="SkillsHeading">Skills &amp; <b>Strengths</b></h2>
    <div className="skillGroups">
      {skillGroups.map(group => (
        <section className="skillGroup" key={group.title}>
          <h3>{group.title}</h3>
          <div className="skillTags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
        </section>
      ))}
    </div>

    <section className="credentials">
      <h2>Honors &amp; <b>Awards</b></h2>
      <ul>
        <li><b>Send Sierra Leone</b> — Best Certificate Award (2024)</li>
        <li><b>GTI Kailahun</b> — Top Academic Performance Award in ICT (2023–2024)</li>
      </ul>
    </section>

    <section className="credentials referencesSection">
      <h2>Professional <b>References</b></h2>
      <div className="referenceGrid">
        <div><h3>Mr. Kangoma Mansaray</h3><p>Lecturer, Njala University</p><p>Phone: +232 78 977 771</p><p>Email: kangoma.mansaray56449@njala.edu.sl</p></div>
        <div><h3>Mr. Focko</h3><p>Lecturer, GTI Kailahun</p><p>Phone: +232 76 367 366</p></div>
      </div>
    </section>
    <section className="contactDetails">
      <h2>Contact <b>Information</b></h2>
      <p>Email: <a href="mailto:ngevaoaforyoh@gmail.com">ngevaoaforyoh@gmail.com</a></p>
      <p>Phone: <a href="tel:+23279633366">+232 79 633 366</a></p>
      <p>Location: Kailahun Town, Sierra Leone</p>
      <p>Availability: Remote and onsite internships / entry roles</p>
    </section>
  </main>
);

export default About;

import React from 'react';
import { BsDownload } from 'react-icons/bs';

const Resume = () => (
  <main className="ResumePage">
    <h1 className="resumeHeading">My <b>Curriculum Vitae</b></h1>
    <p className="resumeDescription">View or download my two-page CV.</p>
    <div className="resumeFrameWrap">
      <iframe title="Ngevao Foryoh Curriculum Vitae" className="resumeFrame" src="/Ngevao-Foryoh-CV.pdf" />
    </div>
    <a href="/Ngevao-Foryoh-CV.pdf" target="_blank" rel="noreferrer" download="Ngevao-Foryoh-CV.pdf">
      <button className="downloadCV" type="button"><h3><BsDownload />&nbsp; Download CV</h3></button>
    </a>
  </main>
);

export default Resume;

import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => (
  <div className="TypeEffect">
    <Typewriter options={{
      strings: ['Computer Science Student', 'Aspiring Software Developer', 'ICT Specialist', 'Web Designer'],
      autoStart: true,
      loop: true,
      delay: 65,
      deleteSpeed: 25
    }} />
  </div>
);

export default Typed;

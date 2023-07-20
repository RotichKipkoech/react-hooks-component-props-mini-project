import React from 'react';

const About = ({ imageUrl, aboutText }) => {
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{aboutText="Personal blog by Dan Abramov. I explain with words and code."}</p>
    </aside>
  );
};

export default About;

// QuoteBox.js
import React from 'react';
import './QuoteBox.css';

const QuoteBox = () => {
  return (
    <div className="sentence-box">
      <video className="background-video" autoPlay loop muted>
        <source src="/path/to/your/video.mp4" type="video/mp4" /> {/* Update the path */}
        Your browser does not support the video tag.
      </video>
      <h1>
        <span>I'm HAFSANA S</span>
      </h1>
      <h1>Full Stack Developer</h1>
      <h6>Committed to delivering exceptional user experiences through thoughtful design and functionality.</h6>
    </div>
  );
};

export default QuoteBox;

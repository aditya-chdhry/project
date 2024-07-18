import React from 'react';
import './Videosection.css';

const Videosection = () => {
  return (
    <div className="video-section">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/sample-video-id" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default Videosection;

import React from 'react';
import Sidebar from '../components/Sidebar';
import VideoSection from '../components/Videosection';
import InstructorSection from '../components/InstructorSection';
import RelatedCoursesSection from '../components/RelatedCoursesSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <div className="main-content">
        <VideoSection />
        <InstructorSection />
        <RelatedCoursesSection />
      </div>
    </div>
  );
}

export default HomePage;

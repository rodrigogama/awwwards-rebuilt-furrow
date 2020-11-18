import React from 'react';
import BannerSection from '../components/Home/Banner';
import ContentSection from '../components/Home/Content';
import FeaturedSection from '../components/Home/FeaturedProject';
import AboutSection from '../components/Home/About';
import ContactSection from '../components/Home/Contact';
import Footer from '../components/Home/Footer';

const Home = () => {
  return (
    <>
      <BannerSection />
      <ContentSection />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default React.memo(Home);

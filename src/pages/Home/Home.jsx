import React from "react";
import {
  Contectsections,
  Banner,
  HeroSection,
  YourEmergency,
  Testimonials,
  Whoweare,
  MeetDoctors,
  AlwaysLough,
  KeyFeature,
} from "../../components/indexComponenst.js";

function Home() {
  return (
    <>
      <HeroSection />
      <YourEmergency />
      <AlwaysLough />
      <KeyFeature />
      <Banner />
      <Whoweare />
      <MeetDoctors />
      <Testimonials />
      <Contectsections />
    </>
  );
}

export default Home;

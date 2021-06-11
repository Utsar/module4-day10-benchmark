import React from "react";
import HomePageNav from "./HomePageNav";
import HomePageContent from "./HomePageContent";

function HomePage() {
  return (
    <div>
      <HomePageNav />
      <HomePageContent heading="Throwback Thursday" />
    </div>
  );
}

export default HomePage;

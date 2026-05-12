import React from "react";
import PlanCards from "./planCards";
import InnovateSoft from "../home/InnovateSoft/page";
import SoftwareDev from "../home/softwareDev/page";
import PremierTech from "../home/premierTech/page";
import ExploreOur from "../home/exploreOur/page";
import Contact from "../home/contact/page";
import Blogs from "../home/blogs/page";
import Section2 from "./section2";
import Section3 from "./section3";

function page() {
  return (
    <div>
      <Section3 />
      <Section2 />
      <PremierTech />
      <SoftwareDev />
      <InnovateSoft />
      <ExploreOur />
      {/* <PlanCards /> */}
      <Contact />
      {/* <Blogs /> */}
    </div>
  );
}

export default page;

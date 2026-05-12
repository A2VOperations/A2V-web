import React from "react";
import PlanCards from "./planCards";
import InnovateSoft from "../home/InnovateSoft/page";
import SoftwareDev from "../home/softwareDev/page";
import PremierTech from "../home/premierTech/page";
import ExploreOur from "../home/exploreOur/page";
import Contact from "../home/contact/page";
import Blogs from "../home/blogs/page";

function page() {
  return (
    <div>
      <PremierTech />
      <SoftwareDev />
      <InnovateSoft />
      <ExploreOur />
      <PlanCards />
      <Contact />
      <Blogs />
    </div>
  );
}

export default page;

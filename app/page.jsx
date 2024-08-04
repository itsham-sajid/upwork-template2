import HeaderFive from "@/components/headers/HeaderFive";
import PersonalInfo from "@/components/personalInfo/PersonalInfo";
import About from "@/components/about/About";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/portfolio/Portfolio"
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";



import React from "react";

export const metadata = {
  title: "Home || Bostami - Professional portfolio NextJS Template",
  description:
    "Discover Botami,the most impressive portfolio template for work showcase, blog",
};
export default function Home() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <PersonalInfo />
            <About />
            <Resume />
            <Portfolio />
            <Blogs />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

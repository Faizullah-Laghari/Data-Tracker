import React from "react";
import SEO from "../common/seo";
import ProjectDetails from "../components/project-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Data Tracker"} />
      <ProjectDetails />
    </Wrapper>
  );
};

export default index;

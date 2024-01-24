import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Data Tracker"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;

// import React from "react";
// import SEO from "../common/seo";
// import HomeFour from "../components/homes/home-4";
// import Wrapper from "../layout/wrapper";

// const index = () => {
//   return (
//     <Wrapper>
//       <SEO pageTitle={"Data Tracker"} />
//       <HomeFour />
//     </Wrapper>
//   );
// };

// export default index;

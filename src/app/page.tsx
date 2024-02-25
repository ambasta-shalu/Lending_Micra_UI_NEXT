import React, { Suspense } from "react";
import Banner from "./components/home/Banner";
import Dashboard from "./components/home/Dashboard";
import WhoWeAre from "./components/home/WhoWeAre";
import Donate from "./components/home/Donate";
import Invest from "./components/home/Invest";
import Blog from "./components/home/Blog";
import EnrollNgo from "./components/home/EnrollNgo";
import Testimonial from "./components/home/Testimonial";
import Spinner from "./components/Spinner";

const home = () => {
  return (
    <div className="flex flex-col gap-16">
      <Banner />
      <Suspense fallback={<Spinner />}>
        <Dashboard />
      </Suspense>
      <WhoWeAre />
      <Donate />
      <Invest />
      <EnrollNgo />
      <Testimonial />
      <Blog
        title="Insights from our experts &
            news from the our industry"
        isHome={true}
      />
    </div>
  );
};

export default home;

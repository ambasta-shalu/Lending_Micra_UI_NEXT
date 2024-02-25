import AboutUs from "../components/about/AboutUs";
import Stats from "../components/about/Stats";
import Top from "../components/about/Top";
import Testimonial from "../components/home/Testimonial";
import WhoWeAre from "../components/home/WhoWeAre";

const about = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <Top />
        <AboutUs />
        <WhoWeAre />
        <Stats />
        <Testimonial />
      </div>
    </>
  );
};

export default about;

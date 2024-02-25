import LeftSide from "../components/contactUs/Left";
import RightSide from "../components/contactUs/Right";

const contact = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default contact;

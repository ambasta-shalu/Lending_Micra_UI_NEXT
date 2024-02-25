import {
  RiWhatsappFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
const SocialIcons = () => {
  return (
    <div className="flex justify-between">
      <RiWhatsappFill className="bg-white text-whatsAppbg text-4xl" />
      <RiLinkedinBoxFill className="bg-white text-linkedInbg text-4xl" />
      <RiTwitterFill className="bg-white text-twitterbg text-4xl" />
      <RiFacebookCircleFill className="bg-white text-facebookbg text-4xl" />
    </div>
  );
};

export default SocialIcons;

import Image from "next/image";
type imageData = {
  alt: string;
  donateImage: string;
};
function CardImage(props: imageData) {
  return (
    <>
      <Image
        className="w-96 h-64 object-cover mb-4 rounded"
        width="200"
        height="200"
        alt={props.alt}
        src={props.donateImage}
      />
    </>
  );
}
export default CardImage;

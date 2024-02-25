const OurStory = ({ details }: { details: string[] }) => {
  return (
    <>
      {details.map((detail, index) => {
        return (
          <p key={index} className="font-normal text-base leading-7 mt-5 mb-6">
            {detail}
          </p>
        );
      })}
    </>
  );
};

export default OurStory;

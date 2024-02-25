type title = {
  titleLineOne: string;
  titleLineSecond: string;
};

function PageTitile(props: title) {
  return (
    <>
      <div
        className="flex w-auto justify-start 
            md:w-1/2 md:h-28 md:mx-4"
      >
        <h1 className="font-bold text-2xl md:text-4xl md:my-3 ">
          {props.titleLineOne}
          <br />
          {props.titleLineSecond}
        </h1>
      </div>
    </>
  );
}
export default PageTitile;

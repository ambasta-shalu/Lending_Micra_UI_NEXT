type cardTitle = {
  title: string;
};
function CardTitle(props: cardTitle) {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
    </>
  );
}
export default CardTitle;

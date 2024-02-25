import DetailsMain from "../../components/DetailsMain";
import DetailsSidebar from "../../components/DetailsSidebar";
const page = () => {
  return (
    <main className=" grid grid-cols-3 gap-5 mx-32 mt-16 mb-4">
      <div className="col-span-2">
        <DetailsMain isDonate={true} />
      </div>
      <DetailsSidebar isDonate={true} />
    </main>
  );
};

export default page;

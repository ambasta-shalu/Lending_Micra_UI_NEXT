import DetailsMain from "../../components/DetailsMain";
import DetailsSidebar from "../../components/DetailsSidebar";
const page = () => {
  return (
    <main className=" grid grid-cols-3 gap-5 mx-32 mt-16 mb-4">
      <div className="col-span-2">
        <DetailsMain isDonate={false} />
      </div>
      <DetailsSidebar isDonate={false} />
    </main>
  );
};

export default page;

import { updates } from "../../../public/data";
const Updates = () => {
  return (
    <div className="mt-7 flex flex-col-reverse  bg-white rounded-lg shadow-4xl px-7 pt-4">
      {updates.map((update) => {
        return (
          <div key={update.id}>
            <p className="bg-lightpink w-fit p-2">Update {update.id}</p>
            <p className="text-black text-sm font-bold mt-3">{update.title}</p>
            <p className="text-black text-xs font-light mt-2">
              Published Date: {update.publishedDate}
            </p>
            <p className="text-black text-sm font-normal leading-normal mt-4">
              {update.details}
            </p>
            <hr className="mt-5 mb-6" />
          </div>
        );
      })}
    </div>
  );
};

export default Updates;

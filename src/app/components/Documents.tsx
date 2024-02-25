import Image from "next/image";
import { documents } from "../../../public/data";

const Documents = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-14 justify-center bg-white rounded-lg shadow-4xl px-7 py-7 mt-7">
      {documents.map((document) => {
        return (
          <div key={document.id}>
            <div className="flex justify-center bg-neutral-100 h-96 py-3">
              <Image
                src={document.image}
                width={250}
                height={350}
                alt={document.title}
              />
            </div>
            <p className="mt-3 text-xs">{document.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Documents;

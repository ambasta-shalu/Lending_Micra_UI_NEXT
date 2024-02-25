"use client";
import Image from "next/image";
import { investDetails } from "../../../public/data";
import { useState } from "react";
import Button from "./buttons";
import CommentSection from "./CommentSection";
import OurStory from "./OurStory";
import Documents from "./Documents";
import Updates from "./Updates";
import ReferToUsModal from "./ReferToUsModal";

const DetailsMain = ({ isDonate }: { isDonate: boolean }) => {
  const [showReferModal, setShowReferModal] = useState(false);
  const [filteredData, setFilteredData] = useState(investDetails[0]);
  const [activeTab, setActiveTab] = useState("Our Story");
  type FilteredData = {
    id: number;
    title: string;
    details: string[];
  };

  const filterDetails = (id: number) => {
    const newData = investDetails.filter((item) => item.id === id);
    setFilteredData(newData[0]);
    setActiveTab(newData[0].title);
  };

  return (
    <div>
      <div className="w-full h-48 bg-neutral-100">
        <div className="flex justify-between pt-9">
          <p className="text-black text-2xl font-bold  pl-7">
            Suparna Gayen And Group
          </p>
          {isDonate && (
            <p className="flex bg-yellowbg mr-7 items-center p-1 font-bold">
              Tax Benefits
            </p>
          )}
        </div>
      </div>
      <div className="relative -top-20 flex justify-center -mb-20">
        <div className="w-11/12">
          <Image
            src="/images/investDetailsMain.png"
            width={950}
            height={500}
            alt="Banner Image"
          />
          <div>
            <ul className="flex gap-16 border-b border-blurborder mt-7">
              {investDetails.map((item) => {
                return (
                  <>
                    <li
                      key={item.id}
                      onClick={() => filterDetails(item.id)}
                      className={
                        item.id === filteredData.id
                          ? "font-bold text-xl leading-10 text-homeblue border-b-4 border-homeblue cursor-pointer"
                          : "font-bold text-xl leading-10 text-grayborder cursor-pointer"
                      }
                    >
                      {item.title}
                    </li>
                  </>
                );
              })}
            </ul>

            {(() => {
              switch (activeTab) {
                case "Our Story":
                  return <OurStory details={filteredData.details} />;
                case "Documents":
                  return <Documents />;
                case "Updates":
                  return <Updates />;
                case "Comments":
                  return;
                default:
                  return null;
              }
            })()}
          </div>

          <article className="flex justify-between items-center pl-5 pr-6 py-4 mt-7 shadow-4xl rounded-xl">
            <p className="text-xl font-bold leading-7">
              Know someone in need of funds?
            </p>
            <div onClick={() => setShowReferModal(!showReferModal)}>
              <Button type="primary" href="#">
                Refer to us
              </Button>
            </div>

            <ReferToUsModal
              isVisible={showReferModal}
              onClose={() => setShowReferModal(!showReferModal)}
            />
          </article>
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;

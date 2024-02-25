import { AiFillCaretDown } from "react-icons/ai";

type filterData = {
  data: string;
};

function Filter(props: filterData) {
  return (
    <>
      <div className="flex md:w-auto md:h-[52px]  md:justify-between bg-gray-border    align-middle rounded-sm border-[1px] cursor-pointer hover:border-[3px]     ">
        <div className="flex items-center  lg:justify-between ">
          <select className=" text-[11px] px-[3px] py-[6px] lg:text-[16px] bg-gray-border cursor-pointer ">
            <option value="otherOption">{props.data}</option>
            <option value="otherOption">option 2</option>
            <option value="otherOption">option 3</option>
          </select>
        </div>
      </div>
    </>
  );
}
export default Filter;

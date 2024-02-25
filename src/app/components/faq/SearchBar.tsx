import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <form className="flex items-center md:mr-16">
      <div className="relative hover:border-2 border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="Search any queries here..."
          className="py-2 px-4 rounded-full text-black font-bold placeholder:font-normal focus:outline-0  bg-gray-100  "
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <BsSearch className="h-5 w-5 text-blue-500" />
        </div>
      </div>
    </form>
  );
}
export default SearchBar;

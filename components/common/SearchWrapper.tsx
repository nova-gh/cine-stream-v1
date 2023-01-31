import { ReactChildren } from "types/typing";
import { FaSearch } from "react-icons/fa";
const SearchWrapper = ({ children }: ReactChildren) => {
  return (
    <div className="flex items-center w-full pt-5 pb-3 space-x-5 bg-bg">
      <div className="text-2xl">
        <FaSearch />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default SearchWrapper;

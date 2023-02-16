"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchOption, setSearchOption] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search/${query}?option=${searchOption}`);
  };
  console.log(searchOption);
  return (
    <div className="flex w-full items-center bg-bg ">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-row items-center rounded-xl "
      >
        <input
          type="text"
          name="SearchInput"
          id="SearchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          autoComplete="off"
          placeholder="Movies, TVs or Both"
          className="w-3/4 rounded-l-lg bg-transparent px-4 py-2 text-sm text-white placeholder:text-sm md:text-xl md:placeholder:text-xl"
        />

        <select
          name="searchOption"
          id="searchOption"
          className="rounded-r-lg bg-bg py-2 text-sm md:text-xl"
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="" className="text-white ">
            Both
          </option>
          <option value="movies" className="text-white ">
            Movies
          </option>
          <option value="shows" className="text-white ">
            Shows
          </option>
        </select>
        <div className="ml-4 flex items-center text-xl sm:ml-6 sm:text-2xl">
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

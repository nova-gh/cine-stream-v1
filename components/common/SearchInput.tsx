"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

type Props = {
  option?: string;
};

const SearchInput = ({ option }: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchOption, setSearchOption] = useState(option ?? "movie");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search/${query}?option=${searchOption}`);
  };
  return (
    <div className="flex items-center bg-bg">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl flex-row items-center rounded-xl "
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
          defaultValue={searchOption}
          className="rounded-r-lg bg-bg py-2 text-sm md:text-xl"
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="movie" className="text-white ">
            Movies
          </option>
          <option value="tv" className="text-white ">
            Shows
          </option>
        </select>
        <button
          title="Search"
          aria-label="Search"
          type="submit"
          className="link_hover ml-3 flex items-center rounded-md p-3 text-xl hover:bg-bg-dark hover:text-brand sm:text-2xl"
        >
          <FaSearch />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

import { useCallback } from "react";
import { useProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { search, setSearch, setPage } = useProductContext();

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
    setPage(1);
  }, []);

  return (
    <input
      value={search}
      onChange={handleSearch}
      placeholder="Search product..."
      className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;

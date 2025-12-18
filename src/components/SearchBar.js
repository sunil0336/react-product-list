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
      type="text"
      placeholder="Search products..."
      className="w-full border p-3 rounded-lg
             focus:outline-none focus:ring-2 focus:ring-blue-500
             transition"
    />

  );
};

export default SearchBar;

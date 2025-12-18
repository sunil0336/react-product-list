import { useProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { search, setSearch, setPage } = useProductContext();

  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reset pagination on search
  };

  return (
    <input
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search products..."
      className="w-full border p-3 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 transition"
    />
  );
};

export default SearchBar;

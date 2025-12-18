import { useProductContext } from "../context/ProductContext";

const Filters = () => {
  const { category, setCategory, price, setPrice, setPage } =
    useProductContext();

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handlePrice = (e) => {
    setPrice(Number(e.target.value));
    setPage(1);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center bg-gray-50 p-4 rounded-lg">
      <select
        value={category}
        onChange={handleCategory}
        className="border p-2 rounded-md"
      >
        <option value="All">All</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Accessories">Accessories</option>
      </select>

      <div className="flex items-center gap-2">
        <input
          type="range"
          min="0"
          max="2000"
          value={price}
          onChange={handlePrice}
          className="accent-blue-500"
        />
        <span>Max ₹{price}</span>
      </div>
    </div>
  );
};

export default Filters;

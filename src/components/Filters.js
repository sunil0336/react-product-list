import { useCallback } from "react";
import { useProductContext } from "../context/ProductContext";

const Filters = () => {
  const { category, setCategory, price, setPrice, setPage } =
    useProductContext();

  const handleCategory = useCallback((e) => {
    setCategory(e.target.value);
    setPage(1);
  }, []);

  const handlePrice = useCallback((e) => {
    setPrice(e.target.value);
    setPage(1);
  }, []);

  return (
  <div className="flex flex-wrap gap-4 items-center">
    <select
      onChange={handleCategory}
      className="border p-2 rounded"
    >
      <option>All</option>
      <option>Mobile</option>
      <option>Laptop</option>
      <option>Accessories</option>
    </select>

    <div className="flex items-center gap-2">
      <input
        type="range"
        min="50"
        max="2000"
        value={price}
        onChange={handlePrice}
      />
      <span className="text-sm">Max ₹{price}</span>
    </div>
  </div>
);
};

export default Filters;

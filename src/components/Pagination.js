import { useMemo } from "react";
import { useProductContext } from "../context/ProductContext";

const ITEMS_PER_PAGE = 4;

const Pagination = () => {
  const { products, search, category, price, page, setPage } =
    useProductContext();

  const filteredCount = useMemo(() => {
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((p) =>
        category === "All" ? true : p.category === category
      )
      .filter((p) => p.price <= price).length;
  }, [products, search, category, price]);

  const totalPages = Math.ceil(filteredCount / ITEMS_PER_PAGE);

  return (
    <div className="flex justify-center gap-2 mt-4">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-4 py-2 border rounded-full text-sm ${
  page === i + 1
    ? "bg-blue-500 text-white"
    : "hover:bg-gray-100"
}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

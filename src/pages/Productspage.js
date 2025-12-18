import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Product Catalog
        </h1>

        <div className="space-y-4">
          <SearchBar />
          <Filters />
          <ProductList />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl font-bold text-center mb-8">
      Product Catalog
    </h1>

    <div className="bg-white p-6 rounded-xl shadow space-y-6">
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

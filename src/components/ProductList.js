import { useMemo } from "react";
import { useProductContext } from "../context/ProductContext";

const ITEMS_PER_PAGE = 4;

const ProductList = () => {
    const { products, search, category, price, page, loading } =
        useProductContext();

    const filteredProducts = useMemo(() => {
        return products.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [products, search]);

    const paginatedProducts = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredProducts, page]);

    if (loading) return <p className="text-center text-gray-500 animate-pulse">
        Loading products...
    </p>
        ;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {paginatedProducts.map(p => (
                <div
                    key={p.id}
                    className="border rounded-xl p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300"
                >

                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.category}</p>
                    <p className="font-bold mt-2">₹{p.price}</p>

                </div>
            ))}
        </div>
    );
};

export default ProductList;

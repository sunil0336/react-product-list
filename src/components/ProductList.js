import { useMemo } from "react";
import { useProductContext } from "../context/ProductContext";

const ITEMS_PER_PAGE = 4;

const ProductList = () => {
    const { products, search, category, price, page, loading } =
        useProductContext();

    // ✅ useMemo at top level
    const filteredProducts = useMemo(() => {
        return products.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase()) &&
            (category === "All" || p.category === category) &&
            p.price <= price
        );
    }, [products, search, category, price]);

    const paginatedProducts = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredProducts, page]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-2 gap-4">
            {paginatedProducts.map(p => (
                <div
                    key={p.id}
                    className="border p-4 rounded-lg hover:shadow-lg transition duration-300 bg-white"
                >

                    <h3>{p.name}</h3>
                    <p>{p.category}</p>
                    <p>₹{p.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

import Product from "./Product";

function ProductList() {
    const items = Array.from({ length: 10 });
    return (
        <div className="p-4">
            <div className="flex flex-wrap">
                {items.map((_, index) => (
                    <div key={index} className="w-1/4 ">
                        <Product />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

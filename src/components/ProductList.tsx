import Product from "./Product";

function ProductList() {
    const items = Array.from({ length: 10 });
    return (
        <div className="p-4 lg:mr-20 lg:ml-20">
            <div className="flex flex-wrap">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className="lg:w-1/4
                    md:w-1/3 "
                    >
                        <Product />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

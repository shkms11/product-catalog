// a single product is shown using this
// w/o hover
import "./Product.css";
function Product() {
    return (
        <div className="p-4 bg-white ">
            <div>
                <img
                    src=""
                    alt="product image"
                    className="w-full h-auto mb-3"
                />
            </div>
            <div className="mb-2">
                <p className="mr-2 font-bold">price </p>
                <p>
                    <span className="text-gray-600">X Orginal price </span>
                    <span className="text-red-600">-y%</span>
                </p>
            </div>
            <h2 className="">Product title</h2>

            <div className="text-sm mb-4">
                <div className="text-gray-600">
                    <p>discription 1</p>
                    <p>X colors</p>
                </div>
                <p>Status</p>
            </div>

            <div className="text-sm text-gray-600">
                <h3>prime status</h3>
            </div>

            {/* <h1>add to cart button</h1>
            <h1>add to wish list</h1> */}
        </div>
    );
}

export default Product;

import ProductList from "./productList"; //a catagory uses productlist fn for present its producst, when clicked

function CatagoryList() {
    return (
        <div>
            <h1>Product for tech</h1>
            <ProductList />
        </div>
    );
}


export default CatagoryList;
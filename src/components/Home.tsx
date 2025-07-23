import CatagoryList from "./CatagoryList";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <CatagoryList />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;

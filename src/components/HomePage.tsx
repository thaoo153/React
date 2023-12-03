import Product from "./Product";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const HomePage = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Product />
            </div>
            <div className="mt-5" style={{ marginTop: '100px' }}>
                <Footer />
            </div>
        </>
    )
}
export default HomePage;
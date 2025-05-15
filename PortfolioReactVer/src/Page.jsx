import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./Page_Home";

function Page(){

    return(
        <>
            <div className="page-container">
                <div className="centered-container">
                    <Header />
                    <Navbar />
                    <Body />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Page;
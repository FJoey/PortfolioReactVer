import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({children}){

    return(
        <div className="page-container">
            <div className="centered-container">
                <Header />
                <Navbar />
                <div>{children}</div>
                <Footer />
            </div>
        </div>
    );

}

export default MainLayout;
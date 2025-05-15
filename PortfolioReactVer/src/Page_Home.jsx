import MainLayout from "./MainLayout";
import Content from "./Content";
import HomeContent_Bio from "./HomeContent_Bio";
import HomeContent_BioMedia from "./HomeContent_BioMedia";

function HomePage(){

    return(
        <MainLayout>
            <div className="body-container">
                <Content content={<HomeContent_Bio />}/>
                <Content content={<HomeContent_BioMedia />}/>
            </div>
        </MainLayout>
    );
}

export default HomePage;
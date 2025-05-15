import MainLayout from "./MainLayout";
import Content from "./Content";
import Bio from "./Bio";
import BioMedia from "./BioMedia";

function HomePage(){

    return(
        <MainLayout>
            <div className="body-container">
                <Content content={<Bio />}/>
                <Content content={<BioMedia />}/>
            </div>
        </MainLayout>
    );
}

export default HomePage;
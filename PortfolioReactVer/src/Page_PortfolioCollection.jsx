import MainLayout from "./MainLayout";
import Content from "./Content";
import PortfolioContent_Web from "./PortfolioContent_Web";
import PortfolioContent_Games from "./PortfolioContent_Games";

function Page_PortfolioCollection(){

    return(
        <MainLayout>
            <div className="body-container">
                <Content content={<PortfolioContent_Web />}/>
                <Content content={<PortfolioContent_Games />}/>
            </div>
        </MainLayout>
    );
}

export default Page_PortfolioCollection;
import MainLayout from "./MainLayout";
import Card from "./Card"

function Page_InteractiveSection(){

    return(

        <MainLayout>
            <div className="card-container">

                <Card />
                <Card />
                <Card />
                <Card />

            </div>
        </MainLayout>

    );

}

export default Page_InteractiveSection;
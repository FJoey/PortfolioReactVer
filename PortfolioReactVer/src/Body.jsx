import Content from "./Content";
import Bio from "./Bio";
import BioMedia from "./BioMedia";

function Body(){

    return(
        <>
            <div className="body-container">
                <Content content={<Bio />}/>
                <Content content={<BioMedia />}/>
            </div>
        </>
    );
}

export default Body;
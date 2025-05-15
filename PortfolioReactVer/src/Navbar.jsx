import {Link} from "react-router-dom";

function Navbar(){

    return(
        <>
            <nav>
                    <Link to="/"> J.M. Harrington</Link>
                    <Link to="/portfoliocollection"> Portfolio Collection</Link>
                    <Link to="/interactivesection"> Interactive Section</Link>
            </nav>
        </>
    );

}

export default Navbar
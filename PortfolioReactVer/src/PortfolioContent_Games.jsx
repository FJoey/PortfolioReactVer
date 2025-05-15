import {Link} from "react-router-dom";
import gamePortfolioPlaceholder from './assets/game-portfolio-placeholder.jpg';

function PortfolioContent_Games(){

    return(
        <>
            <Link className="content-link">
                <p>
                    <div className="content-image-mask">
                        <img src={gamePortfolioPlaceholder} />
                    </div>
                    <h1>Game Development</h1>
                </p>
            </Link>  
        </>
    );
}

export default PortfolioContent_Games;
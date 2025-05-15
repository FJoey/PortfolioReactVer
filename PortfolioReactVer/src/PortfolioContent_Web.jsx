import { Link } from 'react-router-dom';
import webPortfolioPlaceholder from './assets/web-portfolio-placeholder.jpg';

function PortfolioContent_Web(){

    return(
        <>
            <Link className="content-link">
                <p>
                    <div className="content-image-mask">
                        <img src={webPortfolioPlaceholder} />
                    </div>
                    <h1>Web Development</h1>
                </p>
            </Link>  
        </>
    );
}

export default PortfolioContent_Web;
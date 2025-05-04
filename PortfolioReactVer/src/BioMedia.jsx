import beastPlaceholder from './assets/beast-placeholder.jpg';

function BioMedia(){

    return(
        <>
            <div className='bio-media'>
                <img src={beastPlaceholder} className='bio-me'></img>
            </div>
        </>
    );
}

export default BioMedia;
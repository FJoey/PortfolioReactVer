import linkedInLogo from './assets/LI-Logo.png'
import itchIoLogo from './assets/itchio-logo-white.png'
import gitHubLogo from './assets/GitHub_Logo_White.png'
import cSharpLogo from './assets/csharp-logo.png'
import javaLogo from './assets/java-logo.png'
import blazorLogo from './assets/blazor-logo.png'
import unityLogo from './assets/unity-logo.png'

function Bio(){
    return(
        <>
            <div>
                <div className='logo-container'>
                    <img className='itch-io-logo' src={itchIoLogo}></img>
                    <img className='linked-in-logo' src={linkedInLogo}></img>
                    <img className='github-logo' src={gitHubLogo}></img>
                </div>

                <p className='bio-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className='language-container'>
                    <img className='c-sharp-logo' src={cSharpLogo}></img>
                    <img className='java-logo' src={javaLogo}></img>
                    <img className='blazor-logo' src={blazorLogo}></img>
                    <img className='unity-logo' src={unityLogo}></img>
                </div>
            </div>
        </>
    )
}

export default Bio;
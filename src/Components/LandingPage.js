import LPimage from "../assets/LPimage.png";

const LandingPage = () => {
    return (
        <main> 

            <div className="main-container">

                <div className="image-container">
                    <img className="main-image" src={LPimage} alt="blablabla" />
                </div>

                <div className="text-container">
                    <h1>Take Breakful Breaks!</h1>

                    <ul>
                        <li>A system that makes taking breaks an easy and fun task</li>
                        <li>Easily schedule breaks based on your Google Calendar</li>
                        <li>Feel free to choose your breaks duration and content</li>
                    </ul>
                    

                </div>

                <div className="sign-up-container">
                    <button>Sign up with Google Account</button>
                </div>

            </div>
            
        </main>
    )
}

export default LandingPage; 
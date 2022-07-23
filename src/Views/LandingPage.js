import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import LPimage from "../assets/LPimage.png";
import { authActions } from "../store/auth";
import { GoogleLogin } from "react-google-login";
import SignUp from "../Components/SignUp";

const LandingPage = () => {
    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const handleSignUp = () => {
    //     dispatch(authActions.signup())
    // }

    return (
        <main id="content-wrapper"> 

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
                <SignUp />

                {/* <div className="sign-up-container">
                    {!isLoggedIn ? <button onClick={handleSignUp}>Sign up with Google Account</button> : navigate(`/dashboard`)}
                </div> */}

            </div>
            
        </main>
    )
}

export default LandingPage; 
import { authActions } from "../store/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import google from "../assets/google.png"

function SignIn() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();

  useEffect(() => {
    saveAccessToken();

    if(localStorage.getItem('access_token') !== undefined && localStorage.getItem('access_token') !== null) {
      navigate('/dashboard')
    }
  });

  const handleSignIn = () => {
    const authForm = document.createElement('form');
    const clientID = "91676412592-kpeda2culg95jurferepn89nrqretk4f.apps.googleusercontent.com";
    const scope = "https://www.googleapis.com/auth/calendar";
    const oauthEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    authForm.setAttribute('method', 'GET');
    authForm.setAttribute('action', oauthEndpoint);

    const params = {
      'client_id': clientID,
      // 'redirect_uri': 'https://breakful.netlify.app/',
      'redirect_uri': 'http://localhost:3000',
      'response_type': 'token',
      'scope': scope 
    };

    for (let p in params) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      authForm.appendChild(input)
    }

    document.body.appendChild(authForm);
    authForm.submit();
  }

  const saveAccessToken = () => {
    //google sends the access token in the URL callback
    //this function extracts the access token from the URL
 
    //snippet grabbed from: https://stackoverflow.com/questions/23699666/javascript-get-and-set-url-hash-parameters
    const hash = window.location.hash.substr(1);
 
    const objectResult = hash.split('&').reduce(function (res, item) {
        const parts = item.split('=');
        res[parts[0]] = parts[1];
        return res;
    }, {});
 
    if (objectResult.access_token !== undefined) {
      localStorage.setItem('access_token', objectResult.access_token);
      dispatch(authActions.signIn())
    }
  }

  return (
    <div className="sign-in-container">
      {!isLoggedIn ? (
          <button className="login" onClick={handleSignIn}>
            <img  src={google} alt="Google logo" />
            Sign in with Google 
          </button>
      ) : (
        ""
      )}
    </div>
  )
}

export default SignIn;
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

function SignUp() {

  const responseGoogle = response => {
    console.log(response);
  }

  const responseError = error => {
    console.log(error);
  }


  return (

    <div>

      <div>
        {/* TO DO: put the clientID in .env */}
        <GoogleLogin clientId='91676412592-kpeda2culg95jurferepn89nrqretk4f.apps.googleusercontent.com' 
        buttonText='Sign In & Authorize Calendar'
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}

        // important to get the refresh token from the backend server
        responseType='code'
        accessType='offline' //we can access the refresh toke generated from this code at anytime, it's not going to be user-dependent
        scope='openid email profile https://www.googleapis.com/auth/calendar'
        />
      </div>

    </div>

  )

}


export default SignUp;
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import bg_pic from '../assets/background.jpg';


import { client } from '../client';

const Login = () => {

  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  }
  

  return (
      <div className="flex justify-start items-center flex-col h-screen">

        <div className=" relative w-full h-full">
          <img className="w-full h-full object-cover" src={bg_pic} alt=""/>
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 ">
          <div className="text-4xl py-8 text-yellow-50 font-bold ">
          WELCOME TO ARTISTIFY
          </div>

          <div>
            <GoogleLogin
              clientId= {process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-5 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-6" /> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>

          </div>

        </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import authSvg from "../assets/auth.svg"
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Signup = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        textChange: 'submit'
    });



    const { name, email, password, password2, textChange } = formData

    const handleChange = text => event => {
        setFormData({...formData, [text]: event.target.value })
    }

    const responseGoogle = response => {

    }

    const responseFacebook = response => {

    }

    const clickSubmit = event => {
        event.preventDefault();

        const regiseteruser = {
            name,
            email,
            password
         }

        console.log(regiseteruser)

        if (name && email && password) {

            //패스워드가 불일치 할때
            if (password !== password2) {
                toast.error("Password Don't match")

            }

            setFormData({...formData, textChange: 'Submitting'})
            axios
                .post('/users/signup',  regiseteruser)
                .then(res => {
                    console.log(res)
                    setFormData({
                        ...formData,
                        name: '',
                        email: '',
                        password: '',
                        password2: '',
                        textChange: "Submitted"
                    })

                    toast.success(res.data.message);
                })
                .catch(err => {

                    toast.error(err.response.data.error)

                    setFormData({
                        ...formData,
                        name: '',
                        email: '',
                        password: '',
                        password2: '',
                        textChange: "Sign up"
                    })
                })

        } else {
            toast.error('please fill all fields')
        }
    }


    return (
        <div className={"min-h-screen bg-gray-100 text-gray-900 flex justify-center"}>
            <ToastContainer />
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Sign Up for Dong Uk
                        </h1>
                        <div className={'w-full flex-1 mt-8 text-indigo-500'}>
                            <div className={'flex flex-col items-center'}>
                                <GoogleLogin
                                    clientId={'934995609960-802ftdis9qvennlghppu2eqobmgqhdvi.apps.googleusercontent.com'}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <button
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                                        >
                                            <div className=' p-2 rounded-full '>
                                                <i className='fab fa-google ' />
                                            </div>
                                            <span className={'ml-4'}>Sign up with Google</span>
                                        </button>
                                    )}
                                />
                                <FacebookLogin
                                    appId={'392528391907770'}
                                    autoLoad={false}
                                    callback={responseFacebook}
                                    render={renderProps => (
                                        <button
                                            onClick={renderProps.onClick}
                                            className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                        >
                                         <div className={' p-2 rounded-full'}>
                                             <i className={'fab fa-facebook'}/>
                                         </div>
                                         <span className={'ml-4'}>Sign up with Facebook</span>
                                        </button>
                                    )}
                                />
                            </div>
                        </div>
                        <div className={"my-12 border-b text-center"}>
                            <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                Or sign up with email
                            </div>
                        </div>

                        <form
                            className={'w-full flex-1 mt-8 text-indigo-500'}
                            onSubmit={clickSubmit}
                        >
                            <div className={"mx-auto max-w-xs relative"}>
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                    type={'text'}
                                    placeholder={'Name'}
                                    onChange={handleChange('name')}
                                    value={name}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type={'email'}
                                    placeholder={'Email'}
                                    onChange={handleChange('email')}
                                    value={email}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type={'password'}
                                    placeholder={'Password'}
                                    onChange={handleChange('password')}
                                    value={password}
                                />
                                <input
                                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                                    type={'password'}
                                    placeholder={'Confirm Password'}
                                    onChange={handleChange('password2')}
                                    value={password2}
                                />
                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semi-bold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >
                                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                    <span className='ml-3'>{textChange}</span>
                                </button>
                            </div>
                            <div className='my-12 border-b text-center'>
                                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                    Or sign In with e-mail
                                </div>
                            </div>
                            <div className={'flex flex-col items-center'}>
                                <Link className='w-full max-w-xs font-bold shadow-sm rounded-lg py-4
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                      to='/login'
                                      target='_self'
                                >
                                    <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                                    <span className='ml-4'>Sign In</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
                    <div
                        className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${authSvg})` }}
                    ></div>
                </div>
            </div>
        </div>

    );
};

export default Signup;

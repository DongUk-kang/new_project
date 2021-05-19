import React, { useState } from 'react';
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from 'react-router-dom'
import axios from "axios";
import authSvg from "../assets/auth.svg"

const Signup = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        textChange: 'submit'
    });



    const { name, email, password, password2, textChange } = formData

    const handleChange = name => event => {
        setFormData({...formData, [name]: event.target.values })
    }

    const clickSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }

        console.log(newUser)
        // axios.post("https://localhost:5000/users/signup", newUser)
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
    }





    // const signupForm = () => (
    //     <form>
    //         <div className={"form-group"}>
    //             <label className={"text-muted"}>Name</label>
    //             <input
    //                 onChange={handleChange('name')}
    //                 value={name}
    //                 type={"text"}
    //                 className={"form-control"}
    //             />
    //         </div>
    //         <div className={"form-group"}>
    //             <label className={"text-muted"}>Email</label>
    //             <input
    //                 onChange={handleChange('name')}
    //                 value={email}
    //                 type={"email"}
    //                 className={"form-control"}
    //             />
    //         </div>
    //         <div className={"form-group"}>
    //             <label className={"text-muted"}>Password</label>
    //             <input
    //                 onChange={handleChange('password')}
    //                 value={password}
    //                 type={"password"}
    //                 className={"form-control"}
    //             />
    //         </div>
    //         <div>
    //             <button className={"btn btn-primary"} onClick={clickSubmit}>
    //                 {buttonText}
    //             </button>
    //         </div>
    //     </form>
    // )

    return (
        // <Layout>
        //     <div className={"col-md-6 offset-md-3"}>
        //         <ToastContainer />
        //         <h1 className={"p-5 text-center"}>Sign up</h1>
        //         {signupForm()}
        //         <br />
        //         <Link to={"/auth/password/forgot"} className={"btn btn-sm btn-outline"}>
        //             Forgot Password
        //         </Link>
        //     </div>
        // </Layout>
        <div className={"min-h-screen bg-gray-100 text-gray-900 flex justify-center"}>
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extra-bold'>
                            Sign Up for Dong Uk
                        </h1>

                        <form className={'w-full flex-1 mt-8 text-indigo-500'} onSubmit={clickSubmit}>
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
                            <div className={"my-12 border-b text-center"}>
                                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                    Or sign with email or social login
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

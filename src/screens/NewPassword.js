import React, {useState} from 'react';
import { Link } from "react-router-dom";
import reset from "../assets/reset.svg"


const NewPassword = () => {

    const [ newpassword, setNewPassword ] = useState({
        password: '',
        textChange: 'submit'
    });

    const { password,  textChange } = newpassword

    const handleChange = text => event => {
        setNewPassword({...newpassword, [text]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();

       const NewPassword = {
           password
       }

       console.log(NewPassword)
    }

    return (
        <div className={"min-h-screen bg-gray-100 text-gray-900 flex justify-center"}>
            <div className={'max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'}>
                <div className={"lg:w-1/2 xl:w-5/12 p-6 sm:p-12"}>
                    <div className={"mt-12 flex flex-col items-center"}>
                        <h1 className={"text-2xl xl:text-3xl font-extra-bold"}>
                            New Password
                        </h1>
                        <form className={'w-full flex-1 mt-8 text-indigo-500'} onSubmit={clickSubmit}>
                            <div className={"mx-auto max-w-xs relative"}>
                                <input
                                    className={"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"}
                                    type={'password'}
                                    placeholder={"Passoword"}
                                    onChange={handleChange('password')}
                                    value={password}
                                />
                                <button
                                    type={"submit"}
                                    className={"mt-5 tracking-wide font-semi-bold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"}
                                >
                                    <i className={"fas fa-user-plus fa 1x w-6 -ml-2"} />
                                    <span className={"ml-3"}>{textChange}</span>
                                </button>
                            </div>
                            <div className={"my-12 border-b text-center"}>
                                <div className={"leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"}>
                                    Login Here
                                </div>
                            </div>
                            <div className={"flex flex-col items-center"}>
                                <Link className={"w-full max-w-xs font-bold shadow-sm rounded-lg py-4 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"}
                                      to={"/login"}
                                      target={"_self"}
                                >
                                    <i className={"fas fa-sign-in-alt fa 1x w-6 -ml-2 text-indigo-500"} />
                                    <span className={"ml-4"}>Login</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={"flex-1 bg-indigo-100 text-center hidden lg:flex"}>
                    <div
                        className={"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"}
                        style={{ backgroundImage: `url(${reset})` }}
                    >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;

import React,{useState, useEffect} from 'react';
import welcome from "../assets/welcome.svg"
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import jwt from "jsonwebtoken"

const Activate = ({ match }) => {

    const [ activateData, setActivateData ] = useState({
        name: '',
        token: '',
        show: true
    })

    useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);

        if (token) {
            setActivateData({...activateData, name, token})
        }

        console.log(token, name)
    }, [match.params])

    const { name, token, show } = activateData


    const clickSubmit = event => {
        event.preventDefault()

        axios
            .post('/users/activation', {token})
            .then(res => {
                setActivateData({
                    ...activateData,
                    show: false
                })
                toast.success(res.data.message)
            })
            .catch(err => toast.error(err.response.data))
    }


    return (
        <div className={"min-h-screen bg-gray-100 text-gary-900 flex justify-center"}>
            <ToastContainer />
            <div className={'max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'}>
                <div className={'lg:w-1/2 xl:w-5/12 p-6 sm:p-12'}>
                    <div className={'mt-12 flex flex-col items-center'}>
                        <h1 className={'text-2xl xl:text-3xl font-extra-bold'}>
                            Welcome {name}
                        </h1>
                        <form className={'w-full flex-1 mt-8 text-indigo-500'} onSubmit={clickSubmit}>
                            <div className={'mx-auto max-w-xs relative'} />
                            <button
                                type={'submit'}
                                className={'mt-5 tracking-wide font-semi-bold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'}
                            >
                                <i className={'fas-user-plus fa 1x w-6 -ml-2'}/>
                                <span className={'ml-3'}>Account Register</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className={'flex-1 bg-indigo-100 text-center hidden lg:flex'}>
                    <div
                        className={'m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'}
                        style={{ backgroundImage: `url(${welcome})` }}
                    ></div>
                </div>
            </div>
        </div>


    );
};

export default Activate;

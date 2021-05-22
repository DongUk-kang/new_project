import React,{useState} from 'react';
import Layout from "../core/Layout";
import welcome from "../assets/welcome.svg"

const Activate = () => {

    const [ activateData, setActivateData ] = useState({
        email: '',
        textChange: 'submit'
    })

    const { email, textChange } = activateData

    const handleChange = text => event => {
        setActivateData({...event, [text]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
    }


    return (
        <div className={"min-h-screen bg-gray-100 text-gary-900 flex justify-center"}>
            <div className={'max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'}>
                <div className={'lg:w-1/2 xl:w-5/12 p-6 sm:p-12'}>
                    <div className={'mt-12 flex flex-col items-center'}>
                        <h1 className={'text-2xl xl:text-3xl font-extra-bold'}>
                            Click button
                        </h1>
                        <form className={'w-full flex-1 mt-8 text-indigo-500'} onSubmit={clickSubmit}>
                            <div className={'mx-auto max-w-xs relative'} />
                            <button
                                type={'submit'}
                                className={'mt-5 tracking-wide font-semi-bold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'}
                            >
                                <i className={'fas-user-plus fa 1x w-6 -ml-2'}/>
                                <span className={'ml-3'}>{textChange}</span>
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

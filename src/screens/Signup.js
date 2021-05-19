import React, { useState } from 'react';
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'submit'
    });

    const { name, email, password, buttonText } = values

    const handChange = name => event => {

    }

    const clickSubmit = event => {
        event.preventDefault();
    }

    const signupForm = () => (
        <form>
            <div className={"form-group"}>
                <label className={"text-muted"}>Name</label>
                <input
                    onChange={handChange('name')}
                    value={name}
                    type={"text"}
                    className={"form-control"}
                />
            </div>
            <div className={"form-group"}>
                <label className={"text-muted"}>Email</label>
                <input
                    onChange={handChange('name')}
                    value={email}
                    type={"email"}
                    className={"form-control"}
                />
            </div>
            <div className={"form-group"}>
                <label className={"text-muted"}>Password</label>
                <input
                    onChange={handChange('password')}
                    value={password}
                    type={"password"}
                    className={"form-control"}
                />
            </div>
            <div>
                <button className={"btn btn-primary"} onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (
        <Layout>
            <div className={"col-md-6 offset-md-3"}>
                <ToastContainer />
                <h1 className={"p-5 text-center"}>Sign up</h1>
                {signupForm()}
                <br />
                <Link to={"/auth/password/forogot"} className={"btn btn-sm btn-outline"}>
                    Forgot Password
                </Link>
            </div>
        </Layout>

    );
};

export default Signup;

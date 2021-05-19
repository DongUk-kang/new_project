import React from 'react';
import Layout from "../core/Layout";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'

const Signup = () => {
    return (
        <Layout>
            <div className={"col-md-6 offset-md-3"}>
                <ToastContainer />
                <h1>Sign up</h1>
            </div>
        </Layout>

    );
};

export default Signup;

import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Layout = ( { children } ) => {

    const nav = () => (
        <ul className={"nav nav-tabs bg-primary"}>
            <li className={"nav nav-item"}>
                <a href={"/"} className={"text-light"}>Home</a>
            </li>
        </ul>
    )


    return (
        <Fragment>
            {nav()}
            <div className={"container"}>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout;

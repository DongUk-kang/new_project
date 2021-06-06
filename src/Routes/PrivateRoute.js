import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../helpers/auth'

const PrivateRoute = ({ Component, ...rest }) => {
    return (
        <Route

            {...rest}
            render={props => {
                isAuth()
                    ? <Component {...props} />
                    : <Redirect to={{passname: '/login', state: {from: props.location }}} />
            }}
        />
    );
};

export default PrivateRoute;

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./screens/Main";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import ForgotPassword from "./screens/ForgotPassword";
import Activate  from "./screens/Activate"
import NewPassword from "./screens/NewPassword";
import Profile from "./screens/Profile";
import Admin from "./screens/Admin";
import PrivateRoute from "./Routes/PrivateRoute";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/signup"} exact component={Signup} />
                <Route path={"/login"} exact component={Login} />
                <Route path={"/users/activate/:token"} exact component={Activate} />
                <Route path={"/reset/:token"} exact component={NewPassword} />
                <Route path={"/forgotpassword"} exact component={ForgotPassword}/>
                <PrivateRoute path={"/private"} exact component={Profile}/>
                <Route path={"/admin"} exact component={Admin}/>
                <Redirect from={"*"} to={"/"} />
            </Switch>
        </BrowserRouter>

    );
};

export default App;

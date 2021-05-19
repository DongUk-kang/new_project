import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./screens/Main";
import Signup from "./screens/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Main} />
                <Route path={"/signup"} exact component={Signup} />
                <Redirect from={"*"} to={"/"} />
            </Switch>
        </BrowserRouter>

    );
};

export default App;

import React from 'react';
import {BrowserRouter,Route} from "react-router-dom"
import Layout from 'components/Layout';
import Communities from 'views/Communities/Communities'; 
import LandingPage from 'views/LandingPage/LandingPage';
import Settings from 'views/Settings/Settings';
import Topics from 'views/Topics/Topics';

const Routes = () => {
    return (
        <BrowserRouter>
        <Layout>
        <Route path="/communities" component={Communities}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/settings" component={Settings}></Route>
        <Route path="/topics" component={Topics}></Route>
        </Layout>
        </BrowserRouter>
    );
};

export default Routes;
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import Pet from './components/pet/PetPage';
import PetDetails from './components/pet/PetDetailsPage';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/pets" component={Pet}/>
        <Route path="/pets/:id" component={PetDetails}/>
    </Route>
);
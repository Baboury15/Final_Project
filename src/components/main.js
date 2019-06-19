import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home from './Home';
import { Footer } from 'react-mdl';
import City from './City';




const Main = () => (
 
 <main>
 <Switch>

    <Route exact path="/Home" component={Home} />
    <Route exact path="/City" component={City} />

    
</Switch>
</main>
)

export default Main;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home from './Home';
import { Footer } from 'react-mdl';
import City from './City';
import NameForm from './nameform';
import FooterForm from './footerform';



const Main = () => (
 
 <main>
 <Switch>


 <Route exact path="/City" component={City} />
 <Route exact path="/Home" component={Home} />
 <Route exact path="/nameform" component={NameForm} />
 <Route exact path="/footerform" component={FooterForm} />




    
</Switch>
</main>
)

export default Main;

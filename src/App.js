import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import NameForm from './components/nameform';
import FooterForm from './components/footerform';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

console.log('test')

class App extends React.Component {


  
  render(){
    
 
    return (
    <div>
      
      <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'yellow' }} to="/">Sport Activities </Link>} scroll>
      </Header>
<div className= "nav-bar">
       <Navigation >

      <Link className ="Home" to="/City">Cities</Link>  
      {/* <Link className ="City" to="/Home">Home</Link> */}
      <Link className ="nameform" to="/nameform">Leave Us a Comment</Link>
      <Link className ="footerform" to="/footerform"></Link>

      <FooterForm />

      <Content>
            <div className="page-content" />
            
            <Main/>
            
          <div/>
          
        </Content>

     
      </Navigation>
      </div >
<Particles 
         params={particleOpt} />
         
          <div class="container">
              
            
            </div>
    </div>
  );
}

}

export default App;

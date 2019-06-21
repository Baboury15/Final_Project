import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
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

class App extends React.Component {
  render(){return (
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
         
    </div> 
   
  );
}

}

export default App;
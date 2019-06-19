import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';




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
   
    
        
      <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'black' }} to="/">Sports Finder</Link>} scroll>
      </Header>
<div className= "nav-bar">
       <Navigation >

      <Link className ="Home" to="/City">City</Link>
      
      <Link className ="City" to="/Home">Home</Link>
      
 


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
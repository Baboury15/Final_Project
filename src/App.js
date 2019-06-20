import React,{Component} from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

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
  constructor(props){
    super(props);
    this.state = {
     activities : []

    }
  }
  componentDidMount(){
    console.log('COMPONENT HAS MOUNTED')
    fetch('http://localhost:3000/activities')
    .then(function(response){
      response.json()
      .then(function(activities_data){

      console.log(activities_data)
      })
    })
  }

  
  render(){return (
    <div>
   
    
        
      <Header className="header-color" title={<Link style={{textDecoration: 'none',color:'black' }} to="/">Sports Finder</Link>} scroll>
      <img className= "Logo" src={require('./soccer.jpeg')}/>

      <img className= "pimp" src={require('./giphy.webp')}/>
      <img className= "ball" src={require('./basketball.webp')}/>


      </Header>

<div className= "nav-bar">
       <Navigation >

      <Link className ="Home" to="/City"> <a>Find your locations here </a></Link>
      
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
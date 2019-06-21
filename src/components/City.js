import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import Home from './Home'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import {BrowserRouter as Router,Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import NameForm from './nameform';



class City extends Component {
  container = React.createRef();

  constructor(props){
        super(props);
        this.state = {
          open: false,
         activities : []
        }
      }
      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
    
      handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
      handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
      };
    
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
    
    
    ////////////////////////BROOKLYN////////////////////
      updateNameBrooklyn = (event ) =>{
        //console.log("Brooklyn ")
        //event.preventDefault();
        let activities_data = {
          name: 'Brooklyn'
        };
        var request = new Request('http://localhost:3000/activities',{
        method:'POST', 
        headers : new Headers ({ 'Content-Type': 'application/json'}),
        body :JSON.stringify(activities_data)
        });
        fetch(request)
        .then(function(response){
          //console.log('hello')
          response.json()
          .then(function(activities_data){
          console.log(activities_data)
          })
        })
        .catch(function(err){
          console.log(err)
        })
          }
    
          ////////////////////////BRONX////////////////////
      updateNameBronx = (event ) =>{
        
        //event.preventDefault();
        let activities_data = {
          name: 'Bronx'
        };
        var request = new Request('http://localhost:3000/activities',{
        method:'POST', 
        headers : new Headers ({ 'Content-Type': 'application/json'}),
        body :JSON.stringify(activities_data)
        });
        fetch(request)
        .then(function(response){
          //console.log('hello')
          response.json()
          .then(function(activities_data){
          console.log(activities_data)
          })
        })
        .catch(function(err){
          console.log(err)
        })
          }
                ////////////////////////MNHATTAN////////////////////
      updateNameManhattan = (event ) =>{
        
        //event.preventDefault();
        let activities_data = {
          name: 'Manhattan'
        };
        var request = new Request('http://localhost:3000/activities',{
        method:'POST', 
        headers : new Headers ({ 'Content-Type': 'application/json'}),
        body :JSON.stringify(activities_data)
        });
        fetch(request)
        .then(function(response){
          //console.log('hello')
          response.json()
          .then(function(activities_data){
          console.log(activities_data)
          })
        })
        .catch(function(err){
          console.log(err)
        })
          }
                      ////////////////////////STATEN ISLAND////////////////////
      updateNameStatenIsland = (event ) =>{
        
        //event.preventDefault();
        let activities_data = {
          name: 'Staten Island'
        };
        var request = new Request('http://localhost:3000/activities',{
        method:'POST', 
        headers : new Headers ({ 'Content-Type': 'application/json'}),
        body :JSON.stringify(activities_data)
        });
        fetch(request)
        .then(function(response){
          //console.log('hello')
          response.json()
          .then(function(activities_data){
          console.log(activities_data)
          })
        })
        .catch(function(err){
          console.log(err)
        })
          }
    
                      ////////////////////////QUEENS////////////////////
      updateNameQueens = (event ) =>{
        
        //event.preventDefault();
        let activities_data = {
          name: 'Queens'
        };
        var request = new Request('http://localhost:3000/activities',{
        method:'POST', 
        headers : new Headers ({ 'Content-Type': 'application/json'}),
        body :JSON.stringify(activities_data)
        });
        fetch(request)
        .then(function(response){
          //console.log('hello')
          response.json()
          .then(function(activities_data){
          console.log(activities_data)
          })
        })
        .catch(function(err){
          console.log(err)
        })
          }


  render() {
    let activities = this.state.activities;
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <button type="button" class="btn btn-md" onClick={this.handleButtonClick}>

            <img className = "Image2" src ={require("./dropdown.png")}/>
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
              <div class="dropdown">
  <button class="btn btn-secondary btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.updateNameBrooklyn.bind(this)}>
    Brooklyn
  </button>
</div>
<div class="dropdown1">
  <button class="btn btn-secondary btn-lg" type="button1" id="dropdownMenuButton" data-toggle="dropdown1" aria-haspopup="true" aria-expanded="false" onClick={this.updateNameBronx.bind(this)}>
    Bronx
  </button>
</div>
<div class="dropdown2">
  <button class="btn btn-secondary btn-lg" type="button2" id="dropdownMenuButton" data-toggle="dropdown2" aria-haspopup="true" aria-expanded="false" onClick={this.updateNameManhattan.bind(this)}>
    Manhattan
  </button>
</div>
<div class="dropdown3">
  <button class="btn btn-secondary btn-lg" type="button3" id="dropdownMenuButton" data-toggle="dropdown3" aria-haspopup="true" aria-expanded="false" onClick={this.updateNameStatenIsland.bind(this)}>
    Staten Island
  </button>
</div>
<div class="dropdown4">
  <button class="btn btn-secondary btn-lg" type="button4" id="dropdownMenuButton" data-toggle="dropdown4" aria-haspopup="true" aria-expanded="false" onClick={this.updateNameQueens.bind(this)}>
    Queens
  </button>
</div>

              </ul>
            </div>
          )}

          {activities.map(activities =>activities.name)}
          
        </div>
      </div>
    );
  }
}

export default City;
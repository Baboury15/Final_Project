import React, { Component } from 'react';
import App from '../App'

class Cities extends Component {
  container = React.createRef();
  state = {
    open: false,
  };
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

  updateNameBrooklyn = (event ) =>{
console.log("Brooklyn ")
event.preventDefault();

let activities_data = {
  name: "Brooklyn"

}
var request = new Request ('http://localhost:3000/activities',{

method:'POST', 
headers : new Headers ({ 'Content-Type': 'application/json'}),
body :JSON.stringify(activities_data)
});
fetch(request)
.then(function(response){
  response.json 
  .then(function(data){
  console.log(data)
  })
})
.catch(function(err){
  console.log(err)
})

  }
  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick.bind(this)}>
            
            <img className = "dropdown" src ={require("./dropdown.png")}/>
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
<<<<<<< HEAD
            <button type="button" class=" btn-md" onClick = {this.updateNameBrooklyn.bind(this)} >Brooklyn</button>
              <button type="button" class=" btn-md">Bronx</button>
              <button type="button" class=" btn-md">Manhattan</button>
              <button type="button" class=" btn-md">Staten Island</button>
              <button type="button" class=" btn-md">Queens</button>
=======
              <button type="button" class="btn btn-md">Brooklyn</button>
              <button type="button" class="btn btn-md">Bronx</button>
              <button type="button" class="btn btn-md">Manhattan</button>
              <button type="button" class="btn btn-md">Staten Island</button>
              <button type="button" class="btn btn-md">Queens</button>
>>>>>>> 3de762c442bbb4d6da1160f8ecb123ebdcd8f661

              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cities
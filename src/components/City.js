import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



class City extends Component {
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

  testClick = () => {

    console.log('button was clicked')
  }

  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <button type="button" class="btn btn-md" onClick={this.handleButtonClick}>

            <img className = "Image2" src ={require("./dropdownpic.png")}/>
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
              <div class="dropdown">
  <button class="btn btn-secondary btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.testClick}>
    Brooklyn
  </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Bowling</a>
    <a class="dropdown-item" href="#">Soccer</a>
    <a class="dropdown-item" href="#">Diving</a>
  </div> */}
</div>
<div class="dropdown1">
  <button class="btn btn-secondary btn-lg" type="button1" id="dropdownMenuButton" data-toggle="dropdown1" aria-haspopup="true" aria-expanded="false">
    Bronx
  </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdown1MenuButton">
    <a class="dropdown-item" href="#">Kayaking</a>
    <a class="dropdown-item" href="#">Sky Diving</a>
    <a class="dropdown-item" href="#">Swimming</a>
  </div> */}
</div>
<div class="dropdown2">
  <button class="btn btn-secondary btn-lg" type="button2" id="dropdownMenuButton" data-toggle="dropdown2" aria-haspopup="true" aria-expanded="false">
    Manhattan
  </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Swimming</a>
    <a class="dropdown-item" href="#">Yoga</a>
    <a class="dropdown-item" href="#">Jui Jitsu</a>
  </div> */}
</div>
<div class="dropdown3">
  <button class="btn btn-secondary btn-lg" type="button3" id="dropdownMenuButton" data-toggle="dropdown3" aria-haspopup="true" aria-expanded="false">
    Staten Island
  </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Kayaking</a>
    <a class="dropdown-item" href="#">Sky Diving</a>
    <a class="dropdown-item" href="#">Yoga</a>
  </div> */}
</div>
<div class="dropdown4">
  <button class="btn btn-secondary btn-lg" type="button4" id="dropdownMenuButton" data-toggle="dropdown4" aria-haspopup="true" aria-expanded="false">
    Queens
  </button>
  {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Swimming</a>
    <a class="dropdown-item" href="#">Sky Diving</a>
    <a class="dropdown-item" href="#">Yoga</a>
  </div> */}
</div>

              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default City;
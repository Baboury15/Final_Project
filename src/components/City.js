import React, { Component } from 'react';


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
  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
            
            <img className = "Image2" src ={require("./dropdown.png")}/>
          </button>
          {this.state.open && (
            <div class="container">
              <ul>
              <button type="button" class="btn btn-md">Brooklyn</button>
              <button type="button" class="btn btn-md">Bronx</button>
              <button type="button" class="btn btn-md">Manhattan</button>
              <button type="button" class="btn btn-md">Staten Island</button>
              <button type="button" class="btn btn-md">Queens</button>

              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default City;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import NameForm from './nameform';



class Home extends Component {
  
  render() {
    return(
      <div style={{width: '50%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://www.vectorstock.com/royalty-free-vector/sport-icon-set-vector-2662546
              https://cdn2.vectorstock.com/images/1000x1000/25/46/2662546.jpg?download=1"
              alt="2662546.jpg"
              className="avatar-img"
              /> */}
<img className= "Image" src={require('./image.jpg')}/>

            <div className="banner-text text-warning">
    <h1> Welcome to sport avtivities finder!!</h1>

         

        

       
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;

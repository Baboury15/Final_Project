import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component {
  
  render() {
    return(
      <div style={{width: '50%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
{/* <img className= "Image" src={require('./image.jpg')}/> */}



              
             


            <div className="banner-text">
    <h1> Welcome to sports avtivities finder!!</h1>

         

        

       
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;

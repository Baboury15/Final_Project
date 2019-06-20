import React, {Component} from "react"
import ActivityCard from './ActivityCard'

class Results extends Component{
  state = {
    sport:[],
    loading:true
  }

//   handleChange = () => {
//     // const zipcode =document.getElementById("zippy").value
//     // if(zipcode.length=== 5){
//     //   fetch("http://ctp-zip-api.herokuapp.com/zip/"+zipcode)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           cities: data,
//           loading:false
//         })
//       })
//     }else{
//       this.setState({
//         loading:true
//       })
//     }
//   }
  render(){
    const ActivityCards = this.state.sport.map(sport => <ActivityCard
      sport={sport}/>)
      return(
        <div>
        {/* <ZipForm handleChange={this.handleChange}/> */}
        {ActivityCards}

        </div>
      )
    }
  }
  export default Results
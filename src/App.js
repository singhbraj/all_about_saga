import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchData } from './redux/action';
import {types} from './redux/types';

import axios from 'axios';


export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:''
    }
  }

  
  // componentDidMount(){

  //   axios.get('https:/reqres.in/api/user/2')
  //   .then(response=>{
  //     this.setState({
  //       name:response.data.data.name
  //     })
  //   })

  // }
  

  componentDidMount(){

    this.props.dispatch({type:types.SEND_REQUEST, payload:3})    

  }



// handlefetchData = ()=>{
//   // this.props.fetchData(2); 
//   this.props.dispatch({type:types.SEND_REQUEST, payload:3})
// }

  render() {
    // console.log('Hello BrajKishor')
     console.log('name',this.props.user);
    return (
      <div>
        {/* <button onClick={this.handlefetchData} >
         fetch
        </button> */}
        <div>
           {this.props.user}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    user:state.fetchDataReducer.user,
    error:state.fetchDataReducer.error
  }
}

// const mapDispatchToProps = (dispatch)=>{
//  return{
//   fetchData:(id)=>{dispatch(fetchData(id))}
//  }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(mapStateToProps)(App) 

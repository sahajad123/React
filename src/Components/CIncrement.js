import React, { Component } from 'react'

export default class CIncrement extends Component {
    constructor(){  //Initiliazation
        super();
        this.state = {value:0}
    }
    componentDidMount(){
      console.log("This is show up when the component first load")   //Mounting
    }
    componentDidUpdate = (prevProps, prevState) => {
      if(prevState.value !== this.state.value){
        console.log("This will show up when the component updates");   //Updating
      }
    }
    componentWillUnmount(){
      console.log("Component or element removed");  //UnMounting
    }
    handleIncrement=()=>{
        this.setState({value : this.state.value+1})
    }
    handleZero=()=>{
        this.setState({value : 0})
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={()=>{this.handleIncrement()}}>CIncrement</button>
        <button onClick={()=>{this.handleZero()}}>CZero</button>
      </div>
    )
  }
}

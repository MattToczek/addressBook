import React, {Component} from 'react';
import List from './Components/List'
import InputNew from './Components/InputNew'
import Btn from './Components/Btn'
import './App.css';



export default class App extends Component {

  state={
    name: '',
    number: '',
    deets: []
  }

  addName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  addNum = (event) => {
    this.setState({
      number: event.target.value
    })
  }

  setDeets = () => {
    this.setState({
        deets: [...this.deets, `Name: ${this.state.name}, No.: ${this.state.number}`]
    })
  }
  
  showDeets = () => {
    this.state.deets.forEach(element => { 
      return React.createElement(<li>{element}</li>);
    });
  }

  render() {
   
    console.log (this.state.deets)
    console.log (this.state.name)

    return (
      <div>
        <InputNew onChange= {this.addName.bind(this)} value = {this.state.name} type = "text" classDec="nameBox inputBox" placeholder = "Please enter a name"/>
        <InputNew onChange= {this.addNum.bind(this)} value = {this.state.number} type = "number" classDec="numBox inputBox" placeholder = "Please enter a number"/>
        <Btn onClick = {this.setDeets} classDec = "addBtn"/>
        <List display ={this.showDeets} />
      </div>
    )
  }
}


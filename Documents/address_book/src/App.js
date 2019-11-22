import React, {Component} from 'react';
import Btn from './Components/Btn'
import Li from './Components/Li'
import './App.css';
import { logicalExpression } from '@babel/types';





export default class App extends Component {
  state={
      name: '',
      nameHolder: '',
      number: '',
      numberHolder: '',
      deets: [],
      lis: []
    }
  

  addName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  addNum = (event) => {
    this.setState({
      number: event.target.value,
    })
  }


 set = (e) => {
    e.preventDefault();
    this.setState({
        number: '',
        name: '',  
        deets: [...this.state.deets, `Name: ${this.state.name} ---- No.: ${this.state.number}` ],
        // lis: [...this.state.deets, `Name: ${this.state.name}, No.: ${this.state.number}`],
 
    })
  }

  setDeets = async(e) => {
    await this.set(e);
    // console.log(this.state.lis);
  }
  
  
  


  render() {

    // const myArray = this.state.deets.map( (element, index) => { 
    //   console.log ("Deets is currently: " +this.state.deets)
    //   return <li key={index}>{element}</li>
    // })
    const lis = [];

    const remove = (i)=> {
        let li = document.getElementById(`number${i}`);
        li.style.display = 'none';
    }
    
    const showDeets = this.state.deets.map( (element, index) => { 
          // console.log ("Element is currently: " + "||" + element + "||")

          // return <li key={index+1}>{element}<button onClick = {remove(index)}>Remove</button></li>
          
            lis.push(<li id={`number${index}`} key={index+1}>{element}<button className="" onClick = {() => remove(index)}>Remove</button></li>)

          
        });
    
      
    
    

    console.log ("Deets is currently: ----")
    console.log(this.state.deets);
    console.log ("name is currently: " +this.state.name)
    console.log ("name is currently: " +this.state.number)

    return (


      <div>
        <input onChange= {this.addName} value = {this.state.name} type = "text" className="nameBox inputBox" placeholder = "Please enter a name"/>
        <input onChange= {this.addNum} value = {this.state.number} type = "number" className="numBox inputBox" placeholder = "Please enter a number"/>
        <Btn onClick = {this.setDeets} classDec = "addBtn"/>
        <ul className="listCont">
          {/* {showDeets} */}
          {lis}
        </ul>

      </div>
    )
  }
}


import React, { Component } from 'react'
//import Clock from './components/Clock'
//import Counter from './components/Counter'
import Person from './components/Person'
//import Counter from 'Components/Counter'
import Houssem from "./Houssem.jpg"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
        show: false,
        image: Houssem ,
        Fullname :"Houssem Ben Ncira",
        bio:"FIFA Sports Medicine graduate ⚽ 🎫",
        profession :"Sports Physician and Physiotherapist"
    }
}

toggle() {
    this.setState({show: !this.state.show})
}
  render() {
    return (
      <div className="App">


         <button className="button-1"  onClick={() => this.toggle()}>{this.state.show ? "hide": "show"}</button>
                {this.state.show ? <Person image={this.state.image} Fullname={this.state.Fullname}
                 bio={this.state.bio} profession={this.state.profession} /> : null}
                 
                
      </div>
      
    )
  }
}





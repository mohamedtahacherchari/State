import React, { Component } from 'react'
//import Clock from './components/Clock'
//import Counter from './components/Counter'
import Person from './components/Person'
//import Counter from 'Components/Counter'
import Houssem from "./Houssem.jpg"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
        show: false
    }
}

toggle() {
    this.setState({show: !this.state.show})
}
  render() {
    return (
      <div className="App">


         <button  onClick={() => this.toggle()}>show</button>
                {this.state.show ? <Person image={Houssem} Fullname="Houssem Ben Ncira"
                 bio="FIFA Sports Medicine graduate ⚽ 🎫" 
                 profession ="Sports Physician and Physiotherapist"/>  : null}
                 
                
      </div>
      
    )
  }
}


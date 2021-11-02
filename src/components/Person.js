import React, { Component } from 'react'
import {Card} from "react-bootstrap";
//import Clock from './Clock';
export default class Person extends Component {
    
    constructor(props){
        console.log("construction");
        super(props)
        this.state= {
             count :0
        }
    }

    componentDidMount(){
        this.timer =setInterval(()=>{this.setState({count : this.state.count +1})}, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        console.log("rendering")
        return (
            <div className ="Card">
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image} alt="profile picture" />
  <Card.Body>
    <Card.Title>{this.props.Fullname}</Card.Title>
    <Card.Text>
     {this.props.bio}
    </Card.Text>
    <Card.Text>
     {this.props.profession}
    </Card.Text>
    <Card.Text>
    Time that has elapsed since the component mounted:{this.state.count}
    </Card.Text>
    
  </Card.Body>
</Card>
            </div>
        )
    }
}

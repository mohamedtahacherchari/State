import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import Clock from './Clock';
export default class Person extends Component {
    constructor(props){
        super(props)
        this.state= {
             count :0
        }
    }
    render() {
        return (
            <div>
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
    <Clock/>
    
  </Card.Body>
</Card>
            </div>
        )
    }
}

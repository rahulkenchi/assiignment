import React, { Component } from 'react'
import Listdetails from './Listdetails'
export class List extends Component {
    constructor(props){
        super(props)
        this.state=({
          details:[{
                empid:1,
                ename:"sanket",
                age:34,
                experience:"1y",
                location:"delhi"
            },

            {
                empid:2,
                ename:"vipul",
                age:25,
                experience:"3y",
                location:"pune"
            },

            {
                empid:3,
                ename:"sanmesh",
                age:27,
                experience:"2y",
                location:"pune"
            },

            {
                empid:4,
                ename:"me",
                age:23,
                experience:"3y",
                location:"pune"
            }
        ]
    })
    }
    
    render() {        
        return (
           <Listdetails details={this.state.details}/>
        )
    }
}

export default List

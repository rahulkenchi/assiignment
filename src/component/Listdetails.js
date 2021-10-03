import React, { Component } from 'react'

export class Listdetails extends Component {
    constructor(props){
        super(props)
        this.state=({
            name:this.props.details
        })            
        }

    render() {                          
        return (
            <div className="row m-5">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Age</th>
                            <th>Years of Experience</th>
                            <th>Employee Location</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.name.map((element,index)=>
                            <tr>
                                <td key={index}>{element.empid}</td>
                                <td>{element.ename}</td>
                                <td>{element.age}</td>
                                <td>{element.experience}</td>
                                <td>{element.location}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default Listdetails

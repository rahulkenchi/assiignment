import React, { Component } from 'react'

export class Nav extends Component {
    constructor(props){
        super(props)
        this.state=({
            count:'',
            sum:''
        })
    }


    componentDidMount(){
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'));
            this.setState({count:arr.length});
        }        
    }

    render() {        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Shopping Central</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart {this.state.count?<span className="badge bg-primary text-white rounded-pill">{this.state.sum}</span>:null} </a>
                            </li>
                    </ul>
                   
                </div>
            </nav>
        )
    }
}

export default Nav
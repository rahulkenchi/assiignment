import React, { Component } from 'react'
import json from '../product.json'

export class Product extends Component {
    constructor(props){
        super(props)
        this.state=({
            count:0
        })
    }

    componentDidMount(){
        if(localStorage.getItem('mycart')!=undefined)
        {
            let arr=JSON.parse(localStorage.getItem('mycart'))
            this.setState({count:arr.length})
        }        
    }

    add=(element)=>{
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'))
            if(arr.includes(element.id))
            {alert("Already exists in cart")}
            else{
                arr.push(element)
                localStorage.setItem('mycart',JSON.stringify(arr))
            }
        }
        else{
            let arr=[]
            arr.push(element)
            localStorage.setItem('mycart',JSON.stringify(arr))
            // alert('Product added to cart')
        }
    }

    render() {
        return (           
            <div className="row container-fluid text-center" >
                {
                    json.product.map((element,index)=>
                        <div className="col-sm-3" key={index}>
                            <div className="card bg-light m-2">
                                <div className="card">                                    
                                    <img class="card-img-top" height="300px" src={`./images/${element.image}`} alt="no_image"/>
                                    <p className="card-title mt-2" key={index}>{element.pname}</p>
                                    <p className="card-text">Price : <span id="price" style={{color:'red',fontSize:'large',fontWeight:'bold'}}> ${element.price} </span><br/>
                                    Quantity: {element.quantity} remaining
                                    </p>
                                    <p><button className="btn btn-outline-primary" onClick={()=>this.add(element)}>Add to Cart</button></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Product
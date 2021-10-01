import React, { Component } from 'react'
import json from '../product.json'

export class Product extends Component {
    render() {
        return (
            <div className="row container-fluid text-center" >
                {
                    json.product.map((element,index)=>
                        <div className="col-sm-3">
                            <div className="card bg-light m-2">
                                <div className="card">                                    
                                    <img class="card-img-top" height="300px" src={`./images/${element.image}`} alt="no_image"/>
                                    <p className="card-title mt-2" key={index}>{element.pname}</p>
                                    <p className="card-text">Price : <span id="price" style={{color:'red',fontSize:'large',fontWeight:'bold'}}> ${element.price} </span><br/>
                                    Quantity: {element.quantity} remaining
                                    </p>
                                    <p><button className="btn btn-outline-primary">Add to Cart</button></p>
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
import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForname=regexp(/^[a-zA-Z]+\s[a-zA-Z]+$/);
export class Validation extends Component {
    constructor(props){
        super(props);
        this.state={
            li:[],
            name:null,
            age:null,
            email:null,
            password:null,
            password1:null,
            mobile:null,
            errors:{
                name:'',
                age:'',
                email:'',
                password:'',
                password1:'',
                mobile:'',
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'name':errors.name=value.length<1?'Name cannot be null':'' 
                            errors.name=regForname.test(value)?'':'Name can only include chracters and single white space'                        
                            break
                case 'age':errors.age=value<18?"age shoule  not be below 18 for this application":''                            
                            break
                case 'email':errors.email=regForEmail.test(value)?'':'Email is not valid';                            
                            break;
                case 'password':errors.password=value.length<8?'Password must me 8 characters long':'';                            
                            break;
                case 'password1':errors.password1=value.length<8?'Password must me 8 characters long':'';                            
                            errors.password1=(this.state.password===this.state.password1)?'Password Mismatched':''                           
                            break;        
                case 'mobile':errors.mobile=value.length===10?'':'Mobile Number Invalid'                            
                    break;
                default:console.log("Error cannot execute switchcase")
                    break
            }
             this.setState({errors,[name]:value},()=>{
                //  console.log(errors)
             })
        }

        formSubmit=(event)=>{
           event.preventDefault();                      
           if(this.validate(this.state.errors))
           {
               let put={
                   "name":this.state.name,
                   "age":this.state.age,
                   "email":this.state.email,
                   "mobile":this.state.mobile
               }          
               this.setState({
               li:[...this.state.li,put]
               })
               console.log(this.state.li)
               this.setState({
                   age:this.state.age
               })
               alert("Valid Form");                              

           }
           else {
               alert("Invalid Form");
           }
        }


         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }

    render() {
        const {errors}=this.state;
        return (
            <div>
                <h2 className="text-center">Form Validation<br/>{this.props.data}</h2>
                
                <form onSubmit={this.formSubmit}>
                    <table cellPadding="4" className="m-auto">
                        <tbody>
                        <tr>
                            <td className="text-right">Name :</td>
                            <td><input type="text" name="name" onChange={this.handler}/><br/>
                            {errors.name.length>0 && <span style={{color:'red'}}>{errors.name}</span>}</td>                            
                        </tr>

                        <tr>
                            <td className="text-right">Age :</td>
                            <td><input type="number" name="age" onChange={this.handler}/><br/>
                            {errors.age.length>0 && <span style={{color:'red'}}>{errors.age}</span>}</td>                            
                        </tr>

                        <tr>
                            <td className="text-right">Email :</td>
                            <td><input type="text" name="email" onChange={this.handler}/><br/>
                            {errors.email.length>0 && <span style={{color:'red'}}>{errors.email}</span>}</td>
                            
                        </tr>

                        <tr>
                            <td className="text-right">Password :</td>
                            <td><input type="password" name="password" onChange={this.handler}/><br/>
                            {errors.password.length>0 && <span style={{color:'red'}}>{errors.password}</span>}
                            </td>
                        </tr>

                        <tr>
                            <td className="text-right">Confirm Password :</td>
                            <td><input type="password" name="password1" onChange={this.handler}/><br/>
                            {errors.password1.length>0 && <span style={{color:'red'}}>{errors.password1}</span>} 
                            </td>
                        </tr>

                        <tr>
                            <td className="text-right">Mobile :</td>
                            <td><input type="number" name="mobile" onChange={this.handler}/> <br/>
                            {errors.mobile.length>0 && <span style={{color:'red'}}>{errors.mobile}</span>}</td>                            
                        </tr>

                        <tr><td colSpan="2"><input type="submit" className="btn btn-block btn-primary" value="submit"/></td></tr>
                </tbody>
            </table>
                </form>
                <br/><br/><br/>
                {/* <h3 className="text-center">List of Entries</h3>
            <table >
                <tr>                    
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
               
                   {this.state.li.map((element,index)=>{
                       <Add name={element.name} age={element.age} email={element.email} mobile={element.mobile} />
                   })}
               
             </table> */}
            </div>
        )
    }
}

export default Validation
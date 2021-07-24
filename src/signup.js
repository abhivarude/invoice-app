import React,{Component} from "react";

import axios from "axios";
import {Redirect, Route,NavLink} from"react-router-dom";
import Login from "./login";
import "./signup.css"
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


export default class Signup extends Component{


constructor()
{

super();
    this.state={

        
        cname:"",
        Email:"",
        password:"",
        cpassword:"",
        errors:{
          cname:"",
          Email:"",
          password:"",
          cpassword:""
        }
    }

    

}





componentDidMount(){

this.getdata();
}


getdata=async ()=>
{
    // const {data}=await axios.get(API_URL);
    // this.setState({post:data})
    var {data}=await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({post:data})

}

sssignup=()=>{

<NavLink path="/login" ></NavLink>

console.log("registerd")

}

createPost=async()=>{
 const {data}=await axios.post("http://localhost:3002/students/signup",{cname:this.state.cname,Email:this.state.Email,password:this.state.password})
 console.log(this.state.password)
this.setState({cname:"",Email:"",password:"",cpassword:""})
this.sssignup();

} 


handlesubmit=(evt)=>{

evt.preventDefault();

if(this.validation())
{
  this.createPost();
  alert("user registerd succesfully")
  this.props.history.push('/login');
}
else{
alert("cheak all fields are filled")
}
// this.createPost();

}



handlechange = ({ target: { name, value } }) => {
  

  const errors = { ...this.state.errors };

  // name - candidateName, value - r
  // name - candidateEmail, value - s
  switch (name) {
    case 'cname': {
      if (!value) {
        errors.cname = 'companyname is required';
      } else {
        errors.cname = '';
      }
      break;
    }
    case 'Email': {
      if (!value) {
        errors.Email = 'Email is required';
      } else if (!validateEmail.test(value)) {
        errors.Email = 'Email is invalid';
      } else {
        errors.Email = '';
      }
      break;
    }
 
    case 'password': {
      if (!value) {
        errors.password = 'password is required';
      } else {
        errors.password = '';
      }
      break;
    }


    case 'cpassword':
      if(!value){
        errors.cpassword="Enter confirm password"
      }
      else if(this.state.password==this.state.cpassword)
      {
        errors.cpassword="password  dosent match";
      }
      else{
        errors.cpassword='';
      }
      break;
  }

  console.log(name, value);

  this.setState({ [name]: value, errors });
  // candidateName e
  // this.setState({ candidateName: "e" })
  // candidateEmail t
  // this.setState({ candidateEmail: "t" })
};

 validation=()=>{

const {cname,Email,password,cpassword}=this.state
if (  cname && Email && password && cpassword ) 
{ console.log("validated")
  if (validateEmail.test(Email)) 
  {
    console.log("validated")
    return true;
  }
}
else
{
  console.log(" not validated")
  return false;

}


 }



render(){

return(

<div className="style">

<div className="container2">

<form onSubmit={this.handlesubmit}>



    
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company Name</label>
    <input type="text" className="form-control mt-3 inp1" id="companyname"  name="cname" value={this.state.cname} onChange={this.handlechange} />
    {this.state.errors.cname ? (
              <p>{this.state.errors.cname}</p>
            ) : (
              ''
            )}
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Email"  value={this.state.Email} onChange={this.handlechange}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    {this.state.errors.Email ? (
              <p>{this.state.errors.Email}</p>
            ) : (
              ''
            )}
  </div>


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password" value={this.state.password} onChange={this.handlechange}/>
    {this.state.errors.password ? (
              <p>{this.state.errors.password}</p>
            ) : (
              ''
            )}
  </div>


  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirmPassword" name="cpassword" value={this.state.cpassword} onChange={this.handlechange}/>
    {this.state.errors.cpassword ? (
              <p>{this.state.errors.cpassword}</p>
            ) : (
              ''
            )}
  </div>

  
 <button type="submit" class="btn btn-primary" >Submit</button>
</form>



</div>

</div>

    );

}

}



// {this.state.post.map((ele)=>{

//     return(<>
//     <p>{ele.title}</p>
//     </>)
    
    
//     })}
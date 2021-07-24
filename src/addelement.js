import React from "react";
import { Component } from "react";
import axios from "axios";
const api_url="http://localhost:3002/students/deleteEntry";
export default class Addelement extends Component{

constructor(){



super();
this.state={
    post:[],
    item:"",
    prise:"",
    itemdelete:""
}




}

changehandler=({target:{name,value}})=>{
    this.setState({[name]:value})
    }



onchangedo=({target:{name,value}})=>{
    this.setState({[name]:value})
    
    
    
    }

add=async (evt)=>
{
evt.preventDefault();
 const data=await axios.post("http://localhost:3002/students/newelement",{item:this.state.item,prise:this.state.prise})
this.setState({item:"",prise:""})
alert("element added succsessfully")


}

delete=async ()=>
{
let findata= await axios.get("http://localhost:3002/students/entryid")

 const data=await axios.delete(`${api_url}/${findata.id}`)
this.setState({itemdelete:""})
alert("element deleted")


}


render(){



    return(
        <>

<div class="container">

<p>Add Elements</p>

<form onSubmit={this.add}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Insert Item</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="item" onChange={this.changehandler} value={this.state.item}/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Insert prise</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="prise" onChange={this.changehandler} value={this.state.prise}/>
  </div>
  
  <button type="submit" class="btn btn-dark">Add</button>
</form>








<p>Delete Elements</p>

<div class="mb-3">
    <label for="de" class="form-label"> Enter Element Name To Delete</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="itemdelete" onChange={this.changehandler} value={this.state.itemdelete}/>
    <button  class="btn btn-dark" onClick={this.delete}>Delete</button>
  </div>
  











</div>







       </>
    )
}











 }
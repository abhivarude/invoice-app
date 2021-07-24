import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./project.css"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

  },
  body: {
    fontSize: 14,align:"left",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


var rows = [
  
];
var atotal=[];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});





export default class Project extends Component{


    constructor(){
        super();
          this.state={
            post:[],
            customername:"",
            customerMobile:"",
            item:"",
            prise:"",
            quantity:"",
            itotal:""
          }
        }

componentDidMount(){


  this.entrydata();
  if(this.state.quantity)
  {this.dototal();  }

}



entrydata=async ()=>{
  const data=await axios.get("http://localhost:3002/students/entryi" )
var val=data.data;
// console.log(val);
this.setState({post:val})

  
}




customerbil=()=>{

var allpost=[...this.state.post];


{allpost=allpost.filter(allpost=>allpost.item==this.state.item)
rows.push(allpost[0]);
this.setState({prise:allpost[0].prise})
console.log(allpost[0].prise);
console.log(rows);
}

}

onchangedo=({target:{name,value}})=>{
this.setState({[name]:value})



}

send= async()=>{

  rows.push({customername:this.state.customername ,customerMobile:this.state.customerMobile})
  console.log(rows)
const data= await axios.post("http://localhost:3002/students/billentry",{rows})

{alert("bill saved")}


}
dototal=()=>{

var a=[];

rows.map((to)=>{
let ele=to.prise;
  a.push(parseInt(ele));

})

let total=a.reduce((acc,cv)=>{ return acc+cv});

this.setState({itotal:total})
rows.push({itotal:total})
console.log(total);

}
  

        
    render(){

        return(<>
     <div class="container">

        <h2>INVOISES</h2>

      </div>


    <div class="container">

     
<div class="top">

      <div class="row mb-3">
      <label for="name" class="col-sm-2 col-form-label">Customer Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" name="customername" onChange={this.onchangedo} value={this.state.customername}/>
      </div>
    </div>

    <div class="row mb-3">
      <label for="mono" class="col-sm-2 col-form-label">Mobile Number</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="mono" name="customerMobile" onChange={this.onchangedo} value={this.state.customerMobile}/>
      </div>

      </div>
  
  
  </div >



    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="d-flex">
    <input class="form-control me-2" type="text" name="item" onChange={this.onchangedo}  value={this.state.item} placeholder="Search" aria-label="Search"  ></input>
     
      <button class="btn btn-outline-success" onClick={this.customerbil}>ADD</button>
    </div>
  </div>
</nav>

<div class="header">

      <Table caria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="">index</StyledTableCell>
             <StyledTableCell align="">Item</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
           
           
          </TableRow>
        </TableHead>
       
        <TableBody>
          

        {/* // <input type="text" name="item" onChange={this.onchangedo}  value={this.state.item} ></input> */}


{
  rows.map((ele)=>{
return(<>


    <StyledTableRow key={this.state.item}>
    <StyledTableCell align="">ele.index</StyledTableCell>
            
    <StyledTableCell align=""><input type="text" id="item" name="item" onChange={this.onchangedo}  value={ele.item} ></input></StyledTableCell>
    <StyledTableCell align="right"><input type="text" name="prise" onChange={this.onchangedo}  value={ele.prise} ></input></StyledTableCell>
   
    <StyledTableCell align="right"><input type="text"  ></input></StyledTableCell>
    {/* <StyledTableCell align="right"><input type="text" name="itotal"  onchange={this.dototal} onPointerEnter value={this.state.itotal} ></input></StyledTableCell> */}
  </StyledTableRow>

</>)


  })
}
            

<StyledTableRow>


  
  <StyledTableCell align=""> <button type="button" class="btn btn-dark"  onClick={this.dototal} >Total</button> </StyledTableCell><br></br>
 
  <StyledTableCell align="left"> <input type="text"  value={this.state.itotal}></input></StyledTableCell><br></br>
  </StyledTableRow>

  <StyledTableRow>


    
  <StyledTableCell align="center">

    <form>
      <div class="save">
      <button type="submit"  class="btn btn-dark" onClick={this.send} >Save </button>
      </div>
    
  
    </form>
    
    </StyledTableCell>
    </StyledTableRow>
          
        </TableBody>
      </Table>


      </div>

</div>



            </>)
    }



  
}



import React,{useState,useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom';
import "./login.css"
export default function Login(props){


  
    const [loading,setLoading] = useState(0);
    const emailRef = useRef();
    console.log(emailRef)
    const passRef = useRef();
    
   
    const login = async(e) =>{
     
      
      e.preventDefault();
      setLoading(1);
      let email = emailRef.current.value;
      let pass = passRef.current.value; 
      if(email.length ===0){
        alert("Please enter valid email Id.")
        setLoading(0); 
      }       
      else if(pass.length <4){
        alert("Please enter valid password.")
        setLoading(0);
      }
      else{
         let url = "http://localhost:3002/students/login";
         let postData={
             Email:email,
             password:pass
         } 
         let resp = await fetch(url,{
            method:'post',
            headers:{'Content-Type': 'application/json'},
               body: JSON.stringify(postData)  
         })

         
         if(resp.status === 200){
          //  let response = await resp.json();
          //  localStorage.setItem('Authorisation',response.token);
          //  localStorage.setItem('email',email);
           props.history.push("/dashboard");

         }
         else if(resp.status === 400){
           alert("Incorrect password.Please try again.");   
         }
         else if(resp.status === 404){
            alert("User doesn't exist. Register first!!");
        }
      }
    }

    return(
      <div className="body">
       
       <div className="contbody">
           
            <div className="container1">


                 <div className="row">

                      <div className="col-6   d-flex justify-content-center">
                        <span  className="loginheader"> Welcome to   INVOICE..</span>


                      </div>

                      <div className="col-3">
<div className="log">
                          <p className="text-center head1">Login</p>
                          <div className="form-group"> 
                              <input ref={emailRef} type="email" className="form-control mt-4 inp1" placeholder="Email ID"/>
                              <input ref={passRef} type="password" className="form-control mt-4 inp1" placeholder="Password"/>
                              <button className="btn btn-primary form-control mt-4" onClick={login}>Login</button> 
                               <p className="text-center mt-4 bottom1">New user!!<NavLink to="/signup">Register Here</NavLink></p>          
                          </div>
                      
                      
                      </div>
                      </div>

                 </div>




                 {
             loading ?
             <div className="d-flex justify-content-center mt-3">
               <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
               <span class="sr-only">Loading...</span>  
             </div>
             :null      
           }
            </div>
        </div>
        </div> 
    )
}
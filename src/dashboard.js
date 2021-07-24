import React from "react"
import { Component } from "react"
import { NavLink } from "react-router-dom";


import "./dashboard.css"

export default  function Dashboard(props)    {





const logout=()=>{

    props.history.replace("/home")
}





    return(<>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid" >
    <NavLink class="navbar-brand" to="/dashboard/project">INVOICE</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <button class="btn btn-outline-success" onClick={logout}>LOGOUT</button>
  
      





  </div>
</nav>




<div class="container">

<div class="row">
<div class="col-sm-6">
    <div class="card">
    <div class="card-body">
        <h3 class="card-title">Setup your Elements </h3>
        <p class="card-text">For starters, free templates aren’t very professional-looking and can be hard 
        to customize. One small change causes the entire format to scramble, and you end
        up wasting your office hours creating invoices, rather than managing your business.

            That’s why most businesses nowadays opt for accounting and invoicing software to automate the 
            process of making an invoice. With invoicing software, all you have to do is go to the invoice generator, choose the invoice template you like best, customize it with your brand colors and business information, and press send..</p>
                
    </div>
    </div>
</div>
<div class="col-sm-6">
<div className="design2"> 
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Click  below button to Add </h5>
        <NavLink to="/dashboard/addelement"  class="btn btn-primary"> Addelement</NavLink>
      
    </div>
    </div>
    </div>
</div>
</div>

</div>






    
<div class="container">
                <div class="row">
                <div class="col-sm-6">

                    <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Create customer Bills</h3>
                        <p class="card-text">For starters, free templates aren’t very professional-looking and can be hard 
                        to customize. One small change causes the entire format to scramble, and you end
                        up wasting your office hours creating invoices, rather than managing your business.

                            That’s why most businesses nowadays opt for accounting and invoicing software to automate the 
                            process of making an invoice. With invoicing software, all you have to do is go to the invoice generator, choose the invoice template you like best, customize it with your brand colors and business information, and press send..</p>
                                
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                <div className="design2"> 
                    <div class="card">
                        
                    <div class="card-body">
                        <h5 class="card-title">Click  below button to create </h5>
                        
                        <NavLink to="/dashboard/project" class="btn btn-primary">CREATE BILLS</NavLink>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

</div>

  






   

    
    
    </>)



    
   
  






}
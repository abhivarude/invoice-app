import React from "react";
import {NavLink} from "react-router-dom";

import { Card } from "react-bootstrap"; 

import "./home.css";
export default function Home(props)
{

return(
    <>
    
<div >
                  <div class="homenavbar">
  
                          <div class="navbarposition">

                              <nav class="navbar navbar-expand-lg navbar-dark">
                                <div class="container-fluid">
                                  
                                <NavLink class="nav-link" to="/home"><span class="invoice-logo"> INVOICE</span></NavLink>

                                
                                  <div class="collapse navbar-collapse" id="navbarText">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                     
                               
                                      <li class="nav-item">
                                      <NavLink class="nav-link"  id ="signup" to="/login"> <button class="btn btn-dark">Login</button></NavLink>
                                      </li>
                                      <li class="nav-item">
                                      <NavLink class="nav-link"   to="/signup"> <button class="btn btn-dark">SignUp</button></NavLink>
                                      </li>

                               
                                    
                                    </ul>
                                    
                                  </div>
                                </div>
                              </nav>



                          </div>
</div>

<div class="homeheadborder">
<div class="homehead">


<h2>
Easy and powerful GST billing software for:<br></br>
Small Businesses, Retailers, Wholesalers, Freelancers, Service Providers and many more...

</h2>

<br></br>
<h2>
Invoice:<br></br>
Start using our billing software which comes with best in class smart features to help your business grow.

</h2>



</div>
</div>


<div class="infobody">
<div class="row">

<div class="col">
<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="online.jpeg" />
  <Card.Body>
    <Card.Title> ONLINE APPLICATION</Card.Title>
    <Card.Text>
    Feature allows user to use online appliction to access data anywhere.
    </Card.Text>
    </Card.Body>
</Card>
</div>
</div>


<div class="col">
<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="4.-generate-invoice-in-a-click.png"/>
  <Card.Body>
    <Card.Title>GENERATE INVOICE IN A CLICK </Card.Title>
    <Card.Text>
    

A unique feature which allows user to generate invoice in a click. Reduces operator workload by up to 43% during rush hours.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>

</div>



<div class="col">

<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="5.-GST-tax-invoice-and-bill-of-supply.png" />
  <Card.Body>
    <Card.Title>  MANAGE CLIENT ACCOUNTS
</Card.Title>
    <Card.Text>
  
Using our billing software check everything related to client like account balance, account history, invoices, quotations, payments, and cheque alerts.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</div>

</div>

<div class="row">


<div class="col">
<div class="carddesign">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="11.-detailed-business-reports-.png" />
  <Card.Body>
    <Card.Title>  DETAILED BUSINESS REPORTS</Card.Title>
    <Card.Text>
  

Our billing software comes packed with 100+ business reports which helps you understanding your business performance better.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
</div>

<div class="col">

<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="15.-automated-data-backup-and-restoration.png" />
  <Card.Body>
    <Card.Title> AUTOMATED DATA BACKUP</Card.Title>
    <Card.Text>
   

Our billing software comes with fully automated data backup functionality with multi location support. No need to remind yourself to backup data.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</div>
<div class="col">

<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="10.-gst-tax-calculations.png" />
  <Card.Body>
    <Card.Title>      SGST TAX CALCULATIONS</Card.Title>
    <Card.Text>


Hitech BillSoft automatically calculate GST and cess amounts for purchase and sale bills. No need to do manual calculations and also supports multi-rate invoices.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
</div>

<div class="row">
<div class="col">

<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="6.-manage-client-accounts.png" />
  <Card.Body>
    <Card.Title>    MANAGE CLIENT ACCOUNTS</Card.Title>
    <Card.Text>


Using our billing software check everything related to client like account balance, account history, invoices, quotations, payments, and cheque alerts.
    </Card.Text>
    
  </Card.Body>
</Card>
</div>
</div>

<div class="col">
<div class="carddesign">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="8.-track-your-inventory.png" />
  <Card.Body>
    <Card.Title>     TRACK YOUR INVENTORY
</Card.Title>
    <Card.Text>

Built-in inventory management system allows you to track inventory/stock. Reminds you about low stock, stock availability and movement.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</div>
<div class="col">
<div class="carddesign">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="17.-pdf-excel-export.png" />
  <Card.Body>
    <Card.Title>    PDF EXCEL EXPORT </Card.Title>
    <Card.Text>


Using our billing software you can export data in PDF/Excel format for future reference. PDF documents can be directly mailed from software itself.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
</div>

</div>


</div>
</div>











</div>
    
    </>
)



    
    
    
}



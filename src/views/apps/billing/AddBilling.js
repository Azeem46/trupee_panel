import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";

export default class AddBilling extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Add Bill</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1">
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Bill Code</Label>
                  <Input type="text" placeholder="USer Code" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Company Name</Label>
                  <Input type="text" placeholder="Company Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Staff Category</Label>
                  <CustomInput type="select" placeholder="User Category">
                    <option value="finance">Finance </option>
                    <option value="resource">Human Resource</option>
                    <option value="inventory"> Inventory</option>
                    <option value="management"> Management</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input type="text" placeholder="Name" />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Category Price</Label>
                  <CustomInput type="select" placeholder="Category Price">
                    <option>Demo</option>
                    <option>Demo</option>
                    <option>Demo </option>
                    <option> Demo</option>
                  </CustomInput>
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input type="text" placeholder="Address" />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address line2</Label>
                  <Input type="text" placeholder="Address line2" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address line3</Label>
                  <Input type="text" placeholder="Address line3" />
                </Col> */}

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>State</Label>
                  <Input type="text" placeholder="State" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pin Code</Label>
                  <Input type="number" placeholder="Pin Code" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Phone No.</Label>
                  <Input type="number" placeholder="Phone No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input type="number" placeholder="Mobile No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Email" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Website</Label>
                  <Input type="text" placeholder="Website" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Birth</Label>
                  <Input type="date" placeholder="Date Of Birth " />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Marriage Anniversary</Label>
                  <Input type="date" placeholder="Marriage Anniversary" />
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>GST Number</Label>
                  <Input type="text" placeholder="GST Number" />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Udhyog Aadhar Number </Label>
                  <Input type="text" placeholder="Udhyog Aadhar Number" />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Licence Number</Label>
                  <Input type="text" placeholder="Licence Number" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Technician Association Number</Label>
                  <Input type="text" placeholder="Technician Asso. No." />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Government Licence Number</Label>
                  <Input type="text" placeholder="Govt Licen No." />
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Aadhar Number</Label>
                  <Input type="number" placeholder="Aadhar No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>PAN Card Number</Label>
                  <Input type="text" placeholder="Pancard No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Bank Name</Label>
                  <Input type="text" placeholder="Bank Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Account Holder Name</Label>
                  <Input type="text" placeholder="Acco. Holder Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Bank Account Number</Label>
                  <Input type="text" placeholder="Bank Account No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>IFSC Code</Label>
                  <Input type="text" placeholder="IFSC Code" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Staff Image</Label>
                  <Input type="file" placeholder="" />
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Billing
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}






































{/* <div class="container py-5">
<div class="row mb-4">
  <div class="col-lg-8 mx-auto text-center">
      <h1 class="display-6">Bill Payment Forms</h1>
  </div>
</div>
<div class="row">
  <div class="col-lg-6 mx-auto">
      <div class="card ">
          <div class="card-header">
              <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <ul role="tablist" class="nav bg-light nav-pills rounded nav-fill mb-3">
                      <li class="nav-item"> 
                      <a data-toggle="pill" href="#credit-card" class="nav-link active ">
                         <i class="fas fa-credit-card mr-2">
                           </i>
                           Credit Card 
                      </a> 
                      </li>
                      <li class="nav-item">
                         <a data-toggle="pill" href="#paypal" class="nav-link ">
                            <i class="fab fa-paypal mr-2">
                              </i>
                               Paypal 
                         </a> 
                      </li>
                      <li class="nav-item"> <a data-toggle="pill" href="#net-banking" class="nav-link "> <i class="fas fa-mobile-alt mr-2"></i> Net Banking </a> </li>
                  </ul>
              </div>
              <div class="tab-content">
                 
                  <div id="credit-card" class="tab-pane fade show active pt-3">
                      <form role="form" onsubmit="event.preventDefault()">
                          <div class="form-group">
                            <label for="username">
                                  <h6>Card Owner</h6>
                            </label>
                          <input type="text" name="username" placeholder="Card Owner Name" required class="form-control "/> </div>
                          <div class="form-group"> <label for="cardNumber">
                                  <h6>Card number</h6>
                              </label>
                              <div class="input-group"> 
                              <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required/>
                                  <div class="input-group-append">
                                     <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> 
                                     <i class="fab fa-cc-mastercard mx-1"></i> 
                                  <i class="fab fa-cc-amex mx-1"></i> </span> </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-8">
                                  <div class="form-group"> <label><span class="hidden-xs">
                                              <h6>Expiration Date</h6>
                                          </span></label>
                                      <div class="input-group"> 
                                      <input type="number" placeholder="MM" name="" class="form-control" required/> 
                                      <input type="number" placeholder="YY" name="" class="form-control" required/> </div>
                                  </div>
                              </div>
                              <div class="col-sm-4">
                                  <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                          <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                      </label>
                                       <input type="text" required class="form-control"/> </div>
                              </div>
                          </div>
                          {/* <div class="card-footer">  */}
//                           <button type="button" class="subscribe btn btn-primary btn-block shadow-sm">
//                              Confirm Payment
//                           </button>
//                       </form>
//                   </div>
//               </div>
              
//               <div id="paypal" class="tab-pane fade pt-3">
//                   <h6 class="pb-2">Select your paypal account type</h6>
//                   <div class="form-group "> <label class="radio-inline"> 
//                   <input type="radio" name="optradio" checked/> Domestic </label>
//                    <label class="radio-inline">
//                       <input type="radio" name="optradio" class="ml-5"/>International </label></div>
//                   <p> <button type="button" class="btn btn-primary "><i class="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
//                   <p class="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
//               </div> 
//               <div id="net-banking" class="tab-pane fade pt-3">
//                   <div class="form-group "> <label for="Select Your Bank">
//                           <h6>Select your Bank</h6>
//                       </label> <select class="form-control" id="ccmonth">
//                           <option value="" selected disabled>--Please select your Bank--</option>
//                           <option>Bank 1</option>
//                           <option>Bank 2</option>
//                           <option>Bank 3</option>
//                           <option>Bank 4</option>
//                           <option>Bank 5</option>
//                           <option>Bank 6</option>
//                           <option>Bank 7</option>
//                           <option>Bank 8</option>
//                           <option>Bank 9</option>
//                           <option>Bank 10</option>
//                       </select> </div>
//                   <div class="form-group">
//                       <p> <button type="button" class="btn btn-primary ">
//                         <i class="fas fa-mobile-alt mr-2">
//                           </i> 
//                           Proceed Payment
//                       </button> </p>
//                   </div>
//                   <p class="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
//               </div> 
              
//           </div>
//       </div>
//   </div>
// </div>
// </div> */}
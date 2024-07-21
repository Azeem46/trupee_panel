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

export default class EmailSetting extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardBody>
          <h1>Edit Mail Settings </h1>
            <Form className="m-1">
            
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Sender Name:</Label>
                  <Input  required type="text" placeholder="Company Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail Driver: (ex. smtp,sendmail,mail)</Label>
                  <Input  required type="email" placeholder="Email" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail Address: (ex. user@info.com)</Label>
                  <Input  required type="email" placeholder="Email" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail Host: (ex. smtp.gmail.com)</Label>
                  <Input  required type="email" placeholder="Email" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail PORT: (ex. 467,587,2525)</Label>
                  <Input type="text" placeholder="IFSC Code" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail Username: (info@gmail.com)</Label>
                  <Input  required type="email" placeholder="Email" />
                </Col>
     <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password:</Label>
                  <Input
                    required
                    type="text"
                    name="password"
                    id="show_hide_password"
                    // value={this.state.password}
                    // onChange={this.changeHandler}
                    placeholder="Set Password For User"
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mail Encryption: (ex. TLS,SSL,OR Leave blank)</Label>
                  <Input type="text" placeholder="IFSC Code" />
                </Col>
{/*            
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
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Category Price</Label>
                  <CustomInput type="select" placeholder="Category Price">
                    <option>Demo</option>
                    <option>Demo</option>
                    <option>Demo </option>
                    <option> Demo</option>
                  </CustomInput>
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input type="text" placeholder="Address" />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address line2</Label>
                  <Input type="text" placeholder="Address line2" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address line3</Label>
                  <Input type="text" placeholder="Address line3" />
                </Col> */}
{/* 
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
                </Col> */}
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
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col> */}
              </Row>
              <Row>
            
                <Col lg="6" md="6" sm="6" className="mb-2">
                <Button.Ripple   
                            // color="primary"
                            className="mr-1 mb-1 btn-danger-rgba" 
                            type="reset"
                            value="Reset">
                      Reset
                      </Button.Ripple>
                  <Button.Ripple
                            // color="primary"
                            type="submit"
                            className="mr-1 mb-1 btn-primary-rgba">
                    Mail Template
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
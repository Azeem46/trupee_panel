import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Form,
  CustomInput,
  Label,
  Input,
  Button,
  FormGroup

} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";

export default class AddStores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item_name: "",
      short_name: "",
      desc: "",
      code: "",
      hsn_code: "",
      productcategory: "",
      productsubcategory: "",
      unit: "",
      alt_unit: "",
      gst_rate: "",
      type_of_supply: "",
      varient: "",
      material: "",
      stock_qty: "",
      stock_clearance_limit: "",
      //rate:"",
      size: "",
      colour: "",
      brand: "",
      barcode: "",
      std_package: "",
      inc_duty_tax: "",
      product_img: "",
      selectedFile: null,
      selectedName: "",
      // makecompany: "",
      // mrp: "",
      // for_dealer: {},
    };
    this.state = {
      productC: [],
      productSC: [],
      units: [],
      altUnits: [],
      gstRate: [],
      pBrand: [],
    };
  }

  componentDidMount() {
    //Product Category
    axiosConfig
      .get("/allproductcategory")
      .then((response) => {
        console.log(response);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Product Sub Category
    axiosConfig
      .get("/allproductsubcategory")
      .then((response) => {
        console.log(response);
        this.setState({ productSC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Units
    axiosConfig
      .get("/viewallunits")
      .then((response) => {
        console.log(response);
        this.setState({ units: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Alternative Units
    axiosConfig
      .get("/allaltunit")
      .then((response) => {
        console.log(response);
        this.setState({ altUnits: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Gst rate
    axiosConfig
      .get("/viewallgst")
      .then((response) => {
        console.log(response);
        this.setState({ gstRate: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Brand
    axiosConfig
      .get("/allbrand")
      .then((response) => {
        console.log(response);
        this.setState({ pBrand: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    //console.log(this.state);

    const data = new FormData();
    data.append("item_name", this.state.item_name);
    data.append("short_name", this.state.short_name);
    data.append("desc", this.state.desc);
    data.append("code", this.state.code);
    data.append("hsn_code", this.state.hsn_code);
    data.append("productcategory", this.state.productcategory);
    data.append("productsubcategory", this.state.productsubcategory);
    data.append("unit", this.state.unit);
    data.append("alt_unit", this.state.alt_unit);
    data.append("gst_rate", this.state.gst_rate);
    data.append("brand", this.state.brand);
    data.append("type_of_supply", this.state.type_of_supply);
    data.append("varient", this.state.varient);
    data.append("material", this.state.material);
    data.append("stock_qty", this.state.stock_qty);
    data.append("stock_clearance_limit", this.state.stock_clearance_limit);
    data.append("colour", this.state.colour);
    data.append("size", this.state.size);
    data.append("inc_duty_tax", this.state.inc_duty_tax);
    data.append("std_package", this.state.std_package);
    data.append("barcode", this.state.barcode);
    data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );

    // for (var value of data.values()) {
    //   console.log(value);
    // }

    // for (var key of data.keys()) {
    //   console.log(key);
    // }
    axiosConfig
      .post("/addproduct", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
              Add Stores
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/store/stores/StoresList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Store Owner</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Store Name</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col>
               
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Business Email:</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                    placeholder="Enter Email"
                  />
                </Col>
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>VAT/GSTIN No.</Label>
                  <Input
                    type="text"
                    name="gstin_no"
                    value={this.state.gstin_no}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Mobile Number:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile_no"
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Contact Number:</Label>
                  <Input
                    type="text"
                    placeholder="Contact Number"
                    name="phone_no"
                    value={this.state.phone_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4">
                  <FormGroup>
                    <Label>Address</Label>
                    <Input
                    rows="5"
                    cols="30"
                      type="textarea"
                      placeholder="Address"
                      name="desc"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Country:</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.changeHandler}>
                    <option value="country">Country</option>
                    <option value="algeria">Algeria</option>
                    <option value="austria">Austria</option>
                    <option value="canada">Canada</option>
                    <option value="UK">UK</option>
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Please select your state : </Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="select your status"
                    name="status"
                    value={this.state.country}
                    onChange={this.changeHandler}>
                    <option value="country">Choose your Status</option>
                    {/* <option value="algeria">Algeria</option>
                    <option value="austria">Austria</option>
                    <option value="canada">Canada</option>
                    <option value="UK">UK</option> */}
                  </CustomInput>
                </Col>
             
             
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>City:</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.changeHandler}>
                        <option value="city">City</option>
                    <option value="indore">Indore</option>
                    <option value="sagar">Sagar</option>
                    <option value="jabalpur">Jabalpur</option>
                    <option value="delhi">Delhi</option>
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>PinCode/ZipCode:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Pin Code"
                    name="pincode"
                    value={this.state.pincode}
                    onChange={this.changeHandler}
                  />
                 </Col> 
                 {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Prefered Payout Option:</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Payout"
                    name="payout"
                    value={this.state.city}
                    onChange={this.changeHandler}>
                        <option value=""></option> */}
                    {/* <option value="indore">Indore</option>
                    <option value="sagar">Sagar</option>
                    <option value="jabalpur">Jabalpur</option>
                    <option value="delhi">Delhi</option> */}
                  {/* </CustomInput>
                </Col> */}
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Paypal Email :</Label>
                  <Input
                    required
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                    placeholder="Enter Email"
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Account Name :</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Account Number:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Bank Name :</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>IFSC Code</Label>
                  <Input
                    required
                    type="text"
                    placeholder="IFSC Code"
                    name="ifsc_code"
                    value={this.state.ifsc_code}
                    onChange={this.changeHandler}
                  />
                </Col>  */}
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Branch Address :</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Bank Name"
                    name="bank_name"
                    value={this.state.bank_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Paytm Mobile No. : (APPLICABLE ONLY IN INDIA)</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile_no"
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Paytm Mobile No. : (APPLICABLE ONLY IN INDIA)</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile_no"
                    value={this.state.mobile_no}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label for="exampleCustomFileBrowser">Logo :</Label>
                  <CustomInput 
                    type="file" 
                    id="exampleCustomFileBrowser" 
                    name="customFile" />
                </Col>  */}
                <Col lg="6" md="6" sm="6" className="mb-2">
          <FormGroup>
            <Label>Status</Label>
              <div>
                <CustomInput 
                  type="switch" 
                  id="exampleCustomSwitch9" 
                  name="item_name"
                  value={this.state.item_name}
                  onChange={this.changeHandler}
                  label=""
                />
              </div>
          </FormGroup>
        </Col>
        <Col lg="6" md="6" sm="6" className="mb-2">

          <FormGroup>
            <Label>Verified Store :</Label>
              <div>
                <CustomInput 
                  type="switch" 
                  id="exampleCustomSwitch0" 
                  name="item_name"
                  value={this.state.item_name}
                  onChange={this.changeHandler}
                  label=""
                />
              </div>
          </FormGroup>
        </Col>
        
              
              <Col lg="6" md="6" sm="6" className="mb-2">
              <Button.Ripple   
                          color="danger"
                          className="mr-1 mb-1 btn-danger-rgba" 
                          type="reset"
                          value="Reset">
                    Reset
                    </Button.Ripple>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                 Create 
                </Button.Ripple>
              </Col>
            
           
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>State:</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="State"
                    name="state"
                    value={this.state.state}
                    onChange={this.changeHandler}>
                      <option value="state">State</option>
                    <option value="mp">MP</option>
                    <option value="goa">Goa</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="gujarat">Gujarat</option>
                  </CustomInput>
                </Col>

                
             
               

                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Website:</Label>
                  <Input
                    type="text"
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.changeHandler}
                  />
                </Col>




                 <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>User Type:</Label>
                  <CustomInput
                    required
                    type="select"
                    name="usertype"
                    value={this.state.usertype}
                    onChange={this.changeHandler}
                  >
                    <option value="dealer">Dealer</option>
                    <option value="retailer">Seller</option>
                    <option value="retailer">Support</option>
                    <option value="customer">Customer</option>
                    <option value="distributor">Blocked</option>
                  </CustomInput>
                </Col>
             

                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Password:</Label>
                  <Input
                    required
                    type="text"
                    name="password"
                    id="show_hide_password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                    placeholder="Set Password For User"
                  />
                </Col>
              
                  
              
                
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Date Of Birth</Label>
                  <Input
                    required
                    type="date"
                    placeholder="Date of Birth"
                    name="date_of_birth"
                    value={this.state.date_of_birth}
                    onChange={this.changeHandler}
                  />
                </Col>
               
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Marriage Anniversary</Label>
                  <Input
                    type="date"
                    placeholder="Marriage Anniversary"
                    name="marriage_anniversary"
                    value={this.state.marriage_anniversary}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Technician Associate Number</Label>
                  <Input
                    type="text"
                    name="technician_assot_no"
                    value={this.state.technician_assot_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Udhyog Aadhar Number</Label>
                  <Input
                    type="text"
                    name="udhyog_adhar_no"
                    value={this.state.udhyog_adhar_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>GST Number</Label>
                  <Input
                    type="text"
                    name="gstin_no"
                    value={this.state.gstin_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Business Licence Number</Label>
                  <Input
                    type="text"
                    name="licence_no"
                    value={this.state.licence_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Governament Licence Number</Label>
                  <Input
                    type="text"
                    name="gov_licence_no"
                    value={this.state.gov_licence_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>EB Licence</Label>
                  <Input
                    type="text"
                    name="eb_license"
                    value={this.state.eb_license}
                    onChange={this.changeHandler}
                    placeholder="EB License"
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Aadhar Card Number</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Aadhar Card Number"
                    name="aadhar_no"
                    value={this.state.aadhar_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>PAN Number</Label>
                  <Input
                    required
                    type="text"
                    placeholder="PAN Number"
                    name="pancard_no"
                    value={this.state.pancard_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Bank Name</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Bank Name"
                    name="bank_name"
                    value={this.state.bank_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Account Holder's Name</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Account Holder Name"
                    name="bank_user_name"
                    value={this.state.bank_user_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Bank Account Number</Label>
                  <Input
                    type="text"
                    name="bank_account_no"
                    value={this.state.bank_account_no}
                    onChange={this.changeHandler}
                  />
                </Col>

               
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Stores
                  </Button.Ripple>
                </Col> */}
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

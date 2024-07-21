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
  Jumbotron,
  FormGroup
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
export default class GeneralSetting extends Component {
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
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Project Name:</Label>
                  <Input  required type="text" placeholder="Company Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Default Email:</Label>
                  <Input  required type="email" placeholder="Email" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>APP URL:</Label>
                  <Input type="text" placeholder="Name" />
                </Col> 
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input type="number" placeholder="Mobile No." />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Copyright Text:</Label>
                  <Input type="text" placeholder="Name" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Default Currency:</Label>
                  <Input type="doller" placeholder="USD" />
                </Col>  
            
            
                
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    required
                    type="textarea"
                    name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                    rows="1"
                    placeholder="Textarea"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Cart Amount: </Label>
                  <Input type="doller" placeholder="USD" />
                </Col> 
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Handling Charges: </Label>
                  <Input type="doller" placeholder="USD" />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Charging term:</Label>
                  <CustomInput type="select" placeholder="">
                    <option value="finance">1 </option>
                    <option value="resource">2</option>
                    <option value="inventory"> 3</option>
                    <option value="management"> 4</option>
                  </CustomInput>
                </Col>
           
           
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Select Timezone:</Label>
                  <CustomInput type="select" placeholder="">
                    <option value="finance">1</option>
                    <option value="resource">2</option>
                    <option value="inventory"> 3</option>
                    <option value="management"> 4</option>
                  </CustomInput>
                </Col>
                </Row>
  

<div>
  {/* <Jumbotron>
  <h4> reCaptcha v2 Settings</h4>
  <hr/>
    <Row>  
      <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>NOCAPTCHA_SECRET:</Label>
          <Input type="text" placeholder="Name" />
      </Col>
      <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>MAILCHIMP LIST ID</Label>
          <Input type="text" placeholder="Name" />
      </Col>
      <Col lg="6" md="6" sm="6" className="mb-2">
          <FormGroup>
            <Label>Enable reCaptcha on Registration :</Label>
              <div>
                <CustomInput 
                  type="switch" 
                  id="exampleCustomSwitch00" 
                  name="item_name"
                  value={this.state.item_name}
                  onChange={this.changeHandler}
                  label=""
                />
              </div>
          </FormGroup>
        </Col>
        </Row>
 
      </Jumbotron>
    </div>
    <div>
  <Jumbotron>
    <h4> MailChimp Newsletter Settings</h4>
    <hr/>
  <Row>
  <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>MAILCHIMP APIKEY</Label>
          <Input type="text" placeholder="Name" />
      </Col>
      <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>NOCAPTCHA_SITEKEY</Label>
          <Input type="text" placeholder="Name" />
      </Col>
</Row>
  
      </Jumbotron>
    </div>
    <div>
  <Jumbotron>
  <h4> Google Tag Manager Settings</h4>
  <hr/>
    <Row>
  <Col lg="6" md="6" sm="6" className="mb-2">
          <Label>GOOGLE TAG MANAGER ID</Label>
          <Input type="text" placeholder="Name" />
      </Col>
      <Col lg="6" md="6" sm="6" className="mb-2">
          <FormGroup>
            <Label>Enable Google Tag Manager :</Label>
              <div>
                <CustomInput 
                  type="switch" 
                  id="exampleCustomSwitch01" 
                  name="item_name"
                  value={this.state.item_name}
                  onChange={this.changeHandler}
                  label=""
                />
              </div>
          </FormGroup>
        </Col>
    </Row>
    
      </Jumbotron> */}
    </div>

            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

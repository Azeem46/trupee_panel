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
import axiosConfig from "../../../axiosConfig";
//import { history } from "../../../history";

export default class InvoiceDesign extends Component {
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
              Invoice Design
              </h1>
            </Col>
            {/* <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/product/productList")}
              >
                Back
              </Button>
            </Col> */}
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
            
                <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <Label>Show Logo in invoice :</Label>
                  <div>
                    <CustomInput 
                    type="switch" 
                    id="exampleCustomSwitch" 
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                    label="" />
                  </div>
                </FormGroup>
                
                <FormGroup>
                <Label>Show QR in invoice :</Label>
                  <div>
                    <CustomInput 
                    type="switch" 
                    id="exampleCustomSwitch1" 
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                    label="" />
                  </div>
                </FormGroup>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <Label>Show VAT NO. in invoice :</Label>
                  <div>
                    <CustomInput 
                    type="switch" 
                    id="exampleCustomSwitch2" 
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                    label="" />
                  </div>
                </FormGroup>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <Label>Print default in Landscape mode :</Label>
                  <div>
                    <CustomInput 
                    type="switch" 
                    id="exampleCustomSwitch3" 
                    name="item_name"
                    value={this.state.item_name}
                    onChange={this.changeHandler}
                    label="" />
                  </div>
                </FormGroup>
               
              </Col>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Border Color:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Name"
                    name="short_name"
                    value={this.state.short_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                
                <Col lg="6" md="6" sm="6" className="mb-2">
                <Label for="exampleCustomSelect">Border Radius:</Label>
                  <CustomInput
                    type="select"
                    id="exampleCustomSelect"
                    name="Border"
                    value={this.state.productcategory}
                    onChange={this.changeHandler}
                  >
                     {this.state.productC.map((productCategory) => (
                      <option
                        value={productCategory._id}
                        key={productCategory._id}
                      >
                        {productCategory.name}
                      </option>
                       ))}
                  </CustomInput>
                  </Col>
              
               
            
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Border Radius:</Label>
                  <CustomInput
                    type="select"
                    name="productcategory"
                    value={this.state.productcategory}
                    onChange={this.changeHandler}
                  >
                    {this.state.productC.map((productCategory) => (
                      <option
                        value={productCategory._id}
                        key={productCategory._id}
                      >
                        {productCategory.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col> */}
           
        
     
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Border Style:</Label>
                  <CustomInput
                    type="select"
                    name="brand"
                    value={this.state.brand}
                    onChange={this.changeHandler}
                  >
                    {this.state.pBrand.map((brandp) => (
                      <option value={brandp._id} key={brandp._id}>
                        {brandp.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Invoice date format:</Label>
                  <CustomInput
                    type="select"
                    name="type_of_supply"
                    value={this.state.type_of_supply}
                    onChange={this.changeHandler}
                  >
                    <option>Goods</option>
                    <option>Services</option>
                  </CustomInput>
                </Col>
               
         
               
              
               
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Image</Label>
                  <Input required type="file" onChange={this.onChangeHandler} />
                </Col> */}

            
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col> */}
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Product
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

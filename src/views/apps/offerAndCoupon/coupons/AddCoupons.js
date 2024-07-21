import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
  FormGroup
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddBundleOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      product_img: "",
      status: "",
    };
  }

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
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("sortorder", this.state.sortorder);
    data.append("desc", this.state.desc);
    // data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post(" /addproductcategory", data)
      .then((response) => {
        console.log(response);
        //this.props.history.push("/app/category/category");
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
                Add Coupons
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/offerAndCoupon/coupons/couponsList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
         
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Coupon code: </Label>
                  <Input
                    type="text"
                    name="code"
                    // value={this.state.name}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Discount type: </Label>
                  <Input
                    type="select"
                    name="desc"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Amount: </Label>
                  <Input
                    type="number"
                    name="Price"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Linked to:</Label>
                  <Input
                    type="text"
                    name="Quantity"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Max Usage Limit: </Label>
                  <Input
                    type="text"
                    name="Quantity"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Min Amount: </Label>
                  <Input
                    type="number"
                    name="Price"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>

                {/* <Col lg="6" md="6" className="mb-1">
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="Description"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col> */}

                <Col lg="6" md="6" className="mb-1">
                  <Label>Expiry Date:</Label>
                  <Input
                    type="date" 
                    id="birthday"
                    name="birthday"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>
              
                <Col lg="6" md="6" sm="6" className="mb-2">
          <FormGroup>
            <Label>  Only For Registered Users:</Label>
              <div>
                <CustomInput 
                  type="switch" 
                  id="exampleCustomSwitch9" 
                  name="item_name"
                  // value={this.state.item_name}
                  // onChange={this.changeHandler}
                  label=""
                />
              </div>
          </FormGroup>
        </Col>

                {/* <Col lg="6" md="6">
                  <Label>Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler} />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
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
              <Button.Ripple  className="mr-1 mb-1" type="reset" color="danger">reset</Button.Ripple>
                <Button.Ripple  className="mr-1 mb-1"  type="create"  color="primary"
                  
                >
                  Create
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddBundleOffer;

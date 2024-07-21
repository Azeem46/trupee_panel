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
} from "reactstrap";
import { history } from "../../../../history";
//import axiosConfig from "../../../../axiosConfig";

export class AddSpecialOffer extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     name: "",
  //     selectedFile: null,
  //     selectedName: "",
  //     sortorder: "",
  //     desc: "",
  //     product_img: "",
  //     status: "",
  //   };
  // }

  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };

  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("name", this.state.name);
  //   data.append("sortorder", this.state.sortorder);
  //   data.append("desc", this.state.desc);
  //   data.append("status", this.state.status);
  //   data.append(
  //     "product_img",
  //     this.state.selectedFile,
  //     this.state.selectedName
  //   );
  //   //   for (var value of data.values()) {
  //   //     console.log(value);
  //   //  }
  //   axiosConfig
  //     .post(" /addproductcategory", data)
  //     .then((response) => {
  //       console.log(response);
  //       //this.props.history.push("/app/category/category");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add special Offer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/offerAndCoupon/specialOffer/specialOfferList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                {/* <Col lg="6" md="6">
                  <Label>OfferTitle</Label>
                  <Input
                    type="text"
                    name="name"
                    // value={this.state.name}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
                 {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Link By</Label>
                  <CustomInput
                    required
                    type="select"
                    placeholder="Link By..."
                    name="name"
                    // value={this.state.value}
                    // value={this.state.link}
                    // onChange={this.changeHandler}
                    >
                    <option value="linkby">Link By...</option>
                    <option value="link with simple product">Link With Simple Product</option>
                    <option value="link with variant product">Link With Simple Product</option>
                   
                  </CustomInput>
                </Col> */}
                {/* <Col lg="6" md="6" className="mb-1">
                  <Label>Link By</Label>
                  <Input
                    type="text"
                    name="name"
                    // value={this.state.desc}
                    // onChange={this.changeHandler}
                  />
                </Col> */}

                {/* <Col lg="6" md="6" className="mb-1">
                  <Label>Select Simple</Label>
                  <Input
                  placeholder="search..."
                  onChange={(e) =>
                    this.updateSearchQuery(e.target.value)
                  }
                  
                  value={this.state.value}
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col> */}
          
{/* 
                <Col lg="6" md="6" className="mb-1">
                  <Label>Quantity</Label>
                  <Input
                    type="text"
                    name="Quantity"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col> */}

                <Col lg="6" md="6" className="mb-1">
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="Description"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>

                {/* <Col lg="6" md="6">
                  <Label>Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler} />
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
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
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Special Offer
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddSpecialOffer;
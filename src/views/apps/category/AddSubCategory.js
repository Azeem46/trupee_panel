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
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import { relativeTimeThreshold } from "moment";

export class AddSubCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sortorder: "",
      desc: "",
      productcategory: "",
      product_img: "",
      status: "",
      selectedFile: null,
      selectedName: "",
    };

    this.state = {
      productC: [],
    };
  }

  async componentDidMount() {
    //Product Category
    axiosConfig
      .get("/getproductCategory")
      .then((response) => {
        console.log(response);
        this.setState({ productC: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
    data.append("desc", this.state.desc);
    data.append("productcategory", this.state.productcategory);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "product_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post("/addproductsubcategory", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/category/subCategory");
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
                Add New Category
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/category/subCategory")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-2">
                  <Label> Main Category</Label>
                  <CustomInput
                    type="select"
                    name="productcategory"
                    value={this.state.productcategory}
                    onChange={this.changeHandler}
                  >
                    {this.state.productC.map((prodCategory) => (
                      <option key={prodCategory._id} value={prodCategory._id}>
                        {prodCategory.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Category Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Category"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Description</Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Sort Order</Label>
                  <Input
                    type="number"
                    placeholder="Sort Order"
                    name="sortorder"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler} />
                </Col>
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
                  Add Sub-Category
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddSubCategory;

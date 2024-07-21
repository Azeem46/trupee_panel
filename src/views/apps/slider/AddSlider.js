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
import axiosConfig from "../../../axiosConfig";
export default class AddSilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner_title: "",
      banner_img: "",
      selectedFile: null,
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
    data.append("banner_title", this.state.banner_title);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "banner_img",
        this.state.selectedFile,
        this.state.selectedName
      );
    }

    axiosConfig
      .post("/addbanner", data)
      .then((response) => {
        console.log(response);
        alert("Slider Added Successful");
        this.props.history.push("/app/slider/sliderList");
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
            <CardTitle>New Slider</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="banner_title"
                    placeholder="Enter Banner Title"
                    value={this.state.banner_title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>BannerImage</Label>
                  <CustomInput
                    required
                    type="file"
                    placeholder="Enter Banner Image"
                    onChange={this.onChangeHandler}
                  />
                </Col>
              </Row>
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
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Slider
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

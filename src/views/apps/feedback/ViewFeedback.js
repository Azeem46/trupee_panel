import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import {
  EditorState,
  convertFromHTML,
  convertToRaw,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import swal from "sweetalert";
export default class ViewFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      selectedName: "",
      selectedFile: null,
      userMobile: "",
      editorState: EditorState.createEmpty(),
      desc: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getoneFeedback/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          title: response.data.data.title,
          desc: response.data.data.desc,
          image: response.data.data.image,
          userMobile: response.data.data.userid.mobile,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc_response: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/explore/Trupee/opportunity" tag="a">
                  View Feedback
                </BreadcrumbItem>
                <BreadcrumbItem active>View Feedback</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Feedback
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/feedback/FeedBackList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    disabled
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    required
                    type="text"
                    disabled
                    name="userMobile"
                    value={this.state.userMobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Description</Label>
                  <Input
                    required
                    type="textarea"
                    disabled
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Response Descripition</Label>
                  <Editor
                  toolbarClassName="demo-toolbar-absolute"
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  editorState={this.state.editorState}
                  onEditorStateChange={this.onEditorStateChange}
                  toolbar={{
                    options: ["inline", "blockType", "fontSize", "fontFamily"],
                    inline: {
                      options: [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "monospace",
                      ],
                      bold: { className: "bordered-option-classname" },
                      italic: { className: "bordered-option-classname" },
                      underline: { className: "bordered-option-classname" },
                      strikethrough: {
                        className: "bordered-option-classname",
                      },
                      code: { className: "bordered-option-classname" },
                    },
                    blockType: {
                      className: "bordered-option-classname",
                    },
                    fontSize: {
                      className: "bordered-option-classname",
                    },
                    fontFamily: {
                      className: "bordered-option-classname",
                    },
                  }}
                />
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12" className="mb-2 d-flex justify-content-end">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 ml-auto"
                  >
                    Response
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

import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
import swal from "sweetalert";
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
export default class EditCash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      editorState: EditorState.createEmpty(),
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewoneService/${id}`)
      .then((response) => {
        console.log(response);

        const description = response.data.data.desc;

        const contentState = ContentState.createFromBlockArray(
          convertFromHTML(description)
        );
        // Create EditorState with ContentState
        const editorState = EditorState.createWithContent(contentState);
        this.setState({
          desc: description,
          editorState: editorState,
        });
        // this.setState({
        //   desc: response.data.data.desc,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // onEditorStateChange = (editorState) => {
  //   console.log(editorState);
  //   this.setState({
  //     editorState,
  //     desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
  //   });
  // };
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`admin/editService/${id}`, this.state)
      .then((response) => {
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push("/app/scripts/cashEquity");
      })
      .catch((error) => {
        console.log(error);
      });
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
                <BreadcrumbItem href="/app/scripts/cashEquity" tag="a">
                  Edit Paid Service
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Paid Service</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Paid Service
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/premium/paidServiceList")}
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
                  <Label>Edit Paid Service</Label>
                  <Editor
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={this.state.editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      options: [
                        "inline",
                        "blockType",
                        "fontSize",
                        "fontFamily",
                      ],
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
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

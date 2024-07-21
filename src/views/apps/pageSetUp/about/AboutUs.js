import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import {
  EditorState,
  convertFromHTML,
  convertToRaw,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import axiosConfig from "../../../../axiosConfig";
// import Textarea from "../../forms/form-elements/textarea/Textarea";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
class AboutUs extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dealer: "",
  //     desc: "",
  //   };
  //   this.state = {
  //     dealerN: [],
  //   };
  // }

    constructor(props) {
      super(props);
      this.state = {
        dealer: "",
        desc: "",
        editorState: EditorState.createEmpty(),
      };
    }

  async componentDidMount() {
    //dealer List
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        console.log(response);
        this.setState({ dealerN: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post(
        "/admin/add_aboutus",
        this.state,
        {
          headers: {
            "auth-adtoken": localStorage.getItem("auth-adtoken"),
          },
        }
      )
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/pageSetUp/about/AllaboutUs");
      })
      .catch((error) => {
        console.log(error);
        swal("Error!", "Already added you can edit existing!", "error");
        this.props.history.push("/app/pageSetUp/about/AllaboutUs");
      });
  };

  render() {
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="About Us"
          breadCrumbParent="Home"
          breadCrumbActive=" About Us"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                About Us
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/about/allaboutUs")}
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
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Descriptions</Label>
                  {/* <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                    rows="3"
                    placeholder="Textarea"
                  /> */}

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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
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

export default AboutUs;

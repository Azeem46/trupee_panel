import React from "react";
import { Card,  Col,  Row, CardBody, Form, Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";
import { Route } from "react-router-dom";

class AddPaidServeice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      desc: "",
      editorState: EditorState.createEmpty(),
    };
    this.state = {
      pack_nameM: [],
    };
  }
  componentDidMount() {
    //plan//
    axiosConfig
      .get("/admin/plan_list")
      .then((response) => {
        console.log(response);
        this.setState({
          pack_nameM: response.data.data,
        });
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
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addPrmiumSrvc", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/premium/paidServiceList");
        swal("Success!", "Paid service added successfull!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <Card>
         <Row className="m-2">
            <Col>
              <h1 sm="6" className="float-left">
                Add Service List
              </h1>
            </Col>
          </Row> 
        <CardBody>
       
          <Form onSubmit={this.submitHandler}>
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
                  strikethrough: { className: "bordered-option-classname" },
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
            <br />
            <Button color="primary"> Add Paid Serveice</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddPaidServeice;

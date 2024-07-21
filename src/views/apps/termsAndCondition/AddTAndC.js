import React from "react";
import { Card, CardBody, Col, Row, Form, Button } from "reactstrap";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";

import { history } from "../../../history";

class AddTAndC extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     description: "",
  //   };
  // }
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.editorState);
    axios
      .post("http://65.2.150.118:4444/api/admin/addprivacy_policy", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/privacyPolicy/privacyPolicy");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { editorState } = this.state;
    const editData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(editData);
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Add New Terms and Condition
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() => history.push("/app/termsAndCondition/tAndCList")}
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>
            <Editor
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              editorState={editorState}
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
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default AddTAndC;

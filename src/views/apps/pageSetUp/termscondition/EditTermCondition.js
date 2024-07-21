import React from "react";
import { Card, CardBody, Col, Row, Form, Button } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
// import { EditorState, convertToRaw, RichUtils,  ContentState } from "draft-js";

import {
  EditorState,
  convertFromHTML,
  convertToRaw,
  ContentState,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import axiosConfig from "../../../../axiosConfig";
import { history } from "../../../../history";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

class EditTermCondition extends React.Component {
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
      .get(`/admin/getone_term_cond/${id}`)
      .then((response) => {
        console.log(response.data.data.desc);

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
  //     // desc: convertToRaw(editorState.getCurrentContent()),
  //     desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
  //   });
  // };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };


  // handleKeyCommand(command, editorState) {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);

  //   if (newState) {
  //     this.onChange(newState);
  //     return "handled";
  //   }

  //   return "not-handled";
  // }


  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .post(`/admin/edit_term_cond/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push(
        //   `/app/pageSetUp/termscondition/TermConditionList`
        // );
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Edit Term And Condition
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() =>
                    history.push(
                      "/app/pageSetUP/termscondition/TermConditionList"
                    )
                  }
                >
                  Back
                </Button>
              )}
            />
          </Col>
        </Row>
        <CardBody>
          <Form onSubmit={this.submitHandler}>
            {/* <Editor
  editorState={this.state.editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>; */}

            <Editor
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onEditorStateChange={this.onEditorStateChange}
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
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
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default EditTermCondition;

import React, { useState } from "react";
import {
  Card,
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
import { Route } from "react-router-dom";
import swal from "sweetalert";
import EmojiPicker, { EmojiStyle, Emoji } from "emoji-picker-react";
import "react-toastify/dist/ReactToastify.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/plugins/extensions/editor.scss";
function AddGeneralNotif() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedEmoji, setSelectedEmoji] = useState("");
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  // const onEditorStateChange = (editorState) => {
  //   return setEditorState(editorState);
  // };

  // function handleEmoji(emojiData) {
  //   setSelectedEmoji(emojiData.unified);
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title);
    // data.append("emoji", selectedEmoji);
    data.append("desc", desc );
    // data.append(
    //   "desc",
    //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
    // );
    // if (selectedImage !== null) {
    //   data.append("img", selectedImage);
    // }
    axiosConfig
      .post("/admin/add_notification", data)
      .then((response) => {
        console.log(response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // setSelectedImage(file);
  };
  return (
    <>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Add General Notification</h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/trade/generalNotifList")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={(e) => submitHandler(e)}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Input>
                </Col>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>URL</Label>
                  <Input
                    required
                    type="text"
                    name="url"
                    placeholder="Url"
                    value={url}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setUrl(e.target.value);
                    }}
                  ></Input>
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Col> */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <div className="">
                    <div className="show-emoji">
                      Your selected Emoji is:
                      {selectedEmoji ? (
                        <Emoji
                          unified={selectedEmoji}
                          emojiStyle={EmojiStyle.APPLE}
                          size={22}
                        />
                      ) : null}
                    </div>
                    <div>
                      <EmojiPicker
                        onEmojiClick={handleEmoji}
                        autoFocusSearch={false}
                        emojiStyle={EmojiStyle.NATIVE}
                        height="400px"
                      />
                    </div>
                  </div>
                </Col> */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Message</Label>
                <Input
                    required
                    type="textarea"
                    
                    name="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></Input>
                  {/* <Editor
                    className="form-control"
                    toolbarClassName="demo-toolbar-absolute"
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
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
                  /> */}
                </Col>
              </Row>

              <br />
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add General Notification
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddGeneralNotif;

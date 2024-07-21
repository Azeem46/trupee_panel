import React, { useEffect, useState } from "react";

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
import axiosConfig from "../../../../axiosConfig";
import { Route, useParams } from "react-router-dom";
import swal from "sweetalert";
import EmojiPicker, { EmojiStyle, Emoji } from "emoji-picker-react";
import "react-toastify/dist/ReactToastify.css";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
function EditNotification() {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [desc, setDesc] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const param = useParams();
  console.log(param.id);
  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );
  const onEditorStateChange = (editorState) => {
    return setEditorState(editorState);
  };

  function handleEmoji(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }
  useEffect(() => {
    axiosConfig
      .get(`/admin/getone_notification/${param.id}`)
      .then((response) => {
        const description = response.data.data.desc;
        setTitle(response.data.data.title);
        setSelectedEmoji(response.data.data.emoji);
        setDesc(response.data.data.desc);
        const contentState = ContentState.createFromBlockArray(
          convertFromHTML(description)
        );
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
        setSelectedImage(response.data.data.img[0]);
        console.log(response.data.data.emoji);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(selectedEmoji);
    let data = new FormData();
    data.append("title", title);
    data.append("emoji", selectedEmoji);
    data.append(
      "desc",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    if (selectedImage !== null) {
      data.append("img", selectedImage);
    }
    axiosConfig
      .post(`/admin/edit_notification/${param.id}`, data)
      .then((response) => {
        console.log(response.data.data.emoji);
        swal("Success!", "Submitted SuccessFull!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };
  return (
    <>
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 className="float-left">Edit General Notification</h1>
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
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
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Editor
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
                  />
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
                    Edit General Notification
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

export default EditNotification;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Col,
//   Row,
//   Form,
//   Button,
//   Label,
//   Input,
// } from "reactstrap";
// import "react-toastify/dist/ReactToastify.css";
// import { EditorState, convertToRaw, RichUtils } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "../../../../assets/scss/plugins/extensions/editor.scss";
// import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../../history";
// import swal from "sweetalert";
// import { Route } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
// import EmojiPicker, { EmojiStyle, Emoji } from "emoji-picker-react";
// class EditNotification extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       emoji: "",
//       desc: "",
//       editorState: EditorState.createEmpty(),
//       image: "",
//     };
//   }
//   onEditorStateChange = (editorState) => {
//     this.setState({
//       editorState,
//       desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
//     });
//   };

//   handleKeyCommand(command, editorState) {
//     const newState = RichUtils.handleKeyCommand(editorState, command);

//     if (newState) {
//       this.onChange(newState);
//       return "handled";
//     }

//     return "not-handled";
//   }
//   componentDidMount() {
//     let { id } = this.props.match.params;
//     console.log(id);
//     axiosConfig
//       .get(`/admin/getone_notification/${id}`)
//       .then((response) => {
//         console.log(response.data.data);
//         this.setState({
//           desc: response.data.data.desc,
//           title: response.data.data.title,
//           emoji: response.data.data.emoji,
//           image: response.data.data.img[0],
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     const data = new FormData();
//     data.append("title", this.state.title);
//     data.append("desc", this.state.desc);
//     data.append("image", this.state.img);
//     console.log(id);
//     axiosConfig
//       .post(`/admin/edit_notification/${id}`, this.state)
//       .then((response) => {
//         console.log(response);
//         swal("Success!", "Submitted SuccessFull!", "success");
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <Card>
//         <Row className="m-2">
//           <Col>
//             <h1 col-sm-6 className="float-left">
//               Edit Notification
//             </h1>
//           </Col>
//           <Col>
//             <Route
//               render={({ history }) => (
//                 <Button
//                   className=" btn btn-danger float-right"
//                   onClick={() => history.push("/app/trade/generalNotifList")}
//                 >
//                   Back
//                 </Button>
//               )}
//             />
//           </Col>
//         </Row>
//         <CardBody>
//           <Form onSubmit={this.submitHandler}>
//             <Row>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label>Title</Label>
//                 <Input
//                   required
//                   type="text"
//                   name="value"
//                   placeholder="Title"
//                   value={this.state.title}
//                   onChange={this.changeHandler}
//                 />
//               </Col>
//               <Col lg="6" md="6" sm="6" className="mb-2">
//                 <Label>Image</Label>

//                 <Input type="file" name="image" onChange={this.changeHandler} />
//               </Col>
//             </Row>
//             <Editor
//               editorState={editorState}
//               handleKeyCommand={this.handleKeyCommand}
//               onEditorStateChange={this.onEditorStateChange}
//               toolbarClassName="demo-toolbar-absolute"
//               wrapperClassName="demo-wrapper"
//               editorClassName="demo-editor"
//               toolbar={{
//                 options: ["inline", "blockType", "fontSize", "fontFamily"],
//                 inline: {
//                   options: [
//                     "bold",
//                     "italic",
//                     "underline",
//                     "strikethrough",
//                     "monospace",
//                   ],
//                   bold: { className: "bordered-option-classname" },
//                   italic: { className: "bordered-option-classname" },
//                   underline: { className: "bordered-option-classname" },
//                   strikethrough: { className: "bordered-option-classname" },
//                   code: { className: "bordered-option-classname" },
//                 },
//                 blockType: {
//                   className: "bordered-option-classname",
//                 },
//                 fontSize: {
//                   className: "bordered-option-classname",
//                 },
//                 fontFamily: {
//                   className: "bordered-option-classname",
//                 },
//               }}
//             />
//             <br />
//             <Button color="primary">Submit</Button>
//           </Form>
//         </CardBody>
//       </Card>
//     );
//   }
// }
// export default EditNotification;

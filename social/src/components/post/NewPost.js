import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../auth";
import { ADD_POST } from "../../graphql/post/mutation";
import { useMutation } from "@apollo/client";

const NewPost = ({ isNewPost }) => {
  const [text, setText] = useState("");
  const { currentUser } = useContext(UserContext);
  const image = useRef();
  const [addPost] = useMutation(ADD_POST);

  if (isNewPost) {
    if (!document.querySelector("#new-post").classList.contains("show"))
      new window.bootstrap.Modal(document.querySelector("#new-post")).show();
  }

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "senacgram");
    formData.append("cloud_name", "gustavop");

    const response = await fetch(
      "http://api.cloudinary.com/v1_1/gustavop/image/upload",
      {
        method: "POST",
        accept: "application/json",
        body: formData,
      }
    );

    const json = await response.json();
    return json.url;
  };

  const handleNewPost = async () => {
    const url = await uploadImage(image.current.files[0]);
    const newPost = {
      text: text,
      image: url,
      userId: currentUser.id,
    };

    addPost({
      variables: {
        image: newPost.image,
        text: newPost.text,
        userId: newPost.userId,
      },
    });

    console.log(newPost)
  };

  return (
    <div id="new-post" className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Digite um texto"
              className="form-control my-2"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <input ref={image} type="file" className="form-control my-2" />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNewPost}
            >
              Criar post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;

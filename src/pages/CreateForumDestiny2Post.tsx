import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import { getDatabase, ref, push, set } from "firebase/database";

const database = getDatabase(app);

function CreateForumDestiny2Post() {
  // State to manage form inputs
  const [title, setTitle] = useState("");
  const [dsc, setDsc] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save inputs to Firebase
    const forumFormDestiny2DB = ref(database, "forumFormDestiny2");
    const newforumFormDestiny2 = push(forumFormDestiny2DB);
    set(newforumFormDestiny2, {
      title,
      dsc,
    })
      .then(() => {
        alert("Post enviado");
        // Redirect or update UI after successful submission
        navigate("/forumdestiny2");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Error sending post");
      });
  };

  return (
    <>
      <div className="container-fluid">
        <form
          className="post"
          action=""
          id="forumFormDestiny2"
          onSubmit={handleSubmit}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="title">Titulo do Post:</label>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <button id="submit" type="submit" className="btn btn-primary">
                  Confirmar
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="titulo"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  aria-label="Title"
                  required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="dsc">Descricao:</label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea
                  name="dsc"
                  id="dsc"
                  cols={150}
                  rows={20}
                  value={dsc}
                  onChange={(e) => setDsc(e.target.value)}
                  placeholder="Enter description"
                  aria-label="Description"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateForumDestiny2Post;

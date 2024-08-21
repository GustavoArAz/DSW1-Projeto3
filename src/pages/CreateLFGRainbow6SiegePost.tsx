import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import { getDatabase, ref, push, set } from "firebase/database";

const database = getDatabase(app);

function CreateLFGRainbow6SiegePost() {
  // State to manage form inputs
  const [title, setTitle] = useState("");
  const [nplayers, setNplayers] = useState("");
  const [dsc, setDsc] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save inputs to Firebase
    const lfgFormRainbow6SiegeDB = ref(database, "lfgFormRainbow6Siege");
    const newLfgFormRainbow6Siege = push(lfgFormRainbow6SiegeDB);
    set(newLfgFormRainbow6Siege, {
      title,
      nplayers,
      dsc,
    })
      .then(() => {
        alert("Post enviado");
        // Redirect or update UI after successful submission
        navigate("/lfgrainbow6siege");
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
          id="lfgFormRainbow6Siege"
          onSubmit={handleSubmit}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="title">Titulo do Post:</label>
              </div>
              <div className="col-sm-6 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Postar
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
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="nplayers">Numero de Jogadores:</label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="players"
                  id="nplayers"
                  name="nplayers"
                  value={nplayers}
                  onChange={(e) => setNplayers(e.target.value)}
                  placeholder="Enter number of players"
                  aria-label="Number of Players"
                  required
                />
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
                  cols={70}
                  rows={10}
                  value={dsc}
                  onChange={(e) => setDsc(e.target.value)}
                  placeholder="Enter description"
                  aria-label="Description"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateLFGRainbow6SiegePost;

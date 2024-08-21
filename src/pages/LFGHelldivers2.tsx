import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import {
  getDatabase,
  ref,
  onValue,
  query,
  limitToLast,
  update,
  remove,
} from "firebase/database";

const database = getDatabase(app);

interface Post {
  title: string;
  nplayers: string;
  dsc: string;
}

function LFGHelldivers2() {
  const [posts, setPosts] = useState<Record<string, Post>>({});
  const [editingPost, setEditingPost] = useState<{
    key: string;
    post: Post;
  } | null>(null);
  const [updatedPost, setUpdatedPost] = useState<Post | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reference to the 'lfgFormHelldivers2' node in the database
    const lfgFormHelldivers2Ref = ref(database, "lfgFormHelldivers2");
    const recentPostsQuery = query(lfgFormHelldivers2Ref, limitToLast(8));

    const unsubscribe = onValue(recentPostsQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPosts(data);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handlePostClick = () => {
    navigate("/createlfghelldivers2post");
  };

  const handleEdit = (key: string, item: Post) => {
    setEditingPost({ key, post: item });
    setUpdatedPost(item);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updatedPost) {
      setUpdatedPost({
        ...updatedPost,
        [e.target.name]: e.target.value,
      });
    }
  };

  const saveEdit = () => {
    if (updatedPost && editingPost) {
      const updates: { [key: string]: Post } = {};
      updates[`lfgFormHelldivers2/${editingPost.key}`] = updatedPost;

      update(ref(database), updates)
        .then(() => {
          alert("Data updated successfully");
          setEditingPost(null);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }
  };

  const handleDelete = (key: string) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      remove(ref(database, `lfgFormHelldivers2/${key}`))
        .then(() => {
          alert("Data deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
        });
    }
  };

  return (
    <>
      <div className="container-fluid initial">
        <div className="row">
          <div className="col-sm-8">
            <h5>Helldivers 2</h5>
          </div>
          <div className="col-sm-4 d-flex justify-content-end">
            <button
              type="button"
              onClick={handlePostClick}
              className="btn btn-primary"
            >
              Postar
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid initial">
        <table className="table1">
          <tbody>
            {Object.entries(posts).map(([key, item]) => (
              <tr key={key}>
                <th>
                  {editingPost?.key === key ? (
                    <input
                      type="text"
                      name="title"
                      value={updatedPost?.title || ""}
                      onChange={handleChange}
                      placeholder="Enter title"
                      aria-label="Title"
                      style={{ width: "100%", height: "40px" }}
                    />
                  ) : (
                    <a href="Tela LFG.html">{item.title}</a>
                  )}
                </th>
                <th>
                  {editingPost?.key === key ? (
                    <input
                      type="text"
                      name="nplayers"
                      value={updatedPost?.nplayers || ""}
                      onChange={handleChange}
                      placeholder="Enter number of players"
                      aria-label="Number of Players"
                      style={{
                        width: "100%",
                        height: "40px",
                      }}
                    />
                  ) : (
                    item.nplayers
                  )}
                </th>
                <th>
                  {editingPost?.key === key ? (
                    <input
                      type="text"
                      name="dsc"
                      value={updatedPost?.dsc || ""}
                      onChange={handleChange}
                      placeholder="Enter description"
                      aria-label="Description"
                      style={{ width: "100%", height: "40px" }}
                    />
                  ) : (
                    item.dsc
                  )}
                </th>
                <th>
                  {editingPost?.key === key ? (
                    <button style={{ width: "60px" }} onClick={saveEdit}>
                      Save
                    </button>
                  ) : (
                    <button
                      style={{ width: "100%" }}
                      onClick={() => handleEdit(key, item)}
                    >
                      Edit
                    </button>
                  )}
                </th>
                <th>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => handleDelete(key)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default LFGHelldivers2;

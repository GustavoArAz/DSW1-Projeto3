import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const auth = getAuth(app);

function SignIn() {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("User created successfully!");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="container-fluid">
      <form className="auth" onSubmit={handleSubmit}>
        {/*<div className="form-group">
          <label htmlFor="uname">Nome de Usuário:</label>
          <br />
          <input
            type="text"
            id="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>*/}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="psw">Senha:</label>
          <br />
          <input
            type="password"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpsw">Confirmar senha:</label>
          <br />
          <input
            type="password"
            id="cpsw"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button id="submit" type="submit">
            Confirmar
          </button>
        </div>
        <div className="form-group">
          <Link to="/login">Já tenho uma conta</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

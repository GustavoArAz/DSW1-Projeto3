import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Logging in...");
        navigate("/"); // Redirect to the home page after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
  };

  return (
    <div className="container-fluid">
      <form className="auth" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
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
            name="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button id="submit" type="submit">
            Confirmar
          </button>
        </div>
        <div className="form-group">
          <Link to="/signin">Não tenho uma conta</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

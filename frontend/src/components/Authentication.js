import { React, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../services/authAPI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Authentication = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const username = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await authUser(email, password);
       const data = {
      username: username.current.value,
    };

    if (result) {
      const token = result.data.body.token;

      localStorage.setItem("token", token);
      localStorage.setItem("email", data.username);

      navigate("/user");
    } else {
      console.log("Impossible de se connecter");
    }
  };

  const content = (
    <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              ref={username}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );

  return content;
};

export default Authentication;

import { React, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser } from "../services/authAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { findUser } from "../services/authAPI";
import { login, saveToken, selectUser } from "../features/userSlice";



const Authentication = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const username = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await authUser(email, password);

    if (result) {
      const token = result.data.body.token;

      const checkBox = document.querySelector("#remember-me").checked;

      if (checkBox) {
        localStorage.setItem("token", token);
   
      } else {
        dispatch(saveToken({ token }));
      }
    

      navigate("/user");
    } else {
      console.log("Impossible de se connecter");
    }


    
  };

  // const getToken = localStorage.getItem("token");
  // const verifUserLogged = async () => {
  //   if (getToken || user.token) {
  //     const userProfile = await findUser(getToken || user.token);

  //     dispatch(login(userProfile));
  //   }
  // };
  // verifUserLogged();


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

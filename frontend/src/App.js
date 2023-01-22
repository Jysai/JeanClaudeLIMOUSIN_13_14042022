import React, { useEffect}from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Layout from "./components/Layout";

import "./styles/index.css";
import { login } from "./features/userSlice";
import { findUser } from "./services/authAPI";


function App() {
  // const dispatch = useDispatch();

  // const getToken = localStorage.getItem("token");
  
  // useEffect(() =>{
  //   const checkIsLoggin = async() =>{
  //     if(getToken){
  //       const userProfile = await findUser(getToken);
       
  //       dispatch(login(userProfile))
  //     }
  //   }
  //   checkIsLoggin()
  // })

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Layout/>}/>
          <Route index element={<Home />} />
          
          <Route path="/signin" element={<SignIn />} />

          {/* <Route element={<RequireAuth />} > */}
              <Route path="user" element={<User/>} />
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

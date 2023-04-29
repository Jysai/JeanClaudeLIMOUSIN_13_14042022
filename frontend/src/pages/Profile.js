import React from "react";
import Footer from "../components/Footer";
import HeaderUser from "../components/HeaderUser";
import Navbar from "../components/Navbar";
import Transactions from "../components/Transactions";
import { Navigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";


const Profile = () => {
  const user = useSelector(selectUser);


  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        {user.token ? (
          <div>
            <HeaderUser />
            <Transactions />
          </div>
        ) : (
          <Navigate to="/" replace={true} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

import { React, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { edit, selectUser, login } from "../features/userSlice";

import { editUser, findUser } from "../services/authAPI";

const HeaderUser = () => {
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const getToken = localStorage.getItem("token");

  const [isOpen, setOpen] = useState(false);
  const [valFirstName, setValFirstName] = useState("");
  const [valLastName, setValLastName] = useState("");

  const showEdit = () => setOpen(!isOpen);

  const verifUserLogged = async () => {
    if (getToken || user.token) {
      const userProfile = await findUser(getToken || user.token);

      dispatch(login(userProfile));
    }
  };
  verifUserLogged();

  const handleEdit = async (e) => {
    const data = {
      firstName: firstnameInput.current.value,
      lastName: lastnameInput.current.value,
    };

    if (data.firstName === "" || data.lastName === "") {
      const updateProfile = await editUser(
        user.token || getToken,
        data.firstName || user.firstName,
        data.lastName || user.lastName
      );
      dispatch(edit(updateProfile));
      showEdit();
    } else {
      const updateProfile = await editUser(
        user.token || getToken,
        data.firstName,
        data.lastName
      );
      dispatch(edit(updateProfile));
      showEdit();
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Welcome back</h1>
        <div>
          <h1 className={`wrap-edit-lastName-FirstName ${isOpen && "open"}`}>
            {user.firstName} {user.lastName}
          </h1>

          <button
            className={`edit-button ${isOpen && "open"}`}
            onClick={showEdit}
          >
            <p>Edit Name</p>
          </button>
          <div className={`dropdown-body ${isOpen && "open"}`}>
            <div>
              <input
                type="text"
                id="firstname"
                ref={firstnameInput}
                className="input-firstname"
                placeholder={user.firstName}
                value={valFirstName}
                onChange={(e) => {
                  setValFirstName(e.target.value.trim());
                }}
              ></input>
              <input
                type="text"
                id="lastname"
                ref={lastnameInput}
                className="input-lastname"
                placeholder={user.lastName}
                value={valLastName}
                onChange={(e) => {
                  setValLastName(e.target.value.trim());
                }}
              ></input>
            </div>
            <div>
              <button
                className={`btn-save ${isOpen && "open"}`}
                onClick={handleEdit}
              >
                Save
              </button>
              <button
                className={`btn-cancel ${isOpen && "open"}`}
                onClick={showEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <p className="message-error"></p>
      </div>
    </div>
  );
};

export default HeaderUser;

import { React, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { edit, selectUser } from "../features/userSlice";

import { editUser } from "../services/authAPI";

const HeaderUser = () => {
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [isOpen, setOpen] = useState(false);

  const showEdit = () => setOpen(!isOpen);

  const handleEdit = async (e) => {
    const getToken = localStorage.getItem("token");

    const data = {
      firstName: firstnameInput.current.value,
      lastName: lastnameInput.current.value,
    };

    const updateProfile = await editUser(
      getToken,
      data.firstName,
      data.lastName
    );

    dispatch(edit(updateProfile));
    showEdit();
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
              ></input>
              <input
                type="text"
                id="lastname"
                ref={lastnameInput}
                className="input-lastname"
                placeholder={user.lastName}
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
      </div>
    </div>
  );
};

export default HeaderUser;

import { React, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { edit, selectUser} from "../features/userSlice";

import { editUser } from "../services/authAPI";

const HeaderUser = () => {
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const [isOpen, setOpen] = useState(false);
  const [valFirstName, setValFirstName] = useState("");
  const [valLastName, setValLastName] = useState("");

  const showEdit = () => setOpen(!isOpen);

  const handleEdit = async (e) => {
    const data = {
      firstName: firstnameInput.current.value,
      lastName: lastnameInput.current.value,
    };
    
    if (data.firstName === "" || data.lastName === "") { // Edit l'un des deux input rempli mais si les input sont vides gardes les data stockés dans le store
      const updateProfile = await editUser(
        user.token ,
        data.firstName || user.firstName,
        data.lastName || user.lastName
      );
      dispatch(edit(updateProfile));
      showEdit();
    } else { // Permet d'éditer quand les deux inputs sont remplis
      const updateProfile = await editUser(
        user.token ,
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

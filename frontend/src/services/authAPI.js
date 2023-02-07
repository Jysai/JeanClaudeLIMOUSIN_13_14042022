import axios from "axios";

export const authUser = async (email, password) => {
  try {
    return await axios.post("http://localhost:3001/api/v1/user/login", {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findUser = async (token) => {
  try {
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: "http://localhost:3001/api/v1/user/profile",
    });
    return {  
      firstName: res.data.body.firstName,
      lastName: res.data.body.lastName,
      email: res.data.body.email,
      id: res.data.body.id,
      
    };
  } catch (err) {
    console.log(err);
  }
};

export const editUser = async (token, firstName, lastName) => {
  try {
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        firstName: firstName,
        lastName: lastName,
    },
      method: "put",
      url: "http://localhost:3001/api/v1/user/profile",
    });
    return {  
      firstName: res.data.body.firstName,
      lastName: res.data.body.lastName,
    };
  } catch (err) {
    console.log(err);
  }
};


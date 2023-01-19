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
      withCredentials: false,
    });
    return {
      firstName: res.data.body.firstName,
      lastName: res.data.body.lastName,
      email: res.data.body.email,
      token: token,
    };
  } catch (err) {
    console.log(err);
  }
};

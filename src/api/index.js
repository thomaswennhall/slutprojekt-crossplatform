import axios from "axios";
const PORT = 4200;
const API = axios.create({ baseURL: `http://10.0.2.2:${PORT}/api/v1/` });

export async function signIn(username, password) {
  try {
    const response = await API.post("/auth", {
      username: username,
      password: password,
    });
    return response.data.token;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const getUserProfile = async (token) => {
  try {
    const response = await API.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

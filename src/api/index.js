import axios from "axios";
const PORT = 4200;
const API = axios.create({ baseURL: `http://localhost:${PORT}/api/v1/` });
export async function signIn(username, password) {
   try {
      const response = await API.post("/auth", {
         username: username,
         password: password,
      });
      return response.data.token;
   } catch (err) {
      console.log(err);
   }
}

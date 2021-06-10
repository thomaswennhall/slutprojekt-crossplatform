import axios from "axios";
const PORT = 4200;
// const API = axios.create({ baseURL: `http://10.0.2.2:${PORT}/api/v1/` });
const API = axios.create({ baseURL: `http://localhost:${PORT}/api/v1/` });

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
export const newTask = async (token, taskTitle, taskContent) => {
   console.log(token);
   try {
      const res = await API.post(
         "/tasks",
         {
            title: taskTitle,
            info: taskContent,
            clientId: "60c1d7e36af45a7417371c19",
         },
         {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return res;
   } catch (err) {
      throw new Error(err.message);
   }
};

// export const newTask = async (token) => {
//    try {
//       const res = await API.get("/tasks", {
//          headers: {
//             Authorization: `Bearer ${token}`,
//          },
//       });
//       console.log(res);
//    } catch (err) {
//       throw new Error(err.message);
//    }
// };
// export const newTask = (token, taskTitle, taskContent) => {
//    console.log(token, taskTitle, taskContent);
// };

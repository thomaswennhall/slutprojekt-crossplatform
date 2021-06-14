import axios from "axios";
const PORT = 4200;
// const API = axios.create({ baseURL: `http://10.0.2.2:${PORT}/api/v1/` });
const API = axios.create({ baseURL: `http://localhost:${PORT}/api/v1/` });
import img from "../../assets/img/red-cicrle.png";
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
export const newTask = async (token, taskTitle, taskContent, clientId) => {
   try {
      const res = await API.post(
         "/tasks",
         {
            title: taskTitle,
            info: taskContent,
            clientId,
         },
         {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return res.data.data;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const getClients = async (token) => {
   try {
      const res = await API.get("/users?role=client", {
         headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.data;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const editTask = async (token, taskId, taskTitle, taskContent, taskStatus) => {
   try {
      const res = await API.patch(
         `/tasks/${taskId}`,
         {
            title: taskTitle,
            info: taskContent,
            completed: taskStatus,
         },
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
      return res.data;
   } catch (err) {
      throw new Error(err.message);
   }
};

export const uploadImage = async (token, taskId, data) => {
   console.log(data);
   try {
      await API.post(`/tasks/${taskId}/image`, data, {
         headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
         },
      });
   } catch (err) {
      console.log(err);
   }
};

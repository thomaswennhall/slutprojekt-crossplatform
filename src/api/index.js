import axios from "axios";
const PORT = 4200;
// const API = axios.create({ baseURL: `http://10.0.2.2:${PORT}/api/v1/` });
const API = axios.create({ baseURL: `http://192.168.50.29:${PORT}/api/v1/` });
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
      return null;
   }
};

export const editUserProfile = async (token, username, password, firstName, lastName) => {
   try {
      const res = await API.patch(
         "/me",
         {
            username: username,
         },
         {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         }
      );
   } catch (err) {
      throw new Error(err.message);
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
   try {
      const res = await API.post(`/tasks/${taskId}/image`, data, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });
      return res.data;
   } catch (err) {
      console.log(err.message);
   }
};

export const getMessages = async (token, taskId) => {
   try {
      const { data } = await API.get(`/tasks/${taskId}/messages`, {
         headers: { Authorization: `Bearer ${token}` },
      });
      return data;
   } catch (err) {
      console.log(err, "error");
   }
};

export const deleteMessage = async (token, taskId, messageId) => {
   try {
      await API.delete(`/tasks/${taskId}/messages/${messageId}`, {
         headers: { Authorization: `Bearer ${token}` },
      });
   } catch (err) {
      console.log(err.message);
   }
};

export const newMessage = async (token, taskId, title, content) => {
   try {
      await API.post(
         `/tasks/${taskId}/messages`,
         { title: title, content: content },
         { headers: { Authorization: `Bearer ${token}` } }
      );
   } catch (err) {
      console.log(err.message);
   }
};

import axios from "axios";
const BASE_URL = `http://localhost:8000/api/users`;
export default {
  async login(context, payload) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${BASE_URL}/login`, payload, config);
    localStorage.setItem("user", JSON.stringify(data));
    context.commit("setUser", data);
  },

  async register(context, payload) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${BASE_URL}/register`, payload, config);
    localStorage.setItem("user", JSON.stringify(data));
    context.commit("setUser", data);
  },
  
  async tryLogin(context) {
    const user = localStorage.getItem("user");
    console.log("Auto-1",user);
    if (user) {
      context.commit("setUser", JSON.parse(user));
    }
  },

  async logout(context) {
    localStorage.removeItem("user");
    context.commit("setUser", null);
  },
};

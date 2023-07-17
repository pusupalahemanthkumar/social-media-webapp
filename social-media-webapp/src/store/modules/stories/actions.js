import axios from "axios";

const BASE_URL = `http://localhost:8000/api/stories`;
export default {
  async loadStories(context) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/`);
    context.commit('setStories',data);
  },
};

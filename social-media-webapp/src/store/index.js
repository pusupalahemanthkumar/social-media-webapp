// Importing required files and packages here
import { createStore } from "vuex";

import authModule from "./modules/auth/index.js";
import storiesModule from "./modules/stories/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    story: storiesModule,
  },
});

export default store;

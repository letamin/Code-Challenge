import Vue from "vue";
import Vuex from "vuex";

//User
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
});

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    request: true,
    characters: [],
  },
  mutations: {
    setCharacters(state, content) {
      state.request = false;
      content.forEach((char) => {
        char.like = 234;
        char.set_like = false;
      });
      state.characters = content;
    },
    deleteCharacter(state, content) {
      state.characters = state.characters.filter(
        (char) => char.char_id !== content
      );
    },
    setLike(state, content) {
      state.characters.forEach((char) => {
        if (char.char_id === content) {
          char.like += 1;
          char.set_like = true;
        }
      });
    },
    unSetLike(state, content) {
      state.characters.forEach((char) => {
        if (char.char_id === content) {
          if (char.like > 0) {
            char.like -= 1;
            char.set_like = false;
          }
        }
      });
    },
  },
  getters: {
    getCharacters: (state) => {
      return state;
    },
  },
  actions: {
    setCharacters(context, content) {
      context.commit("setCharacters", content);
    },
    setLike(context, content) {
      context.commit("setLike", content);
    },
    unSetLike(context, content) {
      context.commit("unSetLike", content);
    },
    deleteCharacter(context, content) {
      context.commit("deleteCharacter", content);
    },
  },
  modules: {},
});

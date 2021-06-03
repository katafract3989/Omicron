<template>
  <div>
    <div class="list-characters">
      <b-list-group-item
        v-for="(character, i) in characters"
        :key="i"
        class="d-flex align-items-center m-1 character"
        :id="`tooltip-target-${i}`"
      >
        <router-link tag="a" class="button" :to="`detail/${character.char_id}`">
          <b-avatar variant="info" :src="character.img" class="mr-3"></b-avatar>
          <span class="mr-auto">{{ character.name }}</span>
          <b-tooltip :target="`tooltip-target-${i}`" triggers="hover">
            Появился в : {{ character.category }}
          </b-tooltip>
        </router-link>
      </b-list-group-item>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { PopoverPlugin, AvatarPlugin } from "bootstrap-vue";
Vue.use(PopoverPlugin);
Vue.use(AvatarPlugin);
export default {
  data() {
    return {
      characters: [],
      search: "",
    };
  },
  watch: {
    search() {
      this.searchHandler();
    },
  },
  mounted() {
    if (this.$store.getters.getCharacters.request) {
      this.$axios
        .get(`https://breakingbadapi.com/api/characters`)
        .then((response) => {
          this.$store.dispatch("setCharacters", response.data);
          this.characters = this.$store.getters.getCharacters.characters;
        });
    } else {
      this.characters = this.$store.getters.getCharacters.characters;
    }
  },
};
</script>
<style scoped lang="scss">
.list-characters {
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
}

.character {
  cursor: pointer;
  background: rgba(10, 10, 10, 0.288);
  border-left: 5px solid rgb(0, 183, 255);
  width: 300px;
}
.character:hover {
  border-left: 5px solid rgb(255, 136, 0);
}
a {
  color: rgb(255, 255, 255);
  font-size: 16px;
  text-decoration: none;
}
</style>

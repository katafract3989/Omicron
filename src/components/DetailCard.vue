<template>
  <div class="about">
    <router-link to="/">Назад</router-link>
    <div>
      <h2>{{ character.name }}</h2>
      <img
        :src="character.img"
        width="300px"
        alt=""
        style="border-radius: 8px"
      />
      <div class="about__action">
        <span>Нравится {{ character.like }} чел.</span>
        <img
          v-if="character.set_like"
          src="../assets/svg/like.svg"
          width="30"
          class="m-2"
          alt="like"
          @click="unSetLike"
        />
        <img
          v-else
          src="../assets/svg/unlike.svg"
          width="30"
          class="m-2"
          alt="like"
          @click="setLike"
        />
        <img
          src="../assets/svg/trash.svg"
          width="30"
          class="m-2"
          v-b-modal="`delete-modal`"
          alt="trash"
        />
      </div>
    </div>
    <div class="about__info">
      <span>Был в: </span><b>{{ character.category }}</b>
      <span>День рождения: </span
      ><b>{{
        character.birthday === "Unknown" ? "Неизвестно" : character.birthday
      }}</b>
      <span>Актёр: </span> <b>{{ character.portrayed }}</b>
      <span>Состояние к концу 5 сезона: </span>
      <b>{{
        character.status === "Unknown" ? "Неизвестно" : character.status
      }}</b>
    </div>
    <DeleteModal :id="character.char_id" @delete-card="deleteCard" />
  </div>
</template>
<script>
export default {
  components: {
    DeleteModal: () => import("@/components/Modals/DeleteModal.vue"),
  },
  data() {
    return {
      character: {},
    };
  },
  mounted() {
    this.character = this.$store.getters.getCharacters.characters.find(
      (elem) => elem.char_id === Number(this.$route.params.id)
    );
    if (this.character === undefined) this.$router.push("/");
  },
  methods: {
    deleteCard() {
      this.$store.dispatch("deleteCharacter", this.character.char_id);
      this.$router.push("/");
    },
    setLike() {
      this.$store.dispatch("setLike", this.character.char_id);
    },
    unSetLike() {
      this.$store.dispatch("unSetLike", this.character.char_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background: rgba(255, 255, 255, 0.918);
  padding: 30px;
  border-radius: 8px;

  img {
    object-fit: cover;
    max-height: 400px;
  }

  &__info {
    width: 300px;
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
      font-size: 16px;
      margin-top: 10px;
    }
  }

  &__action {
    width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;

    img {
      cursor: pointer;
    }
  }
}
a {
  color: #000;
  opacity: 0.5;
  text-decoration: none;
}
</style>

<template>
  <b-modal :id="`delete-modal`" hide-footer title="Подтверждение удаления">
    <div class="d-block text-center">
      <h5>Вы уверены что хотите удалить карточку персонажа?</h5>
    </div>
    <b-button class="mt-3" variant="outline-danger" block @click="deleteCard"
      >Удалить</b-button
    >
  </b-modal>
</template>
<script>
export default {
  methods: {
    deleteCard() {
      this.$emit("delete-card");
      this.$bvModal.hide(`delete-modal`);
    },
  },
};
</script>

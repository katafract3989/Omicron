<template>
  <div class="home">
    <h1>Все персонажи Breaking Bad</h1>
    <Characters />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Characters: () => import('@/components/Characters.vue'),
  },
};
</script>

<template>
  <div class="home">
    <DetailCard />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    DetailCard: () => import('@/components/DetailCard.vue'),
  },
};
</script>

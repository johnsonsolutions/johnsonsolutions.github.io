<script>
import ProjCard from './ProjCard.vue';

export default {
  components: {
    ProjCard
  }
}
</script>
<template>
  <div class="proj-area">
    <ProjCard />
    <ProjCard />
    <ProjCard />
  </div>
</template>

<style scoped>
.proj-area {
    /* background-color: #1d1d1dff; */

    border: solid white 1px;
    /* border-radius: 15px; */
    padding: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
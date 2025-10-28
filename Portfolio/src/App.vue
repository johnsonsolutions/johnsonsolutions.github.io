<script setup>
  import Background from './components/Background.vue'
  import ProjArea from './components/ProjArea.vue';
  import Category from './components/Category.vue';
</script>

<template>
  <div class="name-tag">
      Tevin Johnson
    <Category />
  </div>

  <div id="app">
    <input id="search" type="text" placeholder="Search..."/>
    <br />
    <ProjArea />
    <Background />
  </div>
</template>

<style scoped>

  input{
    backdrop-filter: blur(5px);
    border: white solid 1px !important;
    background-color: transparent;
  }
  input:focus{
    outline: none;
    border: white solid 1px;
    background-color: #000000a4;
  }

  .name-tag {
    position: fixed;
    top: 20px;
    right: 20px;
    margin: 0;
    z-index: 1000;
    font-weight: light;
    font-size: 2.5rem;
    font-family: var(--font-header);

    /* Tech-themed container */
    border: var(--border-style);
    padding: 15px 20px;
    box-shadow: var(--glow-effect);
    text-shadow: var(--text-glow);
    transition: all 0.3s ease;

    backdrop-filter: blur(5px);
  }

  /* .name-tag div {
    margin: 5px;
    padding: 10px;
    border: solid white 1px;
    backdrop-filter: blur(10px);
  } */

  /* .name-tag *:hover {
    box-shadow: var(--glow-effect-strong);
    text-shadow: var(--text-glow-strong);
  } */

  #search {
    width: 80%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
  }
</style>

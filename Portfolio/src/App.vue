<script setup>
  import { ref, watch } from 'vue';
  import Background from './components/Background.vue'
  import ProjArea from './components/ProjArea.vue';
  import Category from './components/Category.vue';

  const searchText = ref('');
  const debouncedSearchText = ref('');
  const selectedDomain = ref(null);
  let debounceTimeout = null;

  // Debounce search input (300ms delay)
  watch(searchText, (newValue) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(() => {
      debouncedSearchText.value = newValue;
    }, 300);
  });

  function handleDomainSelect(domain) {
    selectedDomain.value = selectedDomain.value === domain ? null : domain;
  }
</script>

<template>
  <div class="name-tag">
      Tevin Johnson
    <Category
      :searchText="debouncedSearchText"
      :selectedDomain="selectedDomain"
      @domainSelect="handleDomainSelect"
    />
  </div>

  <div id="app">
    <input
      id="search"
      type="text"
      placeholder="Search..."
      v-model="searchText"
    />
    <br />
    <ProjArea
      :searchText="debouncedSearchText"
      :selectedDomain="selectedDomain"
    />
    <Background />
  </div>
</template>

<style scoped>

  input{
    backdrop-filter: blur(5px);
    border: 1px solid var(--color-border) !important;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: var(--glow-effect);
    transition: all 0.3s ease;
  }
  input:focus{
    outline: none;
    border: 1px solid var(--color-accent);
    background-color: #000000a4;
    box-shadow: var(--glow-effect-strong);
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

  /* Mobile responsive styling */
  @media (max-width: 768px) {
    .name-tag {
      position: static;
      top: auto;
      right: auto;
      margin: 20px auto;
      text-align: right;
      font-size: 1.8rem;
      max-width: 90%;
    }
  }
</style>

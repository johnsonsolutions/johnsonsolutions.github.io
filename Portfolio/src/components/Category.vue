<script setup>
import { ref } from 'vue';

const cats = ["Tone", "Twoo", "Tthee"];
const isExpanded = ref(false);

function toggleMenu() {
    isExpanded.value = !isExpanded.value;
}
</script>

<template>
    <div class="category-menu">
        <button @click="toggleMenu" class="menu-toggle">
            <h2><span class="arrow" :class="{ expanded: isExpanded }">◂</span>Domains</h2>
        </button>
        <ul v-show="isExpanded">
            <li v-for="cat in cats" :key="cat">{{ cat }}</li>
        </ul>
    </div>
</template>

<style scoped>
    .category-menu {
        margin: 0;
        padding: 0;
        text-align: right;
        backdrop-filter: blur(5px);
    }

    .menu-toggle {
        background: none;
        border: none;
        /* border-bottom: 2px solid var(--color-accent-glow); */
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        margin: 0;
        margin-bottom: -14px;
        margin-top: -14px;
        padding: 5px 0;
        text-decoration: none;
        transition: all 0.3s ease;
        width: 100%;
        text-align: right;
    }

    .menu-toggle:hover {
        color: var(--color-accent);
        text-shadow: var(--text-glow-strong);
    }

    .arrow {
        display: inline-block;
        transition: transform 0.3s ease;
    }

    .arrow.expanded {
        transform: rotate(-90deg);
    }

    ul {
        list-style: none;
        padding: 10px;
        margin: -2px 0 0 0;
        font-size: 1rem;
        text-align: right;
        /* background-color: var(--color-primary-transparent); */
        border: var(--border-style-light);
        border-radius: 5px;
    }

    ul li {
        cursor: pointer;
        padding: 5px 0;
        transition: all 0.3s ease;
        font-size: 1.5rem;
    }

    ul li:hover {
        color: var(--color-accent);
        text-shadow: var(--text-glow);
    }

    .cTag {
        display: inline-block;
        background-color: var(--color-primary);
        border: none;
        border-radius: 5px;
        padding: 10px;
        margin: 5px;

        font-weight: bold;
        color: white;
        height: 40px;
    }
</style>
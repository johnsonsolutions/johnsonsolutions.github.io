<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
    searchText: {
        type: String,
        default: ''
    },
    selectedDomain: {
        type: String,
        default: null
    }
});

const emit = defineEmits(['domainSelect']);

const isExpanded = ref(false);
const allCards = ref([]);

// Load project data
onMounted(async () => {
    try {
        const response = await fetch('/src/data/projData.json');
        const data = await response.json();
        allCards.value = data.projects;
    } catch (error) {
        console.error('Error loading project data:', error);
    }
});

// Compute visible domains based on search (but not selectedDomain)
const visibleDomains = computed(() => {
    let filtered = allCards.value;

    // Filter by search text only (check both keywords and skills)
    if (props.searchText && props.searchText.trim() !== '') {
        const searchLower = props.searchText.toLowerCase();
        filtered = filtered.filter(card => {
            const matchesKeyword = card.Keywords.some(keyword =>
                keyword.toLowerCase().includes(searchLower)
            );
            const matchesSkill = card.skills && card.skills.some(skill =>
                skill.toLowerCase().includes(searchLower)
            );
            return matchesKeyword || matchesSkill;
        });
    }

    // Extract unique domains from filtered cards
    const domains = new Set();
    filtered.forEach(card => {
        card.Keywords.forEach(keyword => {
            domains.add(keyword);
        });
    });

    // Always include "All" as the first item
    return ['All', ...Array.from(domains)];
});

function toggleMenu() {
    isExpanded.value = !isExpanded.value;
}

function selectDomain(domain) {
    if (domain === 'All') {
        emit('domainSelect', null);
    } else {
        emit('domainSelect', domain);
    }
}
</script>

<template>
    <div class="category-menu">
        <button @click="toggleMenu" class="menu-toggle">
            <h2><span class="arrow" :class="{ expanded: isExpanded }">◂</span>Project Domains</h2>
        </button>
        <ul v-show="isExpanded">
            <li
                v-for="cat in visibleDomains"
                :key="cat"
                :class="{ active: cat === 'All' ? selectedDomain === null : selectedDomain === cat }"
                @click="selectDomain(cat)"
            >
                {{ cat }}
            </li>
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
        background-color: rgba(0, 0, 0, 0.6);
        border: var(--border-style-light);
        border-radius: 5px;
        box-shadow: var(--glow-effect);
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

    ul li.active {
        color: var(--color-accent);
        text-shadow: var(--text-glow-strong);
        font-weight: bold;
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
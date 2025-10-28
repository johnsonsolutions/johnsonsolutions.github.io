<script>
import ProjCard from './ProjCard.vue';

export default {
  components: {
    ProjCard
  },
  props: {
    searchText: {
      type: String,
      default: ''
    },
    selectedDomain: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      cards: [],
      expandedCardIndex: null
    }
  },
  computed: {
    filteredCards() {
      let filtered = this.cards;

      // Filter by search text
      if (this.searchText && this.searchText.trim() !== '') {
        const searchLower = this.searchText.toLowerCase();
        filtered = filtered.filter(card => {
          // Check if search matches any keyword
          const matchesKeyword = card.Keywords.some(keyword =>
            keyword.toLowerCase().includes(searchLower)
          );

          // Check if search matches any skill
          const matchesSkill = card.skills && card.skills.some(skill =>
            skill.toLowerCase().includes(searchLower)
          );

          return matchesKeyword || matchesSkill;
        });
      }

      // Filter by selected domain
      if (this.selectedDomain) {
        filtered = filtered.filter(card => {
          return card.Keywords.includes(this.selectedDomain);
        });
      }

      return filtered;
    },
    isMobile() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    handleCardClick(index, event) {
      event.stopPropagation();

      // Block expansion on mobile devices
      if (this.isMobile) {
        return;
      }

      if (this.expandedCardIndex === index) {
        this.expandedCardIndex = null;
      } else {
        this.expandedCardIndex = index;
      }
    },
    handleDocumentClick(event) {
      // Check if click is outside all cards
      if (!event.target.closest('.proj-card')) {
        this.expandedCardIndex = null;
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('/projData.json');
      const data = await response.json();
      this.cards = data.projects;
    } catch (error) {
      console.error('Error loading project data:', error);
    }

    // Add global click listener
    document.addEventListener('click', this.handleDocumentClick);
  },
  beforeUnmount() {
    // Clean up global click listener
    document.removeEventListener('click', this.handleDocumentClick);
  }
}
</script>
<template>
  <div class="proj-area">
    <ProjCard
      v-for="(card, index) in filteredCards"
      :key="card.title"
      :cardObj="card"
      :isExpanded="expandedCardIndex === index"
      @click="handleCardClick(index, $event)"
    />
  </div>
</template>

<style scoped>
    .proj-area {
        border: var(--border-style);
        box-shadow: var(--glow-effect);
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        background-color: rgba(0, 0, 0, 0.3);
    }
</style>
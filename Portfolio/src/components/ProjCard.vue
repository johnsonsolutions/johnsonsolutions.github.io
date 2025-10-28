<script>

    export default {
        props: {
            cardObj: {
                type: Object,
                required: true
            },
            isExpanded: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            mobileSrcUrl() {
                return new URL(`../assets/images/${this.cardObj.mobileSrc.split('/').pop()}`, import.meta.url).href;
            },
            deskSrcUrl() {
                return new URL(`../assets/images/${this.cardObj.deskSrc.split('/').pop()}`, import.meta.url).href;
            }
        }
    }

</script>

<template>
    <div
        class="proj-card"
        :class="{ expanded: isExpanded }"
        :style="{
            backgroundImage: `url('${isExpanded ? deskSrcUrl : mobileSrcUrl}')`
        }"
    >
        <div class="card-face">
            <h2 class="card-title">{{ cardObj.title }}</h2>
        </div>
        <transition name="fade">
            <div v-show="isExpanded" class="card-content">
                <p class="card-description">
                    {{ cardObj.description }}
                </p>
            </div>
        </transition>
        <div class="card-link">
            <a :href="cardObj.link" target="_blank" @click.stop>View Project ▸</a>
        </div>
    </div>
</template>

<style>
    .proj-card {
        cursor: pointer;
        background-color: var(--color-primary);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 200px;
        height: 300px;
        color: white;
        border: var(--border-style);
        box-shadow: var(--glow-effect);
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        position: relative;
    }

    .proj-card:hover {
        box-shadow: var(--glow-effect-strong);
        border-color: var(--color-accent);
    }

    @media (max-width: 768px) {
        .proj-card {
            cursor: default;
        }
    }

    .proj-card.expanded {
        width: 533px;
        box-shadow: var(--glow-effect-strong);
        border-color: var(--color-accent);
    }

    .card-face {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        padding: 15px;
        background: linear-gradient(rgba(0, 0, 0, 0.8), transparent);
        z-index: 2;
    }

    .card-title {
        text-align: right;
        margin: 0;
    }

    .card-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 178px;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 15px;
        padding-top: 60px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        z-index: 1;
    }

    .card-description {
        margin: 0;
        flex-grow: 1;
        overflow-y: auto;
        line-height: 1.6;
        font-size: 0.9rem;
        text-align: left;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 300;
        letter-spacing: 0.3px;
    }

    .card-description::-webkit-scrollbar {
        width: 4px;
    }

    .card-description::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
    }

    .card-description::-webkit-scrollbar-thumb {
        background: var(--color-accent-glow);
        border-radius: 2px;
    }

    .card-description::-webkit-scrollbar-thumb:hover {
        background: var(--color-accent-strong-glow);
    }

    .card-link {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 3;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.85) 50%, transparent 100%);
        padding: 15px;
        padding-top: 30px;
        text-align: right;
    }

    .card-link a {
        color: var(--color-accent);
        text-decoration: none;
        transition: all 0.3s ease;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: normal;
        letter-spacing: 0.5px;
        text-shadow: var(--text-glow);
    }

    .card-link a:hover {
        text-decoration: none;
        text-shadow: var(--text-glow-strong);
        color: #fff;
    }

    .fade-enter-active {
        transition: opacity 0.2s;
        transition-delay: 0.3s;
    }

    .fade-leave-active {
        transition: opacity 0.2s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>
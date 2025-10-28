<script setup>
    import bgVideo from '../assets/video/3129576-uhd_3840_2160_30fps.mp4'
</script>

<template>
    <video id="bgVid" class="bgVid" autoplay loop muted playsinline>
      <source :src="bgVideo" type="video/mp4">
    </video>
</template>

<style>
    .bgVid{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -700;
    }
</style>
<template>
    <div class="mini-loading">
        <img width="40px" src="../assets/mini-loading.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "over-loading"
    }
</script>

<style scoped>
    .mini-loading{
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--hover-dark);
        backdrop-filter: blur(1px);
        z-index: 10;
        border-radius: var(--border-radius);
    }
</style>
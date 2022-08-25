<template>
    <img class="imagem-responsiva" :src="url" :alt="ttulo">
</template>


<script>
    export default{
        props: [ 'url','titulo']
    }
</script>



<style scoped>
    .imagem-responsiva{
        width: 100%
    }
</style>
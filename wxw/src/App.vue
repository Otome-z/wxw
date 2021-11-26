<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    height: 100%;
    margin: 0;
    padding: 0;
    /* font-family: 'Hiragino Sans GB' !important; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
$--color-primary: red;
</style>

<template>
  <router-view/>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100vw;
  scrollbar-width:none;
}

#app::-webkit-scrollbar {
  display: none;
}

html {
  background: linear-gradient(154.69deg, rgba(241, 65, 74, 0.2) 20.76%, rgba(125, 88, 137, 0.2) 40.85%, rgba(6, 160, 129, 0.2) 58.89%, rgba(220, 223, 229, 0) 100%) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  width: 100vw;
  scrollbar-width:none;
}

html::-webkit-scrollbar {
  display: none;
}

body{
  margin: 0px;
  height: 100%;
}

@font-face {
    font-family: "oxygen";
    src: url("@/assets/fonts/Oxygen-Regular.ttf");
}

@font-face {
    font-family: "bebas";
    src: url("@/assets/fonts/BebasNeue-Regular.ttf");
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

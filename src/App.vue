<template>
  <div id="app">
    <div id="nav"><router-link to="/">Все персонажи</router-link></div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
h1 {
  color: #fff;
}

#nav {
  padding: 30px;

  a {
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>

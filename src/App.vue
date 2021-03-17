<template>
  <div id="nav">
    <router-link to="/" class="links">Home</router-link> |
    <router-link to="/about" class="links">About</router-link>
  </div>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
body{
  font-size: 1.6rem;
}
.links{
  font-size: 1.6rem;
}
</style>

<template>
  <nav>
    <router-link to="/">Products</router-link> 
      <router-link to="/">Partners</router-link> 
        <router-link to="/">Company</router-link> 
          <router-link to="/">Pricing</router-link> 
            <router-link to="/">Resources</router-link> 
              <router-link to="/">Academy</router-link> 
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>

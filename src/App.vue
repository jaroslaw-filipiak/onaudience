<template>
  <TopBar />
  <Nav />
  <div class="sep"></div>
  <router-view />
</template>

<script>
import Nav from '@/components/Nav/Nav.vue';
import TopBar from '@/components/TopBar/TopBar.vue';

export default {
  name: 'HomeView',
  components: {
    Nav,
    TopBar,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.sep {
  @include max-lg {
    height: 64px;
    border: 1px solid blue;
  }
  @include lg {
    display: none;
    height: 0;
  }
}
</style>

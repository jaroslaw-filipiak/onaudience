<template>
  <div class="top-bar d-none d-lg-flex container-fluid">
    <div class="top-bar--inner container">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
          <p class="me-5 mb-0">
            Watch for free video webinars about audience data & technology
          </p>

          <router-link class="btn-default" to="#">To the webinars</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_rwd.scss';
@import '@/assets/scss/utils/_mixins.scss';

.top-bar {
  background-color: $blue;
  color: #fff;
  padding: 5px 0px;
}
</style>

<template>
  <div class="cta container-fluid bg-yellow">
    <div class="cta--inner container">
      <h3>
        Start matching your audiences with our data to increase the efficiency
        of your campaigns
      </h3>
      <div class="cta-btn-wrapper">
        <router-link class="btn-default btn-default__dark" to="#"
          >Contact us!</router-link
        >
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

.cta {
  padding-top: 84px;
  padding-bottom: 84px;
  text-align: center;

  &--inner {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-btn-wrapper {
    margin-top: 30px;
  }
}
</style>

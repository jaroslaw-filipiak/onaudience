<template>
  <div class="pairings container-fluid bg-gray">
    <div class="pairings-inner container">
      <div
        class="row d-flex flex-row align-items-center justify-content-between flex-nowrap"
      >
        <div class="col col-lg-6 pr-5">
          <h3
            class="section-title section-title__sep-center--mobile text-center tet-lg-start"
          >
            Available user ID pairings
          </h3>
          <p>How does the ID graph process work?</p>
          <p>
            Supply us with the identifiers you’d like to match. OnAudience will
            provide you with a feed of the user IDs pairings of your choice.
          </p>
          <p>Available ID pairings:</p>
          <ul>
            <li>Cookie ID</li>
            <li>MAID</li>
            <li>Public ID</li>
          </ul>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="#" class="btn-default"
              >Schedule a demo</router-link
            >
          </div>
        </div>

        <div class="col pl-5 d-flex justify-content-end d-none d-lg-block">
          <img class="img-fluid" src="@/assets/img/pairing-img.png" alt="" />
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

.pairings {
  padding-top: 86px;
  padding-bottom: 86px;

  ul {
    padding-left: 15px;
    margin-bottom: 55px;
  }
}
</style>

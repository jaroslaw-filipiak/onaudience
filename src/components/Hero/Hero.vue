<template>
  <section class="hero container-fluid">
    <div class="container">
      <div class="row d-flex flex-column flex-md-row">
        <div
          class="hero-col-1 col col-lg-7 d-flex flex-column align-items-start justify-content-center"
        >
          <h1>Cross-device ID Graph</h1>
          <h2>
            Accurate cross-device ID matching using OnAudience extensive
            database of 50B user profiles created in compliance with global
            privacy laws.
          </h2>
          <a class="btn-default" href="#">Schedule a demo</a>
        </div>
        <div
          class="hero-col-2 col d-flex align-items-center justify-content-center"
        >
          <img class="" src="@/assets/img/hero-img.png" alt="" />
        </div>
      </div>
      <div class="row hero--icons pt-5">
        <div class="col d-flex align-items-center justify-content-between">
          <img src="@/assets/img/hero-icon-1.png" alt="" />
          <img src="@/assets/img/hero-icon-2.png" alt="" />
          <img src="@/assets/img/hero-icon-3.png" alt="" />
          <img src="@/assets/img/hero-icon-4.png" alt="" />
          <img src="@/assets/img/hero-icon-5.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_rwd.scss';

.hero {
  padding-top: 26px;
  padding-bottom: 47px;

  h1 {
    position: relative;
    padding-bottom: 23px;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 21px;
      height: 2px;
      background-color: $blue;
      display: block;
    }
  }

  h2 {
    padding-top: 12px;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 50px;
  }

  &-col-1 {
    .btn-default {
      @include mobile {
        margin: 0 auto;
      }
    }
  }

  &-col-2 {
    padding-top: 67px;
  }
}

.hero--icons {
  margin-top: 20px;

  img {
    max-width: 190px;
  }
}
</style>

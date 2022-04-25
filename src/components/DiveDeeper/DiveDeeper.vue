<template>
  <div class="dive-deeper container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="section-title section-title__sep-center text-center">
            Dive deeper into cross-device ID management
          </h3>
        </div>
      </div>

      <div class="row">
        <div class="dd-items">
          <div class="dd-item">
            <div>
              <div class="d-flex align-items-center justify-content-center">
                <img
                  class="img-fluid mx-auto"
                  src="@/assets/img/dd-icon.png"
                  alt=""
                />
              </div>

              <h3 class="dd-title text-align-start">What is ID graph?</h3>
              <p>
                Learn what is 3rd party data and find out what to take into
                account in choosing audience data providers.
              </p>
            </div>

            <div class="d-flex align-items-center justify-content-center">
              <router-link to="#" class="btn-default">Learn more</router-link>
            </div>
          </div>

          <div class="dd-item">
            <div>
              <div class="d-flex align-items-center justify-content-center">
                <img
                  class="img-fluid mx-auto"
                  src="@/assets/img/dd-icon.png"
                  alt=""
                />
              </div>

              <h3 class="dd-title text-align-start">
                How to choose the best device graph vendor?
              </h3>
              <p>Reduce ad waste by avoiding inaccurate targeting</p>
            </div>

            <div class="d-flex align-items-center justify-content-center">
              <router-link to="#" class="btn-default">Learn more</router-link>
            </div>
          </div>
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

.dive-deeper {
  padding-top: 50px;
  padding-bottom: 50px;

  .dd-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    @include lg {
      flex-direction: row;
      align-items: stretch;
    }
  }

  .dd-item {
    padding: 40px 24px;
    @include shadow;
    width: 282px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;

    p {
      margin-bottom: 30px;
    }
  }

  .dd-title {
    font-size: 16px;
    color: $blue;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}
</style>

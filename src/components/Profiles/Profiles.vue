<template>
  <div class="profiles container-fluid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="section-title section-title__sep-center text-center">
            How does OnAudience create customer profiles?
          </h3>
          <h5 class="p text-center">
            OnAudience is one of the world’s largest programmatic data
            providers. How do we collect data and create user profiles?
          </h5>
        </div>
      </div>

      <!-- counters row -->
      <div class="row counters-row">
        <div class="col">
          <p>
            1. Anonymous data from over 7.7 billion devices from over 200
            countries is continuously collected and processed by OnAudience.com.
          </p>
          <div class="counters">
            <div class="counter">
              <div class="counter-value">200</div>
              <div class="counter-title">countries</div>
            </div>

            <div class="counter">
              <div class="counter-value">7.7 B</div>
              <div class="counter-title">devices</div>
            </div>

            <div class="counter">
              <div class="counter-value">4.5 B</div>
              <div class="counter-title">Daily Data Signals</div>
            </div>
          </div>
        </div>
      </div>
      <!-- counters row END -->

      <!-- counters row -->
      <div class="row counters-row">
        <div class="col">
          <p>
            2. Using OnAudience’s advanced probabilistic matching algorithms,
            various digital touchpoints and devices are stitched together to
            create over 50 billion anonymous user profiles from disparate user
            identifiers.
          </p>
          <div class="counters">
            <div class="counter">
              <div class="counter-value">3.4 B</div>
              <div class="counter-title">users</div>
            </div>

            <div class="counter">
              <div class="counter-value">50 B</div>
              <div class="counter-title">user profiles</div>
            </div>
          </div>
        </div>
      </div>
      <!-- counters row END -->
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

.profiles {
  padding-top: 100px;
  padding-bottom: 40px;

  @include lg {
    padding-bottom: 100px;
  }

  .counters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @include sm {
      flex-direction: row;
    }

    @include lg {
      padding-top: 80px;
    }

    &-row {
      max-width: 600px;
      margin: 0 auto;
      margin-top: 30px;

      @include lg {
        margin-top: 115px;
      }
    }

    .counter {
      color: $blue;
      opacity: 0.43;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      @include lg {
        margin-bottom: 0;
      }

      &-value {
        font-size: 53px;
        font-weight: bold;
      }

      &-title {
        font-size: 16px;
      }
    }
  }
}
</style>

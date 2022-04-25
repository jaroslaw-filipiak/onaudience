<template>
  <div class="use-cases container-fluid">
    <div class="container">
      <div class="row">
        <h3 class="section-title section-title__sep-center text-center">
          Cross-Device ID Graph use cases
        </h3>
      </div>

      <!-- number row -->
      <div class="row use-cases-row use-cases-row-1">
        <div class="use-case-row-number">1</div>
        <div class="col col-lg-6 use-cases-row--left">
          <div class="use-case-title">Data Enrichment</div>
          <p>For marketers</p>
          <p>
            Enrich your 1st-party data to gain new valuable business insights
            about your customers. You’ll be able to get a better understanding
            of who your users are, how they interact with your brand and be able
            to reach them more effectively with advertising.
          </p>
          <div style="border: 2px dashed; padding: 10px">
            TODO:ACCORDION COMPONENT
          </div>
        </div>

        <div class="col use-cases-row--right">
          <img src="@/assets/img/data-icon.png" alt="" />
        </div>
      </div>
      <!-- number row END -->

      <!-- number row -->
      <div class="row use-cases-row use-cases-row-2">
        <div class="use-case-row-number">2</div>
        <div class="col col-lg-6 use-cases-row--left">
          <div class="use-case-title">
            Campaign extension & improved ad targeting
          </div>
          <p>For advertisers</p>
          <p>
            Using cross-device ID matching, advertisers can increase the scope
            of their campaigns by targeting the same user on different devices.
            Other benefits include more accurate targeting and reduced ad waste.
          </p>
          <div style="border: 2px dashed; padding: 10px">
            TODO:ACCORDION COMPONENT
          </div>
        </div>

        <div class="col use-cases-row--right">
          <img src="@/assets/img/campaign-icon.png" alt="" />
        </div>
      </div>
      <!-- number row END -->

      <!-- number row -->
      <div class="row use-cases-row use-cases-row-3">
        <div class="use-case-row-number">3</div>
        <div class="col col-lg-6 use-cases-row--left">
          <div class="use-case-title">Social Scope</div>
          <p><strong>For marketers and advertisers</strong></p>
          <p>
            Enable access to your target audience within the walled gardens of
            social media. Provide us with your cookie or user IDs and we’ll pair
            them with their MAIDs that you can use to target your audience on
            social media.
          </p>
          <div style="border: 2px dashed; padding: 10px">
            TODO:ACCORDION COMPONENT
          </div>
        </div>

        <div class="col use-cases-row--right">
          <img src="@/assets/img/marketers-icon.png" alt="" />
        </div>
      </div>
      <!-- number row END -->
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

.use-cases {
  padding-top: 100px;
  padding-bottom: 40px;
  @include lg {
    padding-bottom: 100px;
  }

  &-row {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @include mobile {
      width: calc(100% - 60px);
      position: relative;
      left: 60px;
    }

    @include sm {
      width: calc(100% - 60px);
      position: relative;
      left: 60px;
    }

    @include lg {
      flex-direction: row;
      margin-bottom: 100px;
    }

    &--left {
      @include xl {
        padding-right: 50px;
      }
    }

    &--right {
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      @include lg {
        flex-direction: flex-end;
        display: flex;
      }
    }
  }
}

.use-case-row-number {
  position: absolute;
  left: -60px;
  top: -35px;
  font-size: 91px;
  font-weight: bold;
  color: $light-blue;
}

.use-case-title {
  font-size: 18px;
  color: $blue;
  margin-bottom: 20px;
}
</style>

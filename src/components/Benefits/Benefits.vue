<template>
  <section class="benefits container-fluid">
    <div class="benefits--inner">
      <div class="row bg-gray benefits-row-1">
        <div class="container">
          <div class="row flex flex-column flex-lg-row">
            <div class="col col-lg-4">
              <h3
                class="section-title section-title__sep-center--mobile text-center text-lg-start"
              >
                Benefits of ID Resolution
              </h3>
            </div>
            <div class="col">
              <p>
                The average consumer has over 3 connected devices that they use
                to browse, engage and shop online, often switching across each
                device, this is continually increasing.
              </p>

              <p>
                Reaching, targeting and engaging the same user on multiple
                devices and platforms is possible through cross-device and ID
                graph targeting.
              </p>

              <p>
                A cross-device ID graph can help marketers, advertisers, and
                publishers:
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- icons row -->
      <div
        class="row pt-3 d-flex flex-row align-items-center bg-gray benefits-row-2"
      >
        <div class="container" style="position: relative; top: 115px">
          <div class="row d-flex flex-column flex-lg-row">
            <div class="col col-lg-2">
              <ul class="benefits-filters">
                <li data-filter="all">All</li>
                <li data-filter="1">Advertisers</li>
                <li data-filter="2" class="benefits-item-active">Marketers</li>
                <li data-filter="3">Publishers</li>
              </ul>
            </div>
            <div class="col">
              <div class="benefits-icons filter-container">
                <div
                  class="benefit-icon filtr-item"
                  data-category="1"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-1.png" alt="" />
                  <h3>Deliver more relevant ads across different devices</h3>
                </div>

                <div
                  class="benefit-icon filtr-item"
                  data-category="1"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-2.png" alt="" />
                  <h3>
                    Better understand your customers and how they interact with
                    your brand
                  </h3>
                </div>

                <div
                  class="benefit-icon filtr-item"
                  data-category="2"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-3.png" alt="" />
                  <h3>Increased clarity to your ad targeting</h3>
                </div>

                <div
                  class="benefit-icon filtr-item"
                  data-category="2"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-4.png" alt="" />
                  <h3>Reduce ad waste by targeting users more effectively</h3>
                </div>

                <div
                  class="benefit-icon filtr-item"
                  data-category="3"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-5.png" alt="" />
                  <h3>Move towards cookieless tracking and targeting</h3>
                </div>

                <div
                  class="benefit-icon filtr-item"
                  data-category="3"
                  data-sort="value"
                >
                  <img src="@/assets/img/bi-6.png" alt="" />
                  <h3>
                    Increase advertising reach by targeting additional devices
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- icons row END -->
    </div>
  </section>
</template>

<script>
import Filterizr from 'filterizr';

export default {
  mounted() {
    const options = {
      animationDuration: 0.2,
      filterOutCss: {
        transform: 'scale(0.5)',
      },
      filterInCss: {
        transform: 'scale(1)',
      },
      layout: 'packed',
      gutterPixels: 15, // Items spacing in pixels
    };
    const filterizr = new Filterizr('.filter-container', options);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_rwd.scss';
@import '@/assets/scss/utils/_mixins.scss';

.benefits {
  margin-bottom: 115px;
  margin-top: -115px;

  &-row-1 {
    padding-top: 40px;
    position: relative;
    top: 115px;
    @include lg {
      padding-top: 75px;
    }
  }

  &-icons {
    // display: flex;
    // flex-wrap: wrap;
    // align-items: center;
    // justify-content: center;
    gap: 24px;

    .benefit-icon {
      width: 300px;
      height: 228px;
      background-color: #fff;
      padding: 36px 27px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include shadow;

      h3 {
        color: $blue;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        margin-top: 18px;
      }
    }
  }

  &-filters {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 35px;

    @include mobile {
      justify-content: space-between;
    }

    @include sm {
      justify-content: center;
    }

    @include lg {
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 0px;
    }

    li {
      font-size: 16px;
      position: relative;
      display: inline-flex;
      cursor: pointer;

      @include sm {
        font-size: 19px;
        margin-right: 15px;
      }

      @include lg {
        font-size: 20px;
      }

      &:hover {
        opacity: 0.9;
        @include transition;
      }
    }

    .benefits-item-active {
      font-weight: bold;

      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: $dark;
        position: absolute;
        left: 0;
        bottom: 0;
        display: inline-block;
      }
    }
  }
}
</style>

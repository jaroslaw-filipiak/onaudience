<template>
  <div class="partnerships container-fluid bg-gray">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col col-xl-4 partnerships--col-1">
          <img src="@/assets/img/partnerships-img.png" alt="" />
        </div>
        <div class="col partnerships--col-2">
          <h3
            class="section-title section-title__sep-center--mobile text-center text-lg-start"
          >
            Partnerships with global ad tech leaders
          </h3>
          <p>
            OnAudience.com is a trusted partner of leading ad tech companies. We
            are integrated with global partners and data distributors, so we can
            match your target group’s ID with the common IDs on the digital
            market.
          </p>

          <p>
            We’re integrated with top DMP and DSPs, but we also participate in
            digital market initiatives, such as TCF 2.0 to make sure that our
            data is processed in compliance with data privacy rules, and with
            users’ consent to processing their data.
          </p>
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

.partnerships {
  padding-top: 44px;
  padding-bottom: 44px;

  &--col-1 {
    display: none;
    @include lg {
      display: flex;
    }
  }

  &--col-2 {
    @include xl {
      padding-left: 40px;
    }
  }
}
</style>

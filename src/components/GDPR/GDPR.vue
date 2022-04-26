<template>
  <div class="gdpr container-fluid">
    <div class="container">
      <div
        class="row d-flex flex-column flex-lg-row align-items-center justify-content-between"
      >
        <div class="col col-lg-5 pb-5 pb-lg-0">
          <h3
            class="section-title section-title__sep-center--mobile text-center text-lg-start"
            data-v-2e7e5aaf=""
          >
            GDPR Compliance
          </h3>
          <p>
            Data privacy is a matter of strategic importance for our company.
            That is why we offe only non personally identifiable information.The
            data is stored and processed on our DMP OnAudience.com, where it is
            always subjected to anynymizaton process.
          </p>

          <p>
            OnAudience.com's products and services comply with GDPR Privacy
            policy. We build our Big Data solutons based on Provacy by Design.
          </p>
        </div>
        <div class="col">
          <div class="gdpr-boxes">
            <div class="gdpr-box">
              <div class="gdpr-icon">
                <img src="@/assets/img/bi-4.png" alt="" />
              </div>
              <div class="gdpr-txt">
                <h4>GDPR Compilance</h4>
                <p>
                  GDPR compliance of our products and services was confirmed by
                  legal analysis of global consulting corporation
                </p>
              </div>
              <div class="gdpr-button-wrapper">
                <a class="btn-default" href="#">More</a>
              </div>
            </div>

            <div class="gdpr-box">
              <div class="gdpr-icon">
                <img src="@/assets/img/bi-4.png" alt="" />
              </div>
              <div class="gdpr-txt">
                <h4>Data anonymization</h4>
                <p>
                  To protect users privacy all data we process is subjected to
                  anynymization process
                </p>
              </div>
              <div class="gdpr-button-wrapper">
                <a class="btn-default" href="#">More</a>
              </div>
            </div>

            <div class="gdpr-box">
              <div class="gdpr-icon">
                <img src="@/assets/img/bi-4.png" alt="" />
              </div>
              <div class="gdpr-txt">
                <h4>IAB's TCF 2.0 compliance</h4>
                <p>
                  We are a partner of TCF 2.0 which helps digital companies
                  ensure they comply with the GDPR and ePrivacy Directive.
                </p>
              </div>
              <div class="gdpr-button-wrapper">
                <a class="btn-default" href="#">More</a>
              </div>
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

.gdpr {
  padding-bottom: 60px;
}

.gdpr-boxes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gdpr-box {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
  max-width: 647px;
  @include shadow;

  @include lg {
    text-align: left;
    flex-direction: row;
  }

  .gdpr-icon {
    padding-right: 20px;
    margin-bottom: 20px;
    @include lg {
      margin-bottom: 0;
    }
  }

  .gdpr-txt {
    padding-right: 20px;
  }
}
</style>

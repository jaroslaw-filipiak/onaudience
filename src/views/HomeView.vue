<template>
  <Hero />
  <Benefits />
  <Profiles />
  <Pairings />
  <UseCases />
  <GDPR />
  <PartnerShips />
  <CTA />
  <DiveDeeper />
  <Footer />
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import Benefits from '@/components/Benefits/Benefits.vue';
import Profiles from '@/components/Profiles/Profiles.vue';
import Pairings from '@/components/Pairings/Pairings.vue';
import UseCases from '@/components/UseCases/UseCases.vue';
import GDPR from '@/components/GDPR/GDPR.vue';
import PartnerShips from '@/components/Partnerships/Partnerships.vue';
import CTA from '@/components/CTA/CTA.vue';
import DiveDeeper from '@/components/DiveDeeper/DiveDeeper.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Benefits,
    Profiles,
    Pairings,
    UseCases,
    GDPR,
    PartnerShips,
    CTA,
    DiveDeeper,
    Footer,
  },
};
</script>

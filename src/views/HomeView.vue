<template>
  <Hero />
  <Benefits />
  <Profiles />
  <Pairings />
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import Benefits from '@/components/Benefits/Benefits.vue';
import Profiles from '@/components/Profiles/Profiles.vue';
import Pairings from '@/components/Pairings/Pairings.vue';
export default {
  name: 'HomeView',
  components: {
    Hero,
    Benefits,
    Profiles,
    Pairings,
  },
};
</script>

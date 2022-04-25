<template>
  <Hero />
  <Benefits />
  <Profiles />
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import Benefits from '@/components/Benefits/Benefits.vue';
import Profiles from '@/components/Profiles/Profiles.vue';
export default {
  name: 'HomeView',
  components: {
    Hero,
    Benefits,
    Profiles,
  },
};
</script>

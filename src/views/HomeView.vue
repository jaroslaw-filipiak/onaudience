<template>
  <Hero />
  <Benefits />
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';
import Benefits from '@/components/Benefits/Benefits.vue';
export default {
  name: 'HomeView',
  components: {
    Hero,
    Benefits,
  },
};
</script>

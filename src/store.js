/* eslint-disable */
import { reactive } from 'vue';

export const store = reactive({
  isMobileMenuVisible: false,
  currentLang: localStorage.getItem('lang') || 'en',
});

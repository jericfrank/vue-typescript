/**
 * @author Saki
 * @date 2019-04-03 17:25:52
 * @Last Modified by: Saki
 * @Last Modified time: 2019-04-04 20:52:59
 */
import Vue from 'vue'

// localization
import VueI18Next from '@panter/vue-i18next';
import i18next from './i18n'

import FlagIcon from 'vue-flag-icon'
import App from './App.vue';

// setup localization 
Vue.use(VueI18Next);
const i18n = new VueI18Next(i18next);

Vue.use(FlagIcon);

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')

// eof

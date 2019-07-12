import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

import Todos from './Todos';
import { RootState } from '@/entity';

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex);

const store = new Vuex.Store<RootState>({
  modules: {
    Todos,
  },
});

export default store;

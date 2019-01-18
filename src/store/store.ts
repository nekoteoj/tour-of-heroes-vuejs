import Vue from 'vue';
import Vuex from 'vuex';
import { messageModule } from './messageModule';

Vue.use(Vuex);

export default new Vuex.Store<{}>({
  modules: {
    messageModule,
  },
});

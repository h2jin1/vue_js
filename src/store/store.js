import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import todoApp from './modules/todoApp';

Vue.use(Vuex); // react 처럼 서드파티 라이브러리 쓸 때 use 키워드를 쓴다.
Vue.use(VueAxios, axios)

// store.js 의 변수를 main.js에서 쓰기 때문에  export 해줌.
export const store = new Vuex.Store({
    modules : {
        todoApp
    }
});

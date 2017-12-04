import './bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import { store } from './store/store';

import Base from './components/Base.vue';
import Article from './components/Article.vue';

Vue.use(Vuex);

Vue.component('article-item', Article);

new Vue({
    el: '#app',
    store,
    render: h => h(Base)
})

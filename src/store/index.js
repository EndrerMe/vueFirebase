// Vedors
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

// Store modules
import userArea from '@/store/modules/userArea';
import loader from '@/store/modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userArea,
        loader
    },
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ]
})
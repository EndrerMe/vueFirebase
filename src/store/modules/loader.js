export default {
    actions: {
        toggleLoader(ctx, isShow) {
            ctx.commit('toggleLoader', isShow)
        }
    },

    mutations: {
        toggleLoader(state, isShow) {
            state.isShowLoader = isShow;
        }
    },

    state: {
        isShowLoader: false,
    },

    getters: {
        getLoaderState(state) {
            return state.isShowLoader;
        }
    }
}
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
  count: 1
};

const mutations = {
  add(state,n) {
    state.count+=n;
  },
  reduce(state) {
    state.count-=n;
  }

};

const getters={
  count:(state)=>state.count+=10;
}

const actions={
  addAction(context){
    context.commit('add',10)
  },
  reduceAction(context){
    context.commit('reduce',10)
  }
};


export default new Vuex.Store({
  state,
  mutations,
  getters
})

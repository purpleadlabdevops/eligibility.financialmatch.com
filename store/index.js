export const state = () => ({
  index: 0,
  result: 0,
  phone: '18669602397'
})

export const mutations = {
  setIndex(state, index) {
    state.index = index
  },
  setResult(state, result) {
    state.result = result
  },
  setPhone(state, phone) {
    state.phone = phone
  }
}

export const actions = {
  getIndex({ commit }) {
    commit('setIndex', index);
  },
  getResult({ commit }) {
    commit('setResult', result);
  },
  getPhone({ commit }) {
    commit('setPhone', phone);
  }
}

export const getters = {
  index: state => state.index,
  result: state => state.result,
  phone: state => state.phone
}
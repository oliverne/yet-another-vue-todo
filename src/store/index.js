import Vuex from 'vuex'

const state = {
  todoData: []
}

export function createStore() {
  return new Vuex.Store({
    state
  })
}
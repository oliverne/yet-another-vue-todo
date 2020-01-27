import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from '../index.js'

beforeAll(() => {
  Vue.use(Vuex)
})

describe('State', () => {
  it('createStore() should return an instance of Vuex', () => {
    expect(createStore()).toBeInstanceOf(Vuex.Store)
  })

  it('State should include an array named todoData', () => {
    expect(createStore().state.todoData).toBeInstanceOf(Array)
  })
})
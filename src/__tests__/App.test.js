const { shallowMount, createLocalVue } = require('@vue/test-utils')
const VueRouter = require('vue-router')

const App = require('../App.vue')

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
  test('is rendered correctly', () => {
    const wrapper = shallowMount(App, { localVue })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

import { mutations } from '../mutations.js'

let state

beforeEach(() => {
  state = {
    todoData: []
  }
})

describe('addTodo()', () => {
  it('should NOT do anything if null|undefined|false is passed', () => {
    mutations.addTodo(state, null)
    mutations.addTodo(state, undefined)
    mutations.addTodo(state, false)
    expect(state).toMatchObject({
      todoData: []
    })
  })
  it('should NOT do anything if passed params is not valid', () => {
    mutations.addTodo(state, { id: 'uique id' })
    mutations.addTodo(state, { text: 'text' })
    mutations.addTodo(state, { id: 'dummy', text: 'text' })
    mutations.addTodo(state, { text: 'text', completed: 'not valid' })
    mutations.addTodo(state, { completed: undefined })
    expect(state).toMatchObject({
      todoData: []
    })
  })
})

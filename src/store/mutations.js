export const mutations = {
  addTodo(state, todo) {
    if (
      !todo ||
      typeof todo.id !== 'string' ||
      typeof todo.text !== 'string' ||
      !(todo.completed instanceof Boolean)
    ) {
      return
    }

    state.todoData.push({
      ...todo,
      cid: Math.random().toString(32).slice(2)
    })
  },
  removeTodo(state, id) {},
  completeTodo(state, id) {}
}

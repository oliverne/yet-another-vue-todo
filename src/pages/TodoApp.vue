<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-3">TODO</h1>
          <h2 class="subtitle">
            <router-link to="/about">Check this page!</router-link>
          </h2>
          <todo-form @newTodoAdded="addTodo"/>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="box" style="min-height: 60vh; margin: 1.5em;">
        <div class="columns">
          <div class="column">
            <todo-list icon="📆" @todoCompleted="completeTodo" title="Doing" :data="doingList"/>
          </div>
          <div class="column">
            <todo-list icon="✅" title="Done" :data="doneList"/>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer" style="padding: 2em;">
      <div class="content has-text-centered">
        <p>
          Yet Another
          <strong>TODO!</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import TodoForm from '../components/TodoForm.vue'

export default {
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    doingList() {
      return this.todoData.filter(item => {
        return !item.completed
      })
    },
    doneList() {
      return this.todoData.filter(item => {
        return item.completed
      })
    }
  },
  data() {
    return {
      todoData: []
    }
  },
  methods: {
    loadTodos() {
      fetch('https://egg-tart.glitch.me/api/todos')
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(({ result }) => {
          this.todoData = result
        })
        .catch(err => {
          console.log('Error occurred:', err.name, '-', err.message)
        })
    },
    addTodo(todoText) {
      fetch('https://egg-tart.glitch.me/api/todo', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: todoText
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          console.log('todo added', data)
          this.loadTodos()
        })
    },
    completeTodo(id) {
      const targetIndex = this.todoData.findIndex(todo => {
        return todo.id === id
      })

      this.todoData[targetIndex].completed = true
    }
  },
  created() {
    this.loadTodos()
  }
}
</script>

<style>
</style>
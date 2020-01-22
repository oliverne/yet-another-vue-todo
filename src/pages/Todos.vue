<template>
  <div class="todos">
    <common-header
      type="bg-header"
      :bold="true"
      title="Yet Another Vue Todo"
      sub-title="Working Example!"
    >
      <todo-form :loading="loading" @newTodoAdded="addTodo"></todo-form>
    </common-header>

    <section class="section">
      <div class="columns is-variable is-8">
        <div class="column is-hidden-mobile"></div>
        <div class="column is-4">
          <todo-list
            v-if="populated"
            :data="doingList"
            icon="📆"
            title="Doing"
            @todoToggled="toggleTodo"
            @todoRemoved="removeTodo"
          ></todo-list>
          <div v-else>
            Please wait while loading...
          </div>
        </div>
        <div class="column is-hidden-tablet"></div>
        <div class="column is-4">
          <todo-list
            v-if="populated"
            :data="doneList"
            icon="✅"
            title="Done"
            @todoToggled="toggleTodo"
            @todoRemoved="removeTodo"
          ></todo-list>
        </div>
        <div class="column is-hidden-mobile"></div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonHeader from '../components/CommonHeader.vue'
import TodoList from '../components/TodoList.vue'
import TodoForm from '../components/TodoForm.vue'

export default {
  components: {
    CommonHeader,
    TodoForm,
    TodoList
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
      loading: false,
      populated: false,
      todoData: []
    }
  },
  methods: {
    loadTodos() {
      this.loading = true

      return fetch('https://egg-tart.glitch.me/api/todos')
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(({ result }) => {
          this.todoData = result.sort(
            (itemA, itemB) => itemB.createdAt - itemA.createdAt
          )
        })
        .catch(err => {
          alert('Error occurred:', err.name, '-', err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    addTodo(todoText) {
      this.loading = true
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
          this.loadTodos()
        })
        .catch(err => {
          alert('Error occurred:', err.name, '-', err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    toggleTodo(id) {
      this.loading = true

      fetch(`https://egg-tart.glitch.me/api/todo/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: !this.todoData.find(item => item.id === id).completed
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          this.loadTodos()
        })
        .catch(err => {
          alert('Error occurred:', err.name, '-', err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    removeTodo(id) {
      this.loading = true

      fetch(`https://egg-tart.glitch.me/api/todo/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
        })
        .then(data => {
          this.loadTodos()
        })
        .catch(err => {
          alert('Error occurred:', err.name, '-', err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  created() {
    this.loadTodos().then(() => {
      this.populated = true
    })
  }
}
</script>

<style></style>

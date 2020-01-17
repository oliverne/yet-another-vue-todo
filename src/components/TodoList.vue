<template>
  <div class="content">
    <h3 class="title is-5">{{icon}} {{title}}</h3>
    <div v-if="!data || data.length < 1">
      Loading...
    </div>
    <ul v-else>
      <li v-for="todo in data" :key="todo.id">
        <todo
          @todoCompleted="completeTodo"
          @todoRemoved="removeTodo"
          :title="todo.title"
          :id="todo.id"
          :completed="todo.completed"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  props: ['icon', 'title', 'data'],
  components: {
    Todo
  },
  methods: {
    completeTodo(id) {
      console.log('will done', id)
      this.$emit('todoCompleted', id)
    },
    removeTodo(id) {
      this.$emit('todoRemoved', id)
    }
  },
  watch: {
    data() {
      console.log('todolist data changed')
    }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <div class="field has-addons has-addons-centered">
      <p class="control">
        <input
          :disabled="isLoading"
          class="input"
          type="text"
          v-model="newTodo"
          @keyup.enter="addTodo"
        >
      </p>
      <p class="control">
        <button
          :class="{'is-loading': isLoading}"
          :disabled="isLoading"
          class="button is-link"
          @click="addTodo"
        >ENTER</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      newTodo: '' //reactuve data
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo.trim()) {
        return
      }
      console.log(this.newTodo + ' added')
      this.$emit('newTodoAdded', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="columns">
    <div class="column is-hidden-mobile"></div>
    <div class="column is-half">
      <div class="field has-addons">
        <p class="control has-icons-left is-expanded">
          <input
            type="text"
            class="input"
            placeholder="What are you going to do?"
            v-model="newTodo"
            :disabled="loading"
            @keyup.enter="addTodo"
          />
          <span class="icon is-small is-left"><i class="fa fa-check"></i></span>
        </p>
        <p class="control">
          <button
            :class="{ 'is-loading': loading }"
            :disabled="loading"
            class="button is-primary"
            @click="addTodo"
          >
            Enter
          </button>
        </p>
      </div>
    </div>
    <div class="column is-hidden-mobile"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
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
      this.$emit('newTodoAdded', this.newTodo)
      this.newTodo = ''
    }
  }
}
</script>

<style></style>

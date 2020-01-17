<template>
  <div :class="{ done: completed }">
    {{title}}
    <button
      class="button is-small is-success is-outlined"
      v-if="!completed"
      @click="completeTodo"
    >Done</button>
    <button class="button is-small is-danger is-outlined" @click="$emit('todoRemoved', id)">Remove</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'id', 'completed'],
  methods: {
    completeTodo() {
      console.log('done', this.id)
      this.$emit('todoCompleted', this.id)
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>

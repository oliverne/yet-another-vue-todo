<template>
  <div class="todo-list">
    <h3 class="title is-5">{{ icon }} {{ title }}</h3>

    <div v-if="!data || data.length < 1">
      Nothing. Yeh!
    </div>

    <div v-else>
      <todo-item
        v-for="item in data"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :completed="item.completed"
        @todoToggled="$emit('todoToggled', item.id)"
        @todoRemoved="$emit('todoRemoved', item.id)"
      ></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: ['icon', 'title', 'data'],
  components: {
    TodoItem
  }
}
</script>

<style></style>

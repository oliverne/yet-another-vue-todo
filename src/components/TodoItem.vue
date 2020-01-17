<template>
  <article class="media todo-item">
    <figure class="media-left">
      <a
        v-if="!completed"
        @click="$emit('todoToggled')"
        href="#"
        class="button is-inverted is-success"
        ><span class="icon"><i class="fa fa-2x fa-check-circle"></i></span
      ></a>
      <a
        v-else
        @click="$emit('todoToggled')"
        href="#"
        class="button is-inverted is-info"
        ><span class="icon"><i class="fa fa-lg fa-mail-reply"></i></span
      ></a>
    </figure>
    <div class="media-content">
      <div class="content">
        <p :class="{ done: completed }">
          {{ title }}
        </p>
      </div>
    </div>
    <div class="media-right">
      <button @click="$emit('todoRemoved')" class="delete"></button>
    </div>
  </article>
</template>

<script>
export default {
  props: ['id', 'title', 'completed']
}
</script>

<style scoped>
.todo-item {
  margin-top: 0;
  align-items: center;
}
.todo-item + .todo-item {
  margin-top: 0;
  padding-top: 0;
}
.done {
  text-decoration: line-through;
}
</style>

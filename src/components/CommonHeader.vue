<template>
  <section class="hero" :class="{ [`is-${type}`]: !!type, 'is-bold': bold }">
    <div class="hero-body">
      <div class="container" :class="{ 'has-text-centered': center }">
        <h1 class="title is-4">{{ title }}</h1>
        <h2 class="subtitle is-5">
          {{ subTitle }}
        </h2>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    bold: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.is-bg-header {
  background: url(/img/bg-header.jpg) no-repeat center 10%;
  background-size: cover;
}
.title, .subtitle {
  color: #fff;
}
.title {
  padding: 0.5em 0 0 0;
}
</style>

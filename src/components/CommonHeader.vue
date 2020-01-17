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

<style>
.is-unique {
  background-image: linear-gradient(
    to bottom,
    #abffef 2%,
    #3894ff 60%,
    #3894ff 100%
  );
}
</style>

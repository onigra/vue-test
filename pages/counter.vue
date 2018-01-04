<template>
  <div>
    <div id="app">
      <button v-on:click="increment">++</button>
      <button v-on:click="decrement">--</button>
      {{ current }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { current: 0 }
  },
  methods: {
    increment() {
      this.current++
    },
    decrement() {
      this.current--
    },
  },
}
</script>

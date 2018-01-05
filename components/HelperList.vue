<template>
  <div>
    <ul>
      <li v-for="(name, index) in Helpers" :key="index">
        <a href="#" @click="openCalendar">{{ name }}</a>
      </li>
    </ul>
    <BasicModal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Helpers: ['ゆうだい', 'たまき', 'もり'],
    }
  },
  methods: {
    openCalendar(e) {
      this.$store.commit('calendar/open')
    },
  },
}
</script>

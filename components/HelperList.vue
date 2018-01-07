<template>
  <div>
    <ul>
      <li v-for="(helper, index) in helpers" :key="index">
        <a href="#" @click="openCalendar">{{ helper.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['helpers'],
  methods: {
    openCalendar(e) {
      this.$store.commit('calendar/open')
    },
  },
}
</script>

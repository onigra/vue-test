<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content">
        <ul>
          <li v-for="(helper, index) in helpers" :key="index">
            <a href="#" @click="fetchCalendar(helper.id)">{{ helper.name }}</a>
          </li>
        </ul>
      </div>
    </el-col>

    <el-col :span="12">
      <div class="grid-content">
        <div v-if="showCalendar">
          <full-calendar :events="this.$store.state.calendar.events" :config="calendarConfig"></full-calendar>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
const calendarConfig = {
  defaultView: 'agendaDay',
  aspectRatio: 1.1,
}

export default {
  data() {
    return {
      calendarConfig: calendarConfig,
    }
  },
  props: ['helpers'],
  computed: {
    showCalendar(e) {
      return this.$store.getters['calendar/showCalendar']
    },
  },
  methods: {
    fetchCalendar(helperId) {
      this.$store.dispatch('calendar/fetchEventsByHelperId', { helperId: helperId })
    },
  },
}
</script>

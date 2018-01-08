<template>
  <div>
    <ul>
      <p>ヘルパー未アサイン</p>
      <li v-for="(name, index) in notAssinedList" :key="index">
        <el-button type="text" @click="outerVisible = true; fetchHelpers()">{{ name }}</el-button>
      </li>
    </ul>

    <el-dialog title="アサインするヘルパー" width="90%" top="1%" :visible.sync="outerVisible">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <ul>
              <li v-for="(helper, index) in helpers" :key="index">
                <el-button type="text" @click="innerVisible = true; fetchCalendar(helper.id)">{{ helper.name }}</el-button>
              </li>
            </ul>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="grid-content">
            <full-calendar v-if="false" :events="this.$store.state.calendar.events" :config="calendarConfig"></full-calendar>
          </div>
        </el-col>
      </el-row>

      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
// import _ from 'lodash'

const calendarConfig = {
  defaultView: 'agendaDay',
  aspectRatio: 1.1,
}

export default {
  data() {
    return {
      notAssinedList: ['亀仙人', 'ジョセフ・ジョースター', 'アイザック=ネテロ'],
      outerVisible: false,
      innerVisible: false,
      helpers: [],
      calendarConfig: calendarConfig,
    }
  },
  methods: {
    fetchCalendar(helperId) {
      this.$store.dispatch('calendar/fetchEventsByHelperId', { helperId: helperId })
    },
    fetchHelpers(e) {
      axios.get('/api/helpers').then(res => {
        this.helpers = res.data
      })
    },
  },
}
</script>

<style>
.outer-dialog {
  margin-left: 10%;
}

.inner-dialog {
  margin-right: 10%;
}
</style>

<template>
  <transition name="modal">
    <div class="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                <button @click="closeModal">close</button>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content">
                      <helper-list />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content">
                      <div v-if="showCalendar">
                        <full-calendar :events="events" :config="config"></full-calendar>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
              </slot>
            </div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import HelperList from '~/components/HelperList.vue'

export default {
  data() {
    return {
      events: [
        {
          title: 'アイザック=ネテロ',
          start: '2018-01-05T10:30:00',
          end: '2018-01-05T12:30:00',
        },
        {
          title: '亀仙人',
          start: '2018-01-05T13:00:00',
          end: '2018-01-05T14:00:00',
        },
        {
          title: 'ジョセフ・ジョースター',
          start: '2018-01-05T15:00:00',
          end: '2018-01-05T17:00:00',
        },
      ],
      config: {
        defaultView: 'agendaDay',
        aspectRatio: 1.1,
      },
    }
  },
  computed: {
    showModal(e) {
      return this.$store.state.modal.showModal
    },
    showCalendar(e) {
      return this.$store.state.calendar.showCalendar
    },
  },
  methods: {
    closeModal(e) {
      this.$store.commit('modal/close')
    },
  },
  components: {
    HelperList,
  },
}
</script>

<style src="~/assets/modal.css">
</style>

<template>
  <transition name="modal">
    <div class="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                <button @click="closeModal">close</button>
                <p>ヘルパー一覧</p>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <el-row>
                  <el-col :span="12">
                    <div class="grid-content">
                      <ul>
                        <li>ゆうだい</li>
                        <li>たまき</li>
                        <li>もり</li>
                      </ul>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="grid-content">
                      <full-calendar :events="events" :config="config"></full-calendar>
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
  },
  methods: {
    closeModal(e) {
      this.$store.commit('modal/close')
    },
  },
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  height: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

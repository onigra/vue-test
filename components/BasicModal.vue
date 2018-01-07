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
                <helper-list :helpers="helpers"/>
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
import axios from '~/plugins/axios'

export default {
  data() {
    return {
      helpers: [],
    }
  },
  mounted() {
    axios.get('/api/helpers').then(res => {
      this.helpers = res.data
    })
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
  components: {
    HelperList,
  },
}
</script>

<style src="~/assets/modal.css">
</style>

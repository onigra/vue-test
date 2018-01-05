<template>
  <div>
    <ul>
      <p>ヘルパー未アサイン</p>
      <li v-for="(name, index) in notAssinedList" :key="index">
        <a href="#" @click="openModal">{{ name }}</a>
      </li>
    </ul>
    <BasicModal />
  </div>
</template>

<script>
import BasicModal from '~/components/BasicModal.vue'

export default {
  data() {
    return {
      notAssinedList: ['亀仙人', 'ジョセフ・ジョースター', 'アイザック=ネテロ'],
    }
  },
  methods: {
    openModal(e) {
      this.$store.commit('modal/open')
    },
  },
  components: {
    BasicModal,
  },
}
</script>

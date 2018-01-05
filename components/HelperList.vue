<template>
  <div>
    <ul>
      <li v-for="(name, index) in Helpers" :key="index">
        {{ name }}
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
}
</script>

<<template>
  <div>
    <ul>
      <p>ヘルパー未アサイン</p>
      <li v-for="(name, index) in notAssinedList" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<<script>
export default {
  data() {
    return {
      notAssinedList: ['亀仙人', 'ジョセフ・ジョースター', 'アイザック=ネテロ']
    }
  }
}
</script>

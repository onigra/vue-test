<<template>
  <div>
    <ul>
      <input placeholder="" @keyup.enter="addTodo">
      <li v-for="todo in todos">{{ todo }}</li>
    </ul>

  </div>
</template>

<<script>
export default {
  computed: {
    todos() { return this.$store.state.todo.list }
  },
  methods: {
    addTodo(event) {
      this.$store.commit('todo/add', event.target.value)
      event.target.value = ''
    }
  }
}
</script>

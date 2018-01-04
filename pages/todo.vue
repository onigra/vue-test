<<template>
  <div>
    <ul>
      <input placeholder="" @keyup.enter="addTodo">
      <li v-for="(todo, index) in todos">
        {{ todo.title }} : {{ todo.description}}
        <button @click="removeTodo(index)">delete</button>
      </li>
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
    },
    removeTodo(index) {
      this.$store.commit('todo/rm', index)
    }
  }
}
</script>

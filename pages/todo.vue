<template>
  <div>
    <input v-model="title" placeholder="title">
    <input v-model="description" placeholder="description">
    <button @click="addTodo">add</button>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }} : {{ todo.description }}
        <button @click="removeTodo(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { title: '', description: '' }
  },
  computed: {
    todos() {
      return this.$store.state.todo.list
    },
  },
  methods: {
    addTodo(event) {
      this.$store.commit('todo/add', { title: this.title, description: this.description })
      this.title = ''
      this.description = ''
    },
    removeTodo(index) {
      this.$store.commit('todo/rm', index)
    },
  },
}
</script>

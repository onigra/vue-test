export const state = () => ({
  list: [
    { title: 'foo', description: 'fooooo' },
    { title: 'bar', description: 'barrrr' },
    { title: 'baz', description: 'bazzzz' },
    { title: 'unun', description: '' },
  ],
})

export const mutations = {
  add(state, { title, description }) {
    state.list.push({ title: title, description: description })
  },
  rm(state, index) {
    state.list.splice(index, 1)
  },
}

export const state = () => ({
  list: ['foo', 'bar', 'baz'],
})

export const mutations = {
  add(state, text) {
    state.list.push(text)
  },
  rm(state, index) {
    state.list.splice(index, 1)
  },
}

export const state = () => ({
  current: 0,
})

export const mutations = {
  increment(state) {
    state.current++
  },
  decrement(state) {
    state.current--
  },
}

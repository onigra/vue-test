export const state = () => ({
  showCalendar: false,
})

export const mutations = {
  open(state) {
    state.showCalendar = true
  },
  close(state) {
    state.showCalendar = false
  },
}

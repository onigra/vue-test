import axios from '~/plugins/axios'
import _ from 'lodash'

export const state = () => ({
  events: [],
})

export const getters = {
  showCalendar(state) {
    return !_.isEmpty(state.events)
  },
}

export const mutations = {
  close(state) {
    state.events = []
  },
  setEvents(state, events) {
    state.events = events
  },
}

export const actions = {
  fetchEventsByHelperId(context, helperId) {
    axios.get(`/api/helpers/${helperId.helperId}/events`).then((res) => {
      context.commit('setEvents', res.data)
    })
  },
}

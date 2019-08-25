import Vue from 'vue'

const state = {
  tasks: {
    'ID1': {
      name: "Go to Shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "16:30"
    },
    'ID2': {
      name: "Go to Shop",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "16:30"
    },
    'ID3': {
      name: "Buy milk",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "13:30"
    },
    'ID4': {
      name: "Study for Exam",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "17:30"
    }
  }
}

const mutations = {
  // cannot be asynchronous
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },

  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
  // can be asynchronous
  updateTask({
    commit
  }, payload) {
    commit('updateTask', payload)
  },

  deleteTask({
    commit
  }, id) {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

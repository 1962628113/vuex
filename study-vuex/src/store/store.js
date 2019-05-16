import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    count:0,
    todos:[{ id: 1, text: '...', done: true },
           { id: 2, text: '...', done: false },
           { id: 3, text: '...', done: true }]
  },
  getters: {
    doneTodos: state => {
      const todos = state.todos.filter(todo => todo.done);
      return todos.reduce((prev,curr) =>
         prev + curr.id,0)
    },
    doneTodoNumber: (state, getters) => {
      return getters.doneTodos > 3
    }
  },
  mutations: {
    increment:state => state.count ++,
    decrement:state => state.count --,
  },
  actions: {
    incrementAsnyc({commit}) {
      setTimeout(()=>commit('addDoneTodos'),1000)
    },
    decrementAsnyc({commit}) {
      setTimeout(()=>commit('decrement'),1000)
    }
  }
})
console.log(store.state.count)
console.log(store.getters.doneTodos)
export default store

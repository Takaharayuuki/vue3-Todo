import { createStore } from "vuex";
// new Vuex.Store() ではなく createStore()に変更

export interface State {
  todoList: Array<{ id: number, todo: string, comment: any }>
}

export const store = createStore<State>({
  state: {
    todoList: []
  },
  mutations:{
    increment(state, { id, value }) {
      state.todoList.push({ id: id, todo: value, comment: []})
    },
    complete(state, targetIndex) {
      state.todoList.splice(targetIndex, 1)
    },
  },
  actions:{},
  modules:{}
});

export default store
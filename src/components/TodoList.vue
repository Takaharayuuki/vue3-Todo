<template>
  <ul class="todolist">
    <li v-for="(todo, index) in state.todoList" :key="todo.todo">
      {{ todo.todo }}
      <router-link :to="{name: 'detail', params: {id: todo.id}}">詳細</router-link>
      <complete-button :index="index"></complete-button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import CompleteButton from './CompleteButton.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
     CompleteButton
  },

  setup() {
    const store = useStore()

    const state = reactive<{ todoList: Array<{todo: string}>;}>({
      todoList: store.state.todoList
    });

    // const addTodoAction = (value: string) => {
    //   state.todoList.push({todo: value})
    // };

    // const completeTodoAction = (targetIndex) => {
    //   state.todoList.splice(targetIndex, 1)
    // }
    return { state };
  }
});
</script>

<template>
  <div>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="todo.todo">
        {{ todo.todo }}
        <complete-button :index="index"></complete-button>
      </li>
    </ul>
    <TodoInput />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import TodoInput from '../components/TodoInput.vue';
import CompleteButton from './CompleteButton.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
     TodoInput,
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

<style>

</style>
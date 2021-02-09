<template>
  <div>
    <ul class="todolist">
      <li v-for="(todo, index) in state.todoList" :key="todo.todo">
        {{ todo.todo }}
        <complete-button :index="index" @complete-todo="completeTodoAction"></complete-button>
      </li>
    </ul>
    <TodoInput @add-todo="addTodoAction" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TodoInput from '../components/TodoInput.vue';
import CompleteButton from './CompleteButton.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
     TodoInput,
     CompleteButton
  },

  setup() {
    const state = reactive<{ todoList: Array<{todo: string}>;}>({
      todoList: []
    });

    const addTodoAction = (value: string) => {
      state.todoList.push({todo: value})
    };

    const completeTodoAction = (targetIndex) => {
      state.todoList.splice(targetIndex, 1)
    }

    return { state, addTodoAction, completeTodoAction };
  }
});
</script>

<style>

</style>
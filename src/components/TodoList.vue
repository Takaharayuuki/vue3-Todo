<template>
  <div>
    <ul class="todolist">
      <li v-for="todo in state.todoList" :key="todo.ytodo">{{ todo.todo }}</li>
    </ul>
    <Todoinput @add-todo="addTodoAction" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Todoinput from '../components/TodoInput.vue';

export default defineComponent({
  components: { Todoinput },
  name: 'TodoList',

  setup() {

    const state = reactive<{ todoList: Array<{todo: string}>;}>({
      todoList: []
    });

    const addTodoAction = (value: string) => {
      state.todoList.push({todo: value})
    }

    return { state, addTodoAction };
  }
});
</script>

<style>

</style>
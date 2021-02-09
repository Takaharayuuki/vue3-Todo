<template>
  <div>
    <ul class="todolist">
      <li v-for="todo in state.todoList" :key="todo.ytodo">{{ todo.todo }}</li>
    </ul>
    <Todoinput />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Todoinput from '../components/TodoInput.vue';

export default defineComponent({
  components: { Todoinput },
  name: 'TodoList',

  setup() {
    const state = reactive<{ todoList: [{todo: String}, {todo: String}];}>({
      todoList: [
        {
          todo: 'todo1',
        },
        {
          todo: 'todo2'
        }
      ]
    });
    return { state };
  }
});
</script>

<style>

</style>
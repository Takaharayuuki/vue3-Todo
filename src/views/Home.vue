<template>
  <TodoList />
  <div>
    <TodoInput />
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import TodoInput from "../components/TodoInput.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    TodoInput,
  },
};
</script>

<style>
</style>
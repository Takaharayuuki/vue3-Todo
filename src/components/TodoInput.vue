<template>
  <div class="bg-gray-200 fixed bottom-0 w-full">
    <input
      class="m-3 rounded max-w-md w-full py-2"
      v-model="todoRef"
      type="text"
    />
    <button
      class="bg-green-500 text-white font-semibold py-2 px-5 rounded"
      @click="add"
    >
      Todo登録
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoInput",
  setup(props, context: SetupContext) {
    const store = useStore();
    const todoRef = ref<string>("");

    const lastId = () => {
      if (store.state.todoList.length === 0) {
        return 1;
      } else {
        const lastItem = store.state.todoList.slice(-1)[0];
        return lastItem.id + 1;
      }
    };

    const add = (e) => {
      const id = lastId();
      const value = todoRef.value;
      store.commit("increment", { id, value });
      todoRef.value = "";
    };
    return { add, todoRef };
  },
});
</script>

<style>
</style>
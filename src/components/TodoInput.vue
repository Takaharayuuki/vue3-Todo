<template>
  <div>
    <input v-model="todoRef" type="text" v-on:keydown.enter="add">
    <button @click="add" >登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'

export default defineComponent({
  name: 'TodoInput',
  setup(props, context: SetupContext) {
    const todoRef = ref<string>('')

    const add = (e) =>{
      // this.$emit が context.emit で使用できる。
      context.emit('add-todo', todoRef.value);
      todoRef.value = ''
    };
    return { add, todoRef };
  }
});
</script>

<style>

</style>
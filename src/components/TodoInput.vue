<template>
  <div>
    <input v-model="todoRef" type="text" v-on:keydown.enter="add">
    <button @click="add" >登録</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TodoInput',
  setup(props, context: SetupContext) {
    const store = useStore()
    const todoRef = ref<string>('')

    const lastId = () => {
      if(store.state.todoList.length === 0){
        return 1
      } else {
        const lastItem = store.state.todoList.splice(-1)[0]
        return lastItem.id + 1
      }
    }

    const add = (e) =>{
      // this.$emit が context.emit で使用できる。
      const id = lastId()
      const value = todoRef.value
      store.commit('increment', {id, value})
      todoRef.value = ''
    };
    return { add, todoRef };
  }
});
</script>

<style>

</style>
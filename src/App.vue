<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <TodoList/>
      <TodoFooter />

    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
    export default {
      mounted() {
        // 发送命令给action：异步获取保存todos数据并显示
        console.log('aaaaaaaaaaaaaaaaa')
        this.$store.dispatch('reqTodos')
      },

      components: {
        TodoHeader, TodoList, TodoFooter
      }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

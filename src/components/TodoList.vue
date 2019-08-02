<!--根组件-->
<template> <!--模板，写html代码-->
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index"
       :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem.vue'
  import storageUtils from "../utils/storageUtils";

    export default {

      computed: {
        ...mapState(['todos']),
        //todos: this.$store.state.todos
      },

      watch: {
        todos: {
          deep: true,// 深度监视
          handler: storageUtils.saveTodos
        }
      },

      components: {
        TodoItem
      }
    }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>

<!--根组件-->
<template> <!--模板，写html代码-->
  <div class="todo-footer">
    <input type="checkbox" v-model="checkAll" />
    <span>已完成{{completeCount}} / 全部{{totalCount}}</span>
    <button class="btn btn-danger" v-show="completeCount"
            @click="deleteAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {

      computed: {
        ...mapGetters(['totalCount', 'completeCount']),

        checkAll: {
          get() {// 决定是否勾选
            return this.$store.getters.isAllSelect
          },

          set(value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
            this.$store.dispatch('selectAll', value)
          }
        }
      },

      methods: {
        deleteAllCompleted() {
          if (window.confirm("确定清除已完成的吗?")){
            this.$store.dispatch('deleteCompleteTodos')
          }
        }
      }
    }
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>

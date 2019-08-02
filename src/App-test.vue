<!--根组件-->
<template> <!--模板，写html代码-->
    <div> <!--模板必须要有一个根标签，比如div-->
      {{$store.state.todos}} <br>
      {{todos}}
    </div>
</template>

<script>
  import storageUtils from './utils/storageUtils'
  import {mapState} from 'vuex'
    export default {
      mounted() {
        // 发送命令给action：异步获取保存todos数据并显示
        this.$store.dispatch('reqTodos')
        console.log("aaaaaaaaaaaaaaaa")
      },

      computed: {
        ...mapState(['todos'])
      },

      watch: {
        todos: {
          deep: true,// 深度监视
          handler: storageUtils.saveTodos
        }
      },
    }
</script>

<style scoped>

</style>

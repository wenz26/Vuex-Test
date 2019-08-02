<!--根组件-->
<template> <!--模板，写html代码-->
    <div> <!--模板必须要有一个根标签，比如div-->
      <p>click {{count}} times, count is {{evenOrOdd}}</p>

      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
    </div>
</template>

<script>
    export default {

      computed: {
        count(){
          return this.$store.state.count
        },

        evenOrOdd(){
          return this.$store.getters.evenOrOdd
        }
      },

      methods: {
        // 增加
        increment() {
          // 触发store中对应的action调用
          this.$store.dispatch('increment')
        },
        // 减少
        decrement() {
          this.$store.dispatch('decrement')
        },
        // 如果是奇数才增加
        incrementIfOdd() {
          this.$store.dispatch('incrementIfOdd')
        },
        // 过1s才增加
        incrementAsync() {
          this.$store.dispatch('incrementAsync')
        }
      }
    }
</script>

<style scoped>

</style>

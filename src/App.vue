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
  import {mapState, mapGetters, mapActions} from 'vuex'
    export default {

      /*computed: {
        count(){
          return this.$store.state.count
        },

        evenOrOdd(){
          return this.$store.getters.evenOrOdd
        }
      },*/

      computed: {
        /*
        * 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，
        * 将一个数组转为用逗号分隔的参数序列。扩展运算符与正常的函数参数可
        * 以结合使用，后面也可以放置表达式，但如果后面是一个空数组，则不产
        * 生任何效果。
        *
        * PS：
        * let arr = [];
        * arr.push(...[1,2,3,4,5]);
        * console.log(arr); //[1,2,3,4,5]
        * console.log(1, ...[2, 3, 4], 5) //1 2 3 4 5
        * console.log(...(1 > 0 ? ['a'] : [])); //a
        * console.log([...[], 1]); //[1]
        *
        * */
        // mapGetters()返回值：{evenOrOdd() {return this.$store.getters.state['count']}}
        ...mapState(['count']),//这里的...不是省略号了,是对象扩展符


        // mapGetters()返回值：{evenOrOdd() {return this.$store.getters.getters['evenOrOdd']}}
        ...mapGetters(['evenOrOdd'])
        //...mapGetters({evenOrOdd: 'evenOrOdd2'}) //当名字与store.js定义的不一样的时候，要用一个对应关系
        //evenOrOdd：事件回调函数名字   'evenOrOdd2'：getters的名字(即store.js里的名字)
      },

      /*methods: {
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
      }*/

      methods: {
        ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      }
    }
</script>

<style scoped>

</style>

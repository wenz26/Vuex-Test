/*
包含n个基于state的getter计算属性方法的对象模块
 */
export default {

  // 总数量
  totalCount(state){
    return state.todos.length
  },

  // 完成的数量
  completeCount(state){
    return state.todos.reduce((preTodo, todo) => preTodo + (todo.complete?1:0), 0)
  },

  // 判断是否需要全选
  isAllSelect(state, getters){
    return getters.totalCount === getters.completeCount && getters.totalCount>0
  }
}

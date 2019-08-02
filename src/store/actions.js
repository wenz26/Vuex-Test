/*
包含n个用于间接更新状态的方法的对象模块
接收组件通知触发mutation调用间接状态的方法的对象
 */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
import storageUtils from '../utils/storageUtils'

export default {
  // 添加todo
  addTodo({commit}, todo){
    // 提交一个mutation请求
    // 无论数据什么类型，反正要把传递的数据用一个对象包装起来，如{todo}
    commit(ADD_TODO, {todo})// 传递给mutation的是一个包含数据的对象
  },

  // 删除todo
  deleteTodo({commit}, index){
    commit(DELETE_TODO, {index})
  },

  // 全选/全不选todos
  selectAll({commit}, isCheck){
    commit(SELECT_ALL_TODOS, {isCheck})
  },

  // 删除所有选中的
  deleteCompleteTodos({commit}){
    commit(DELETE_COMPLETE_TODOS)
  },

  // 异步获取todos并更新状态
  reqTodos({commit}){
    //模拟
    setTimeout(() => {
      // 读取数据
      const todos = storageUtils.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 3000)
  }

}

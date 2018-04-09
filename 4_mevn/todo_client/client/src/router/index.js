import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Example from '@/components/Example'
import TodoList from '@/components/todoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos/:userid',
      name: 'TodoPage',
      component: TodoList
    }
  ]
})

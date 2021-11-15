import Vue from 'vue'
import Router from 'vue-router'

import Main from "../views/Main";
import Login from "../views/Login";

import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: '/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile,
          props: true     // 开启传参模式
        },
        {path: '/user/list', component: UserList},
      ]
    }, {
      path: '/login',
      component: Login, // 嵌套路由
    },{
      path: '/goHome',
      redirect: '/main'
    }
  ]
})

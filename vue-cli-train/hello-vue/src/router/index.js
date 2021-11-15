import Vue from 'vue'
import Router from 'vue-router'

import Main from "../views/Main";
import Login from "../views/Login";

import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
import NotFound from "../views/NotFound";
Vue.use(Router)

export default new Router({
  mode: 'history',  // mode两种模式 hash是路径带#的，mode是路径不带#的
  routes: [
    {
      path: '/main/:username',
      component: Main,
      props: true,
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
    },{
      path:'*',
      component: NotFound
    }
  ]
})

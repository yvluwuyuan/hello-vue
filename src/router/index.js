import Vue from "vue";
import Router from "vue-router";
//导入所需的vue组件
import Main from "../views/Main";
import Login from "../views/Login";
import UserList from "../views/user/List";
import UserProfile from "../views/user/Profile";
//安装路由
Vue.use(Router);
//配置导出路由

export default new Router({
  routes: [
    {
      //路由路径
      path: '/main',
      //跳转的组件
      component: Main,
      children:[
        {path:'/user/list/:id', name:'UserList',component: UserList},
        {  path: '/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile,
          props:true},
      ]
    },
    {
      path: '/login',
      component: Login, //嵌套路由

    },
  ]
});

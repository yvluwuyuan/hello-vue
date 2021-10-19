import Vue from 'vue'
import App from './App'
import router from './router'//自动扫描里面的路由配置
//导入elementUI
import ElementUI from "element-ui"
//导入element css
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(router);
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App),//ElementUI规定这样使用
})

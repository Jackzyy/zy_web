import Vue from 'vue'
import Router from 'vue-router'
import router from './index.js'
import store from '../store/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Notification } from 'element-ui';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/views/Pc/Layout'),
      children:[
        {
          path: '/',
          name: 'PC端网站',
          meta:{
            weMedia:false
          },
          component: ()=>import('@/views/Pc/Home'),
        },
        {
          path: '/scoreboard',
          name: '赛事数据',
          meta:{
            weMedia:false
          },
          component: ()=>import('@/views/Pc/Scoreboard'),
        },
        {
          path: '/privacy',
          name: '隐私政策',
          meta:{
            weMedia:false,
            judge:'0'
          },
          component: ()=>import('@/views/Pc/Privacy/Privacy'),
        },

        // 章鱼号
        {
          path: '/wemedia/login',
          name: '章鱼号',
          meta:{
            weMedia:true
          },
          component: ()=>import('@/views/Pc/WeMedia/Login'),
        },
        {
          path: '/wemedia/getpass',
          name: '找回密码',
          meta:{
            weMedia:true
          },
          component: ()=>import('@/views/Pc/WeMedia/GetPass'),
        },
        {
          path: '/wemedia/applyfor',
          name: '申请章鱼号',
          meta:{
            weMedia:true
          },
          component: ()=>import('@/views/Pc/WeMedia/ApplyFor'),
        },
        {
          path: '/wemedia/aboutus',
          name: '关于我们',
          meta:{
            weMedia:true
          },
          component: ()=>import('@/views/Pc/WeMedia/Aboutus'),
        },
        {
          path: '/wemedia/index',
          name: '发布文章',
          meta:{
            weMedia:true,
            userInfo:true
          },
          component: ()=>import('@/views/Pc/WeMedia/Home'),
        },
      ]
    },
    // 手机端网站
    {
      path: '/m_index',
      name: '手机端网站',
      component: ()=>import('@/views/Mobile/Home')
    },
  ]
})

// 路由判断
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log('111',store.state.loginInfo);
  if(to.meta.userInfo){
    if(store.state.loginInfo.token == ''){
      Notification({
        type: 'info',
        message: '用户未登录'
      });
      next({path: '/wemedia/login'})
    }else{
      NProgress.start()
      next()
    }
  }else{
    NProgress.start()
    next()
  }
})

//判断路由拦截
router.afterEach((to, from) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0

  if(to.meta.judge != '0'){
    console.log(to.meta.judge);
    if(device.mobile()){
      router.push('/m_index')
    }
  }
  NProgress.done()
})

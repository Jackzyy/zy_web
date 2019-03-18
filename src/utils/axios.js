import axios from 'axios'
import router from '../router'
import store from '../store/store'
import { Notification } from 'element-ui';

var instance = axios.create({
    baseURL:'http://api.zhangyusport.com',
    timeout: 15000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    let vuex = JSON.parse(window.sessionStorage.getItem('vuex'))

    if (vuex != null) {
        if('loginInfo' in vuex){//全局请求头
            let user = vuex.loginInfo
            config.headers.common['tokenTime'] = user.tokenTime;
            config.headers.common['uid'] = user.uid;
            config.headers.common['pwd'] = user.pwd;
            config.headers.common['token'] = user.token;
        }
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (res) {
    if(res.data.code == 6012){
        Notification({
            type: 'info',
            message: '登录状态已失效'
        });
        store.commit('DEL_LOGIN','')
        router.push('/wemedia/login')
    }
    return res;
  }, function (error) {
    return Promise.reject(error);
});

const fetch = {
    get(url,data,config){
        return new Promise((resolve, reject) => {
            instance.get(url, {params:data}, config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        });
    },
    
    post(url,data,config){
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        });
    },
}

export default fetch
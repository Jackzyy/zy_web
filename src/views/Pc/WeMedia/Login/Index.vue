<template>
    <div class="we-media">
        <div class="banner">
            <img class="bg" src="@/static/img/pc/weMedia/zhangyuhao_beijing.png@2x.png" alt="">
            <div class="banner-inner">
                <div class="introduce">
                    <img class="introduce-one" src="@/static/img/pc/weMedia/zhangyudi@2x.png" alt="">
                    <img class="introduce-two" src="@/static/img/pc/weMedia/introduce@2x.png" alt="">
                </div>
                <div class="login">
                    <div class="inner-box">
                        <div class="login-title">登录</div>
                        <div class="login-box">
                            <div>
                                <img src="@/static/img/pc/weMedia/zhangyuhao_yonghuming.png@2x.png" alt="">
                                <i></i>
                                <input type="text" v-model="loginParams.account_name" autocomplete="off" name="username" placeholder="请输入用户名" value="">
                            </div>
                            <div>
                                <img src="@/static/img/pc/weMedia/zhangyuhao_mima.png@2x.png" alt="">
                                <i></i>
                                <input type="password" v-model="loginParams.pwd" autocomplete="off" name="password" placeholder="请输入密码" value="">
                            </div>
                        </div>
                        <div class="login-select">
                            <div>记住密码</div>
                            <a href="#"><router-link to="/wemedia/getpass">修改密码</router-link></a>
                        </div>
                        <div class="login-btn" @click="goLogin">
                            登录
                        </div>
                        <div class="register">
                            还没有账号 ?
                            <a href="#"><router-link to="/wemedia/applyfor">申请入驻</router-link></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="intro">
            <div class="intro-item">
                <div>
                    <img class="img1" src="@/static/img/pc/weMedia/zhangyuhao_guanyu.png@2x.png" alt="">
                    <span>关于章鱼号</span>
                </div>
                <div>开放自媒体平台,表达个人观点，获取粉丝关注</div>
            </div>
            <div class="intro-item">
                <div>
                    <img class="img2" src="@/static/img/pc/weMedia/zhangyuhao_ruzhu.png@2x.png" alt="">
                    <span>入驻章鱼号</span>
                </div>
                <div>在线提交资料, 进行权威认证</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loginParams:{
                    account_name: '章鱼号',
                    pwd:'123456'
                }
            }
        },
        methods: {
            goLogin() {//登录
                this.$axios.post('v2/login/login',this.loginParams,{
                    transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res =>{
                    if(res.code == 0){
                        this.$store.commit('SAVE_LOGIN',res.data) //登录信息储存
                        this.$notify({
                            title: '提示',
                            message: '登陆成功',
                            type: 'success'
                        });
                        setTimeout(() => {
                            this.$router.push('/wemedia/index')
                        }, 1000);
                    }else{
                        this.$notify({
                            title: '提示',
                            message: '用户名或密码错误',
                            type: 'error'
                        });
                    }
                })
            }
        },
    }
</script>

<style scoped lang='scss'>
    .we-media{
        a{
            text-decoration: none;
            color: #D62826;
        }
        .banner{  
            position: relative;
            .bg{
                width: 100%;
                min-height: 7rem;
            }
            .banner-inner{
                width: 12rem;
                min-height: 7rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                .introduce{
                    position: absolute;
                    left: .2rem;
                    top: 1.4rem;
                    img{
                        width: 100%;
                    }
                    .introduce-one{
                        width: 1.96rem;
                        height: 1.1rem;
                        position: absolute;
                    }
                    .introduce-two{
                        width: 4.11rem;
                        height: 1.6rem;
                        position: absolute;
                        top: 0.3rem;
                    }
                }
            }
            
            .login{
                width: 5rem;
                height: 5rem;
                position: absolute;
                top: 1.3rem;
                right: 0;
                background-color: #fff;
                .inner-box{
                    padding: 0.5rem 0.45rem;
                    .login-title{
                        font-size:0.3rem;
                        font-weight:bold;
                        color: #20243D;
                    }
                    .login-box{
                        div:nth-child(1){
                            margin-top: 0.45rem;
                        }
                        div:nth-child(2){
                            margin-top: 0.37rem;
                        }
                        div{
                            border: 1px solid #E3E3E3;
                            width:4rem;
                            height:0.5rem;
                            display: flex;
                            align-items: center;
                            img{
                                width: 0.34rem;
                                height: 0.34rem;
                                padding: 0 0.08rem;
                            }
                            i{
                                display: block;
                                width: 1px;
                                height: 0.25rem;
                                background-color: #E3E3E3;
                                margin-right: 0.1rem;
                            }
                            input{
                                font-size:0.2rem;
                                font-weight:400;
                                border: 0px;
                                outline: none;
                            }
                            input::input-placeholder{
                                color: #898B94;
                            }
                        }
                    }
                    .login-select{
                        font-size:0.2rem;
                        font-weight:400;
                        display: flex;
                        justify-content: space-between;
                        margin: 0.4rem 0;
                    }
                    .login-btn{
                        font-size: 0.24rem;
                        width:4rem;
                        height:0.5rem;
                        line-height: 0.5rem;
                        text-align: center;
                        color: #fff;
                        border-radius:0.04rem;
                        background-color: #D62826;
                        font-weight:bold;
                        cursor: pointer;
                    }
                    .register{
                        font-size:0.2rem;
                        font-weight:400;
                        text-align: center;
                        margin: 0.25rem 0;
                    }
                }   
                
            }
        }
        .intro{
            width: 10rem;
            margin: 0.9rem auto;
            display: flex;
            justify-content: space-between;
            .intro-item{
                min-width: 2.5rem;
                div:nth-child(1){
                    font-size:0.26rem;
                    font-family:PingFang-SC-Bold;
                    font-weight:bold;
                    color: #20243D;
                    display: flex;
                    align-items: center;
                    span{
                        font-size:0.24rem;
                        font-family:PingFang-SC-Bold;
                        font-weight:bold;
                        margin: 0 0.1rem;
                    }
                }
                div:nth-child(2){
                    font-size:0.2rem;
                    font-family:PingFang-SC-Medium;
                    font-weight:400;
                    color: #20243D;
                    margin: 0.2rem 0;
                }
            }
            img{
                width: 100%;
            }
            .img1{
                width: 0.42rem;
                height: 0.5rem;
            }
            .img2{
                width: 0.5rem;
                height: 0.5rem;
            }
        }
    }
</style>
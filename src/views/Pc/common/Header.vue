<template>
    <header>
        <div class="header">
            <div class="logo" @click="goHome">
                <img src="@/static/img/pc/home/logo@2x.png" alt="">
            </div>
            <div class="nav" v-if="!$route.meta.userInfo">
                <div @click="goZyHao">
                    <img src="@/static/img/pc/home/zyhao@2x.png" alt="">
                </div>
                <div @click="goScoreboard">
                    <span>数据</span>
                </div>
                <div>
                    <span>比赛</span>
                </div>
                
                <!-- <div>
                    <span>加入我们</span>
                </div>
                <div>
                    <span>关于我们</span>
                </div>
                <div>
                    <span>联系合作</span>
                </div> -->
            </div>
            <div class="user-info" v-else>
                <img :src="this.$store.state.loginInfo.head_image" alt="">
                <span>{{this.$store.state.loginInfo.account_name}}</span>
                <span class="login-out" @click="loginOut">退出</span>
            </div>
        </div>
    </header>
   
</template>

<script>
    export default {
        methods: {
            goZyHao() {
                this.$router.push('/wemedia/login')
            },
            goHome() {
                this.$router.push('/')
            },
            goScoreboard() {
                this.$router.push('/scoreboard')
            },
            loginOut(){
                this.$notify({
                    type: 'success',
                    message: '登出成功'
                });
                this.$store.commit('DEL_LOGIN','')
                setTimeout(() => {
                    this.$router.push('/wemedia/login')
                }, 1000);
            }
        },
        watch:{
            
        }
    }
</script>

<style scoped lang='scss'>
    header{
        width: 100%;
        background-color: #181818;
        font-size: 0.18rem;
        // opacity: 0.8;
        position: fixed;
        top: 0;
        z-index: 4;
        .header{
            width: 12rem;
            height: .6rem;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo{
                width: 1.2rem;
                cursor: pointer;
                img{
                    display: block;
                    width: 100%;
                }
            }
            .nav{
                display: flex;
                align-items: center;
                color: #FFFFFF;
                margin-right: 2rem;
                img{
                    display: block;
                    width: 0.8rem;
                    height: 0.24rem;
                    cursor: pointer;
                }
                div{
                    font-weight:400;
                    margin-left: 0.4rem;
                    cursor: pointer;
                }
            }
        }
        .user-info{
            display: flex;
            align-items: center;
            img{
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                overflow: hidden;
                cursor: pointer;
            }
            span{
                font-size: 16px;
                color: #FFFFFF;
                margin: 0 10px;
            }
            .login-out{
                font-size: 14px;
                color: #ddd;
                cursor: pointer;
            }
            .login-out:hover{
                font-size: 14px;
                color: red;
            }
        }
    }
    
</style>
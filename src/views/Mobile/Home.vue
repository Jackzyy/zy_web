<template>
    <div class="mobile">
        <div class="carousel">
            <Swipe indicator-color="#f00">          
                <SwipeItem>
                    <div class="carousel-item">
                        <div class="app-logo"></div>
                        <div class="app-name"></div>
                        <div class="app-page">
                            <img src="@/static/img/mobile/black_mobile@2x.png" alt="">
                        </div>
                        <div class="app-poster">
                            <div class="two"></div>
                            <div class="three"></div>
                        </div>
                    </div>
                </SwipeItem>
                <SwipeItem>
                    <div class="carousel-item">
                        <div class="app-logo"></div>
                        <div class="app-name"></div>
                        <div class="app-page">
                            <img src="@/static/img/mobile/white_mobile@2x.png" alt="">
                        </div>
                        <div class="app-poster">
                            <div class="one"></div>
                        </div>
                    </div>
                </SwipeItem>
            </Swipe>
        </div>
        <div class="down-app">
            <div class="click-btn">
                <div class="android btn" @click="downAndroid">
                    <img src="@/static/img/mobile/Android.png" alt="">
                    <i></i>
                    <span>下载Android</span>
                </div>
                <div class="ios btn"  @click="downIos">
                    <img src="@/static/img/mobile/IOS.png" alt="">
                    <i></i>
                    <span>下载IOS</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">
                <div>
                    体育球迷
                    <i></i>
                    必备神器
                </div>
                <div>
                    来自世界各地的体育活动
                </div>
            </div>
            <div class="img"></div>
        </div>
        <div class="footer">
            <p>联系我们 : 766991397@qq.com</p>
            <p>公司地址：北京市朝阳区酒仙桥路甲4号宏源大厦14层</p>
            <p>经营许可证编号： <a href="http://www.miitbeian.gov.cn/">沪ICP备18048291号-1</a></p>
            <p>Copyright©2018北京章鱼帝传媒科技有限公司.All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
    export default {
        components:{
            Swipe,
            SwipeItem
        },
        methods: {
            // 判断微信环境
            isWeiXin() {
                return (/MicroMessenger/i).test(navigator.userAgent)
            },
            // 判断IOS环境
            isIOS() {
                var ua = navigator.userAgent || navigator.vendor || window.opera
                return /ip(hone|od|ad)/i.test(ua)
            },

            downIos() {
                // console.log('IOS');
                window.location.href = 'http://www.pgyer.com/5I5E'
            },
            downAndroid(){
                // console.log('Android');
                if (this.isWeiXin()) {
                    alert('请在第三方浏览器中打开下载！');
                    return
                }
                window.location.href = 'http://www.zhangyusport.com/web_app/octopusboss_v1.0.0.apk?time=123457';
            }
        },
    }




    
</script>

<style scoped lang='scss'>

    .mobile{
        background-color: #383838;
    }
    .carousel-item{
        width: 100%;
        height: 10rem;
        overflow: hidden;
        background: url('../../static/img/mobile/bg.jpg') no-repeat;
        background-size:100% 108%; 
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .app-logo{
            width: 1.76rem;
            height: 1.76rem;
            background: url('../../static/img/mobile/logo@2x.png') no-repeat;
            background-size:100% 100%; 
            position: absolute;
            top: 0.4rem;
            left: 50%;
            transform: translateX(-50%)
        }
        .app-name{
            width: 1.34rem;
            height: 0.43rem;
            background: url('../../static/img/mobile/章鱼帝-名称@2x.png') no-repeat;
            background-size:100% 100%; 
            position: absolute;
            top: 2.56rem;
            left: 50%;
            transform: translateX(-50%)
        }
        .app-page{
            width: 3.9rem;
            overflow: hidden;
            position: absolute;
            top: 3.3rem;
            left: 50%;
            transform: translateX(-50%);
        }
        .app-poster{
            width: 6rem;
            height: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background:rgba(51,51,51,1);
            opacity:0.9;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .one{
            width: 2.38rem;
            height: 0.4rem;
            background: url('../../static/img/mobile/章鱼从未走远@2x.png');
            background-size:100% 100%; 
        }
        .two{
            width: 3.57rem;
            height: 0.4rem;
            background: url('../../static/img/mobile/一天到晚看球的我们@2x.png');
            background-size:100% 100%; 
        }
        .three{
            width:1.58rem;
            height: 0.4rem;
            margin-top: 0.2rem;
            background: url('../../static/img/mobile/永不停歇@2x.png');
            background-size:100% 100%; 
        }
    }
    .content{
        background-color: #292929;
        padding-bottom: 0.7rem;
        .title{
            font-family:PingFang-SC-Bold;
            color:rgba(255,255,255,1);
            div{
                text-align: center;
                i{
                    display: inline-block;
                    width:0.1rem;
                    height:0.1rem;
                    transform: rotateZ(45deg);
                    background-color: #fff;
                    margin: 0 0.1rem;
                }
            }
            div:nth-child(1){
                display: flex;
                justify-content: center;
                align-items: center;
                font-size:0.48rem;
                font-weight:bold;
                padding-top: 0.72rem;
            }
            div:nth-child(2){
                font-size:0.24rem;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                margin-top: 0.3rem;
            }
        }
        .img{
            width: 7.5rem;
            height: 6.36rem;
            overflow: hidden;
            margin: auto;
            margin-top: 0.4rem;
            background: url('../../static/img/mobile/app@2x.png') no-repeat center;
            background-size:86% 100%;; 
        }
    }
    .down-app{
        
        .click-btn{
            font-size:0.26rem;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1.8rem;
            background-color: #DEDFE7;
            .btn{
                width:2.92rem;
                height:0.8rem;
                background:rgba(0,0,0,1);
                border-radius:0.4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                i{
                    display: block;
                    content: '';
                    width:0.04rem;
                    height:0.27rem;
                    background:rgba(255,255,255,1);
                    border-radius:0.02rem;
                    background-color: #fff;
                }
                img{
                    width: 0.42rem;
                    height: 0.46rem;
                }
            }
            .ios{
                i{
                    margin-left: 0.22rem;
                    margin-right: 0.2rem;
                }
                img{
                    width: 0.36rem;
                    margin-bottom: 0.1rem;
                }
            }
            .android{
                margin-right:0.44rem; 
                i{
                    margin-left: 0.22rem;
                    margin-right: 0.2rem;
                }
            }
        }
    }
    
    .footer{
        width: 100%;
        font-size: 0.16rem;
        line-height: 1.9;
        font-family:PingFang-SC-Medium;
        font-weight:400;
        color:#666666;
        background:#DEDFE7;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.3rem 0;
        p{
            padding: 0;
            margin: 0;
            a{
                text-decoration: none;
                outline: 0;
                color: #666666;
            }
        }
    }
</style>
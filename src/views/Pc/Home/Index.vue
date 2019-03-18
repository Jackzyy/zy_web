<template>
    <div class="home">
        <div class="main">
            <div class="first-page">
                <div class="wd1200">
                    <img class="phone" src="@/static/img/pc/home/phone.png" alt="">
                    <img class="android" src="@/static/img/pc/home/pcandroid.png" @click="downAndroid" alt="">
                    <img class="ios" src="@/static/img/pc/home/pcios.png" @click="downIos" alt="">
                    <img class="sina" @click="goSina" src="@/static/img/pc/home/sina.png" alt="">
                    <img class="wx" src="@/static/img/pc/home/wx.png" alt="">
                </div>
            </div>
            <div class="second-page">
                <div class="wd1200">
                    <span>来自世界各地的体育活动</span>
                    <span>体育球迷<i></i>必备神器</span>
                    <img class="phone" src="@/static/img/pc/home/app.png" alt="">
                </div>
            </div>
            <div class="third-page">
                <div class="info">
                    <span class="content-title">为球迷而生</span>
                    <div class="app-info">
                        <div class="info-item">
                            <img src="@/static/img/pc/home/info1.png" alt="">
                            <span class="text-one">足坛资讯</span>
                            <div class="info-bot">
                                <span class="text-two">滚动足坛资讯</span>
                                <span class="text-two">各大赛事详实报道</span>
                            </div>
                        </div>
                        <div class="info-item">
                            <img src="@/static/img/pc/home/info2.png" alt="">
                            <span class="text-one">权威数据</span>
                            <div class="info-bot">
                                <span class="text-two">opta官方合作伙伴</span>
                                <span class="text-two">主流赛事一网打尽</span>
                            </div>
                        </div>
                        <div class="info-item">
                            <img src="@/static/img/pc/home/info3.png" alt="">
                            <span class="text-one">足彩信息</span>
                            <div class="info-bot">
                                <span class="text-two">专家资讯应有尽有</span>
                                <span class="text-two">帮您实现红单达人梦</span>
                            </div>
                        </div>
                        <div class="info-item">
                            <img src="@/static/img/pc/home/info4.png" alt="">
                            <span class="text-one">我的主队</span>
                            <div class="info-bot">
                                <span class="text-two">定制专属支持球队</span>
                                <span class="text-two">时刻关注你的最爱</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="partner">
                    <span class="content-title">合作伙伴</span>
                    <div class="wd1200">
                        <img src="@/static/img/pc/home/partner1.png" alt="">
                        <img src="@/static/img/pc/home/partner2.png" alt="">
                        <img src="@/static/img/pc/home/partner3.png" alt="">
                        <img src="@/static/img/pc/home/partner4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            downIos() {
                // IOS端下载
                window.location.href = 'http://www.pgyer.com/5I5E'
            },
            downAndroid(){
                // 安卓端下载
                window.location.href = 'https://sj.qq.com/myapp/detail.htm?apkName=com.zhangyusport.king';
            },
            goSina(){
                //新浪跳转
                window.location.href = 'https://weibo.com/zhangyusportapp'
            }
        }
    }
</script>

<style scoped lang='scss'>
    .home{
        .main{
            margin-top: .6rem;
            .first-page{
                min-width: 12rem;
                height: 8.7rem;
                background: url('../../../static/img/pc/home/first-bg.jpg') center no-repeat;
                background-size: 100% 101%;
                .wd1200{
                    width: 12rem;
                    height: 8.7rem;
                    margin: auto;
                    position: relative;
                    // border: 1px solid #f00;
                    .phone{
                        width: 4rem;
                        height: 6.64rem;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                    .android{
                        width: 2.74rem;
                        height: 0.8rem;
                        position: absolute;
                        right: 0;
                        bottom: 1.65rem;
                        cursor: pointer;
                    }
                    .ios{
                        width: 2.74rem;
                        height: 0.8rem;
                        position: absolute;
                        right: 3rem;
                        bottom: 1.65rem;
                        cursor: pointer;
                    }
                    .sina{
                        width: 0.74rem;
                        height: 0.74rem;
                        position: absolute;
                        right: 0;
                        bottom: 0.46rem;
                        cursor: pointer;
                    }
                    .wx{
                        width: 0.74rem;
                        height: 0.74rem;
                        position: absolute;
                        right: 1.2rem;
                        bottom: 0.46rem;
                        cursor: pointer;
                    }
                }
            }
            .second-page{
                background: url('../../../static/img/pc/home/second-bg.png') center no-repeat;
                background-size: 101% 101%;
                .wd1200{
                    width: 11.7rem;
                    height: 14rem;
                    margin: auto;
                    color: #fff;
                    span:nth-child(1){
                        display: block;
                        font-size:0.3rem;
                        text-align: center;
                        padding-top: 0.8rem;
                    }
                    span:nth-child(2){
                        font-size:0.6rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 0.3rem;
                        i{
                            display: inline-block;
                            width:0.1rem;
                            height:0.1rem;
                            transform: rotateZ(45deg);
                            background-color: #fff;
                            margin: 0 0.2rem;
                        }
                    }
                    img{
                        width: 100%; 
                        margin-top: 1.28rem;
                        margin-left: .3rem;
                    }
                }
            }
            .third-page{
                text-align: center;
                .info{
                    background-color: #F1F2F3;
                    padding-bottom: 1rem;
                    .content-title{
                        display: block;
                        font-size: 0.6rem;
                        font-weight:800;
                        color: #333333;
                        padding-top: 1rem;
                    }
                    .app-info{
                        width: 12rem;
                        display: flex;
                        justify-content: space-between;
                        margin: auto;
                        margin-top: 1rem;
                        .info-item{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            img{
                                display: block;
                                width: 1.4rem;
                                height: 1.4rem;
                            }
                            .text-one{
                                display: block;
                                font-size:0.44rem;
                                font-weight:400;
                                margin-top: 0.7rem;
                            }
                            .info-bot{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                margin-top: 0.8rem;
                                .text-two{
                                    display: block;
                                    font-size:0.29rem;
                                    font-weight:400;
                                }
                                span:nth-child(1){
                                    margin-bottom: 0.4rem;
                                }
                            }
                        }
                    }
                }
                .partner{
                    background-color: #fff;
                    padding: 0.6rem 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .content-title{
                        display: block;
                        font-size: 0.6rem;
                        font-weight:800;
                        color: #333333;
                    }
                    .wd1200{
                        width: 12rem;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 0.67rem;
                        img{
                            width: 2.1rem;
                            height: 2.1rem;
                        }
                    }
                }
            }
        }
        
    }
</style>
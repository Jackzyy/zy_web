<template>
    <footer>
        <div class="wd1200">
            <div class="footer-info">
                <span>京ICP备16003026号-1 | 隐私政策 |</span>
                <span>公司地址：北京市朝阳区酒仙桥路甲4号宏源大厦14层</span>
                <span>经营许可证编号： <a href="http://www.miitbeian.gov.cn/">沪ICP备18048291号-1</a></span>
                <span>Copyright©2018北京章鱼帝传媒科技有限公司.All Rights Reserved</span>
            </div>
            <div class="footer-nav">
                <span @click="handleJoin">加入我们</span>
                <span @click="handleJoin">关于我们</span>
                <span @click="handleJoin">联系合作</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods: {
            handleJoin() {
                this.$router.push('/wemedia/aboutus')
            }
        },
    }
</script>

<style scoped lang='scss'>
    footer{
        width:100%;
        font-size:0.18rem;
        background:#1A1A1A;
        text-align: center;
        color:#666666;
        line-height: 2;
        padding: 0.3rem 0;
        span{
            display: block;
        }
        a{
            text-decoration: none;
            outline: 0;
            color: #8392FE;
        }
        .wd1200{
            width: 12rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
            .footer-info{
                text-align: left;
            }
            .footer-nav{
                color: #fff;
                font-size: 0.16rem;
                line-height: 2.5;
                margin-right: 2.5rem;
                span{
                    cursor: pointer;
                }
            }
        }
    }
</style>
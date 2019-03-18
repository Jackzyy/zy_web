<template>
  <div class="aboutus">
    <div class="main">
      <div class="title">
        <h2>关于我们</h2>
        <h3>About us</h3>
      </div>
      <div class="content">
        <p>北京章鱼帝传媒科技有限公司成立于2019年1月，旗下章鱼帝APP于1月正式发布。定位于集足球资讯、足球比分、足球数据于一体的足球APP；提供足球资讯报道、足球比分直播及数据分析。</p>
        <p>亮点：海量赛事报道，专业数据分析，为球迷而生！</p>
      </div>
      <div class="title">
        <h2>联系我们</h2>
        <h3>Contact us</h3>
      </div>
      <div class="content">
        <p>官网：zhangyusport.com</p>
        <p>公众号：章鱼帝（zhangyusport）</p>
        <p>微博：@章鱼帝APP</p>
      </div>
      <div class="title">
        <h2>合作</h2>
        <h3>Cooperation</h3>
      </div>
      <div class="content">
        <p>联系方式：marketing@zhangyusport.com</p>
      </div>
      <div class="title">
        <h2>版权投诉/其他问题</h2>
        <h3>Issue</h3>
      </div>
      <div class="content">
        <p>联系方式：service@zhangyusport.com</p>
      </div>
      <div class="title">
        <h2>加入我们</h2>
        <h3>Join us</h3>
      </div>
      <div class="content">
        <p>请发简历至：hr@zhangyusport.com</p>
      </div>
      <div class="title" id="address">
        <h2>公司地址</h2>
        <h3>Company address</h3>
        <div class="bmap" ref="bmap"></div>
      </div>
    </div>
    <footer>
        <p>Copyright©2018北京章鱼帝传媒科技有限公司.All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              
            }
        },
        methods: {

            // 百度地图
            bMap(){
                var map = new BMap.Map(this.$refs.bmap);          // 创建地图实例  
                map.centerAndZoom(new BMap.Point(116.497327,39.991244), 18);// 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl({//添加地图类型控件
                    mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                    ]}));
                map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

                var opts = {    
                    width : 250,     // 信息窗口宽度    
                    height: 100,     // 信息窗口高度    
                    title : "北京章鱼帝传媒科技有限公司"  // 信息窗口标题   
                }    
                var content = "<p style='line-height:1.5'>北京市朝阳区酒仙桥路甲4号宏源大厦14层</p>"
                var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象  
                map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
            }
        },
        mounted(){
            this.bMap()
        }
    };
</script>

<style scoped lang='scss'>
.aboutus {
  .main {
    width: 12rem;
    margin: auto;
    margin-top: 1rem;
    p {
      line-height: 2;
      color: #696969;
    }
    h3{
        color: #A9A9A9;
    }
    .bmap{
        height: 5rem;
        margin-bottom: 1rem;
    }
  }
  footer{
      font-size: 0.2rem;
      color: #696969;
      text-align: center;
      margin-bottom: .8rem;
  }
}
</style>
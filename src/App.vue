<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import device from 'current-device'
export default {
  methods: {
    controller() {
      if(device.mobile()){
        (function(doc, win) {
          var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function() {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              if (clientWidth >= 750) {
                  docEl.style.fontSize = '100px';
              } else {
                  docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
              }
          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
        
      }else{
        (function(doc, win) {
          var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function() {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              if (clientWidth <= 1200) {//小于1200px固定大小
                  docEl.style.fontSize = '60px';
              } else {
                  docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
              }

              // var clientWidth = docEl.clientWidth;
              // if (!clientWidth) return;
              // if (clientWidth < 1200) {//小于1200px固定大小
              //     docEl.style.fontSize = '60px';
              // }else if(1200 < clientWidth && clientWidth < 1500){
              //     docEl.style.fontSize = '80px';
              // }else{
              //   docEl.style.fontSize = '100px';
              // }

          };
          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
      }
    }
  },
  mounted(){
    this.controller()
  }
}
</script>

<style lang='scss'>
  #app{
    font-family: '微软雅黑';
    font-size: 18px;
  }
  input{
    line-height: 1;
  }
  #nprogress .bar {
    background: red !important; //自定义颜色
  }
</style>

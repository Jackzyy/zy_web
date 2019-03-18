<template>
  <div class="home">
    <div class="menu">
      <div :class="index == 1? 'item-active':'item'" @click="changeIndex(1)">文章管理</div>
      <div class="line"></div>
      <div :class="index == 2? 'item-active':'item'" @click="changeIndex(2)">发布文章</div>
      <div class="line"></div>
      <div :class="index == 3? 'item-active':'item'" @click="changeIndex(3)">基本资料</div>
      <div class="line"></div>
      <div :class="index == 4? 'item-active':'item'" @click="changeIndex(4)">系统设置</div>
      <div class="line"></div>
      <div :class="index == 5? 'item-active':'item'" @click="changeIndex(5)">我的二维码</div>
      <div class="line"></div>
    </div>
    <div class="main-right">
      <MyArt v-if="index == 1"></MyArt>
      <PushArt v-if="index == 2"></PushArt>
      <BaseInfo v-if="index == 3"></BaseInfo>
      <Setting v-if="index == 4"></Setting>
    </div>
  </div>
</template>

<script>
import Setting from './Setting';
import PushArt from './PushArt';
import BaseInfo from './BaseInfo';
import MyArt from './MyArt';
  export default {
    components:{
      PushArt,
      BaseInfo,
      MyArt,
      Setting
    },
    data() {
      return {
        index:1
      }
    },
    methods: {
      changeIndex(index){
        this.index = index
      }
    },
  }
</script>

<style scoped lang='scss'>
  .home{
    width: 12rem;
    min-height: 10rem;
    margin: auto;
    margin-top: .8rem;
    margin-bottom: 0.2rem;
    display: flex;
    box-shadow: 0px 0px 3px #999;
    .menu{
      width: 2rem;
      height: 100%;
      margin-top: 60px;
      .item{
        font-size: 0.16rem;
        text-align: center;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 3px;
      }
      .item-active{
        font-size: 0.16rem;
        text-align: center;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-right: 3px solid red;
      }
      .line{
        width: 80%;
        height: 1px;
        background-color: #e9e9e9;
        margin: 20px auto;
      }
    }
    .main-right{
      width: 10rem;
      padding:40px 20px;
      box-shadow: 0px 0px 3px #999;
      box-sizing: border-box;
    }
  }
</style>
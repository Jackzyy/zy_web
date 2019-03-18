<template>
  <div class="push-article">
    <div class="form">
      <el-form :model="pushArtForm" label-position="top" label-width="80px">
        <el-form-item :required="true" label="文章标题 （必填，最多28个字）：">
          <el-input v-model="pushArtForm.title"></el-input>
        </el-form-item>
        <el-form-item :required="true" label="缩略图 （必填，首页列表缩略图，尺寸建议 240*180）：">
          <div class="up-thumb">
            <div class="thumb">
              <img :src="thumbPrivew == ''?pushArtForm.thumbnail:thumbPrivew" alt="">
            </div>
            <input style="display:none" accept="image/*" name="img" id="upload_Thumb" type="file" @change="selsctedThumb">
            <span class="up-thumb-btn" @click="openThumb">上传</span>
          </div>
        </el-form-item>
        <el-form-item :required="true" label="正文内容 ：">
          <div class="ue">
            <VueUeditorWrap v-model="pushArtForm.content" :defaultMsg="pushArtForm.content" :config="config"></VueUeditorWrap>
          </div>
        </el-form-item>
        <el-form-item :required="true" label="话题(不带#搜索下拉出现#说明存在话题，不存在话题搜索点击 add 新增话题) ：">
          <el-input v-model="pushArtForm.topic"></el-input>
        </el-form-item>
        <el-form-item :required="true" label="作者 ：">
          <el-input v-model="pushArtForm.author"></el-input>
        </el-form-item>
        <el-form-item class="sub-btn">
            <span class="pushArticle" @click="pushArt">发表</span>
          <span class="saveArticle" @click="saveArt">保存为草稿</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
  export default {
    components: {VueUeditorWrap},
    props:{
        newsId:Number
    },
    data() {
      return {
        defaultMsg: '',
        config: {
          initialFrameWidth:'100%',
          initialFrameHeight: 350,
          autoHeightEnabled: false,
          zIndex:1,
          toolbars: [
              ['preview', 'forecolor', 'bold', 'italic', 'underline', 'simpleupload','insertvideo']
          ],
          
        },
        ue1: "ue1", // 不同编辑器必须不同的id

        thumbPrivew:'', //图片本地预览地址Base64

        pushArtForm:{
          title:'',
          content:'',
          thumbnail:'',
          aid:'',
          type:'',
          author:'',
          topic:'',
        }
      }
    },
    methods: {
      openThumb(){
        document.getElementById("upload_Thumb").click();
      },
      selsctedThumb(){
        var file = document.getElementById("upload_Thumb").files[0];
        this.pushArtForm.thumbnail = file
        let _this = this
        if(window.FileReader) {
            var reader = new FileReader(); 
            //将文件以Data URL形式读入页面 
            reader.readAsDataURL(file); 
            reader.onload=function(e){ 
                //显示文件 
                _this.thumbPrivew = e.target.result
            } 
        }else {
            alert("Not supported by your browser!");
        }
      },

    getArt(){
        this.$axios.post('v2/article/editArticle',{
            aid:this.newsId
        },{
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
            console.log(res);
            if(res.code == 0){
                this.pushArtForm = res.data
            }
        })
      },

      pushArt(){//编辑文章
        let pushArtForm = new FormData()
        pushArtForm.append('title',this.pushArtForm.title)
        pushArtForm.append('content',this.pushArtForm.content)
        pushArtForm.append('thumbnail',this.pushArtForm.thumbnail)
        pushArtForm.append('aid',this.newsId)
        pushArtForm.append('type',1)
        pushArtForm.append('author',this.pushArtForm.author)
        pushArtForm.append('topic',this.pushArtForm.topic)
    
        this.$axios.post('/v2/article/pushArticle',pushArtForm).then(res =>{
          if(res.code == 0){
            this.$notify({
              title: '提示',
              message: '发布成功',
              type: 'success'
            }); 
          }else{
            this.$notify({
              title: '提示',
              message: '发布失败',
              type: 'error'
            }); 
          }
        })
      },
      saveArt(){//保存为草稿
        let pushArtForm = new FormData()
        pushArtForm.append('title',this.pushArtForm.title)
        pushArtForm.append('content',this.pushArtForm.content)
        pushArtForm.append('thumbnail',this.pushArtForm.thumbnail)
        pushArtForm.append('aid',this.newsId)
        pushArtForm.append('type',2)
        pushArtForm.append('author',this.pushArtForm.author)
        pushArtForm.append('topic',this.pushArtForm.topic)
    
        this.$axios.post('/v2/article/pushArticle',pushArtForm).then(res =>{
          if(res.code == 0){
            this.$notify({
              title: '提示',
              message: '保存成功',
              type: 'success'
            }); 
          }else{
            this.$notify({
              title: '提示',
              message: '保存失败',
              type: 'error'
            }); 
          }
        })
      }
    },
    watch:{
        newsId(value){
          this.pushArtForm.aid = value
          this.getArt()
        }
    },
  }
</script>

<style scoped lang='scss'>
    .push-article{
      .title{
        font-size: 18px;
        font-weight: 800;
        margin: 10px 0;
      }
      .ue{
        width: 9rem;
        height: 400px;
        font-size: 16px;
        line-height: 1;
        border: 1px solid #d4d4d4;
      }
      .pushArticle{
        display: inline-block;
        width: 100px;
        height: 40px;
        border: 1px solid #000;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
      .saveArticle{
        display: inline-block;
        width: 100px;
        height: 40px;
        border: 1px solid #000;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
      }
      .sub-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          cursor: pointer;
        }
      }
    }
    .form{
      padding: 0 20px;
      .up-thumb{
        display: flex;
        .thumb{
          width: 2.4rem;
          height: 1.8rem;
          border: 1px solid #D62826;
          img{
            width: 100%;
            height: 100%
          }
        }
        .up-thumb-btn{
          height: 25px;
          line-height: 25px;
          padding: 5px 15px;
          border-radius: 5px;
          color: #D62826;
          border: 1px solid #D62826;
          cursor: pointer;
          margin-left: 20px;
        }
      }
    }
</style>
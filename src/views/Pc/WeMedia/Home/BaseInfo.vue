<template>
    <div class="base-info">
        <div class="title">
            <span>基本资料</span>
        </div>
        <div class="form">
            <el-form label-position="top" label-width="80px" :model="basicInfo">
                <el-form-item :required="true" label="章鱼号名称 （不可更改）：">
                    <el-input :disabled="true" v-model="basicInfo.account_name"></el-input>
                </el-form-item>
                <el-form-item :required="true" label="章球号介绍 （最多24个字）：">
                    <el-input v-model="basicInfo.introduce"></el-input>
                </el-form-item>
                <el-form-item :required="true" label="章球号icon （150x150）：">
                    <div class="icon">
                        <img class="user-header" :src="iconPrivew == ''?basicInfo.head_image:iconPrivew" alt="">
                        <input style="display:none" accept="image/*" name="img" id="upload_Icon" type="file" @change="selsctedIcon">
                        <span @click="openIcon">更改</span>
                    </div>
                </el-form-item>
                <el-form-item label="背景图 （750x385）：">
                    <div class="bg">
                        <img class="user-bg" :src="bgPriview == ''?basicInfo.bgimage:bgPriview" alt="">
                        <input style="display:none" accept="image/*" name="img" id="upload_Bg" type="file" @change="selsctedBg">
                        <span @click="openBg">更改</span>
                    </div>
                </el-form-item>
            </el-form>
        </div>  
        <div class="save">
            <span>保存</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                basicInfo: {},

                iconPrivew:'',
                bgPriview:'',
            }
        },
        methods: {
            getBasicInfo() {
                this.$axios.get('v2/basic/basic').then(res =>{
                    if(res.code == 0){
                        this.basicInfo = res.data
                    }  
                })
            },
            openIcon(){
                document.getElementById("upload_Icon").click();
            },
            selsctedIcon(){
                var file = document.getElementById("upload_Icon").files[0];
                this.basicInfo.head_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.iconPrivew = e.target.result
                    } 
                }else {
                    alert("Not supported by your browser!");
                }
            },
            openBg(){
                document.getElementById("upload_Bg").click();
            },
            selsctedBg(){
                var file = document.getElementById("upload_Bg").files[0];
                this.basicInfo.bgimage = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.bgPriview = e.target.result
                    } 
                }else {
                    alert("Not supported by your browser!");
                }
            },
        },
        created(){
            this.getBasicInfo()
        }
    }
</script>

<style scoped lang='scss'>
    .base-info{
        .title{
            font-size: 18px;
            font-weight: 800;
            margin: 10px 0;
        }
        .form{
            padding: 0 20px;
            .user-header{
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 30px;
            }
            .icon{
                display: flex;
                span{
                    height: 20px;
                    line-height: 20px;
                    padding: 5px 15px;
                    border-radius: 5px;
                    color: #D62826;
                    border: 1px solid #D62826;
                    cursor: pointer;
                    margin-left: 20px;
                }
            }
            .bg{
                .user-bg{
                    width: 7.5rem;
                    height: 3.85rem;
                    margin-left: 30px;
                }
                span{
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
        .save{
            display: flex;
            justify-content: center;
            span{
                border: 1px solid #000;
                padding: 5px 15px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
</style>
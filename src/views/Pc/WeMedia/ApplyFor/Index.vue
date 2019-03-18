<template>
    <div class="apply">
        <div class="apply-form">
            <div class="form">
                <div class="form-title">
                    申请章鱼号
                </div>
                <div class="option">
                    <div class="option-dsc">申请类型</div>
                    <div class="apply-type">
                        <div class="type">
                            <input name="type" checked="checked" type="radio" @click="changeType('1')">
                            <span>个人媒体申请</span>
                        </div>
                        <div class="type">
                            <input name="type" type="radio" @click="changeType('2')">
                            <span>团体媒体申请(包括但不限于媒体，组织机构，企业)</span>
                        </div>
                    </div>
                </div>
                <!-- 申请类型 -->
                <div class="type-person" v-show="type=='1'">
                    <div class="option">
                        <div class="option-dsc">章鱼号名称</div>
                        <input v-model="applyPerson.account_name" type="text" autocomplete="off" placeholder="不超过15个字符 , 请勿包含政治 , 色情 , 广告等违规信息 , 不可更改" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">章鱼号介绍</div>
                        <textarea v-model="applyPerson.introduce" rows="2" cols="13" placeholder="不超过24个字符 , 请勿包含政治 , 色情 , 广告等违规信息 , 请勿添加微博 , 微信 , QQ , 邮箱 , 手机号等联系方式"></textarea>
                    </div>
                    <div class="option upload-userpic">
                        <div class="option-dsc">章鱼号头像</div>
                        <div class="operator-userpic mgleft">
                            <div class="userImg">
                                <img :src="userImgPrivew" alt="">
                            </div>
                            <div class="userpic-up">
                                <div @click="openUserImg">上传</div>
                                <input style="display:none" accept="image/*" name="img" id="upload_userPic" type="file" @change="selsctedUserImg">
                                <div>
                                    <span>说明：图片尺寸150*150像素，大小不超过5M;</span>
                                    <span>请勿使用二维码，请勿在图中包含任何营销和联系信息</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="option-dsc">运营者姓名</div>
                        <input v-model="applyPerson.operator_name" type="text" autocomplete="off" placeholder="" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">运营者身份证号</div>
                        <input v-model="applyPerson.id_number" type="text" autocomplete="off" placeholder="真实运营者的身份证号" value="">
                    </div>
                    <div class="option id-pic">
                        <div class="option-dsc">运营者身份证照片</div>
                        <div class="operator-idpic mgleft">
                            <div class="idpic1">
                                <div class="upload-img">
                                    <img :src="cardImgPrivew" alt="">
                                </div>
                                <span>实例照片</span>
                            </div>
                            <div class="idpic2">
                                <span class="idpic2-title" @click="openIdImg">
                                    上传
                                    <input style="display:none" accept="image/*" name="img" id="upload_idCard" type="file" @change="selsctedIdImg">
                                </span>
                                <div>
                                    <span>要求：</span>
                                    <div class="idpic2-desc"> 
                                        <span>照片形式请参考下侧示例进行拍摄；</span>
                                        <span>身份证上的信息清晰可见；</span>
                                        <span>大小不超过5M；</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="option-dsc">联系QQ</div>
                        <input v-model="applyPerson.qq" type="text" autocomplete="off" placeholder="" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">联系邮箱</div>
                        <input v-model="applyPerson.mail" type="text" autocomplete="off" placeholder="请正确填写，申请通过的账户信息将通过邮件发送" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">设置密码</div>
                        <input v-model="applyPerson.pwd" type="password" autocomplete="off" placeholder="请输入6-18位密码" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">确认密码</div>
                        <input v-model="applyPerson.conpwd" type="password" autocomplete="off" placeholder="请再次输入密码" value="">
                    </div>
                    <div class="option">
                        <div class="phone-left">
                            <div class="option-dsc">运营者手机号</div>
                            <input v-model="applyPerson.phone" type="text" autocomplete="off" placeholder="" value="">
                            <div :class="isShow ==true ? 'send-code-normal':'send-code-active'">
                                <span  @click="sendCode" v-if="isShow">发送验证码</span>
                                <span v-else>{{sendTime}}</span>
                            </div>
                        </div>
                        <div class="phone-right">
                            <div class="auth-code">验证码</div>
                            <input v-model="applyPerson.code" type="text" autocomplete="off" placeholder="" value="">
                        </div>
                    </div>
                </div>
                <div class="type-group" v-show="type=='2'">
                    <div class="option">
                        <div class="option-dsc">章鱼号名称</div>
                        <input v-model="applyGroup.account_name" type="text" autocomplete="off" placeholder="不超过15个字符 , 请勿包含政治 , 色情 , 广告等违规信息 , 不可更改" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">章鱼号介绍</div>
                        <textarea v-model="applyGroup.introduce" rows="2" cols="13" placeholder="不超过24个字符 , 请勿包含政治 , 色情 , 广告等违规信息 , 请勿添加微博 , 微信 , QQ , 邮箱 , 手机号等联系方式"></textarea>
                    </div>
                    <div class="option upload-userpic">
                        <div class="option-dsc">章鱼号头像</div>
                        <div class="operator-userpic mgleft">
                            <div class="userImg">
                                <img :src="userImgPrivewG" alt="">
                            </div>
                            <div class="userpic-up">
                                <div @click="openUserImgG">上传</div>
                                <input style="display:none" accept="image/*" name="img" id="upload_userPicG" type="file" @change="selsctedUserImgG">
                                <div>
                                    <span>说明：图片尺寸150*150像素，大小不超过5M;</span>
                                    <span>请勿使用二维码，请勿在图中包含任何营销和联系信息</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="option-dsc">团体名称</div>
                        <input v-model="applyGroup.tem_name" type="text" autocomplete="off" placeholder="" value="">
                    </div>
                    <div class="option id-pic">
                        <div class="option-dsc">团体身份证明</div>
                        <div class="operator-idpic mgleft">
                            <div class="idpic1">
                                <div class="upload-img">
                                    <img :src="licenseImgPrivewG" alt="">
                                </div>
                                <span>组织机构代码证或者企业营业执照照片</span>
                            </div>
                            <div class="idpic2">
                                <span class="idpic2-title" @click="openLicenseImgG">上传</span>
                                <input style="display:none" accept="image/*" name="img" id="upload_licenseG" type="file" @change="selsctedLicenseImgG">
                                <div>
                                    <span>要求：</span>
                                    <div class="idpic2-desc"> 
                                        <span>照片形式请参考下侧示例进行拍摄；</span>
                                        <span>身份证上的信息清晰可见；</span>
                                        <span>大小不超过5M；</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="option-dsc">运营者姓名</div>
                        <input v-model="applyGroup.operator_name" type="text" autocomplete="off" placeholder="" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">运营者身份证号</div>
                        <input v-model="applyGroup.id_number" type="text" autocomplete="off" placeholder="真实运营者的身份证号" value="">
                    </div>
                    <div class="option id-pic">
                        <div class="option-dsc">运营者身份证照片</div>
                        <div class="operator-idpic mgleft">
                            <div class="idpic1">
                                <div class="upload-img">
                                    <img :src="cardImgPrivewG" alt="">
                                </div>
                                <span>实例照片</span>
                            </div>
                            <div class="idpic2">
                                <span class="idpic2-title" @click="openIdImgG">上传</span>
                                <input style="display:none" accept="image/*" name="img" id="upload_idCardG" type="file" @change="selsctedIdImgG">
                                <div>
                                    <span>要求：</span>
                                    <div class="idpic2-desc"> 
                                        <span>照片形式请参考下侧示例进行拍摄；</span>
                                        <span>身份证上的信息清晰可见；</span>
                                        <span>大小不超过5M；</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="option">
                        <div class="option-dsc">联系QQ</div>
                        <input v-model="applyGroup.qq" type="text" autocomplete="off" placeholder="" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">联系邮箱</div>
                        <input v-model="applyGroup.mail" type="text" autocomplete="off" placeholder="请正确填写，申请通过的账户信息将通过邮件发送" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">设置密码</div>
                        <input v-model="applyGroup.pwd" type="password" autocomplete="off" placeholder="请输入6-18位密码" value="">
                    </div>
                    <div class="option">
                        <div class="option-dsc">确认密码</div>
                        <input v-model="applyGroup.conpwd" type="password" autocomplete="off" placeholder="请再次输入密码" value="">
                    </div>
                    <div class="option">
                        <div class="phone-left">
                            <div class="option-dsc">运营者手机号</div>
                            <input v-model="applyGroup.phone" type="text" autocomplete="off" placeholder="" value="">
                            <div :class="isShow ==true ? 'send-code-normal':'send-code-active'">
                                <span v-if="isShow" @click="sendCode">发送验证码</span>
                                <span v-else>{{sendTime}}</span>
                            </div>
                        </div>
                        <div class="phone-right">
                            <div class="auth-code">验证码</div>
                            <input v-model="applyGroup.code" type="text" autocomplete="off" placeholder="" value="">
                        </div>
                    </div>
                </div>

                <div class="sub-btn" @click="goRegister">
                    提交
                </div>
                <div class="agreement">
                    <input type="checkbox" @change="checked">
                    我已经阅读并同意
                    <a href="#">章鱼号用户协议</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: '1',
                isShow: true,       //验证码显示控制
                sendTime:59,        //验证码计时  
                
                cardImgPrivew:'',   //个人身份证图片预览
                userImgPrivew:'',   //个人头像上传预览

                licenseImgPrivewG:'',//营业执照图片预览
                cardImgPrivewG:'',   //团体身份证图片预览
                userImgPrivewG:'',   //团体头像上传预览

                isAgree:'',          //勾选协议

                // 个人申请表单字段
                applyPerson:{
                    account_name: '章鱼号',
                    introduce: '章鱼号测试',
                    head_image: '', 
                    operator_name: '章鱼号',
                    id_number: '411421199512251615',
                    id_image: '',
                    qq:'2651818695',
                    mail:'2651818695@qq.com',
                    phone:'18610301595',
                    code:'',
                    pwd:'',
                    conpwd:''
                },

                // 团体申请表单字段
                applyGroup:{
                    account_name: '章鱼号',
                    introduce: '章鱼号测试',
                    tem_name: '章鱼团体',
                    tem_image:'',
                    head_image: '',
                    operator_name: '章鱼号',
                    id_number: '411421199512251615',
                    id_image: '',
                    qq:'2651818695',
                    mail:'2651818695@qq.com',
                    phone:'18610301595',
                    code:'',
                    ad_type: '1',
                    pwd:'',
                    conpwd:''
                },
            }
        },
        methods: {
            changeType(value) {//类型切换
                this.type = value
            },
            checked(e){//同意协议
                this.isAgree = e.target.checked
            },

            /* 个人申请JS方法 Start */
            openIdImg(){ //打开身份证文件
                document.getElementById("upload_idCard").click();
            },
            openUserImg(){ //打开用户头像文件
                document.getElementById("upload_userPic").click();
            },
            selsctedUserImg(){ //选中用户头像
                var file = document.getElementById("upload_userPic").files[0];
                this.applyPerson.head_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面 
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.userImgPrivew = e.target.result
                    } 
                }else {
                    alert("Not supported by your browser!");
                }
            },
            selsctedIdImg(){ //选中身份证照片
                var file = document.getElementById("upload_idCard").files[0];
                this.applyPerson.id_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面 
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.cardImgPrivew = e.target.result
                    } 
                }else {
                    alert("当前浏览器不支持图片预览，请更换谷歌浏览器！");
                }
            },
            /* 个人申请JS方法 End */

            /* 团体申请JS方法 Start */
            openLicenseImgG(){ //打开营业执照文件
                document.getElementById("upload_licenseG").click();
            },
            openIdImgG(){ //打开身份证文件
                document.getElementById("upload_idCardG").click();
            },
            openUserImgG(){ //打开用户头像文件
                document.getElementById("upload_userPicG").click();
            },
            selsctedLicenseImgG(){ //选中营业执照
                var file = document.getElementById("upload_licenseG").files[0];
                this.applyGroup.tem_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面 
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.licenseImgPrivewG = e.target.result
                    } 
                }else {
                    alert("Not supported by your browser!");
                }
            },
            selsctedUserImgG(){ //选中用户头像
                var file = document.getElementById("upload_userPicG").files[0];
                this.applyGroup.head_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面 
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.userImgPrivewG = e.target.result
                    } 
                }else {
                    alert("Not supported by your browser!");
                }
            },
            selsctedIdImgG(){ //选中身份证照片
                var file = document.getElementById("upload_idCardG").files[0];
                this.applyGroup.id_image = file
                let _this = this
                if(window.FileReader) {
                    var reader = new FileReader(); 
                    //将文件以Data URL形式读入页面 
                    reader.readAsDataURL(file); 
                    reader.onload=function(e){ 
                        //显示文件 
                        _this.cardImgPrivewG = e.target.result
                    } 
                }else {
                    alert("当前浏览器不支持图片预览，请更换谷歌浏览器！");
                }
            },
            /* 团体申请JS方法 End */

            /* 申请表单规则验证 Start */
            verify(form){
                if(this.isAgree){
                    for (const key in form) {
                        console.log(key,form[key]);
                        if(form[key] != ''){
                            if(key == 'id_number'){
                                let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                                if(!reg.test(form[key])){
                                    this.$notify({
                                        title: '提示',
                                        message: `身份证号输入错误`,
                                        type: 'error'
                                    });
                                    return false
                                }
                            }
                            if(key == 'qq'){
                                let reg = /[1-9][0-9]{4,}/
                                if(!reg.test(form[key])){
                                    this.$notify({
                                        title: '提示',
                                        message: `QQ号输入错误`,
                                        type: 'error'
                                    });
                                    return false
                                }
                            }
                            if(key == 'mail'){
                                let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                                if(!reg.test(form[key])){
                                    this.$notify({
                                        title: '提示',
                                        message: `邮箱输入错误`,
                                        type: 'error'
                                    });
                                    return false
                                }
                            }
                            if(key == 'pwd'){
                                let reg = /^[\w_-]{6,18}$/;
                                if(!reg.test(form[key])){
                                    this.$notify({
                                        title: '提示',
                                        message: `密码格式不正确`,
                                        type: 'error'
                                    });
                                    return false
                                }else{
                                    if(form.pwd != form.conpwd){
                                        this.$notify({
                                            title: '提示',
                                            message: `两次输入密码不一致`,
                                            type: 'error'
                                        });
                                        return false
                                    }
                                }
                            }
                        }else{
                            this.$notify({
                                title: '提示',
                                message: `请将表单填写完整`,
                                type: 'warning'
                            });
                            return false
                        } 
                    }
                }else{
                    this.$notify({
                        title: '提示',
                        message: '请勾选章鱼号用户协议',
                        type: 'warning'
                    });
                    return false
                }
            },
            /* 个人申请表单验证 End */

            goRegister(){ //提交注册
                if(this.type == '1'){//个人申请
                    if(this.verify(this.applyPerson) != false){
                        let formPerson = new FormData()
                        formPerson.append('account_name',this.applyPerson.account_name)
                        formPerson.append('introduce',this.applyPerson.introduce)
                        formPerson.append('head_image',this.applyPerson.head_image)
                        formPerson.append('operator_name',this.applyPerson.operator_name)
                        formPerson.append('id_number',this.applyPerson.id_number)
                        formPerson.append('id_image',this.applyPerson.id_image)
                        formPerson.append('qq',this.applyPerson.qq)
                        formPerson.append('mail',this.applyPerson.mail)
                        formPerson.append('phone',this.applyPerson.phone)
                        formPerson.append('pwd',this.applyPerson.pwd)
                        formPerson.append('code',this.applyPerson.code)

                        this.$axios.post('v2/wemedia/addMediaUser',formPerson).then(res =>{
                            this.$notify({
                                title: '提示',
                                message: '注册成功',
                                type: 'success'
                            }); 
                        }).catch(err =>{
                            this.$notify({
                                title: '提示',
                                message: `${err}`,
                                type: 'error'
                            }); 
                        })
                    }
                }

                if(this.type == '2'){//团体申请
                    if(this.verify(this.applyGroup) != false){
                        let formGroup = new FormData()
                        formGroup.append('account_name',this.applyGroup.account_name)
                        formGroup.append('introduce',this.applyGroup.introduce)
                        formGroup.append('tem_name',this.applyGroup.tem_name)
                        formGroup.append('tem_image',this.applyGroup.tem_image)
                        formGroup.append('head_image',this.applyGroup.head_image)
                        formGroup.append('operator_name',this.applyGroup.operator_name)
                        formGroup.append('id_number',this.applyGroup.id_number)
                        formGroup.append('id_image',this.applyGroup.id_image)
                        formGroup.append('qq',this.applyGroup.qq)
                        formGroup.append('mail',this.applyGroup.mail)
                        formGroup.append('phone',this.applyGroup.phone)
                        formGroup.append('pwd',this.applyGroup.pwd)
                        formGroup.append('code',this.applyGroup.code)
                        formGroup.append('ad_type',this.applyGroup.ad_type)

                        this.$axios.post('v2/wemedia/addMediaUser',formGroup).then(res =>{
                            this.$notify({
                                title: '提示',
                                message: '注册成功',
                                type: 'success'
                            }); 
                        })
                    }
                }
            },
            
            sendCode() { //验证码倒计时
                let reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
                
                let phone = ''
                if(this.type == '1'){
                    phone = this.applyPerson.phone
                }else{
                    phone = this.applyGroup.phone
                }

                if(reg.test(phone)){
                    this.isShow = false
                    let time = setInterval(() => {//倒计时效果
                        this.sendTime--
                        if(this.sendTime == 0){
                            this.isShow = true
                            clearInterval(time)
                            this.sendTime = 59
                        }
                    }, 1000);
                    this.$axios.post('v2/sms/sendcode',{//发送手机验证
                        mobile: phone,
                        type: 7 
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
                        this.$notify({
                            title: '提示',
                            message: '验证码发送成功',
                            type: 'success'
                        });
                    })
                }else{
                    this.$notify({
                        title: '提示',
                        message: '请输入正确正确手机号',
                        type: 'warning'
                    });
                    return false
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .apply{
        background-color: #F1F2F3;
        font-size:0.22rem;
        .apply-form{
            width: 12rem;
            min-height: 10rem;
            background-color: #fff;
            margin: auto;
            border-top: 0.3rem solid #F1F2F3;
            border-bottom: 0.3rem solid #F1F2F3;
            .form{
                padding: 0.7rem 0.44rem;
                .form-title{
                    font-size:0.32rem;
                    font-weight:400;
                }
                .option{
                    display: flex;
                    align-items: center;
                    margin-top: 0.4rem;
                    .mgleft{
                        margin-left: 0.27rem;
                    }
                    .option-dsc{
                        font-size:0.22rem;
                        font-weight:bold;
                        width: 2rem;
                        text-align: right;
                    }
                    input::input-placeholder{
                        color: #898B94;
                    }
                    input{
                        width: 6.8rem;
                        margin-left: 0.27rem;
                        padding-top: 0.15rem;
                        padding-left: 0.15rem;
                        padding-bottom: 0.15rem;
                        font-size:0.2rem;
                        font-weight:400;
                        border: 2px solid #E3E3E3;
                        border-radius:4px;
                    }
                    .apply-type{
                        display: flex;
                        .type{
                            display: flex;
                            align-items: center;
                            input{
                                width: 0.2rem;
                                height: 0.2rem;
                                margin-right: 0.1rem;
                                cursor: pointer;
                            }
                        }
                    }
                    textarea{
                        width: 6.8rem;
                        line-height: 1.5;
                        margin-left: 0.27rem;
                        padding-top: 0.15rem;
                        padding-left: 0.15rem;
                        padding-bottom: 0.15rem;
                        font-size:0.2rem;
                        font-weight:400;
                        border: 2px solid #E3E3E3;
                        resize: none;
                    }
                    .operator-userpic{
                        .userImg{
                            width: 1.5rem;
                            height: 1.5rem;
                            border: 1px solid #000;
                            img{
                                width: 100%;
                            }
                        }
                        display: flex;
                        .userpic-up{
                            margin-left: 0.2rem;
                            div:nth-child(1){
                                font-size: 0.2rem;
                                width:0.56rem;
                                height:0.35rem;
                                color: #D62826;
                                text-align: center;
                                line-height: 0.35rem;
                                border:1px solid #D62826;
                                border-radius:4px;
                                cursor: pointer;
                            }
                            span{
                                line-height: 2;
                                display: block;
                                font-size:0.22rem;
                                font-weight:400;
                                color:#20243D;
                            }
                        }
                        
                    }
                    .operator-idpic{
                        display: flex;
                        .idpic1{
                            .upload-img{
                                width:3.5rem;
                                height:2.2rem;
                                border: 1px solid #000;
                                img{
                                    width: 100%;
                                    height: 100%
                                }
                            }
                           span{
                               font-size:0.18rem;
                               margin-top: 0.2rem;
                               display: flex;
                               justify-content: center;
                               color:#20243D;
                           }
                        }
                        .idpic2{
                            height:2.2rem;
                            margin-left: 0.2rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            #upload_file{
                                display: none;
                            }
                            span{
                                display: block;
                                font-size:0.22rem;
                                font-weight:400;
                                color: #898B94;
                            }
                            .idpic2-title{
                                display: block;
                                width:0.92rem;
                                height:0.52rem;
                                line-height: 0.52rem;
                                text-align: center;
                                font-size:0.24rem;
                                border:2px solid #D62826;
                                border-radius:4px;
                                color: #D62826;
                                cursor: pointer;
                            }
                            .idpic2-desc{
                                span{
                                    margin-top: 0.08rem;
                                }
                                
                            }
                        }
                    }
                    .phone-left{
                        display: flex;
                        align-items: center;
                        input{
                           width:1.7rem;
                        }
                        .send-code-normal{
                            font-size: 0.2rem;
                            color: #fff;
                            width:1.38rem;
                            height:0.48rem;
                            line-height: 0.48rem;
                            text-align: center;
                            background:#D62826;
                            border-radius:4px;
                            margin-left: 0.2rem;
                            cursor: pointer;
                        }
                        .send-code-active{
                            font-size: 0.2rem;
                            color: #fff;
                            width:1.38rem;
                            height:0.48rem;
                            line-height: 0.48rem;
                            text-align: center;
                            background:rgb(119, 119, 121);
                            border-radius:4px;
                            margin-left: 0.2rem;
                            cursor: pointer;
                        }
                    }
                    .phone-right{
                        display: flex;
                        align-items: center;
                        margin-left: .81rem;
                        .auth-code{
                            font-size: 0.2rem;
                        }
                        input{
                            width:1.7rem;
                            margin-left: 0.2rem;
                        }
                    }
                }
                .upload-userpic{
                    display: flex;
                    align-items: flex-start;
                    .option-dsc{
                        margin-top: 0.05rem;
                    }
                }
                .id-pic{
                    display: flex;
                    align-items: flex-start;
                    .option-dsc{
                        margin-top: 0.08rem;
                    }
                }
                .sub-btn{
                    font-size: 0.24rem;
                    color: #fff;
                    font-weight:bold;
                    width:1.48rem;
                    height:0.5rem;
                    line-height: 0.5rem;
                    text-align: center;
                    background:#D62826;
                    border-radius:4px;
                    margin: 0.8rem auto 0.3rem;
                    cursor: pointer;
                }
                .agreement{
                    width: 4rem;
                    height: 0.5rem;
                    font-size:0.18rem;
                    font-weight:500;
                    color:#20243D;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    a{
                        text-decoration: none;
                        color: #D62826;
                        margin-left: 0.1rem;
                    }
                    input{
                        width: 0.2rem;
                        height: 0.2rem;
                        margin-right: 0.05rem;
                    }
                }
            }
        }
    }
</style>
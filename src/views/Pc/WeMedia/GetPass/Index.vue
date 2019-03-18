<template>
    <div class="getpass">
        <div class="change-pwd">
            <div class="title">
                修改密码
            </div>
            <div class="change-nav">
                <div class="change-nav-item">
                    <div :class="changeState=='0'?'nav-item-active':'nav-item-normal'" @click="changeNav('0')">
                        <div>1</div>
                        <span>通过用户名</span>
                    </div>
                    <div :class="changeState=='1'?'nav-item-active':'nav-item-normal'" @click="changeNav('1')">
                        <div>2</div>
                        <span>通过手机号</span>
                    </div>
                </div>
            </div>
            <!-- 通过用户名 -->
            <div class="input-box" v-if="changeState == '0'">
                <input v-model="byName.account_name" type="text" autocomplete="off" placeholder="用户名" value="">
                <input v-model="byName.pwd" type="password" autocomplete="off" placeholder="请输入旧密码" value="">
                <input v-model="byName.newpwd" type="password" autocomplete="off" placeholder="请输入新密码" value="">
                <input v-model="byName.rnewpwd" type="password" autocomplete="off" placeholder="请确认新密码" value="">
                <div class="submit-btn" @click="changePwdByName">
                    提交
                </div>
            </div>
            <!-- 通过手机号 -->
            <div class="input-box" v-if="changeState == '1'">
                <input v-model="byPhone.phone" type="text" autocomplete="off" name="username" id="username" placeholder="运营者手机号" value="">
                <div class="auth-code">
                    <input type="text" v-model="byPhone.code" autocomplete="off" placeholder="请输入你的验证码" value="">
                    <div :class="isShow ==true ? 'normal':'active'">
                        <span  @click="sendCode" v-if="isShow">发送验证码</span>
                        <span v-else>{{sendTime}}</span>
                    </div>
                </div>
                <input v-model="byPhone.newpwd" type="password" autocomplete="off" placeholder="请输入新密码" value="">
                <input v-model="byPhone.rnewpwd" type="password" autocomplete="off" placeholder="请确认新密码" value="">
                <div class="submit-btn" @click="changePwdByPhone">
                    提交
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                changeState: '0',     //nav切换
                isShow: true,         //验证码计时显示
                sendTime:59,          //验证码计时

                byName:{
                    account_name:'章鱼号',
                    pwd:'123456',
                    newpwd:'1234567',
                    rnewpwd: '1234567'
                },
                byPhone:{
                    phone:'18610301595',
                    code:'',
                    newpwd:'1234567',
                    rnewpwd: '1234567'
                }
            }
        },
        methods: {
            changeNav(state) {
                this.changeState = state
            },

            verify(form){
                for (const key in form) {
                    if(form[key] != ''){
                        if(key == 'newpwd'){
                            let reg = /^[\w_-]{6,18}$/;
                            if(!reg.test(form[key])){
                                this.$notify({
                                    title: '提示',
                                    message: `密码格式不正确`,
                                    type: 'error'
                                });
                                return false
                            }else{
                                if(form.newpwd != form.rnewpwd){
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
            },
            changePwdByName(){
                if(this.verify(this.byName) != false){
                    this.$axios.post('v2/login/changbyname',this.byName,{
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
                            this.$notify({
                                title: '提示',
                                message: `修改成功`,
                                type: 'success'
                            });
                        }
                    })
                }
            },
            changePwdByPhone(){
                if(this.verify(this.byPhone) != false){
                    this.$axios.post('v2/login/changbycode',this.byPhone,{
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
                            this.$notify({
                                title: '提示',
                                message: `修改成功`,
                                type: 'success'
                            });
                        }
                    })
                }
            },
            sendCode() { //验证码倒计时
                let reg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
                let phone = this.byPhone.phone
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
                        type: 8
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
    .getpass{
        font-size: 0.24rem;
        border-top: 0.3rem solid #F1F2F3;
        border-bottom: 0.3rem solid #F1F2F3;
        background-color: #F1F2F3;
        .change-pwd{
            width:10rem;
            margin: auto;
            min-height:8rem;
            padding: 1.28rem 1rem;
            background-color: #FFFFFF;
        }
        .title{
            font-size:0.24rem;
            font-weight:bold;
        }
        .change-nav{
            .change-nav-item{
                display: flex;
                margin-top: 0.37rem;
                .nav-item-normal{
                    display: flex;
                    align-items: center;
                    padding: 0.12rem;
                    margin-right: 0.4rem;
                    border-bottom: 0.02rem solid #FFFFFF;
                    cursor: pointer;
                    div{
                        font-size:0.2rem;
                        width:0.26rem;
                        height:0.26rem;
                        line-height: 0.26rem;
                        text-align: center;
                        border:1px solid #3C3E51;
                        border-radius:50%;

                    }
                    span{
                        font-size:0.2rem;
                        font-weight:500;
                        color:#3C3E51;
                        margin-left: 0.1rem;
                    }
                }
                .nav-item-active{
                    display: flex;
                    align-items: center;
                    border-bottom: 0.02rem solid #D62826;
                    padding: 0.12rem;
                    margin-right: 0.4rem;
                    cursor: pointer;
                    div{
                        font-size:0.2rem;
                        width:0.26rem;
                        height:0.26rem;
                        line-height: 0.26rem;
                        text-align: center;
                        border:1px solid #D62826;
                        border-radius:50%;
                        color: #D62826;
                    }
                    span{
                        font-size:0.2rem;
                        font-weight:500;
                        color:#D62826;
                        margin-left: 0.1rem;
                    }
                }
            }
        }
        .input-box{
            display: flex;
            flex-direction: column;
            input{
                width: 4.2rem;
                margin-top: 0.4rem;
                padding-top: 0.15rem;
                padding-left: 0.15rem;
                padding-bottom: 0.15rem;
                font-size:0.2rem;
                font-weight:400;
                border: 1px solid #F1F2F3;
            }
            input::input-placeholder{
                color: #898B94;
            }
            .auth-code{
                display: flex;
                input{
                    width: 2rem;
                }
                .normal{
                    font-size:0.18rem;
                    font-weight:400;
                    color:#FFFFFF;
                    width:1.21rem;
                    height:0.5rem;
                    line-height: 0.5rem;
                    text-align: center;
                    background:#D62826;
                    border-radius:0.04rem;
                    margin-top: 0.42rem;
                    margin-left: 0.27rem;
                    cursor: pointer;
                }
                .active{
                    font-size:0.18rem;
                    font-weight:400;
                    color:#FFFFFF;
                    width:1.21rem;
                    height:0.5rem;
                    line-height: 0.5rem;
                    text-align: center;
                    background:rgb(119, 119, 121);
                    border-radius:0.04rem;
                    margin-top: 0.42rem;
                    margin-left: 0.27rem;
                    cursor: pointer;
                }
            }
        }
        .submit-btn{
            font-size:0.24rem;
            width:2rem;
            height:0.5rem;
            line-height: 0.5rem;
            color: #FFFFFF;
            background:#D62826;
            border-radius:0.04rem;
            text-align: center;
            margin-top: 0.5rem;
            cursor: pointer;
        }
    }
</style>
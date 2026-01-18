<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const ruleForm = reactive({
    name: '',
    password: '',
})
const rules = {
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
    ],

}



const handleClick = () => {
    console.log('submit!')
}
const activeName = ref('first')
function onSubmit() {
    router.push('/index')
}
</script>
<!-- 模板结构 -->
<template>
    <div class="login">
        <el-form :model="ruleForm" :rules="rules">

            <div class="login-img">
                <img src="@/assets/image/zhihu.png" alt="">
            </div>
            <div class="login-item">
                <div class="loginleft">
                    <p class="loginleft-title">打开知乎app</p>
                    <div class="logleft-erm">
                        <img src="@/assets/image/erm.png" alt="">
                    </div>
                    <p class="loginleft-message">其他扫码方式：微信</p>
                    <ul>
                        <li><el-button round>下载知乎app</el-button></li>
                        <li><el-button round>开通机构号</el-button></li>
                        <li><el-button round>无障碍模式</el-button></li>
                    </ul>
                </div>
                <div class="loginright">
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                        <el-tab-pane label="账号登录" name="first">
                            <el-form-item prop="name">
                                <el-input v-model="ruleForm.name" maxlength="16" placeholder="请输入手机号/用户名" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" maxlength="16"
                                    placeholder="请输入密码" />
                            </el-form-item>
                            <el-button type="primary" @click="onSubmit">登录</el-button>
                            <div class="otherwise">
                                <div class="otherwise-title">其他方式登录</div>
                                <ul>
                                    <li>
                                        <svg class="icon-font">
                                            <use xlink:href="#icon-weixin1"></use>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg class="icon-font">
                                            <use xlink:href="#icon-QQ1"></use>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg class="icon-font">
                                            <use xlink:href="#icon-weibo"></use>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="注册" name="second">
                            <el-input v-model="ruleForm.input3" maxlength="16" placeholder="请输入手机号/用户名" />
                            <div class="code-btn">
                                <el-input v-model="ruleForm.input4" maxlength="16" placeholder="请输入验证码" />
                                <el-link type="primary">获取验证码</el-link>
                            </div>
                            <el-input v-model="ruleForm.input5" maxlength="16" type="password" placeholder="请输入密码" />
                            <el-button type="primary" @click="onSubmit">注册</el-button>
                            <p class="agreement">注册即代表同意用户协议</p>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-form>
    </div>

</template>
<style scoped></style>
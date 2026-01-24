<!-- <script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
const router = useRouter()
//登陆表单数据
const ruleForm = reactive({
    username: '',
    password: '',
})
//注册表单数据
const registerForm = reactive({
    username: '',
    password: '',
    confirmPassword: ''
})
const rules = {
    username: [
        { required: true, message: 'Please input Activity username', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input Activity password', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
    ],
}
const registerRules = {
    username: [
        { required: true, message: 'Please input Activity username', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Please input Activity password', trigger: 'blur' },
        { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: 'Please Confirm password', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== registerForm.password) {
                    callback(new Error('The two passwords do not match!'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ]
}
const { proxy } = getCurrentInstance();
const handleClick = () => {
    console.log('submit!')
}
const activeName = ref('first')
async function onSubmit() {
    try {
        // 发送 POST 请求到 /api/login
        console.log(JSON.stringify(ruleForm))
        const response = await axios.post('/api/login', JSON.stringify(ruleForm));

        // 接收后端返回的 JSON 数据
        const result = response.data;
        console.log('后端返回:', response);
        console.log('后端返回:', response.sta);
        // 根据业务逻辑处理数据
        if (result.status === 200) {
            // 登录成功，保存 token
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
            router.push('/index')
        } else {
            // 登录失败，显示错误信息
            alert(result.message || '登录失败');
        }
    } catch (error) {
        console.error('请求错误:', error);
        alert('请求失败，请重试');
    }
}
async function onRegister() {
    try {
        // 发送 POST 请求到 /api/login
        console.log(JSON.stringify(ruleForm))
        const response = await axios.post('/api/register', JSON.stringify(ruleForm));

        // 接收后端返回的 JSON 数据
        const result = response.data;
        console.log('后端返回:', response);
        console.log('后端返回:', response.sta);
        // 根据业务逻辑处理数据
        if (result.status === 200) {
            // 注册成功，保存 token
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
            router.push('/index')
        } else {
            // 注册失败，显示错误信息
            alert(result.message || '注册失败');
        }
    } catch (error) {
        console.error('请求错误:', error);
        alert('请求失败，请重试');
    }
}
</script>
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
                            <el-form-item prop="username">
                                <el-input v-model="ruleForm.username" maxlength="16" placeholder="请输入用户名" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" show-password maxlength="16"
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
                            <el-input v-model="registerForm.username" maxlength="16" placeholder="请输入用户名" />
                            <div class="code-btn">
                                <el-input v-model="registerForm.password" type="password" show-password maxlength="16"
                                    placeholder="请输入密码" />
                            </div>
                            <el-input v-model="registerForm.confirmPassword" maxlength="16" type="password" show-password
                                placeholder="请再次输入密码" />
                            <el-button type="primary" @click="onRegister">注册</el-button>
                            <p class="agreement">注册即代表同意用户协议</p>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-form>
    </div>

</template>
<style scoped></style> -->
<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';

const router = useRouter()

// 登陆表单数据
const ruleForm = reactive({
    username: '',
    password: '',
})

// 注册表单数据
const registerForm = reactive({
    username: '',
    password: '',
    confirmPassword: ''
})

const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 15, message: '长度在5到15个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 15, message: '长度在5到15个字符', trigger: 'blur' },
    ],
}

const registerRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 5, max: 15, message: '长度在5到15个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 5, max: 15, message: '长度在5到15个字符', trigger: 'blur' }
    ],
    confirmPassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        {
            validator: (rule, value, callback) => {
                if (value !== registerForm.password) {
                    callback(new Error('两次密码不一致!'))
                } else {
                    callback()
                }
            },
            trigger: 'blur'
        }
    ]
}

const { proxy } = getCurrentInstance();
const activeName = ref('first')

// 表单引用
const formRef = ref()

const handleClick = () => {
    console.log('切换tab:', activeName.value)
}

async function onSubmit() {
    try {
        // 验证登录表单
        if (!formRef.value) return

        // 只验证登录相关的字段
        const loginFields = ['username', 'password']
        let isValid = true
        for (const field of loginFields) {
            try {
                await formRef.value.validateField(field)
            } catch (error) {
                isValid = false
            }
        }

        if (!isValid) {
            return
        }

        const response = await axios.post('/api/login', {
            username: ruleForm.username,
            password: ruleForm.password
        });

        const result = response.data;
        console.log('登录返回:', result);

        if (result.status === 200) {
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
            router.push('/index')
        } else {
            alert(result.message || '登录失败');
        }
    } catch (error) {
        console.error('请求错误:', error);
        alert('请求失败，请重试');
    }
}

async function onRegister() {
    try {
        // 验证注册表单
        if (!formRef.value) return

        // 只验证注册相关的字段
        const registerFields = ['username', 'password', 'confirmPassword']
        let isValid = true
        for (const field of registerFields) {
            try {
                await formRef.value.validateField(field)
            } catch (error) {
                isValid = false
            }
        }

        if (!isValid) {
            return
        }

        // 发送注册数据
        const response = await axios.post('/api/register', {
            username: registerForm.username,
            password: registerForm.password
        });

        const result = response.data;
        console.log('注册返回:', result);

        if (result.status === 200) {
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
            router.push('/index')
        } else {
            alert(result.message || '注册失败');
        }
    } catch (error) {
        console.error('请求错误:', error);
        alert('请求失败，请重试');
    }
}
</script>

<template>
    <div class="login">
        <el-form ref="formRef" :model="activeName === 'first' ? ruleForm : registerForm"
            :rules="activeName === 'first' ? rules : registerRules">

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
                            <el-form-item prop="username">
                                <el-input v-model="ruleForm.username" maxlength="16" placeholder="请输入用户名" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="ruleForm.password" type="password" show-password maxlength="16"
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
                            <el-form-item prop="username">
                                <el-input v-model="registerForm.username" maxlength="16" placeholder="请输入用户名" />
                            </el-form-item>
                            <div class="code-btn">
                                <el-form-item prop="password">
                                    <el-input v-model="registerForm.password" type="password" show-password
                                        maxlength="16" placeholder="请输入密码" />
                                </el-form-item>
                            </div>
                            <el-form-item prop="confirmPassword">
                                <el-input v-model="registerForm.confirmPassword" maxlength="16" type="password"
                                    show-password placeholder="请再次输入密码" />
                            </el-form-item>
                            <el-button type="primary" @click="onRegister">注册</el-button>
                            <p class="agreement">注册即代表同意用户协议</p>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-form>
    </div>
</template>

<style scoped></style>
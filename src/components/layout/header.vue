<script setup>
import Menu from './menu.vue'
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();


import { useRouter } from 'vue-router';
async function getUserData() {
    const res = await proxy.$axios.get('/api/getMenus');
    console.log(res.data);
}

</script>

<template>
    <div class="header">
        <div class="appheader">
            <Menu />
            <div class="header-item">
                <div class="header-search">
                    <input type="text" placeholder="请输入内容">
                    <button class="iconfont icon-icon-sousuo"></button>

                </div>
                <el-button type="primary" round @click="getUserData">提问</el-button>
            </div>
            <div class="header-userinfo">
                <div class="popover">
                    <i class="iconfont icon-xiaoxi1"></i>
                    <div class="popover-num">10</div>
                    <p>消息</p>
                </div>
                <div class="popover">
                    <i class="iconfont icon-a-113_sixin
"></i>
                    <div class="popover-num">10</div>
                    <p>私信</p>
                </div>
                <div class="popover">
                    <i class="iconfont icon-bianjiwenzhang_huaban1"></i>
                    <p>创作中心</p>
                </div>
                <div class="header-profile">
                    <el-dropdown>
                        <img src="@/assets/vue.svg" alt="" class="el-dropdown-link">
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item><i class="iconfont icon-zhihu
"></i>个人中心</el-dropdown-item>
                                <el-dropdown-item><i class="iconfont icon-gengxin"></i>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
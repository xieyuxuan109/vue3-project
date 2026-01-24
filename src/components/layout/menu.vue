<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

const onSubmit = () => {
    console.log('submit!')
}

async function getUserData() {
    const res = await proxy.$axios.get('/getMenus');
    console.log(res.data);
}

const useMenus = ref([
    { name: '首页', url: '/index' },
    { name: '知乎学堂', url: '/education' },
    { name: '发现', url: '/explore' },
    { name: '等你来答', url: '/waiting' },
])
</script>

<template>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="0">
            <img src="/src/assets/image/zhihu.png" alt="" style="width: 80px">
        </el-menu-item>
        <el-menu-item :index="v.url" v-for="v in useMenus" :key="v.url">
            <span>{{ v.name }}</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped></style>
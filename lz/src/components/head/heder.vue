<template>
  <div class="header">
    <el-row style="width: 1200px;   margin: 0 auto;">
      <el-col :span="12">
        <router-link to="/home" class="left">乐购www.legou.com</router-link>
      </el-col>
      <el-col :span="12">
        <div class="right">
          <span>欢迎光临乐购</span>
          <span>
            请
            <router-link to="/login">登录</router-link>
            <span>|</span>
            <router-link to="/register">注册</router-link>
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "heder"
};
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  line-height: 40px;
  background-color: #000;
  color: #fff;
  box-sizing: border-box;
  .left {
    color: #fff;
  }
  .right {
    float: right;
  }
  a {
    text-decoration: none;
    color: #feb80f;
  }
}
</style>
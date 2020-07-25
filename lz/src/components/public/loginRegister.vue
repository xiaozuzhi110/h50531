<template>
  <div class="loginRegister">
    <div class="box">
      <div class="left">
        <router-link to="/home">
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=397385748,3693940230&fm=26&gp=0.jpg"
            alt
          />
        </router-link>
      </div>
      <div class="right">
        <div class="icon">
          <i class="iconfont icon-dianhua"></i>
        </div>
        <div>
          <h3>咨询电话</h3>
          <p>XXXX-XXXXXXXXX</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginRegister",
};
</script>

<style lang="scss" scoped>
.loginRegister {
  height: 115px;

  border-top: 3px solid #ccc;
  .box {
    width: 1200px;
    margin: 0 auto;
    .left {
      float: left;
      a {
        img {
          width: 169px;
          height: 88px;
          margin-top: 17px;
          margin-left: 30px;
        }
      }
    }
    .right {
      float: right;
      width: 250px;
      height: 55px;
      display: flex;
      flex-wrap: wrap;
      margin-top: 27px;
      .icon {
        margin-right: 15px;
        i {
          font-size: 40px;
          color: #ffa200;
        }
      }
      h3{
          margin-bottom: 5px;
      }
    }
  }
}
</style>
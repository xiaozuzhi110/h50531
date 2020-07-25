<template>
  <div class="login">
    <LoginRegister />
    <div class="box">
      <div class="box-cen">
        <div class="login-box">
          <div class="l-box box_active">
            <div class="login-box-t">
              <ul>
                <li
                  class
                  v-for="(item,index) in navTiele"
                  :key="index"
                  @mousemove="move(index)"
                >{{item.title}}</li>
                <!-- <li class="active" @mousemove="move">普通登录</li>
                <li @mousemove="move">手机无密码登录</li>-->
              </ul>
              <div>
                <i class="iconfont icon-erweima">
                  <span class="ewm" @mousemove="ewmMove"></span>
                </i>
                <img src="../assets/img/qryhd.png" alt />
              </div>
            </div>
            <div class="login-box-b">
              <div class="ct ct_active">
                <el-form
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="name">
                    <el-input placeholder="用户名/邮箱/手机号" v-model.number="ruleForm.userName">
                      <el-button slot="append" icon="el-icon-user-solid" class="icon"></el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="pass">
                    <el-input placeholder="密码" v-model="ruleForm.pass" autocomplete="off">
                      <el-button slot="append" icon="el-icon-unlock" class="icon"></el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="btn" size="medium" @click="submitForm('ruleForm')">登录</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="ct">
                <el-form
                  :model="ruleIpone"
                  status-icon
                  :rules="rules"
                  ref="ruleForm"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="name">
                    <el-input placeholder="手机号" v-model.number="ruleForm.userName">
                      <el-button slot="append" icon="el-icon-phone" class="icon"></el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="btn" size="medium" @click="submitForm('ruleForm')">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <div class="e-box">
            <div class="e_img">
              <img src="../assets/img/e2.png" alt />
            </div>
            <div class="e_sys">
              <div>
                <img src="../assets/img/sys.png" alt />
              </div>
              <div>
                <p>打开XXXXX</p>
                <p>扫一扫登录</p>
              </div>
            </div>
            <div class="e_ewm">
              <img src="../assets/img/qryhd.png" alt />
            </div>
            <div>点击下载XXXAPP</div>
          </div>
        </div>
      </div>
    </div>
    <FooterT />
    <FooterB />
    <FixedBox />
  </div>
</template>

<script>
// 头部
import LoginRegister from "@/components/public/loginRegister";
// 底部
import FooterT from "@/components/footer/footer-t";
import FooterB from "@/components/footer/footer-b";
import FixedBox from "@/components/fixed/fixed-box";

export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        userName: "",
        password: "",
      },
      ruleIpone: {
        ipone: "",
      },
      navTiele: [{ title: "普通登录" }, { title: "手机无密码登录" }],
      rules: {},
    };
  },
  methods: {
    submitForm() {
      console.log(1);
    },
    move(index) {
      // console.log(index);
      let lis = document.querySelectorAll(".login-box-t>ul>li");
      let cts = document.querySelectorAll(".login-box-b .ct");
      // console.log(cts)
      lis.forEach((li, i) => {
        // console.log(i);
        li.classList.remove("active");
        li.classList.add("active");
      });
    },
    ewmMove() {
      // alert(1)
      let ewm = document.querySelectorAll(".ewm");
      // console.log(ewm)
      ewm.forEach((element) => {
        // console.log(element)
        // ewm.classList.add('ewm_active')
      });
    },
  },
  components: {
    LoginRegister,
    FooterT,
    FooterB,
    FixedBox,
  },
};
</script>

<style lang="scss" scoped>
.login {
  .box {
    height: 600px;
    background: url(../assets/img/bgc1.png) no-repeat center;
    .box-cen {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      .login-box {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 400px;
        height: 445px;
        background-color: rgba(255, 255, 255, 0.6);
        .l-box {
          display: none;
          .login-box-t {
            height: 88px;
            border-bottom: 1px solid #ccc;
            ul {
              display: flex;
              flex-wrap: wrap;
              padding: 20px 45px 0;
              li {
                padding: 26px 30px;
                color: #808080;
              }
              li.active {
                color: #ffa200;
                border-bottom: 2px solid #ffa200;
              }
            }
            div {
              position: absolute;
              top: 10px;
              right: 10px;
              width: 61px;
              height: 61px;
              background-color: pink;
              i {
                font-size: 61px;
                position: absolute;
                span {
                  display: inline-block;
                  position: absolute;
                  left: 0;
                  width: 0;
                  height: 0;
                  border-top: 30px solid transparent;
                  border-right: 30px solid transparent;
                  border-left: 30px solid #fff;
                  border-bottom: 30px solid #fff;
                }
              }
              img {
                position: absolute;
                top: 61px;
                z-index: 100;
                display: none;
              }
              .img_active {
                display: block;
              }
              .ewm_active {
                border: 0;
              }
            }
          }
          .login-box-b {
            height: calc(445px - 88px);
            position: relative;
            .ct {
              box-sizing: border-box;
              margin-top: 45px;
              width: 400px;
              height: 100%;
              padding: 0 35px;
              position: absolute;
              display: none;
              .demo-ruleForm {
                input {
                  margin-bottom: 30px;
                  width: calc(300px -45px);
                  .el-input-group__append {
                    background-color: #ffa200;
                    border: 1px solid #ffa200;
                  }
                }
                .btn {
                  width: 330px;
                  background-color: #ffa200;
                  border: 1px solid #ffa200;
                  border-radius: 0;
                  color: #fff;
                }
              }
            }
            .ct.ct_active {
              display: block;
            }
          }
        }
        .e-box {
          position: relative;
          text-align: center;
          color: #666;
          display: none;
          .e_img {
            width: 61px;
            height: 61px;
            position: absolute;
            top: 0;
            right: 0;
          }
          .e_sys {
            padding-top: 50px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            img {
              margin-right: 15px;
            }
            p {
              line-height: 24px;
            }
          }
          .e_ewm {
            margin: 35px 0;
            img {
              width: 200px;
              height: 200px;
            }
          }
        }
        .box_active {
          display: block;
        }
      }
    }
  }
}
</style>
<template>
  <div class="register">
    <LoginRegister />
    <div class="box">
      <div class="box_cen">
        <ul class="box_cen_t">
          <li class="active">
            <i class="iconfont icon-1"></i>
            <span>设置用户名</span>
          </li>
          <li>
            <i class="iconfont icon-icon-test"></i>
            <span>填写账号信息</span>
          </li>
          <li>
            <i class="iconfont icon-gouxuan"></i>
            <span>注册成功</span>
          </li>
        </ul>
        <div class="box_cen_b">
          <ul class="box_cen_b_box">
            <li>
              <h3>注册协议</h3>
              <p>
                <span>【审慎阅读】</span> 您在申请注册流程中点击同意前，应当认真阅读以下协议。
                <a href="#">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</a>
              </p>
              <p>
                1、
                <a href="#">与您约定免除或限制责任的条款;</a>
              </p>
              <p>
                2、
                <a href="#">与您约定法律适用和管辖的条款；</a>
              </p>
              <p>
                3、
                <a href="#">其他以粗体下划线标识的重要条款。</a>
              </p>
              <p>如您对协议有任何疑问，可向平台客服咨询。</p>
              <p>
                <span>【特别提示】</span> 当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《淘宝平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。
              </p>
              <p>
                <a href="#">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</a>
              </p>
              <div>
                <p>平台服务协议</p>
                <p>隐私权政策</p>
                <p>法律声明</p>
                <p>支付宝及客户端服务协议</p>
              </div>
              <button>同意协议</button>
            </li>
            <li></li>
            <li></li>
          </ul>
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
  name: "register",
  components: {
    LoginRegister,
    FooterT,
    FooterB,
    FixedBox,
  },
};
</script>

<style lang="scss" scoped>
.register {
  .box {
    background-color: #f4f4f4;
    height: 800px;
    display: flex;
    justify-content: center;
    .box_cen {
      width: 996px;
      height: 700px;
      margin-top: 25px;
      border-top: 2px solid #ccc;
      padding: 0 78px;
      box-sizing: border-box;
      background-color: #fff;
      padding: 0 78px;
      box-sizing: border-box;
      .box_cen_t {
        height: 66px;
        border-bottom: 2px solid #ccc;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 32px;
        box-sizing: border-box;
        li {
          padding: 0 50px;
          color: #ccc;
          i {
            font-size: 30px;
          }
          span {
            display: inline-block;
            margin-left: 10px;
            margin-bottom: 4px;
          }
        }
        li.active {
          color: #ffa200;
          border-bottom: 2px solid #ffa200;
        }
      }
      .box_cen_b {
        padding: 45px 148px 0;
        .box_cen_b_box {
          width: 700px;
          height: 533px;
          li {
            color: #666;
            h3 {
            }
            p {
              line-height: 20px;
              margin-bottom: 15px;
              span {
                font-weight: 700;
              }
              a {
                color: #666;
              }
            }
            div {
              p {
                color: #ffa200;
              }
            }
            button {
              width: 180px;
              height: 38px;
              margin-left: calc(50% - 150px);
              background-color: #ff9c00;
              color: #fff;
              border: 0;
              border-radius: 20px;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
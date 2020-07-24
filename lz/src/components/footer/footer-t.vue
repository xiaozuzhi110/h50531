<template>
  <div class="footerT">
    <div class="box1">
      <ul>
        <li>
          <img src="../../assets/img/CgQI0lWskgmADBnsAAAPZvcSh3E68900~1.jpg" alt />
          <h3>正品保障</h3>
          <p>正品行货 放心选购</p>
        </li>
        <li>
          <img src="../../assets/img/ChEbulWsk4iADa_aAAAM544hHN818600~1.jpg" alt />
          <h3>满86包邮</h3>
          <p>满86元 免运费</p>
        </li>
        <li>
          <img src="../../assets/img/CgQIz1WslI-Adao3AAAN5b_ut2I80100~1.jpg" alt />
          <h3>售后无忧</h3>
          <p>7天无理由退货</p>
        </li>
        <li>
          <img src="../../assets/img/ChEi11WsyiyALBbiAAAN9lEEK5M33200~1.jpg" alt />
          <h3>准时送达</h3>
          <p>收货时间由你做主</p>
        </li>
      </ul>
    </div>
    <div class="box2">
      <div class="left">
        <div v-for="(item,index) in data" :key="index">
          <h3>{{item.title}}</h3>
          <router-link to="">
            <p v-for="(a,i) in item.lj" :key="i">{{a.title}}</p>
          </router-link>
        </div>
      </div>
      <div class="right">
        <div v-for="(item,index) in AppData" :key="index">
          <h3>{{item.title}}</h3>
          <img src="../../assets/img/qryhd.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerT",
  data() {
    return {
      data: [
        {
          title: "新手入门",
          lj: [
            { title: "购物流程" },
            { title: "会员制度" },
            { title: "订单查询" },
            { title: "服务协议及隐私说明" },
            { title: "网站地图" },
          ],
        },
        {
          title: "支付方式",
          lj: [
            { title: "货到付款" },
            { title: "网上支付" },
            { title: "礼品卡支付" },
            { title: "其它支付" },
          ],
        },
        {
          title: "配送服务",
          lj: [{ title: "配送进度查询" }, { title: "商品验货与签收" }],
        },
        {
          title: "相关规则",
          lj: [
            { title: "平台规则" },
            { title: "退换货政策" },
            { title: "发票制度" },
            { title: "帮助中心" },
          ],
        },
      ],
      AppData: [
        { title: "App更优惠", img: "" },
        { title: "加微信查订单", img: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footerT {
  width: 1200px;
  margin: 0 auto;
  .box1 {
    height: 144px;
    ul {
      padding-top: 40px;
      height: 100%;
      width: 1100px;
      border-bottom: 1px solid #ccc;
      margin: 0 auto;
      box-sizing: border-box;
      li {
        width: 240px;
        height: 66px;
        line-height: 66px;
        float: left;
        position: relative;
        border-right: 1px solid #ccc;
        margin-right: 10px;
        img {
          width: 66px;
          height: 66px;
        }
        h3 {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          position: absolute;
          top: 5px;
          left: 75px;
        }
        p {
          display: inline-block;
          height: 14px;
          line-height: 14px;
          position: absolute;
          top: 40px;
          left: 75px;
        }
      }
      li:nth-child(1) {
        margin-left: 60px;
      }
      li:last-child {
        border-right: none;
      }
    }
  }
  .box2 {
    height: 246px;
    .left {
      padding-top: 48px;
      box-sizing: border-box;
      div {
        width: 150px;
        height: 170px;
        float: left;
        margin-right: 50px;
        h3 {
          font-weight: 700;
          margin-bottom: 17px;
        }
        a{
          text-decoration: none;
        }
        p {
          margin-bottom: 10px;
          color: #808080;
        }
      }
      div:first-child {
        margin-left: 50px;
      }
    }
    .right {
      div {
        float: left;
        width: 100px;
      }
      div:first-child {
        margin-right: 30px;
      }
      img {
        margin-top: 10px;
      }
    }
  }
}
</style>
<template>
  <div class="home">
    <!-- 头部 -->
    <Heder />
    <Container :class="{ 'home-header-fixed': show }" :show="show" />
    <HederCen :class="{'margin-top': show}" />
    <!-- 内容 -->

    <Fecommend />
    <EveryDay />
    <div class="box">
      <HomeBirckBox />
      <HomeBirckBox />
      <HomeBirckBox />
      <HomeBirckBox />
    </div>

    <!-- 尾部 -->
    <FooterT />
    <FooterB />
    <!-- 左右弹出框 -->
    <FixedBox />

    <div>
      <Container />
    </div>
  </div>
</template>

<script>
import Heder from "@/components/head/heder";
import Container from "@/components/head/container";
import HederCen from "@/components/head/hederCen";
import FooterT from "@/components/footer/footer-t";
import FooterB from "@/components/footer/footer-b";
import FixedBox from "@/components/fixed/fixed-box";
//内容
import Fecommend from "@/components/fecommend/fecommend";
import EveryDay from "@/components/content/EveryDay";
import HomeBirckBox from "@/components/content/homeBirckBox";
export default {
  name: "Home",
  data() {
    return {
      show: false, // 判断fixed定位 动态绑定 class
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showSearch);
  },
  methods: {
    showSearch() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 300) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  components: {
    Heder,
    Container,
    HederCen,
    FooterT,
    FooterB,
    FixedBox,
    Fecommend,
    EveryDay,
    HomeBirckBox,
  },
};
</script>
<style lang="scss" scoped>
.home {
  .box {
    background-color: #f4f4f4;
  }
  .home-header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.4);
    // padding: 35px 0;
    height: 115px;
  }
  .margin-top {
    margin-top: 115px;
  }
}
</style>

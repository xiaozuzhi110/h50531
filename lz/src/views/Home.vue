<template>
  <div class="home">
    <!-- 头部 -->
    <Heder />
    <Container />
    <HederCen />
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
}
</style>

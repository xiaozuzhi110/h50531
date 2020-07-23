<template>
  <div class="home">
    <!-- 头部 -->
    <Heder />
    <Container />
    <HederCen />
    <!-- 内容 -->
    <Fecommend />
    <!-- 尾部 -->
    <FooterT />
    <FooterB />
    <!-- 回到最上 -->
    <el-backtop :bottom="100">
      <div
        style="{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }"
      >UP</div>
    </el-backtop>
  </div>
</template>

<script>
import Heder from "@/components/head/heder";
import Container from "@/components/head/container";
import HederCen from "@/components/head/hederCen";
import FooterT from "@/components/footer/footer-t";
import FooterB from "@/components/footer/footer-b";
//内容
import Fecommend from "@/components/fecommend/fecommend";
export default {
  name: "Home",
  components: {
    Heder,
    Container,
    HederCen,
    FooterT,
    FooterB,
    Fecommend,
  },
};
</script>

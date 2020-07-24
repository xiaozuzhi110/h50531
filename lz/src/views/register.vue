<template>
  <div class="register">
    <h1>这是注册页面</h1>
    <FooterT />
    <FooterB />
    <FixedBox />
  </div>
</template>

<script>
import FooterT from "@/components/footer/footer-t";
import FooterB from "@/components/footer/footer-b";
import FixedBox from "@/components/fixed/fixed-box";
export default {
  name: "register",
  components: {
    FooterT,
    FooterB,
    FixedBox,
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="login">
    <div></div>
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
  name: "login",
  components: {
    FooterT,
    FooterB,
    FixedBox,
  },
};
</script>

<style lang="scss" scoped>
.login {
  //   position: fixed;
}
</style>
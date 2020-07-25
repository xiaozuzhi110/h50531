<template>
  <div class="CommodityDetails">
    <Heder />
    <Container />
  </div>
</template>

<script>
import Heder from "@/components/head/heder";
import Container from "@/components/head/container";
export default {
  name: "CommodityDetails",
  components: {
    Heder,
    Container,
  },
};
</script>

<style lang="scss" scoped>
.CommodityDetails {
}
</style>
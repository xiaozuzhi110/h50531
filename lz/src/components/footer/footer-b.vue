<template>
  <div class="footerB">
    <ul>
      <li v-for="(item,index) in data" :key="index">{{item.title}}</li>
    </ul>
    <div>
      <a href="#">
        <img src="../../assets/img/ChEi1FYXHcOAVk_WAAAL2r2-yfo10200.jpg" alt />
      </a>
      <a href="#">
        <img src="../../assets/img/CgQCr1PQy1CAF7vaAABDexsiEYM24800.jpg" alt />
      </a>
      <a href="#">
        <img src="../../assets/img/f582260777c44b30.png" alt />
      </a>
      <a href="#">
        <img src="../../assets/img/ChEi2lh171KAJrGlAAALl_uZt0E75600.jpg" alt />
      </a>
      <a href="#">
        <img src="../../assets/img/CgQCrlPYTqCASlHXAAAd82JE0eA31000.png" alt />
      </a>
      <a href="#">
        <img src="../../assets/img/7b46518a9d74a1d6.jpg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerB",
  data() {
    return {
      data: [
        { title: "沪ICP备XXXXXXXXX号" },
        { title: "经营证照" },
        { title: "联网药品信息服务资格证(沪)-经营性-2017-0006" },
        { title: "违法和不良信息举报电话：XXX-XXXXXXXX" },
        { title: "沪B2-XXXXXXX" },
        { title: "沪公网安备 XXXXXXXXX号" },
        { title: "友情链接" },
        { title: "出版物经营许可证" },
        { title: "增值电信业务经营许可证" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footerB {
  width: 1200px;
  height: 116px;
  margin: 0 auto;
  text-align: center;
  ul {
    height: 38px;
    padding-left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      float: left;
      line-height: 18px;
      border-right: 2px solid #ccc;
      padding: 0 8px;
    }
    li:last-child {
      border-right: none;
    }
  }
  div {
    height: 30px;
    margin-top: 10px;
    a {
      margin-right: 10px;
    }
  }
}
</style>
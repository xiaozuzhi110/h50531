<template>
  <div class="header">
    <div class="header-cen">
      <el-row>
        <el-col :span="4">
          <ul class="box1">
            <li v-for="(item,index) in data" :key="index">
              <el-popover
                placement="right-start"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              >
                <el-button slot="reference">
                  {{item.value}}
                  <i class>></i>
                </el-button>
              </el-popover>
            </li>
          </ul>
        </el-col>
        <el-col :span="20">
          <div class="box2">
            <div>
              <el-carousel :interval="4000" height="450px">
                <el-carousel-item v-for="(item,index) in img" :key="index">
                  <img :src="item.url" style="width:100%;height:100%" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCen",
  data() {
    return {
      data: [
        { value: "图书 电子书 童书" },
        { value: "女装 男装 内衣" },
        { value: "童装玩具 孕产 内衣" },
        { value: "家电 数码 手机" },
        { value: "美妆 洗护 保健品" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" },
        { value: "图书 电子书 童书" }
      ],
      img: [
        {
          url:
            "//imgcps.jd.com/ling/100008348542/5aW96LSn5bCx6KaB5aSf5Ye66Imy/5a6e5oOg5omL5py6562J5L2g/p-5bd8253082acdd181d02fa40/444f7d0a/590x470.jpg"
        },
        {
          url:
            "//img11.360buyimg.com/pop/s590x470_jfs/t1/142473/17/3343/89653/5f14f757Eae2bf49f/e4be318045fa6b41.jpg.webp"
        },
        {
          url:
            "//imgcps.jd.com/ling/100010816812/56yU6K6w5pys57K-6YCJ5aSn54mM/5aW956S85LiN5pat/p-5bd8253082acdd181d02f9d0/4570ccf0/590x470.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 449px;
  background: linear-gradient(to right, #4e0a9b, #363ac9);
  box-sizing: border-box;
  position: relative;
  .header-cen {
    width: 1200px;
    height: 450px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    .box1 {
      width: 200px;
      height: 450px;
      overflow: hidden;
      position: absolute;
      li {
        height: 40.7px;
        
        button{
          width: 200px;
          height: 40.7px;
          margin: 0;
          padding: 0;
          border-radius: 0;
          text-align: left;
          padding-left: 5px;
          background-color: #aa81ca;
          border: #aa81ca;
          color: #fff;
          button:hover{
            background-color: red;
            border: red;
          }
          i{
            float: right;
            padding-right: 8px;
          }
        }
      }
    }
    .box2 {
      width: 1000px;
      height: 450px;
      position: absolute;
      right: 0;
      // background-color: pink;
    }
  }
}
</style>
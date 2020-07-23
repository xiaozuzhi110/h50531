<template>
  <div class="container">
    <el-row>
      <el-col :span="4">
        <div class="box">
          <div class="box-hei"></div>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="container_r_t">
          <el-row>
            <el-col :span="15">
              <el-input
                placeholder="请输入搜索的商品名"
                v-model="input"
                clearable
                style="width:400px; padding-left:150px;
                padding-top:10px"
                class="inp"
              >
                <el-button slot="append" class="btn">
                  <i class="el-icon-search icon"></i>
                </el-button>
              </el-input>
            </el-col>
            <el-col :span="9">
              <div class="gouWo">
                <!-- 购物车 -->
                <el-popover
                  placement="bottom"
                  title="标题"
                  width="200"
                  trigger="click"
                  content="购物车空空，请添加内容"
                >
                  <el-button slot="reference">
                    <i class="iconfont icon-gouwuche"></i> 购物车
                    <el-badge :value="200" :max="99" type="warning"></el-badge>
                  </el-button>
                </el-popover>
                <!-- 我的订单 -->
                <el-popover
                  placement="bottom"
                  title="标题"
                  width="200"
                  trigger="click"
                  content="没有订单。"
                >
                  <el-button slot="reference">我的订单</el-button>
                </el-popover>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="container_r_b">
          <!-- 商品内 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item
              :index="item.id.toString()"
              v-for="(item,i) in title"
              :key="i"
            >{{item.value}}</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "container",
  data() {
    return {
      input: "",
      activeIndex: "1",
      title: [
        { id: 1, value: "图书" },
        { id: 2, value: "电子书" },
        { id: 3, value: "原创文学" },
        { id: 4, value: "服装" },
        { id: 5, value: "运动户外" },
        { id: 6, value: "孕婴童" },
        { id: 7, value: "家具" },
        { id: 8, value: "创意文具" },
        { id: 9, value: "地方特产" },
        { id: 10, value: "海外购" },
        { id: 11, value: "电器城" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  height: 115px;
  margin: 0 auto;
  box-sizing: border-box;
  .box {
    width: 100%;
    height: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
    .box-hei {
      width: 130px;
      height: 90px;
      background-color: #000;
    }
  }
  .el-input__inner {
    border: 1px solid #feb80f;
  }
  .container_r_t {
    height: 50px;
    overflow: hidden;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    .btn {
      background-color: #feb80f;
      border: #feb80f;
      border-radius: 0;
      .icon {
        color: #fff;
        font-size: 15px;
      }
    }
    .gouWo {
      padding-top: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      button{
        width: 130px;
        height: 46px;
        line-height: 35px;
        padding: 0;
        margin: 0;
      }
      .el-badge {
        .el-badge__content {
          background-color: #feb80f;
        }
        sup {
          background-color: #feb80f;
        }
      }
    }
  }
  .container_r_b {
    // height: 56px;
    overflow: hidden;
  }
}
</style>
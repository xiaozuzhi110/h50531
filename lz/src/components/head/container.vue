<template>
  <div class="container">
    <div class="container_box">
      <el-row>
        <el-col :span="4">
          <div class="box">
            <div class="box-hei"></div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="container_r">
            <div class="container_r_t">
              <div class="container_r_t_box">
                <el-autocomplete
                  placeholder="请输入内容"
                  v-model="input"
                  clearable
                  :fetch-suggestions="querySearch"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                  style="width:400px; margin-top: 10px;  margin-right: 150px;"
                >
                  <el-button slot="append" class="btn" @click="btnClick()">
                    <i class="el-icon-search icon"></i>
                  </el-button>
                </el-autocomplete>
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
              </div>
            </div>
            <div class="container_r_b" v-show="!show">
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
          </div>
        </el-col>
      </el-row>
    </div>
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
        { id: 11, value: "电器城" },
      ],
      restaurants: [],
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    btnClick() {
      // console.log(123);
      console.log(this.input);
      this.$router.push(`'//CommodityDetails/' + 1` )
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [{ value: "DJI大疆官方旗舰店"}];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  props: ["show"],
};
</script>

<style lang="scss" scoped>
.container {
  .container_box {
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
    .container_r {
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
      .container_r_t {
        // height: 50px;
        overflow: hidden;
        .container_r_t_box {
          display: flex;
          flex-wrap: wrap;
          // justify-content: center;
          // align-items: center;
          // float: left;
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
            padding-top: 8px;
            button {
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
      }
      .container_r_b {
        // height: 56px;
        overflow: hidden;
      }
    }
  }
}
</style>
<template>
  <div class="fecommend">
    <div class="box">
      <div class="box-h">
        <a href="#" v-for="(item,index) in imgData" :key="index">
          <img :src="item.img" />
        </a>
      </div>
      <div class="box-c">
        <router-link to>
          <img src="../../assets/img/e074a1c3c359701e236e712516189125.png" alt />
        </router-link>
      </div>
      <div class="box-b">
        <div class="countDown">
          <h3>乐购.今日秒杀</h3>
          <i class="iconfont icon-shandian"></i>
          <p>倒计时</p>
          <div class="time">
            <span>{{time.day}}</span>
            <b>:</b>
            <span>{{time.hour}}</span>
            <b>:</b>
            <span>{{time.min}}</span>
            <b>:</b>
            <span>{{time.second}}</span>
          </div>
        </div>
        <div class="lbt">
          <ul id="imgList">
            <li v-for="item in 12" :key="item">
              <a href>
                <img
                  src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90"
                  alt
                />
                <h3>小米小爱音响 Play</h3>
                <p>
                  <span>￥129.00</span>
                  <del>￥230.00</del>
                </p>
              </a>
            </li>
          </ul>
          <button class="btn" style="left: 0;" @click="gotoPage(prevIndex)">
            <i class="iconfont icon-zuojiantou"></i>
          </button>
          <button class="btn" @click="gotoPage(nextIndex)">
            <i class="iconfont icon-youjiantou"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fecommend",
  data() {
    return {
      time: {
        //倒计时时间
        day: "0", //天
        hour: "", // 时
        min: "", // 分
        second: "", // 秒
      },
      curStartTime: "2020-10-29 00:00:00",
      imgData: [
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b746a4db2e0473cc076a3a4b9bbe0235.jpg?w=632&h=340",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340",
        },
        {
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340",
        },
      ],
      dataList: "",
      currentIndex: 0, //默认显示图片
      timer: null, //定时器
    };
  },
  created() {
    // this.curStartTime = "2019-08-09";
    this.countTime();
    // this.swap();
  },
  methods: {
    // 倒计时
    countTime() {
      // 获取当前时间
      let date = new Date();
      let now = date.getTime();
      // 设置截止时间
      let endDate = new Date(this.curStartTime); // this.curStartTime需要倒计时的日期
      let end = endDate.getTime();
      // 时间差
      let leftTime = end - now;
      // 定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // 天
        this.time.day = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        // 时
        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.time.hour = h < 10 ? "0" + h : h;
        // 分
        let m = Math.floor((leftTime / 1000 / 60) % 60);
        this.time.min = m < 10 ? "0" + m : m;
        // 秒
        let s = Math.floor((leftTime / 1000) % 60);
        this.time.second = s < 10 ? "0" + s : s;
      } else {
        this.day = 0;
        this.hour = "00";
        this.min = "00";
        this.second = "00";
      }
      // 等于0的时候不调用
      if (
        Number(this.hour) === 0 &&
        Number(this.day) === 0 &&
        Number(this.min) === 0 &&
        Number(this.second) === 0
      ) {
        return;
      } else {
        // 递归每秒调用countTime方法，显示动态时间效果,
        setTimeout(this.countTime, 1000);
      }
    },
    gotoPage(index) {
      this.currentIndex = index;
      let a = document.getElementsByClassName("#imgList>li");
      console.log(this.a);
    },
  },
  computed: {
    //上一张
    prevIndex() {
        if (this.currentIndex == 0) {
          return this.dataList.length - 1;
        } else {
          return this.currentIndex - 1;
        }
    },
    //下一张
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fecommend {
  height: 663px;
  background-color: #f4f4f4;
  .box {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    box-sizing: border-box;
    a {
      padding-right: 20px;
      img {
        width: 285px;
        height: 154px;
      }
    }
    a:last-child {
      padding-right: 0;
    }
    .box-c {
      margin-top: 20px;
      height: 100px;
      a {
        img {
          width: 1200px;
          height: 100px;
        }
      }
    }
    .box-b {
      margin-top: 30px;
      height: 285px;
      color: #fff;
      text-align: center;
      position: relative;
      .countDown {
        width: 228px;
        height: 285px;
        background-color: #f14938;
        h3 {
          font-size: 23px;
          padding-top: 40px;
          padding-bottom: 19px;
        }
        i {
          font-size: 50px;
        }
        p {
          padding-top: 44px;
          padding-bottom: 22px;
        }
        .time {
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
            width: 40px;
            height: 45px;
            line-height: 45px;
            background-color: #666;
          }
          b {
            margin: 0 5px;
          }
        }
      }
      .lbt {
        width: 942px;
        height: 285px;
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;

        ul {
          width: 2000px;
          height: 285px;
          display: flex;
          flex-wrap: wrap;
          li {
            float: left;
            width: 228px;
            height: 285px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-right: 10px;
            a {
              text-decoration: none;
              img {
                width: 198px;
                height: 198px;
                padding: 15px;
              }
              h3 {
                color: #000;
                margin-bottom: 10px;
              }
              p {
                span {
                  color: #ff6709;
                }
                del {
                  color: #b0b0b0;
                  margin-left: 10px;
                }
              }
            }
          }
        }
        .btn {
          width: 42px;
          height: 85px;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          top: calc(50% - 42.5px);
          border: none;
          border-radius: 0 42px 42px 0;
          i {
            font-size: 28px;
          }
        }
        button:last-child {
          right: 0;
          border: none;
          border-radius: 0;
          border-radius: 42px 0 0 42px;
        }
      }
    }
  }
}
</style>
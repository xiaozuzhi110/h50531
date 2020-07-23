<template>
  <div class="everyDay">
    <div class="day-t">
      <div class="day-t-c">
        <span></span>
        <h3>每日好货推荐</h3>
        <i></i>
      </div>
    </div>
    <div class="day-b">
      <ul>
        <li class="box1">
          <h3>
            <span>乐购快抢</span> · 美好生活抢先到
          </h3>
          <p>品质好物 天天低价 >></p>
          <div>
            <div v-for="(item,index) in imgData" :key="index">
              <a href>
                <img :src="item.img" alt />
                <div>{{item.title}}</div>
              </a>
            </div>
          </div>
        </li>
        <li class="box2"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "everyDay",
  data() {
    return {
      imgData: [
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "- 诗篇 -",
        },
        {
          img:
            "//img.alicdn.com/imgextra/i3/412129187/O1CN01kDmB3p2HjhFHZiwqy_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "JNBY",
        },
        {
          img:
            "//img.alicdn.com/tfscom/i4/412129187/O1CN01p3XZGP2HjhG0BuASa_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "品质女装",
        },
      ],
      imgData2: [
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "- 诗篇 -",
        },
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "JNBY",
        },
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "品质女装",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.everyDay {
  width: 1200px;
  height: 654px;
  margin: 0 auto;
  .day-t {
    height: 174px;
    display: flex;
    justify-content: center;
    align-items: center;
    .day-t-c {
      // display: flex;
      // justify-content: center;
      h3 {
        position: relative;
        font-size: 30px;
        margin-bottom: 19px;
      }
      h3:before {
        content: "";
        display: inline-block;
        width: 25px;
        height: 20px;
        background: url("../../assets/img/sprite.png") no-repeat;
        position: absolute;
        left: -50px;
      }
      h3:after {
        content: "";
        display: inline-block;
        width: 25px;
        height: 20px;
        background: url("../../assets/img/sprite.png") no-repeat -25px;
        position: absolute;
        right: -50px;
      }
      i {
        display: block;
        width: 110px;
        border: 1px solid #f00;
        margin: 0 auto;
      }
    }
  }
  .day-b {
    ul {
      li {
        width: 585px;
        height: 410px;
        float: left;
        h3 {
          width: 334px;
          height: 27px;
          line-height: 24px;
          font-size: 26px;
          margin-top: 30px;
          margin-left: 25px;
        }
        p {
          width: 178px;
          height: 17px;
          font-size: 16px;
          line-height: 24px;
          color: #9f9f9f;
          margin-top: 16px;
          margin-left: 26px;
          margin-bottom: 29px;
        }
      }
      .box1 {
        background-color: #ffdbdb;
        margin-right: 30px;
        span {
          color: #ff72fd;
        }
      }
      .box2 {
        background-color: #acd0ff;
      }
    }
  }
}
</style>
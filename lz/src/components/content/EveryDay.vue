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
            <i>乐购快抢</i> · 美好生活抢先到
          </h3>
          <p>150+品牌疯抢中 >></p>
          <div class="picture-box">
            <div v-for="(item,index) in imgData" :key="index" class="picture">
              <a href>
                <img :src="item.img" alt />
                <div class="pictureText">
                  <span>{{item.title}}</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="box2">
          <h3>
            <i>品牌活动</i> · 最后疯抢 3折封顶
          </h3>
          <p>品质好物 天天低价 >></p>
          <div class="picture-box">
            <div v-for="(item,index) in imgData2" :key="index" class="picture">
              <a href>
                <img :src="item.img" alt />
                <div class="pictureText">
                  <span class="pictureText-t">{{item.title}}</span>
                  <span class="pictureText-b">{{item.synopsis}}</span>
                </div>
              </a>
            </div>
          </div>
        </li>
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
          title: "ITS SKIN",
          synopsis: "明星爆款  买一享三",
        },
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "阿芙",
          synopsis: "面部护理好货超值购",
        },
        {
          img:
            "//img.alicdn.com/tfscom/i1/412129187/O1CN01QMYhAe2HjhF6DX7tY_!!412129187.jpg_180x180xzq90.jpg_.webp",
          title: "Rosel女装",
          synopsis: "秋上新  三折封顶",
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
        .picture-box {
          padding: 0 25px;
          .picture {
            float: left;
            margin-right: 20px;
            a {
              position: relative;
              img {
                width: 165px;
                height: 250px;
              }
              .pictureText {
                position: absolute;
                bottom: 15px;
                left: 50%;
                margin-left: -70px;
                background-color: rgba(255, 255, 255,.6);
                width: 140px;
                height: 55px;
                font-size: 24px;
                color: #333;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                .pictureText-t{
                  font-size: 18px;
                }
                .pictureText-b{
                  font-size: 12px;
                  color: #808080;
                }
              }
            }
          }
          .picture:last-child {
            margin-right: 0;
          }
        }
      }
      .box1 {
        background-color: #ffdbdb;
        margin-right: 30px;
        i {
          color: #ff72fd;
        }
      }
      .box2 {
        background-color: #acd0ff;
        i {
          color: #006fff;
        }
      }
    }
  }
}
</style>
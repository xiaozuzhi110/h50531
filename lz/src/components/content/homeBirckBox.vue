<template>
  <div class="homeBirckBox">
    <div class="box-t">
      <div class="title">
        <div class="title-l">服装配饰</div>
        <div class="title-r"></div>
      </div>
      <div class="tab-list">
        <span class="active">热销内衣</span>
        <span>精品男装</span>
        <span>童装</span>
      </div>
    </div>
    <div class="box-c">
      <div class="box-c-l">
        <div class="box-shop">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1558393717,3501008138&fm=26&gp=0.jpg"
            alt
          />
          <div class="box-shop-c">
            <h3>黄金珠宝节</h3>
            <p>每满300减30</p>
          </div>
        </div>
        <div class="box-shop-b">
          <ul>
            <li>女装</li>
            <li>内衣</li>
            <li>泳衣</li>
            <li>功能箱包</li>
            <li>户外运动</li>
            <li>男装</li>
            <li>女鞋</li>
            <li>男鞋</li>
            <li>全部分类</li>
          </ul>
        </div>
      </div>
      <div class="brick-list">
        <div class="brick-list-box">
          <div class="brick-list-l">
            <div class="banner">
              <!-- 走马灯 -->
              <el-carousel indicator-position="none" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                  <p>大品牌折扣 三折封顶</p>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="banner-b">
              <router-link to>
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1768104081,745252212&fm=26&gp=0.jpg"
                  alt
                />
              </router-link>
            </div>
          </div>
          <div class="brick-list-r">
            <ul>
              <li v-for="item in 4" :key="item">
                <router-link to>
                  <h3>时尚精致女装</h3>
                  <p>春夏女装99选3</p>
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595589084210&di=7d709a2f3bd50706ed020ead77e8b6d8&imgtype=0&src=http%3A%2F%2Fpic1.16xx8.com%2Fallimg%2F150617%2F16xx8.jpg"
                    alt
                  />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="box-b">
      <ul>
        <li v-for="item in 9" :key="item">
          <a href="#">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595589409515&di=e114d8bc842f18ef5f1be50e5d68e9bd&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D1438661972%2C691698833%26fm%3D214%26gp%3D0.jpg"
              alt
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeBirckBox",
};
</script>

<style lang="scss" scoped>
.homeBirckBox {
  width: 1200px;
  margin: 0 auto;
  height: 665px;
  .box-t {
    height: 94px;
    .title {
      margin-top: 40px;
      width: 210px;
      height: 35px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      line-height: 35px;
      float: left;
      .title-l {
        width: 156px;
        font-size: 20px;
        background-color: #ffbd0d;
      }
      .title-r {
        color: #000;
        width: 50px;
        width: 0;
        height: 0;
        border: 17px solid transparent;
        border-left-color: #ffbd0d;
        border-bottom-color: #ffbd0d;
      }
    }
    .tab-list {
      height: 28px;
      float: right;
      margin-top: 47px;
      span {
        display: inline-block;
        height: 28px;
        padding: 0 16px;
        cursor: pointer;
      }
      span.active {
        color: #ffbd0d;
        border-bottom: 2px solid #ffbd0d;
      }
    }
  }
  .box-c {
    margin-top: 19px;
    height: 460px;
    display: flex;
    flex-wrap: wrap;
    .box-c-l {
      width: 260px;
      height: 460px;
      margin-right: 15px;
      .box-shop {
        position: relative;
        img {
          width: 260px;
          height: 330px;
        }
        .box-shop-c {
          width: 220px;
          height: 65px;
          position: absolute;
          left: 0;
          bottom: 25px;
          border: 0 10px 10px 0;
          background-color: rgba(0, 0, 0, 0.5);
          box-sizing: border-box;
          padding-left: 20px;
          h3 {
            font-size: 24px;
            color: #fff;
            margin-top: 10px;
            margin-bottom: 7px;
          }
          p {
            color: #fff;
            font-size: 14px;
          }
        }
      }
      .box-shop-b {
        height: 130px;
        padding: 15px;
        background-color: #fff;
        box-sizing: border-box;
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          li {
            // float: left;
            width: 70px;
            height: 24px;
            margin-bottom: 14px;
            border: 1px solid #6f6f6f;
            border-radius: 12px;
            line-height: 24px;
            text-align: center;
            margin-right: 7px;
            color: #6f6f6f;
            cursor: pointer;
          }
          li:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
    .brick-list {
      width: 925px;
      height: 460px;
      position: relative;
      .brick-list-box {
        width: 100%;
        height: 100%;
        // position: absolute;
        // float: left;
        display: flex;
        flex-wrap: wrap;
        // // justify-content: ;
        .brick-list-l {
          width: 455px;

          .banner {
            width: 455px;
            height: 300px;
            margin-bottom: 10px;
          }
          .banner-b {
            width: 455px;
            height: 150px;
            img {
              width: 455px;
              height: 150px;
            }
          }
        }
        .brick-list-r {
          width: 455px;
          height: 100%;
          margin-left: 15px;
          //   background-color: pink;
          ul {
            li {
              width: 220px;
              height: 220px;
              padding: 10px;
              box-sizing: border-box;
              float: left;
              margin-right: 10px;
              margin-bottom: 15px;
              text-align: center;
              a {
                text-decoration: none;
                h3 {
                  font-size: 18px;
                  margin-top: 14px;
                  margin-bottom: 8px;
                  color: #333;
                  font-weight: 700;
                }
                p {
                  font-size: 12px;
                  color: #333;
                  margin-bottom: 12px;
                }
                img {
                  width: 180px;
                  height: 144px;
                }
              }
            }
            li:nth-child(2n) {
              margin-right: 0;
            }
            li:nth-child(3) {
              margin-bottom: 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
  .box-b {
    height: 65px;
    margin-top: 11px;
    ul {
        display: flex;
        flex-wrap: wrap;
      li {
        width: 128px;
        height: 65px;
        margin-right: 6px;
        a{
            img{
                width: 128px;
                height: 65px;
            }
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item p {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 18px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
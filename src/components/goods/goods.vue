<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}"
            @click="selectMenu(index,$event)">
          <span class="goods-text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list foo-list-hook">
          <h1 class="title-2">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon-2">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name-2">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old"
                                                                v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll';

  const ERR_OK = 0;
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        goods: [],
        ListHeight: [],
        scrollY: 0
      }
    },
    computed: {
      currentIndex(){
        for (let i = 0; i < this.ListHeight.length; i++) {
          let height1 = this.ListHeight[i];
          let height2 = this.ListHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    },
    methods: {
      selectMenu(index, event){
        if (!event._constructed) {
          return;
        }

        let foodList = this.$refs.foodsWrapper.getElementsByClassName('foo-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3 //监听滚动位置
        });

        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight(){
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('foo-list-hook');
        let height = 0;
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.ListHeight.push(height);
        }
      }
    }
  }
</script>

<style>

  .goods {
    display: flex;
    position: absolute;
    top: 227px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
  }

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }

  .menu-item {
    display: table; /*垂直居中*/
    height: 54px;
    width: 80px;
    padding: 0 12px;
    line-height: 14px;
  }

  .current {
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
  }

  .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-image: url(discount_3@2x.png);
  }

  .goods-text {
    display: table-cell;
    width: 80px;
    vertical-align: middle;
    font-size: 12px;
  }

  .foods-wrapper {
    flex: 1
  }

  .title-2 {
    padding-left: 14px;
    margin-top: 0;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }

  .food-item {
    display: flex;
    margin: 18px;
  }

  .icon-2 {
    flex: 0 0 57px;
    margin-right: 10px;
  }

  .content {
    flex: 1;
  }

  .name-2 {
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }

  .desc, .extra {
    line-height: 10px;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .desc {
    line-height: 12px;
    margin-bottom: 8px;
  }

  .count {
    margin-right: 12px;
  }

  .price {
    font-weight: 700;
    line-height: 24px;
  }

  .now {
    margin-right: 8px;
    font-size: 14px;
    color: rgb(240, 20, 20);
  }

  .old {
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .cartcontrol-wrapper {
    position: absolute;
    right: 0;
    bottom: 12px;
  }


</style>

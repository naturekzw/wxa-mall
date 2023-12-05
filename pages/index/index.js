// index.js
// 获取应用实例

import imageUtil from '../../utils/util.js';
import shoppingCart from '../../templates/cart/cart';
import cart from '../../utils/cart';

var app = getApp()

Page({
  data: {
    "menuID": 1,
    "indicatorDots": true,
    "autoplay": true,
    "circular": true,
    "interval": 3000,
    "imgUrls": [{
      "id": 0,
      "sPicLink": "https://6465-dev-hnrfx-1257967285.tcb.qcloud.la/banner/slide1.png",
      "sLink": "1000",
    }, {
      "id": 1,
      "sPicLink": "https://6465-dev-hnrfx-1257967285.tcb.qcloud.la/banner/slide2.png",
      "sLink": "1001",
    }],
    "index_recommends":[{
      "sDescribe": "展示专用商品1",
      "iMallId": "1000",
      "sPicLink": "/images/list/sku1.png",
      "iOriPrice": "150",
      "iPriceReal": "113"
    },{
      "sDescribe": "展示专用商品2",
      "iMallId": "1001",
      "sPicLink": "/images/list/sku2.png",
      "iOriPrice": "350",
      "iPriceReal": "313"
    },{
      "sDescribe": "展示专用商品1",
      "iMallId": "1000",
      "sPicLink": "/images/list/sku1.png",
      "iOriPrice": "150",
      "iPriceReal": "113"
    },{
      "sDescribe": "展示专用商品2",
      "iMallId": "1001",
      "sPicLink": "/images/list/sku2.png",
      "iOriPrice": "350",
      "iPriceReal": "313"
    }

    ]
  },
  onLoad() {
    cart.refreshCart();
    //this.getRecommendGoodsList();
  },
  onReady() {
    // 设置 scroll-view 高度，才能进行滚动
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          scrollHeight: res.screenHeight * res.pixelRatio,
          bannerHeight: 0.175 * res.windowWidth, // 原始图片是 640*112
          imagewidth: res.windowWidth,
          imageheight: 0.440625 * res.windowWidth
        });
      }
    });
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
    // 刷新列表
    //this.getRecommendGoodsList(true);
  },

  scrollToLower() {
    //this.getRecommendGoodsList();
  },

  menuClick(e){
    var id = e.currentTarget.id;
    this.setData({
      menuID: id,
    })
  },
  imageLoad(e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
  },
  bigImageClick(e) {
    let id = e.currentTarget.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    });

  },
  bindCartTap(e) {
    let id = e.currentTarget.id;
    console.log('====goodsId====', id);
    shoppingCart.init(this, id);
  },
})

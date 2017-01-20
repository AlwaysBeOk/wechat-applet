//index.js
//获取应用实例
var app = getApp()
console.log(app);
Page({
  data: {
    lists: [
      { id: 1, src: "../../images/lists-1.jpg", msg: "这是我第一张图片" },
      { id: 1, src: "../../images/lists-2.jpg", msg: "这是我第二张图片" },
      { id: 1, src: "../../images/lists-3.jpg", msg: "这是我第三张图片" },
      { id: 1, src: "../../images/lists-4.jpg", msg: "这是我第四张图片" }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})

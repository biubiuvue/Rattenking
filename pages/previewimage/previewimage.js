// pages/previewimage/previewimage.js
Page({
  data: {
    previewImageArr: []
  },
  previewImage(e) {
    var self = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        var tempFilePaths = res.tempFilePaths;
        self.setData({
          previewImageArr: tempFilePaths
        });
        console.log(tempFilePaths)
      }
    })
  },
  //图片预览
  changePreview(e) {
    var self = this;
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: self.data.previewImageArr
    })
  }
})
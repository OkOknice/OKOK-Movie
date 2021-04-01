const { network } = require("../../utils/network")

// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.getStorage({
          key: 'searchHistory',
          success (res){
              console.log(res)
              var data = res.data
              that.setData({
                  history:data
              })
          }
        })
    },

    //搜索数据的获取
    searchInput (event){
        var that = this
        // console.log(event)
        var value = event.detail.value
        if(!value ||value === ''){
            that.setData({
                subjects:null
            })
            return
        }
        network.getSearchItem({
            q:value,
            success (subjects){
                that.setData({
                    subjects
                })
            }
        })
    },
    //点击回到当前电影的详情
    onItemTapEvent (event){
        var that = this
        var id = event.currentTarget.dataset.id
        var title = event.currentTarget.dataset.title
        var history = that.data.history
        var isExisted = false;
        if(history){
            for(var i = 0;i < history.length;i++){
                var movie = history[i]
                if(movie.id === id){
                    isExisted = true
                    break
                }
            }
        }
        if(!isExisted){
            if(!history){
                history = []
            }
        }
        history.push({id,title})
        wx.setStorage({
          data: history,
          key: 'searchHistory',
        })
        wx.navigateTo({
          url: '/pages/detail/detail?type=movie&id='+id,
        })
        // console.log(event)
    },
    onClearEvent (){
        var that = this
        wx.removeStorage({
          key: 'searchHistory',
          success (res){
              console.log('删除成功')
          }
        })
        that.setData({
            history:null
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
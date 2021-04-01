// pages/comments/comments.js
import {network} from "../../utils/network.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        count:20,
        start:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        var that = this
        that.setData(options)
        that.getCommentItem(1)
    },

    //评论数据获取
    getCommentItem (start){
        var that = this
        var type = that.data.type
        var id = that.data.id
        if(start > that.data.start){
            that.setData({
                nextPage:true
            })
        } else {
            that.setData({
                prePage:true
            })
        }
        wx.showLoading({
          title: '正在加载中....',
        })
        network.getCommentItems({
            type,
            id,
            start,
            count:20,
            success (item){
                var totalComment = item.total
                var comments = item.interests
                // console.log(item)
                that.setData({
                    totalComment,
                    comments,
                    start,
                    prePage:false,
                    nextPage:false
                })
                wx.pageScrollTo({
                    scrollTop:0
                })
                wx.hideLoading({})
            }
            
        })
    },

    //点击返回上一个页面
    onCommentEvent (){
        wx.navigateBack({})
    },

    //点击返回上一页
    onPrePageEvent (){
        var that = this
        var oldStart = that.data.start
        var count = that.data.count
        var start = oldStart - count
        if(start > 0){
            that.getCommentItem(start)
        }
    },

    //点击返回下一页
    onNextPageEvent (){
        var that = this
        var oldStart = that.data.start
        var count = that.data.count
        var start = oldStart + count
        that.getCommentItem(start)
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
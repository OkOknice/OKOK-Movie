// pages/detail/detail.js
import {network} from '../../utils/network.js'
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
        var {type,id} = options
        var that = this
        that.setData({
            type,
            id
        })
        wx.showLoading({
            title: '正在加载中....',
        })
        //获取详情数据
        network.getDetailItems({
            type,
            id,
            success (item){
                // console.log(item)
                var genres = item.genres
                genres = genres.join('/')
                item.genres = genres
                // console.log(item.rating.value)
                var actorNames = []
                var actors = item.actors
                if(actors.length > 3){
                    actors.actors.slice(0,3)
                }
                for(var i = 0; i < actors.length;i++){
                    actorNames.push(actors[i].name)
                }
                actorNames = actorNames.join('/')
                var director = item.directors[0].name
                var authors = director + "(导演) /" + actorNames;
                item.authors = authors;
                that.setData({
                    item
                })
                
            }
        }),
        //获取评论数据
        network.getCommentItems({
            type,
            id,
            success (item){
                console.log(item)
                var commentTotal = item.total
                var comments = item.interests
                that.setData({
                    commentTotal,
                    comments
                })
                wx.hideLoading({
                })
            }
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
        wx.pageScrollTo({
          scrollTop:0
        })
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
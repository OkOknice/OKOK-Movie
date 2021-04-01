// index.js
// 获取应用实例
const app = getApp()
import {network} from '../../utils/network'
Page({
  data: {
    
  },
  onLoad (options){
    var that = this
    //电影数据的获取
    network.getMovieLists({
      success (movies){
        that.setData({
          movies
        })
      }
    })


    //电视剧数据的获取
    network.getTvLists({
      success (tvs){
        that.setData({
          tvs
        })
      }
    })
    
    //综艺数据的获取
    network.getShowLists({
      success (shows){
        that.setData({
          shows
        })
      }
    })
  }
})

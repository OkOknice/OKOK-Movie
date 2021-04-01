import {getUrls} from "./url.js"
const network = {
    //电影数据的获取
    getMovieLists (params){
        params.type = "movie"
        this.getItemLists(params)
        // var count = params.count ? params.count : 7
        // var url = getUrls.getMoviesUrl
        // wx.request({
        //   url,
        //   data:{
        //       count
        //   },
        //   success (res){
        //     var movies = res.data.subject_collection_items
        //     if(params && params.success){
        //         params.success(movies)
        //     }
        //   }
        // })
    },
    //电视剧数据的获取
    getTvLists (params){
        params.type = "tv"
        this.getItemLists(params)
        // wx.request({
        //   url: getUrls.getTvsUrl,
        //   data:{
        //       count:7
        //   },
        //   success (res){
        //     var tvs = res.data.subject_collection_items
        //     if(params && params.success){
        //         params.success(tvs)
        //     }
        //   }
        // })
    },
    //综艺数据的获取
    getShowLists (params){
        params.type = "show"
        this.getItemLists(params)
        // wx.request({
        //   url: getUrls.getShowsUrl,
        //   data:{
        //       count:7
        //   },
        //   success (res){
        //     var shows = res.data.subject_collection_items
        //     if(params && params.success){
        //         params.success(shows)
        //     }
        //   }
        // })
    },
    //获取数据
    getItemLists (params){
      var url = ""
      if(params.type === 'movie'){
        url = getUrls.getMoviesUrl
      } else if(params.type === 'tv'){
        url = getUrls.getTvsUrl
      } else {
        url = getUrls.getShowsUrl
      }
      var count = params.count ? params.count : 7
      wx.request({
        url,
        data:{
          count
        },
        success (res){
            var items = res.data.subject_collection_items
            var length = items.length
            if(length % 3 === 2){
              items.push(null)
            }
            if(params && params.success){
                params.success(items)
            }
        }
      })
    },
    //获取详情数据
    getDetailItems (params){
      var type = params.type
      var id = params.id
      var url = ''
      if(type === 'movie'){
        url = getUrls.movieDetail + id
      } else if(type === 'tv'){
        url = getUrls.tvDetail + id
      } else {
        url = getUrls.showDetail + id
      }
      wx.request({
        url,
        success (res){
          // console.log(res)
          var item = res.data
          params.success(item)
        }
      })
    },
    //获取评论数据
    getCommentItems (params){
      var type = params.type;
    var id = params.id;
    var start = params.start?params.start:0;
    var count = params.count?params.count:3;
    var url = "";
    if(type === 'movie'){
      url = getUrls.movieComments(id,start,count);
    }else if(type === 'tv'){
      url = getUrls.tvComments(id,start,count);
    }else{
      url = getUrls.showComments(id,start,count);
    }
    wx.request({
      url: url,
      success: function(res){
        // console.log(res)
        var data = res.data;
        // console.log(data)
        if(params.success){
          params.success(data);
        }
      }
    })
    },
    //获取搜索的数据
    getSearchItem (params){
      var q = params.q
      // var id = params.id
      var url = getUrls.searchUrl(q)
      wx.request({
        url,
        success (res){
          var subjects = res.data.subjects
          // console.log(res)
          if(params.success){
            params.success(subjects)
          }
        }
      })
    }
}


export {network}
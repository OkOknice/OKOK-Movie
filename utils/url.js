const getUrls = {
    // 电影地址的获取
    getMoviesUrl : "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
    // 电视剧地址的获取
    getTvsUrl : "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
    // 综艺地址的获取
    getShowsUrl : "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
    // 电影详情数据地址获取
    movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
    //电视剧详情数据地址获取
    tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
    // 综艺详情数据地址获取
    showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
    // 电影评论数据地址获取
    movieComments (id,start=0,count=3){
        return 'https://m.douban.com/rexxar/api/v2/movie/' + id + '/interests?count=' + count + '&start=' + start;
    },
    // 电视剧评论数据地址获取
    tvComments (id,start=0,count=3){
        return 'https://m.douban.com/rexxar/api/v2/tv/' + id + '/interests?count=' + count + '&start=' + start;
    },
    // 综艺评论数据地址获取
    showComments (id,start=0,count=3){
        return this.tvComments(id,start,count);
    },
    // 搜索数据地址获取
    searchUrl (q){
        return "https://m.douban.com/rexxar/api/v2/search?type=movie&q=" + q
    }
}

export {getUrls}
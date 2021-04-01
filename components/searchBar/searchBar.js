// components/searchBar/searchBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isNavigator:{
            type:Boolean,
            value:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onInputEvent (event){
            var that = this
            // console.log(event)
            var value = event.detail.value
            var detail = {value}
            that.triggerEvent("searchInput",detail,{})
        }
    }
})

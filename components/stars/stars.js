// components/stars/stars.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rate:{
            type:Number,
            value:0,
            observer(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                this.updateRate();
            }
        },
        starsize: {
            type: Number,
            value: 20 //rpx
        },
        fontsize: {
            type: Number,
            value: 20 // rpx
        },
        fontcolor: {
            type: String,
            value: "#ccc"
        },
        isText:{
            type:Boolean,
            value:true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        lights:[],
        halfs:[],
        garys:[],
        rateText:''
    },
    lifetimes:{
        attached (){
            this.updateRate()
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        updateRate (){
            var that = this
            // console.log(that.properties.rate)
            var rate = that.properties.rate;
            var intRate = parseInt(rate);
            var light = parseInt(intRate / 2)
            var half = intRate % 2
            var gary = 5 - half - light
            var lights = []
            var halfs = []
            var garys = []
            for(var i = 0; i < light;i++){
                lights.push(i)
            }
            for(var i = 0; i < half;i++){
                halfs.push(i)
            }
            for(var i = 0; i < gary;i++){
                garys.push(i)
            }
            var rateText = rate && rate > 0 ? rate.toFixed(1) : "暂未评分" 
            that.setData({
                lights,
                halfs,
                garys,
                rateText
            })
        }
    }
})

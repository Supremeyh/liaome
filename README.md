# youliao


### 踩过的坑 Trampling Pits

* import 不能使用绝对路径，只能使用相对路径。但components内可以。如import { config } from '../config.js'
* thirdScriptError: code.startsWith is not a function，(定位代码，查看文档是否支持ES6)，说明code不是字符串，先用toString()处理下。如果是报undefied，说明code不存在。
* 组件内的properties和data初始值设定不同，
properties: {
  index: Number, //当类型为Number，值为0开头，如01时，小程序会自动去掉0，如转换成1,故类型换用String
  name: {
    type: String,
    value: 'sea',
    observer: function(newval, oldval,changedPath){
      //不要在此处用this.setDaata修改属性本身的值,防范内存泄漏，如index，可用_index,并在data中定义_index
    }
  }
}, 
data: {
  year: 0,
  month: ''
}
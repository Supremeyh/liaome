# liaome


### 踩过的坑 Trampling Pits

* import 不能使用绝对路径，只能使用相对路径。但components内可以。如import { config } from '../config.js'
* thirdScriptError: code.startsWith is not a function，(定位代码，查看文档是否支持ES6)，说明code不是字符串，先用toString()处理下。如果是报undefied，说明code不存在。
* 组件内的properties和data初始值设定不同，
```
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
```
* behavior: behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的“mixins”或“traits”。写法类似compnent，behavior 需要使用 Behavior() 构造器定义。组件和它引用的 behavior 中可以包含同名的字段，同名的属性或方法，组件本身的属性或方法会覆盖 behavior，多个 behavior后者取胜覆盖；如果有同名的数据字段，若是对象类型，会进行对象合并，如果是非对象类型则会进行相互覆盖；生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。





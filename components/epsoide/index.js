// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer(newval, oldval,changedPath){
        console.log('========')
        console.log(newval, oldval, changedPath)
        let val = newval < 10 ? '0' +  newval : newval
        this.setData({
          _index: val
        })
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    year:  0,
    month: '',
    _index: ''


  },

  attached: function(){
    // console.log(this.properties)
    // console.log(this.data)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

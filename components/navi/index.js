// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: '/images/foreward_white.png',
    leftSrc: '/images/foreward.png',
    disRightSrc: '/images/next_white.png',
    rightSrc: '/images/next.png',

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft: function(event) {
      if (!this.properties.latest) {
        this.triggerEvent('left', {

        })

      }
    },
    onRight: function(event) {
      if (!this.properties.first) {
        this.triggerEvent('right', {

        })
      }

    }

  }
})
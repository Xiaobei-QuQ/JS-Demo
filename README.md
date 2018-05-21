# JS-Demo
实现一些常见的js组件

# 瀑布流新闻网站

预览地址： https://xiaobei.store/JS-Demo/waterfall-sinanews.html

## 懒加载原理

封装一个当前元素是否在视窗中的函数

```
Exposure: function($el) {
    let scrollH = $(window).scrollTop()
    let winH = $(window).height()
    let top = $el.offset().top
    if (top < winH + scrollH) {
      return true;
    } else {
      return false;
    }
 }
```

当元素出现在视窗中，请求数据并等数据到来后开始渲染。

## 瀑布留实现原理

在渲染页面的时候利用`position:absolute`的left和top设置元素的位置
实现宽度固定，高度自适应的排版布局，设置一个长度和列数一样宽的数组，通过不断遍历数组去寻找每一行的高度最小值和当前元素的所在列，然后设置left和top实现自适应排版。

```
  waterfall: function($nodes) {
    this.imgWidth = $('.ct .item').outerWidth(true)
    this.colCount = Math.floor($('.ct').width() / this.imgWidth)
    if (!this.colHeightArray.length) {
      for (let i = 0; i < this.colCount; i++) {
        this.colHeightArray[i] = 0
      }
    }
    var minValue = this.colHeightArray[0]
    var minIndex = 0
    for (let i = 0; i < this.colCount; i++) {
      if (this.colHeightArray[i] < minValue) {
        minValue = this.colHeightArray[i]
        minIndex = i
      }
    }
    $nodes.css({
        left: minIndex * this.imgWidth,
        top: minValue,
        opacity: 1
      })
    this.colHeightArray[minIndex] += $nodes.outerHeight(true)
    $('#pic-ct').height(Math.max.apply(null, this.colHeightArray))
  }
```

## 实现原理

这个demo主要是结合懒加载和瀑布流实现用户操作的交互体验。核心原理就是各种宽高的判断。主要有一点是是在完成功能的时候要实现代码的耦合和整体性和复用性，需要用到面向对象的写法。
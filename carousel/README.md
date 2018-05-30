## 轮播组件

### 预览链接

https://xiaobei-quq.github.io/JS-Demo/carousel/index.html

### 主要功能

1. 无缝轮播

2. 点击按钮任意切换

3. 定时切换

4. 悬停停止自动切换

### 引用方式

- 组件依赖jQuery。

- 引入index.js。`var carousel  = new Carousel($('.xxx'))`

- 引入index.css。适当修改添加样式。

### 主要实现原理

- 复制第一个图片和最后一个图片节点

- 设置position为absolute ，获取图片长度后animate:left/right作为切换图片

- 设置index=0，切换一次加1或者减一，当等于图片数量时（即最后一张图片右切换），设置left为负一张图片的宽度，这时切换后显示的时第一张图。当index<0时（即第一张图左切换），设置left为负所有图片的长度，这时切换后看到的是最后一张图。

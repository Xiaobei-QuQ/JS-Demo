## Tab组件

s示例：https://xiaobei.store/JS-Demo/js-component-tab/%E7%A4%BA%E4%BE%8B.html

### 组件功能

实现点击导航栏`tabs-bar`切换不同显示内容`tabs-content`

### 组件实现方式

1. 创建Tab函数

2. jQuery绑定事件

3. 把核心功能放在Tab的原型上

4. new Tab传入一个Jquery选择器，赋值给一个对象

5. 得到具有具有Tab.prototype的对象。

### 如何使用

1. 引入tab.js，tab.css

2. 设置一个div包裹整个tab组件，设置一个新的class为tabs

3. 设置导航栏的ol的class为tabs-bar，设置内容的ol的class为tabs-content

4. 在js中传入包裹整个tab的选择器`var tab1 = new Tab('.xxx')`



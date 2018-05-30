## requirejs重写移动端豆瓣电影

### 引入requirejs

```
<script data-main="src/js/main.js" src="https://cdn.bootcss.com/require.js/2.3.5/require.js"></script>
```

### 新建模块

```
 - src
  -| js
   -| app.js
   -| helper.js
   -| jquery.js
   -| main.js
   -| search.js
   -| top250.js
   -| usbox.js
```

### 模块依赖

main.js是主逻辑，依赖了app模块并执行了app.init()
后续模块相互依赖并执行，每个模块都使用`define([dependency],function(){})`定义模块，使用`require(['jquery'],function($){})`加载模块

### 总结

这只是对模块化的一个初步认识，重写之后代码结构清晰明了，每个模块修改也很方便，但是requirejs只能模块化js代码，而且随着ES6的import和export的出现以及webpack的发展，逐渐被替代。可以了解其实现方式和使用来入门模块化以加深对webpack的理解。

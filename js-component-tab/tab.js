function Tab (node){
  this.elements = $(node)
  this.init()
  this.bind()
}

Tab.prototype = {
    constructor: Tab,
    init: function(){
      this.elements.each(function(index,element){
        $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
        $(element).children('.tabs-content').children('li').eq(0).addClass('active')
      })
    },
    bind: function(){
      this.elements.on('click','.tabs-bar>li',function(e){
        var $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
        var index = $li.index()
        var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
        $content.addClass('active').siblings().removeClass('active')
      })
    },
}

var tab1 = new Tab('.xxx');

define(['jquery'],function ($) {
    var search = {
        init: function() {
            this.$container = $('#search')
            this.$input = this.$container.find('input')
            this.$btn = this.$container.find('.button')
            this.$content = this.$container.find('.search-result')
            this.bind()
        },
        bind: function(){
            var _this= this
            this.$btn.click(function(){
                _this.getData(_this.$input.val(),function(data){
                    _this.render(data)
                })
            })
        },
        getData: function(keyword,callback){
            var _this = this
            _this.$container.find('.loading').show()
            $.ajax({
                url: 'https://api.douban.com/v2/movie/search',
                data: {
                    q: keyword
                },
                type: 'GET',
                dataType: 'JSONP'
            }).done(function(ret) {
                callback && callback(ret)
            }).fail(function() {
                console.log('error')
            }).always(function() {
                _this.$container.find('.loading').hide()
            })
        },
        render: function(data) {
            var _this = this
            data.subjects.forEach(function(item){
                _this.$content.append(Helper.createNode(item))
            })
        }
    }
    return search
})
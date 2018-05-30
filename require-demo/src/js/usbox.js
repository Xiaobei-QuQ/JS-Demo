define(['jquery','helper'],function ($,Helper) {
    var usBox = {
        init: function() {
            this.$container = $('section#usBox')
            this.$content = this.$container.find('.container')
            this.start()
        },
        start: function() {
            var _this = this
            this.getData(function(data) {
                _this.render(data)
            })
        },
        getData: function(callback) {
            var _this = this
            if (_this.isloading) return;
            _this.isloading = true
            _this.$container.find('.loading').show()
            $.ajax({
                url: 'https://api.douban.com/v2/movie/us_box',
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
            data.subjects.forEach(function(item) {
                _this.$content.append(Helper.createNode(item.subject))
            })
        }
    }
    return usBox
})
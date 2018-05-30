define(['helper','jquery'],function (Helper,$) {
    var top250 = {
        init: function() {
            this.index = 0
            this.isloading = false
            this.isFinish = false
            this.$container = $('section#top250')
            this.$content = this.$container.find('.container')
            this.bind()
            this.start()
        },
        bind: function() {
            var _this = this
            this.$container.scroll(function() {
                if(!_this.isFinish && Helper.isToEnd(_this.$container,_this.$content)){
                    _this.start()
                }
            })
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
                url: 'https://api.douban.com/v2/movie/top250',
                type: 'GET',
                data: {
                    start: _this.index || 0,
                },
                dataType: 'JSONP'
            }).done(function(ret) {
                _this.index += 20
                if (_this.idnex >= ret.total) {
                    _this.isFinish = true
                }
                callback && callback(ret)
            }).fail(function() {
                console.log('error')
            }).always(function() {
                _this.isloading = false
                _this.$content.find('.loading').hide()
            })
        },
        render: function(data) {
            var _this = this
            data.subjects.forEach(function(movie) {
                _this.$content.append(Helper.createNode(movie))
            })
        }
    }
    return top250
})
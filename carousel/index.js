function Carousel($ct) {
    this.init($ct)
}
Carousel.prototype = {
    init: function ($ct) {
        this.$ct = $ct
        this.$imgCt = this.$ct.find('.img-ct')
        this.$imgs = this.$ct.find('.img-ct>li')
        this.$btn = this.$ct.find('.arrow')
        this.$preBtn = this.$ct.find('.pre')
        this.$nextBtn = this.$ct.find('.next')
        this.$bullets = this.$ct.find('.bullet li')
        this.imgWidth = this.$imgs.width()
        this.imgCount = this.$imgs.length
        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        this.$imgCt.width((this.imgCount + 2)*this.imgWidth)
        this.$imgCt.css('left',-this.imgWidth)
        this.index = 0
        this.isAnimate = false
        this.autoClock = null

        this.bind()
        this.autoPlay()
    },
    bind: function () {
        var _this = this
        this.$preBtn.on('click',function () {
            _this.playPre(1)
        })
        this.$nextBtn.on('click',function () {
            _this.playNext(1)
        })
        this.$bullets.on('click',function () {
            var index = $(this).index()
            if(_this.index > index){
                _this.playPre(_this.index - index)
            }else{
                _this.playNext(index - _this.index)
            }
        })
        this.$ct.mouseenter(function () {
            _this.$btn.addClass('active')
            _this.stopAuto()
        }).mouseleave( function () {
            _this.$btn.removeClass('active')
            _this.autoPlay()

        })
    },
    playNext: function (len) {
        if(this.isAnimate) return
        this.isAnimate = true
        var _this = this
        this.$imgCt.animate({
            left: '-='+this.imgWidth*len
        },function () {
            _this.index += len
            if(_this.index === _this.imgCount){
                _this.$imgCt.css('left',-_this.imgWidth)
                _this.index = 0
            }
            _this.setBullet()
            _this.isAnimate = false
        })
    },
    playPre: function(len){
        if(this.isAnimate) return
        this.isAnimate = true
        var _this = this
        this.$imgCt.animate({
            left: '+='+ this.imgWidth*len
        },function () {
            _this.index -= len
            if(_this.index < 0){
                _this.$imgCt.css('left',-_this.imgWidth * _this.imgCount)
                _this.index = _this.imgCount - 1
            }
            _this.setBullet()
            _this.isAnimate = false
        })
    },
    setBullet: function () {
        this.$bullets.eq(this.index).addClass('active').siblings().removeClass('active')
    },
    autoPlay: function () {
        var _this = this
        this.autoClock = setInterval(function () {
            console.log('start...')
            _this.playNext(1)
        },2000)
    },
    stopAuto: function () {
        console.log('stop...')
        clearInterval(this.autoClock)

    }
}
var a  = new Carousel($('.carousel').eq(0))
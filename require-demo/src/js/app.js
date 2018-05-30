define(['top250','usbox','search','jquery'],function (top250,usBox,search) {
    var App = {
        init: function() {
            this.bind()
            top250.init()
            usBox.init()
            search.init()
        },
        bind: function() {
            $('footer>div').click(function(){
                $(this).addClass('active')
                    .siblings()
                    .removeClass('active')
                $currentPage = $('main>section')
                    .hide().eq($(this).index())
                    .fadeIn()
            })
            window.ontouchmove = function(e){
                e.preventDefault()
            }
            $('section').each(function(){
                this.ontouchmove = function(e){
                    e.stopPropagation()
                }
            })
        }
    }
    return App
})
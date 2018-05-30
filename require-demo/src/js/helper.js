define(['jquery'],function ($) {
    var Helper = {
        isToEnd :function($viewport,$content){
            return $viewport.height() + $viewport.scrollTop() + 10 > $content.height()
        },
        createNode: function(movie){
            let items = ` <div class="items">
                              <a href="#">
                                <div class="cover">
                                  <img>
                                </div>
                                <div class="detail">
                                  <h2></h2>
                                  <div class="extra">
                                    <span class="score"></span> / <span class='collect'></span>收藏
                                  </div>
                                  <div class="extra"><span class="year"></span>/<span class="type"></span></div>
                                  <div class="extra">导演：<span class="director"></span></div>
                                  <div class="extra">主演：<span class="actor"></span></div>
                                </div>
                              </a>
                            </div>
                          `
            let $node = $(items)
            $node.find('.cover img').attr('src', movie.images.medium.replace(/img7/g, "img3"))
            $node.find('.detail h2').text(movie.title)
            $node.find('.score').text(movie.rating.average)
            $node.find('.collect').text(movie.collect_count)
            $node.find('.year').text(movie.year)
            $node.find('.type').text(movie.genres.join('/'))
            $node.find('.director').text(function() {
                var directorsArr = []
                movie.directors.forEach(function(item) {
                    directorsArr.push(item.name)
                })
                return directorsArr.join('、')
            })
            $node.find('.actor').text(function() {
                var actorArr = []
                movie.casts.forEach(function(item) {
                    actorArr.push(item.name)
                })
                return actorArr.join('、')
            })
            return $node
        }
    }
    return Helper

})

(function (){

    // Singleton start
    var circleGeneratorSingleton = (function(){
        let instance;

        init = () => {
            let aCircle = [],
                stage  = $('.area');
            
            position = (circle, left, top) => {
                circle.css('left', left);
                circle.css('top', top);
            };
            create = (left, top) => {
                let circle = $('<div class="circle"></div>');
                position(circle, left, top);
                return circle; 
            };
            add = (circle) => {
                stage.append(circle);
                aCircle.push(circle);
            };
            index = () => {
                return aCircle.length;
            };
            return {
                create,
                add,
            }
        }

        return {
            getInstance: function() {
                if(!instance) {
                    instance = init();
                }
                return instance;
            }
        }
    })();
    // ./ Singleton


    // 
    $(window).ready(() => {
        $('.area').on('click', function(e)  {
            let cg      = circleGeneratorSingleton.getInstance(),
                circle  = cg.create(e.pageX-25, e.pageY-25); 
            cg.add(circle);
            
        })
    })


}())
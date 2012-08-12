 jQuery(document).ready(function($) {
            $('.sentence').after('<span class="fullmark">。</span>');

            $('.sentence').click(
                function(){
                    showComment($(this));
                }
            );
        });

function showComment(currentSentence){
    currentSentence.each(function(){
        
        $(this).parent().prevAll().animate(
            {
                left:$(this).parent().index()*76+120,
            },1000
        );

        $(this).parent().nextAll().animate(
            {
                right:500,
            },1000
        );
        $(this).parent().animate(
            {
                paddingLeft: 0,
                /*marginRight: 39,*/
                zIndex:99,
                left:$(this).parent().index()*76+120,
            },1000,function(){
                $('.commentWrapper').fadeIn(200);
            }
        );
        $(this).animate(
            {
                color:'#c30d23'
            },800
        );
        $(this).next().addClass('currentFullMark');
        $(this).siblings(':not(.currentFullMark)').animate(
            {
                color:'#B5B5B6'
            },800
        );
        $('.sentence').unbind('click');
        
        /*setTimeout(function(){
            $(':not(.commentWrapper)').click(function(){
                alert(1111);
            });
        }, 1000);*/
    });
}
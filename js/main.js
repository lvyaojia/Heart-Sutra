 jQuery(document).ready(function($) {

    $('#s1').show()

    

    $('.sentence').click(
        function(){
            showComment($(this));
        }
    );

});

function showComment(currentSentence){

    $('.sentence').unbind('click');
    commentID = currentSentence.attr('comment');

/*    $.ajax({
        type: "GET",
        dataType: "json",
        url: 'http://sutra.sinaapp.com/'+commentID+'/',
        success: function(data){
            alert(data[0].fields)
        }
    }) 
*/
    currentSentence.each(function(){
        var self = $(this);

        //点击的对象右边的经文向右移动，同时隐藏起来
        $(this).parent().prevAll().animate(
            {
               left:$(this).parent().index()*76+120-37,
            },1000,function(){
                self.parent().prevAll().hide();
            }
        );

        //点击的对象左边的经文向左移动
        $(this).parent().nextAll().animate(
            {
                right:500,
            },1000
        );

        //点击的对象向右移动，同时改变padding
        $(this).parent().animate(
            {
                left:$(this).parent().index()*76+120-37,
            },1000,function(){
                $('#'+commentID).fadeIn(200);
            }
        );

        //点击对象改变颜色为红色
        $(this).animate(
            {
                color:'#c30d23'
            },800
        );

        //改变同列其他经文颜色为淡灰色
        $(this).next().addClass('currentFullMark');
        $(this).siblings(':not(.currentFullMark)').animate(
            {
                color:'#B5B5B6'
            },800
        );
        $(this).siblings().children().animate(
            {
                color:'#B5B5B6'
            },800
        );

        //$('.sentence').unbind('click');
        /*self.click(function(){
            showSutra(self);
        });*/
        
        
        setTimeout(function(){
            $('body').click(function(event){
                showSutra(self);
                event.stopPropagation();
            });
            $('.commentContent').click(function(event){
                event.stopPropagation();
                return false;
            });

        },1500)
        

        
        
        
    });

}


function showSutra(currentSentence) {

    commentID = currentSentence.attr('comment');

    $('body').unbind('click');
    $('.commentContent').unbind('click');

    $('#'+commentID).fadeOut(300,function(){
        currentSentence.each(function(){
            var self = $(this);

            $(this).parent().prevAll().css("display","inline-block");

            $(this).parent().prevAll().animate(
                {
                   left:0
                },1000
            );

            $(this).parent().nextAll().animate(
                {
                    right:0,
                },1000
            );
            $(this).parent().nextAll().removeAttr('style');

            $(this).parent().animate(
                {   
                    left:0,
                },1000,function(){
                    currentSentence.parent().children().removeAttr('style');
                    currentSentence.parent().parent().children().removeAttr('style');
                }
            );
            $(this).parent().removeAttr('style');

            $(this).animate(
                {
                    color:'#000'
                },800
            );

            $(this).next().removeClass('currentFullMark');
            $(this).siblings(':not(.fullmark)').animate(
                {
                    color:'#000'
                },800
            );
            $(this).siblings('.fullmark').animate(
                {
                    color:'#c30d23'
                },800
            );

            $(this).siblings().children().animate(
                {
                    color:'#c30d23'
                },800
            );

            

            self.parent().children().unbind('click');
            $('.sentence').click(
                function(){
                    showComment($(this));
                }
            );

        });
    });




}
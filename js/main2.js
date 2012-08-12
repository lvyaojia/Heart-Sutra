 jQuery(document).ready(function(event) {

    totlePage = $('.pageList > div').length;
    currentPage = 1;

    $('body').keyup(function (event) {

        if(event.keyCode==37){  //left
            if(currentPage !=1 ) {
                $('.pageList').animate({left:})
            }
        }
        if(event.keyCode==39){  //right
            
        }
    });

    $('.sentence').click(
        function(){
            showComment($(this));
        }
    );

});



function showComment(currentSentence){

    $('.sentence').unbind('click');
    commentID = currentSentence.attr('comment');

    currentSentence.each(function(){
        var self = $(this);

        //点击的对象右边的经文向右移动
        $(this).parent().prevAll().animate(
            {
               left:($(this).parent().index()+1)*80,
            },1000
        );
        //点击的对象向右移动
        $(this).parent().animate(
            {
                left:($(this).parent().index()+1)*80,
            },1000
        );
        //点击的对象左边的经文向左移动
        $(this).parent().nextAll().animate(
            {
                right:(5-$(this).parent().index())*80+60,
            },1000
        );


        setTimeout(function(){
            $('#'+commentID).fadeIn(800);
        },666)
            

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

    $('#'+commentID).fadeOut(800);


    currentSentence.each(function(){
        var self = $(this);

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
        

        $(this).parent().animate(
            {   
                left:0,
            },1000,function(){
                currentSentence.parent().children().removeAttr('style');
                currentSentence.parent().parent().children().removeAttr('style');
                self.parent().nextAll().removeAttr('style');
                self.parent().removeAttr('style');
            }
        );


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

}


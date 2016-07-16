$(function(){
	var i = 0;
    $(".btn-slide").click(function(){
        if (i == 0) {
            $(this).text("收起")
            $(".hidden-vanue-list").show(100);
            return i = 1;
        }else if (i == 1){
            $(this).text("更多选项")
            $(".hidden-vanue-list").hide(100);
            return i = 0;
        }
    })
})
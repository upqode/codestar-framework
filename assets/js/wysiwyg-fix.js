;(function($){
    $(document).ready(function(){


        $("h4.ui-accordion-header").on("click",function(){
            var wysiwyg = $(this).data("wysiwyg");
            if(wysiwyg!=1) {
                $(this).next(".ui-accordion-content").find(".wp-editor-wrap").each(function () {
                    var ta = $(this).find("textarea");
                    var content = $(ta).html();
                    var id = $(ta).attr("name").replace(/[\[\]]/g, '');
                    var name = $(ta).attr("name");
                    //$(ta).addClass("wysiwyg").detach();
                    $(this).parent().append($("<textarea/>").attr("name", name).attr("id", id).html(content));
                    $(this).remove();
                    $("#" + id).wp_editor();
                    //$(ta).attr("id","ta"+i);
                });
                $(this).data("wysiwyg", 1);
            }
        })


    });
})(jQuery);
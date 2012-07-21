//By Nikita Bragin
jQuery.support.placeholder = (function(){
    try{
        var i = document.createElement('input');
        if(!('placeholder' in i)) {
            $(document).ready(function(){
                $("input[placeholder]").each(function(){
                    var placeholder  = $(this);
                    var label = $("<label>", {
                        "for":  placeholder.attr("id"),
                        "class": "placeholder",
                        "text":placeholder.attr("placeholder")
                    });
                    placeholder.before(label);
                    var placeholderVal =  placeholder.val();
                    if(placeholderVal) label.css("display","none");
                    placeholder.focus(function(){
                        label.addClass("placeholder-focus");
                    });
                    placeholder.blur(function(){
                        label.removeClass("placeholder-focus");
                    });
                    placeholder.on("keypress paste",function(){
                        label.css("display","none");
                        placeholder.keyup(function(){
                            placeholderVal =  placeholder.val();
                            if(!placeholderVal) label.removeAttr("style");
                        });
                    });
                });
            });
        }
    }
    catch(e){
        console.log(e);
    }
})();
window.onload=function(){
    var titlelt1 = document.querySelector('.titlelt1');
        titlelt1.onmouseover=function(){
            this.children[1].className="is-rotate";
            $(this).children('img').stop(true).animate({left:120},1000)
        }
        titlelt1.onmouseout=function(){
            this.children[1].className="";
            $(this).children('img').stop(true).animate({left:200},1000)
    }
        var titlelt2 = document.querySelector('.titlelt2');
            titlelt2.onmouseover=function(){
                this.children[1].className="is-rotate";
                $(this).children('img').stop(true).animate({left:240},1000)
            }
            titlelt2.onmouseout=function(){
                this.children[1].className="";
                $(this).children('img').stop(true).animate({left:424},1000)
        }
        var titlelt3 = document.querySelector('.titlelt3');
            titlelt3.onmouseover=function(){
    
                this.children[1].className="is-rotate";
                $(this).children('img').stop(true).animate({left:260},1000)
            }
            titlelt3.onmouseout=function(){
                this.children[1].className="";
                $(this).children('img').stop(true).animate({left:424},1000)
        }
} 

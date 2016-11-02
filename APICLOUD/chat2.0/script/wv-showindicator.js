(function(window,undefined){
    'use strict';
    var Indicator = function(){

    };

   Indicator.prototype = {
       create:function(params,callback){
           var toastHtml;
           var self = this;
           var iconHtml = params.html;
           var titleHtml = params.title ? '<div class="aui-toast-content">' + params.title + '</div>' : '';
           toastHtml = '<div class="aui-toast">'+iconHtml+titleHtml+'</div>';
           if(document.querySelector(".aui-toast"))return;
           document.body.insertAdjacentHTML('beforeend', toastHtml);
           self.show();
       },
       show:function(){
           document.querySelector(".aui-toast").style.display = "block";
           document.querySelector(".aui-toast").style.marginTop =  "-"+Math.round(document.querySelector(".aui-toast").offsetHeight/2)+"px";
           if(document.querySelector(".aui-toast"))return;
       },
       hide: function(){
           if(document.querySelector(".aui-toast")){
               document.querySelector(".aui-toast").parentNode.removeChild(document.querySelector(".aui-toast"));
           }
       }
   };
   window.Indicator = Indicator;
})(window);
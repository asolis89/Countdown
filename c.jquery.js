(function($){
   $.fn.countdown1 = function(options , callback) {
     
     var settings = {'date' : null};
     
     if (options){
         
         $.extend(settings, options);
     }
      this_sel = $(this);
     
     function count_exec(){
         eventDate = Date.parse(settings['date']) / 1000;
         currentDate = Math.floor($.now() / 1000);
         
         if (eventDate <= currentDate) {
             callback.call(this);
             clearInterval(interval);
			  
         }
         
         seconds = eventDate - currentDate;
         
         days = Math.floor(seconds / (60 * 60 * 24));
         seconds -= days * 60 * 60 * 24;
         
         
         
         hours = Math.floor(seconds / ( 60 * 60) );
         seconds -= hours * 60 * 60;
         
         minutes = Math.floor(seconds / 60);
         seconds -= minutes * 60;
         
         
         
         this_sel.find('.days').text(days);
         this_sel.find('.hours').text(hours);
         this_sel.find('.minutes').text(minutes);
         this_sel.find('.seconds').text(seconds);
     }
    count_exec();
    interval = setInterval(count_exec, 1000);
   }  
})(jQuery);
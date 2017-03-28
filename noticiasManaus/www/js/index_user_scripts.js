/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var API_Xml_2_Json =  "https://api.rss2json.com/v1/api.json?rss_url=";
     var URL_RSS_g1 = "http://pox.globo.com/rss/g1/am/amazonas/";
        var URL_RSS_uol = "http://pox.globo.com/rss/g1/am/amazonas/";   
     
         /* button  #bt_buscar */
    $(document).on("click", "#bt_buscar", function(evt)
    {
        /* your code goes here */ 
        
       //conecar com o servidor , pegar os dados e exibir na tela
        $.ajax({
            url : API_Xml_2_Json + URL_RSS_g1,
            dataType : 'json',
            success : function (data)
            {
               
                navigator.notification.alert(data);
                
            }   
        });
        
         //navigator.notification.alert(jsonObj);
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

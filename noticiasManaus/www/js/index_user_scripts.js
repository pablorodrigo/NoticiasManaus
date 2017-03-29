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
        var URL_RSS_uol = "http://tecnologia.uol.com.br/ultnot/index.xml";  
            var lista_noticias = [];
     
     
         //conecar com o servidor do g1, pegar os dados e exibir na tela
     function carregarRSS(url){
         //limpar lista
          $("#list_noticias").empty();
         
         //limpar imagem
         $("#imagem_lista_noticia").attr("srcset","");
         
           $.ajax({
            url : API_Xml_2_Json + url,
            dataType : 'json',
            success : function (data) {
                
                // adicionar imagem do RSS
                $("#imagem_lista_noticia").attr("srcset",data.feed.image);
                
                //recebe os objetos items
                lista_noticias = data.items;
                
                for(var i = 0; data.items.length; i++){
                    
                   // navigator.notification.alert(data.items[i].title);
                    
                     var title = data.items[i].title;
                        var data_noticia = data.items[i].pubDate;
                            var item = '<a x:ID="'+ i +'" class="list-group-item allow-badge widget uib_w_0" data-uib="twitter%20bootstrap/list_noticias" data-ver="1">' +
                                '<h4 class="list-group-item-heading">' + title + '</h4>' +
                                    '<p class="list-group-item-text">' + data_noticia + '</p>' +
                                        '</a>';
                     $("#list_noticias").append(item);
                }
            }   
        });
         
     }
     
     
        /* button  #bt_menu */
    $(document).on("click", "#bt_menu", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#left_side_bar"));  
         return false;
    });
    
        /* button  #left_side_bar_bt_fechar */
    
    
        /* button  #left_side_bar_bt_fechar */
    $(document).on("click", "#left_side_bar_bt_fechar", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#left_side_bar"));  
         return false;
    });
     
      $(document).on("click", "#list_noticias > a", function(evt)
    {
        // pega id de m item da lista
        var id = $(this).attr("x:ID");
            var noticia_detalhada = lista_noticias[id];
         //limpar imagem
         $("#imagem_detalhe_noticia").attr("srcset","");
         $("#imagem_detalhe_noticia").attr("srcset",noticia_detalhada.enclosure.link);
          // mudar tamanho
        $("#imagem_detalhe_noticia").css("width","100%");
          // prepare page
          
          //navigator.notification.alert(noticia_detalhada.title);
        
//        var title = e.title;
//        var link = e.permalink; 
//        var img = e.thumbnail;
//        var excerpt = e.excerpt; 
//        var content = e.content;
         
         // .html corrigi texto estranho
         $("#txt_titulo_detalhe h2").html(noticia_detalhada.title);
        //$("#txt_descricao_detalhe").html(noticia_detalhada.link);
         $("#iframe_url").attr("src",noticia_detalhada.link);
           
         // pegar imgem do texto
        // $("#txt_descricao_detalhe p img").each(function(){
       //     $(this).css('width', '100%')
       //            .css('height', '100%');
      //  });
  
        activate_page("#page_noticia_detalhe"); 
    });
    
        /* listitem  #list_menu_g1 */
    $(document).on("click", "#list_menu_g1", function(evt)
    {
        
         carregarRSS(URL_RSS_g1);
        
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#left_side_bar"));  
         return false;
    });
    
        /* listitem  #list_menu_UOL */
    $(document).on("click", "#list_menu_UOL", function(evt)
    {
        
        carregarRSS(URL_RSS_uol);
        
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#left_side_bar"));  
         return false;
    });
    
        /* button  #bt_voltar */
    $(document).on("click", "#bt_voltar", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();



  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justified_gallery.js
 # JS Adapter for JustifiedGallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2016 Miro Mannino
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2020-07-26 23:16:16 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.jf_gallery=function(e){var i,o,t,a={};return{init:function(t){i=e.adapter.jf_gallery,o=log4javascript.getLogger('j1.adapter.jf_gallery'),i.setState('started'),o.info('state: '+i.getState()),o.info('module is being initialized');var n=$.extend({module_name:'j1.adapter.jf_gallery',generated:'2020-07-26 23:16:16 +0200'},t);a=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:"",gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,css_classes:"mb-3",video_path:"https://github.com/jekyll-one-org/jekyll-one-lfs/raw/master/videos",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"mb-3",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://www.youtube.com/watch?v=X5Cfi7U4eL4","https://www.youtube.com/watch?v=Nck6BZga7TQ","https://www.youtube.com/watch?v=F2SXmzk8ve4","https://www.youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Carpool Karaoke by James Corden - Lady Gaga <br/> Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>Carpool Karaoke by James Corden - Adele <br/> James Corden is about the holidays in London and gets his girlfriend Adele off for a ride through the city. <br/> On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Carpool Karaoke by James Corden - Gwen Stefani <br/> Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>Carpool Karaoke by James Corden - First Lady Michelle Obama <br/> James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"mb-3",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://vimeo.com/175582480","https://vimeo.com/179528528"],captions_gallery:["Vogue -  Adriana Lima","Young Fashion - Kick It Old School"],captions_lightbox:["<p>Adriana Lima on Vimeo</p>","<p>Kick It Old School on Vimeo</p>"],poster:["adriana-lima-poster.jpg","kick-it-old-school-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_intro",show_delay:300,title:!1,css_classes:"mb-3",video_path:"/assets/videos/tutorials",image_path:"/assets/videos/tutorials",thumb_path:"/assets/videos/tutorials",videos:["web-erzeugen.1.mp4","web-erzeugen.2.mp4"],captions_gallery:["Ein Starter Web erzeugen","Noch ein Starter Web erzeugen"],captions_lightbox:["<p>Ein Starter Web erzeugen</p>","<p>Noch ein Starter Web erzeugen</p>"],poster:["web-erzeugen-poster.jpg","web-erzeugen-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}}]}),void 0!==n&&(a=e.mergeData(a,n)),i.initialize(a),i.setState('finished'),o.info('state: '+i.getState()),o.info('module initialized successfully')},initialize:function(){o=log4javascript.getLogger('j1.adapter.jf_gallery.init'),i.setState('running'),o.info('state: '+i.getState()),$('#jg_customizer').length&&(t='gallery is being initialized on id: #jg_customizer',o.info(t),$('#jg_customizer').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='',n='justified-gallery';n+=' light-gallery ';for(var s in i.jg_customizer){var l=i.jg_customizer[s].img,g=i.jg_customizer[s].captions_gallery,r=i.jg_customizer[s].captions_lightbox;null!=r&&'lg'=='lg'?(a+='<a data-sub-html="'+r+'" ',a+='href="'+l+"\">\n",a+='  <img src="'+l+'" img alt="'+r+"\">\n"):(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+=' <img src="'+l+'" img alt="'+g+"\">\n"),a+="</a>\n"}$('#jg_customizer').hide().html(a);var d=$('#jg_customizer');undefined,d.justifiedGallery({rowHeight:150,margins:1}).on('jg.complete',function(i){i.stopPropagation(),d.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_customizer=d.data('lightGallery'),setTimeout(function(){$('#jg_customizer').show(),t='initializing gallery finished on id: #jg_customizer',o.info(t)},250)})})),$('#jg_video_html5').length&&(t='gallery is being initialized on id: #jg_video_html5',o.info(t),$('#jg_video_html5').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='',n='justified-gallery';n+=' light-gallery ';for(var s in i.jg_video_html5){var l=i.jg_video_html5[s].image_path+'/'+i.jg_video_html5[s].poster,g=i.jg_video_html5[s].captions_gallery,r=i.jg_video_html5[s].captions_lightbox,d=i.jg_video_html5[s].video_id,_=i.jg_video_html5[s].video;null!=r&&'lg'=='lg'?(a+='<a data-sub-html="'+r+'" ',a+=' data-html="#'+d+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+r+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"):(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"),a+="</a>\n"}var v='';for(var s in i.jg_video_html5){var _=i.jg_video_html5[s].video_path+'/'+i.jg_video_html5[s].video,m=i.jg_video_html5[s].image_path+'/'+i.jg_video_html5[s].poster,d=(i.jg_video_html5[s].captions_lightbox,i.jg_video_html5[s].video_id),h=_.substr(_.lastIndexOf('.')+1);v+='<div style="display:none;" id="'+d+"\">\n",v+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",v+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",v+='    <source src="'+_+'" type="video/'+h+"\">\n",v+="    Your browser does not support HTML5 video.\n",v+="  </video>\n",v+="</div>\n"}$('#jg_video_html5').before(v),$('#jg_video_html5').hide().html(a);var p=$('#jg_video_html5');undefined,p.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),p.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_html5=p.data('lightGallery'),setTimeout(function(){$('#jg_video_html5').show(),t='initializing gallery finished on id: #jg_video_html5',o.info(t)},300)})})),$('#jg_video_online_youtube').length&&(t='gallery is being initialized on id: #jg_video_online_youtube',o.info(t),$('#jg_video_online_youtube').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='',n='justified-gallery';n+=' light-gallery ';for(var s in i.jg_video_online_youtube){var l=i.jg_video_online_youtube[s].image_path+'/'+i.jg_video_online_youtube[s].poster,g=i.jg_video_online_youtube[s].captions_gallery,r=i.jg_video_online_youtube[s].captions_lightbox,d=i.jg_video_online_youtube[s].video_id,_=i.jg_video_online_youtube[s].video;null!=r&&'lg'=='lg'?(a+='<a data-sub-html="'+r+'" ',a+=' data-src="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+r+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"):(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"),a+="</a>\n"}var v='';for(var s in i.jg_video_online_youtube){var _=i.jg_video_online_youtube[s].video_path+'/'+i.jg_video_online_youtube[s].video,m=i.jg_video_online_youtube[s].image_path+'/'+i.jg_video_online_youtube[s].poster,d=(i.jg_video_online_youtube[s].captions_lightbox,i.jg_video_online_youtube[s].video_id),h=_.substr(_.lastIndexOf('.')+1);v+='<div style="display:none;" id="'+d+"\">\n",v+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",v+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",v+='    <source src="'+_+'" type="video/'+h+"\">\n",v+="    Your browser does not support HTML5 video.\n",v+="  </video>\n",v+="</div>\n"}$('#jg_video_online_youtube').before(v),$('#jg_video_online_youtube').hide().html(a);var p=$('#jg_video_online_youtube');undefined,p.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),p.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube=p.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube').show(),t='initializing gallery finished on id: #jg_video_online_youtube',o.info(t)},300)})})),$('#jg_video_online_vimeo').length&&(t='gallery is being initialized on id: #jg_video_online_vimeo',o.info(t),$('#jg_video_online_vimeo').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='',n='justified-gallery';n+=' light-gallery ';for(var s in i.jg_video_online_vimeo){var l=i.jg_video_online_vimeo[s].image_path+'/'+i.jg_video_online_vimeo[s].poster,g=i.jg_video_online_vimeo[s].captions_gallery,r=i.jg_video_online_vimeo[s].captions_lightbox,d=i.jg_video_online_vimeo[s].video_id,_=i.jg_video_online_vimeo[s].video;null!=r&&'lg'=='lg'?(a+='<a data-sub-html="'+r+'" ',a+=' data-src="'+_+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+r+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"):(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"),a+="</a>\n"}var v='';for(var s in i.jg_video_online_vimeo){var _=i.jg_video_online_vimeo[s].video_path+'/'+i.jg_video_online_vimeo[s].video,m=i.jg_video_online_vimeo[s].image_path+'/'+i.jg_video_online_vimeo[s].poster,d=(i.jg_video_online_vimeo[s].captions_lightbox,i.jg_video_online_vimeo[s].video_id),h=_.substr(_.lastIndexOf('.')+1);v+='<div style="display:none;" id="'+d+"\">\n",v+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",v+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",v+='    <source src="'+_+'" type="video/'+h+"\">\n",v+="    Your browser does not support HTML5 video.\n",v+="  </video>\n",v+="</div>\n"}$('#jg_video_online_vimeo').before(v),$('#jg_video_online_vimeo').hide().html(a);var p=$('#jg_video_online_vimeo');undefined,p.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),p.lightGallery({lightbox:"lg"}),e.jg_video_online_vimeo=p.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vimeo').show(),t='initializing gallery finished on id: #jg_video_online_vimeo',o.info(t)},300)})})),$('#jg_video_intro').length&&(t='gallery is being initialized on id: #jg_video_intro',o.info(t),$('#jg_video_intro').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='',n='justified-gallery';n+=' light-gallery ';for(var s in i.jg_video_intro){var l=i.jg_video_intro[s].image_path+'/'+i.jg_video_intro[s].poster,g=i.jg_video_intro[s].captions_gallery,r=i.jg_video_intro[s].captions_lightbox,d=i.jg_video_intro[s].video_id,_=i.jg_video_intro[s].video;null!=r&&'lg'=='lg'?(a+='<a data-sub-html="'+r+'" ',a+=' data-html="#'+d+"\">\n",a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+r+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"):(a+='<a data-sub-html="'+g+'" ',a+='href="'+l+"\">\n",a+='<img src="'+l+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\"></span>\n"),a+="</a>\n"}var v='';for(var s in i.jg_video_intro){var _=i.jg_video_intro[s].video_path+'/'+i.jg_video_intro[s].video,m=i.jg_video_intro[s].image_path+'/'+i.jg_video_intro[s].poster,d=(i.jg_video_intro[s].captions_lightbox,i.jg_video_intro[s].video_id),h=_.substr(_.lastIndexOf('.')+1);v+='<div style="display:none;" id="'+d+"\">\n",v+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",v+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",v+='    <source src="'+_+'" type="video/'+h+"\">\n",v+="    Your browser does not support HTML5 video.\n",v+="  </video>\n",v+="</div>\n"}$('#jg_video_intro').before(v),$('#jg_video_intro').hide().html(a);var p=$('#jg_video_intro');undefined,p.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),p.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_intro=p.data('lightGallery'),setTimeout(function(){$('#jg_video_intro').show(),t='initializing gallery finished on id: #jg_video_intro',o.info(t)},300)})}))},messageHandler:function(e,a){var n=JSON.stringify(a,undefined,2);return t='received message from '+e+': '+n,o.debug(t),'command'===a.type&&'module_initialized'===a.action&&(i.setState('finished'),o.info(a.text)),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



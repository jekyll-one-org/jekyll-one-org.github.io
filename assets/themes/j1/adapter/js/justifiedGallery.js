

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGallery.js
 # JS Adapter for JustifiedGallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2021 Juergen Adams
 # Copyright (C) 2016 Miro Mannino
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-04-22 13:26:38 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.justifiedGallery=function(e){var i,o,t,a={};return{init:function(t){i=e.adapter.justifiedGallery,o=log4javascript.getLogger('j1.adapter.justifiedGallery'),i.setState('started'),o.info('state: '+i.getState()),o.info('module is being initialized');var l=$.extend({module_name:'j1.adapter.justifiedGallery',generated:'2021-04-22 13:26:38 +0000'},t);a=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,css_classes:"",video_path:"https://github.com/jekyll-one-org/jekyll-one-lfs/raw/master/videos",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://www.youtube.com/watch?v=X5Cfi7U4eL4","https://www.youtube.com/watch?v=Nck6BZga7TQ","https://www.youtube.com/watch?v=F2SXmzk8ve4","https://www.youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://vimeo.com/175582480","https://vimeo.com/179528528"],captions_gallery:["Vogue -  Adriana Lima","Young Fashion - Kick It Old School"],captions_lightbox:["<p>Adriana Lima on Vimeo</p>","<p>Kick It Old School on Vimeo</p>"],poster:["adriana-lima-poster.jpg","kick-it-old-school-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_intro",show_delay:300,title:!1,css_classes:"",video_path:"/assets/videos/tutorials",image_path:"/assets/videos/tutorials",thumb_path:"/assets/videos/tutorials",videos:["web-erzeugen.1.mp4","web-erzeugen.2.mp4"],captions_gallery:["Ein Starter Web erzeugen","Noch ein Starter Web erzeugen"],captions_lightbox:["<p>Ein Starter Web erzeugen</p>","<p>Noch ein Starter Web erzeugen</p>"],poster:["web-erzeugen-poster.jpg","web-erzeugen-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}}]}),void 0!==l&&(a=e.mergeData(a,l)),i.initialize(a),i.setState('finished'),o.info('state: '+i.getState()),o.info('module initialized successfully')},initialize:function(){if(o=log4javascript.getLogger('j1.adapter.justifiedGallery'),i.setState('running'),o.info('state: '+i.getState()),$('#jg_example').length){t='gallery is being initialized on id: #jg_example',o.info(t);var a='<div class="jg-gallery-title">Example of LightGallery Lightbox</div>';$('#jg_example').before(a),$('#jg_example').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_example){var n=i.jg_example[l].img,s=i.jg_example[l].captions_gallery,g=i.jg_example[l].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+n+"\">\n",a+='  <img src="'+n+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+=' <img src="'+n+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_example').hide().html(a);var r=$('#jg_example');undefined,r.justifiedGallery({rowHeight:250,margins:1}).on('jg.complete',function(i){i.stopPropagation(),r.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_example=r.data('lightGallery'),setTimeout(function(){$('#jg_example').show(),t='initializing gallery finished on id: #jg_example',o.info(t)},250)})})}if($('#jg_old_times').length){t='gallery is being initialized on id: #jg_old_times',o.info(t);a='<div class="jg-gallery-title">GrandPa around the 1930th</div>';$('#jg_old_times').before(a),$('#jg_old_times').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_old_times){var n=i.jg_old_times[l].img,s=i.jg_old_times[l].captions_gallery,g=i.jg_old_times[l].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+n+"\">\n",a+='  <img src="'+n+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+=' <img src="'+n+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_old_times').hide().html(a);var r=$('#jg_old_times');undefined,r.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),r.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_old_times=r.data('lightGallery'),setTimeout(function(){$('#jg_old_times').show(),t='initializing gallery finished on id: #jg_old_times',o.info(t)},200)})})}$('#jg_customizer').length&&(t='gallery is being initialized on id: #jg_customizer',o.info(t),$('#jg_customizer').addClass('justified-gallery mb-3'),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_customizer){var n=i.jg_customizer[l].img,s=i.jg_customizer[l].captions_gallery,g=i.jg_customizer[l].captions_lightbox;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+='href="'+n+"\">\n",a+='  <img src="'+n+'" img alt="'+g+"\">\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+=' <img src="'+n+'" img alt="'+s+"\">\n"),a+="</a>\n"}$('#jg_customizer').hide().html(a);var r=$('#jg_customizer');undefined,r.justifiedGallery({rowHeight:150,margins:1}).on('jg.complete',function(i){i.stopPropagation(),r.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_customizer=r.data('lightGallery'),setTimeout(function(){$('#jg_customizer').show(),t='initializing gallery finished on id: #jg_customizer',o.info(t)},250)})})),$('#jg_video_html5').length&&(t='gallery is being initialized on id: #jg_video_html5',o.info(t),$('#jg_video_html5').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_video_html5){var n=i.jg_video_html5[l].image_path+'/'+i.jg_video_html5[l].poster,s=i.jg_video_html5[l].captions_gallery,g=i.jg_video_html5[l].captions_lightbox,r=i.jg_video_html5[l].video_id,d=i.jg_video_html5[l].video;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-html="#'+r+"\">\n",a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var _='';for(var l in i.jg_video_html5){d=i.jg_video_html5[l].video_path+'/'+i.jg_video_html5[l].video;var m=i.jg_video_html5[l].image_path+'/'+i.jg_video_html5[l].poster;i.jg_video_html5[l].captions_lightbox;_+='<div style="display:none;" id="'+(r=i.jg_video_html5[l].video_id)+"\">\n",_+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",_+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",_+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",_+="    Your browser does not support HTML5 video.\n",_+="  </video>\n",_+="</div>\n"}$('#jg_video_html5').before(_),$('#jg_video_html5').hide().html(a);var h=$('#jg_video_html5');undefined,h.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),h.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_html5=h.data('lightGallery'),setTimeout(function(){$('#jg_video_html5').show(),t='initializing gallery finished on id: #jg_video_html5',o.info(t)},300)})})),$('#jg_video_online_youtube').length&&(t='gallery is being initialized on id: #jg_video_online_youtube',o.info(t),$('#jg_video_online_youtube').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_video_online_youtube){var n=i.jg_video_online_youtube[l].image_path+'/'+i.jg_video_online_youtube[l].poster,s=i.jg_video_online_youtube[l].captions_gallery,g=i.jg_video_online_youtube[l].captions_lightbox,r=(i.jg_video_online_youtube[l].video_id,i.jg_video_online_youtube[l].video);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+r+"\">\n",a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var d='';for(var l in i.jg_video_online_youtube){r=i.jg_video_online_youtube[l].video_path+'/'+i.jg_video_online_youtube[l].video;var _=i.jg_video_online_youtube[l].image_path+'/'+i.jg_video_online_youtube[l].poster;i.jg_video_online_youtube[l].captions_lightbox;d+='<div style="display:none;" id="'+i.jg_video_online_youtube[l].video_id+"\">\n",d+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",d+='         poster="'+_+"\" controls=\"\" preload=\"none\">\n",d+='    <source src="'+r+'" type="video/'+r.substr(r.lastIndexOf('.')+1)+"\">\n",d+="    Your browser does not support HTML5 video.\n",d+="  </video>\n",d+="</div>\n"}$('#jg_video_online_youtube').before(d),$('#jg_video_online_youtube').hide().html(a);var m=$('#jg_video_online_youtube');undefined,m.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),m.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube=m.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube').show(),t='initializing gallery finished on id: #jg_video_online_youtube',o.info(t)},300)})})),$('#jg_video_online_vimeo').length&&(t='gallery is being initialized on id: #jg_video_online_vimeo',o.info(t),$('#jg_video_online_vimeo').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_video_online_vimeo){var n=i.jg_video_online_vimeo[l].image_path+'/'+i.jg_video_online_vimeo[l].poster,s=i.jg_video_online_vimeo[l].captions_gallery,g=i.jg_video_online_vimeo[l].captions_lightbox,r=(i.jg_video_online_vimeo[l].video_id,i.jg_video_online_vimeo[l].video);null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-src="'+r+"\">\n",a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var d='';for(var l in i.jg_video_online_vimeo){r=i.jg_video_online_vimeo[l].video_path+'/'+i.jg_video_online_vimeo[l].video;var _=i.jg_video_online_vimeo[l].image_path+'/'+i.jg_video_online_vimeo[l].poster;i.jg_video_online_vimeo[l].captions_lightbox;d+='<div style="display:none;" id="'+i.jg_video_online_vimeo[l].video_id+"\">\n",d+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",d+='         poster="'+_+"\" controls=\"\" preload=\"none\">\n",d+='    <source src="'+r+'" type="video/'+r.substr(r.lastIndexOf('.')+1)+"\">\n",d+="    Your browser does not support HTML5 video.\n",d+="  </video>\n",d+="</div>\n"}$('#jg_video_online_vimeo').before(d),$('#jg_video_online_vimeo').hide().html(a);var m=$('#jg_video_online_vimeo');undefined,m.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),m.lightGallery({lightbox:"lg"}),e.jg_video_online_vimeo=m.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vimeo').show(),t='initializing gallery finished on id: #jg_video_online_vimeo',o.info(t)},300)})})),$('#jg_video_intro').length&&(t='gallery is being initialized on id: #jg_video_intro',o.info(t),$('#jg_video_intro').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var a='';for(var l in' light-gallery ',i.jg_video_intro){var n=i.jg_video_intro[l].image_path+'/'+i.jg_video_intro[l].poster,s=i.jg_video_intro[l].captions_gallery,g=i.jg_video_intro[l].captions_lightbox,r=i.jg_video_intro[l].video_id,d=i.jg_video_intro[l].video;null!=g&&'lg'=='lg'?(a+='<a data-sub-html="'+g+'" ',a+=' data-html="#'+r+"\">\n",a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+g+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(a+='<a data-sub-html="'+s+'" ',a+='href="'+n+"\">\n",a+='<img src="'+n+'" img alt="'+s+"\">\n",a+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),a+="</a>\n"}var _='';for(var l in i.jg_video_intro){d=i.jg_video_intro[l].video_path+'/'+i.jg_video_intro[l].video;var m=i.jg_video_intro[l].image_path+'/'+i.jg_video_intro[l].poster;i.jg_video_intro[l].captions_lightbox;_+='<div style="display:none;" id="'+(r=i.jg_video_intro[l].video_id)+"\">\n",_+="  <video class=\"lg-video-object lg-html5 video-js vjs-default-skin\"\n",_+='         poster="'+m+"\" controls=\"\" preload=\"none\">\n",_+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",_+="    Your browser does not support HTML5 video.\n",_+="  </video>\n",_+="</div>\n"}$('#jg_video_intro').before(_),$('#jg_video_intro').hide().html(a);var h=$('#jg_video_intro');undefined,h.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),h.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_intro=h.data('lightGallery'),setTimeout(function(){$('#jg_video_intro').show(),t='initializing gallery finished on id: #jg_video_intro',o.info(t)},300)})}))},messageHandler:function(e,a){var l=JSON.stringify(a,undefined,2);return t='received message from '+e+': '+l,o.debug(t),'command'===a.type&&'module_initialized'===a.action&&(i.setState('finished'),o.info(a.text)),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);



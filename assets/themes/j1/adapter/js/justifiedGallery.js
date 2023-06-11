

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGallery.js
 # JS Adapter for JustifiedGallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2016 Miro Mannino
 #
 # J1 Theme is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-11 07:38:21 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.justifiedGallery=function(e){var i,o,t,n,l,a,s;return{init:function(s){$.extend({module_name:'j1.adapter.justifiedGallery',generated:'2023-06-11 07:38:21 +0200'},s);n=null!=s?$.extend({},s):{},i=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170}),o=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,theme:"city",video_path:"/assets/videos/gallery/html5",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:null,image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//youtube.com/watch?v=X5Cfi7U4eL4","//youtube.com/watch?v=Nck6BZga7TQ","//youtube.com/watch?v=F2SXmzk8ve4","//youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube_2",show_delay:300,title:!1,css_classes:null,image_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_path:"/assets/videos/gallery/voice_kids_de_2021",videos:["//youtube.com/watch?v=aQqPgLMgO-I","//youtube.com/watch?v=Bl6tkAgaP1g","//youtube.com/watch?v=GuiOYCv9NTI","//youtube.com/watch?v=1bvE2mgJ22I"],player_params:["start: 0, end: 148","start: 0, end: 122","start: 0, end: 104","start: 10, end: 173"],captions_gallery:["The Voice Kids Germany 2021 - Constance","The Voice Kids Germany 2021 - Elisa","The Voice Kids Germany 2021 - Ben","The Voice Kids Germany 2021 - The Battle"],captions_lightbox:["<p>14-year-old Constance has dreamed of being on The Voice Kids stage for a very long time. Your dream has finally come true! She performs a breathtaking version of Sia's song Alive.</p>","<p>14-year-old Elisa is fascinated by the classics of pop music. Her version of Hey Jude from The Beatles comes with a lot of feeling.</p>","<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>","<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"],poster:["constance.jpg","elisa.jpg","ben.jpg","battle.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube_2_short",show_delay:300,title:!1,css_classes:null,image_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_path:"/assets/videos/gallery/voice_kids_de_2021",videos:["//youtube.com/watch?v=GuiOYCv9NTI","//youtube.com/watch?v=1bvE2mgJ22I"],player_params:["start: 0, end: 104","start: 10, end: 173"],captions_gallery:["The Voice Kids Germany 2021 - Ben","The Voice Kids Germany 2021 - The Battle"],captions_lightbox:["<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>","<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"],poster:["ben.jpg","battle.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:null,image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//vimeo.com/179528528","//vimeo.com/202117650","//vimeo.com/196000652"],captions_gallery:["Forever 21 - Kick It Old School","Forever 21 - Stay Colorful, Babe!","Forever 21 - NYE Party Shop"],captions_lightbox:["<p>Kick It Old School on Vimeo</p>","<p>Stay Colorful on Vimeo</p>","<p>NYE Party Shop on Vimeo</p>"],poster:["kick-it-old-school-poster.jpg","stay-colorful-poster.jpg","nye-party-shop-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo_short",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:null,image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//vimeo.com/179528528","//vimeo.com/202117650"],captions_gallery:["Forever 21 - Kick It Old School","Forever 21 - Stay Colorful, Babe!"],captions_lightbox:["<p>Kick It Old School on Vimeo</p>","<p>Stay Colorful on Vimeo</p>"],poster:["kick-it-old-school-poster.jpg","stay-colorful-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_dailymotion",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:null,image_path:"/assets/videos/gallery/dailymotion",thumb_path:"/assets/videos/gallery/dailymotion",videos:["//dai.ly/x887s09","//dai.ly/x87ycik"],captions_gallery:["Guided Meditation: Morning Energy","Beginner Mat Pilates: Core Workout"],captions_lightbox:["<p>Guided Meditation: Morning Energy</p>","<p>Beginner Mat Pilates: Core Workout</p>"],poster:["meditation.jpg","pilates.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vk",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:null,image_path:"/assets/videos/gallery/vk",thumb_path:"/assets/videos/gallery/vk",videos:["//vk.com/video_ext.php?oid=-114944820&id=456242413&hash=ef5be3f71500f8df","//vk.com/video_ext.php?oid=-114944820&id=456239717&hash=f6651448bfb14b90"],captions_gallery:["Otter plague","Looked at the shark's mouth (whale shark)"],captions_lightbox:["<p>Otter plague</p>","<p>Looked at the shark's mouth (whale shark)</p>"],poster:["otter.jpg","hai.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}}]}),t=$.extend(!0,{},i,o,n),l=e.adapter.justifiedGallery,a=log4javascript.getLogger('j1.adapter.justifiedGallery');var _=setInterval(function(){var i='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'==e.getState()&&i&&(l.setState('started'),a.debug("\nstate: "+l.getState()),a.info("\nmodule is being initialized"),l.initialize(t),l.setState('finished'),a.debug("\nstate: "+l.getState()),a.info("\nmodule initialized successfully"),clearInterval(_))},10)},initialize:function(){if(a=log4javascript.getLogger('j1.adapter.justifiedGallery'),l.setState('running'),a.debug("\nstate: "+l.getState()),$('#jg_example').length){s="\ngallery is being initialized on id: #jg_example",a.info(s);var i='<div class="jg-gallery-title">Example of LightGallery Lightbox</div>';$('#jg_example').before(i),$('#jg_example').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_example){var n=i.jg_example[t].img,l=i.jg_example[t].captions_gallery,_=i.jg_example[t].captions_lightbox;null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+='href="'+n+"\">\n",o+='  <img src="'+n+'" img alt="'+_+"\">\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+=' <img src="'+n+'" img alt="'+l+"\">\n"),o+="</a>\n"}$('#jg_example').hide().html(o);var g=$('#jg_example');undefined,g.justifiedGallery({rowHeight:250,margins:1}).on('jg.complete',function(i){i.stopPropagation(),g.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_example=g.data('lightGallery'),setTimeout(function(){$('#jg_example').show(),s="\ninitializing gallery finished on id: #jg_example",a.info(s)},250)})})}if($('#jg_old_times').length){s="\ngallery is being initialized on id: #jg_old_times",a.info(s);i='<div class="jg-gallery-title">GrandPa around the 1930th</div>';$('#jg_old_times').before(i),$('#jg_old_times').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_old_times){var n=i.jg_old_times[t].img,l=i.jg_old_times[t].captions_gallery,_=i.jg_old_times[t].captions_lightbox;null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+='href="'+n+"\">\n",o+='  <img src="'+n+'" img alt="'+_+"\">\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+=' <img src="'+n+'" img alt="'+l+"\">\n"),o+="</a>\n"}$('#jg_old_times').hide().html(o);var g=$('#jg_old_times');undefined,g.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),g.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_old_times=g.data('lightGallery'),setTimeout(function(){$('#jg_old_times').show(),s="\ninitializing gallery finished on id: #jg_old_times",a.info(s)},200)})})}$('#jg_customizer').length&&(s="\ngallery is being initialized on id: #jg_customizer",a.info(s),$('#jg_customizer').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_customizer){var n=i.jg_customizer[t].img,l=i.jg_customizer[t].captions_gallery,_=i.jg_customizer[t].captions_lightbox;null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+='href="'+n+"\">\n",o+='  <img src="'+n+'" img alt="'+_+"\">\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+=' <img src="'+n+'" img alt="'+l+"\">\n"),o+="</a>\n"}$('#jg_customizer').hide().html(o);var g=$('#jg_customizer');undefined,g.justifiedGallery({rowHeight:150,margins:1}).on('jg.complete',function(i){i.stopPropagation(),g.lightGallery({lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}),e.jg_customizer=g.data('lightGallery'),setTimeout(function(){$('#jg_customizer').show(),s="\ninitializing gallery finished on id: #jg_customizer",a.info(s)},250)})})),$('#jg_video_html5').length&&(s="\ngallery is being initialized on id: #jg_video_html5",a.info(s),$('#jg_video_html5').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_html5){var n=i.jg_video_html5[t].image_path+'/'+i.jg_video_html5[t].poster,l=i.jg_video_html5[t].captions_gallery,_=i.jg_video_html5[t].captions_lightbox,g=i.jg_video_html5[t].video_id,d=i.jg_video_html5[t].video;i.jg_video_html5[t].theme,i.jg_video_html5[t].player_params;null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-html="#'+g+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_html5){d=i.jg_video_html5[t].video_path+'/'+i.jg_video_html5[t].video;var h=i.jg_video_html5[t].image_path+'/'+i.jg_video_html5[t].poster;i.jg_video_html5[t].captions_lightbox;r+='<div style="display:none;" id="'+(g=i.jg_video_html5[t].video_id)+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-city\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+d+'" type="video/'+d.substr(d.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_html5').before(r),$('#jg_video_html5').hide().html(o);var v=$('#jg_video_html5');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_html5=v.data('lightGallery'),setTimeout(function(){$('#jg_video_html5').show(),s="\ninitializing gallery finished on id: #jg_video_html5",a.info(s)},300)})})),$('#jg_video_online_youtube').length&&(s="\ngallery is being initialized on id: #jg_video_online_youtube",a.info(s),$('#jg_video_online_youtube').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_youtube){var n=i.jg_video_online_youtube[t].image_path+'/'+i.jg_video_online_youtube[t].poster,l=i.jg_video_online_youtube[t].captions_gallery,_=i.jg_video_online_youtube[t].captions_lightbox,g=(i.jg_video_online_youtube[t].video_id,i.jg_video_online_youtube[t].video),d=(i.jg_video_online_youtube[t].theme,i.jg_video_online_youtube[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_youtube){g=i.jg_video_online_youtube[t].video_path+'/'+i.jg_video_online_youtube[t].video;var h=i.jg_video_online_youtube[t].image_path+'/'+i.jg_video_online_youtube[t].poster;i.jg_video_online_youtube[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_youtube[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_youtube').before(r),$('#jg_video_online_youtube').hide().html(o);var v=$('#jg_video_online_youtube');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube').show(),s="\ninitializing gallery finished on id: #jg_video_online_youtube",a.info(s)},300)})})),$('#jg_video_online_youtube_2').length&&(s="\ngallery is being initialized on id: #jg_video_online_youtube_2",a.info(s),$('#jg_video_online_youtube_2').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_youtube_2){var n=i.jg_video_online_youtube_2[t].image_path+'/'+i.jg_video_online_youtube_2[t].poster,l=i.jg_video_online_youtube_2[t].captions_gallery,_=i.jg_video_online_youtube_2[t].captions_lightbox,g=(i.jg_video_online_youtube_2[t].video_id,i.jg_video_online_youtube_2[t].video),d=(i.jg_video_online_youtube_2[t].theme,i.jg_video_online_youtube_2[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_youtube_2){g=i.jg_video_online_youtube_2[t].video_path+'/'+i.jg_video_online_youtube_2[t].video;var h=i.jg_video_online_youtube_2[t].image_path+'/'+i.jg_video_online_youtube_2[t].poster;i.jg_video_online_youtube_2[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_youtube_2[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_youtube_2').before(r),$('#jg_video_online_youtube_2').hide().html(o);var v=$('#jg_video_online_youtube_2');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube_2=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube_2').show(),s="\ninitializing gallery finished on id: #jg_video_online_youtube_2",a.info(s)},300)})})),$('#jg_video_online_youtube_2_short').length&&(s="\ngallery is being initialized on id: #jg_video_online_youtube_2_short",a.info(s),$('#jg_video_online_youtube_2_short').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_youtube_2_short){var n=i.jg_video_online_youtube_2_short[t].image_path+'/'+i.jg_video_online_youtube_2_short[t].poster,l=i.jg_video_online_youtube_2_short[t].captions_gallery,_=i.jg_video_online_youtube_2_short[t].captions_lightbox,g=(i.jg_video_online_youtube_2_short[t].video_id,i.jg_video_online_youtube_2_short[t].video),d=(i.jg_video_online_youtube_2_short[t].theme,i.jg_video_online_youtube_2_short[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_youtube_2_short){g=i.jg_video_online_youtube_2_short[t].video_path+'/'+i.jg_video_online_youtube_2_short[t].video;var h=i.jg_video_online_youtube_2_short[t].image_path+'/'+i.jg_video_online_youtube_2_short[t].poster;i.jg_video_online_youtube_2_short[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_youtube_2_short[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_youtube_2_short').before(r),$('#jg_video_online_youtube_2_short').hide().html(o);var v=$('#jg_video_online_youtube_2_short');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg",videojs:!0,videojsOptions:{}}),e.jg_video_online_youtube_2_short=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_youtube_2_short').show(),s="\ninitializing gallery finished on id: #jg_video_online_youtube_2_short",a.info(s)},300)})})),$('#jg_video_online_vimeo').length&&(s="\ngallery is being initialized on id: #jg_video_online_vimeo",a.info(s),$('#jg_video_online_vimeo').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_vimeo){var n=i.jg_video_online_vimeo[t].image_path+'/'+i.jg_video_online_vimeo[t].poster,l=i.jg_video_online_vimeo[t].captions_gallery,_=i.jg_video_online_vimeo[t].captions_lightbox,g=(i.jg_video_online_vimeo[t].video_id,i.jg_video_online_vimeo[t].video),d=(i.jg_video_online_vimeo[t].theme,i.jg_video_online_vimeo[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_vimeo){g=i.jg_video_online_vimeo[t].video_path+'/'+i.jg_video_online_vimeo[t].video;var h=i.jg_video_online_vimeo[t].image_path+'/'+i.jg_video_online_vimeo[t].poster;i.jg_video_online_vimeo[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_vimeo[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_vimeo').before(r),$('#jg_video_online_vimeo').hide().html(o);var v=$('#jg_video_online_vimeo');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_vimeo=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vimeo').show(),s="\ninitializing gallery finished on id: #jg_video_online_vimeo",a.info(s)},300)})})),$('#jg_video_online_vimeo_short').length&&(s="\ngallery is being initialized on id: #jg_video_online_vimeo_short",a.info(s),$('#jg_video_online_vimeo_short').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_vimeo_short){var n=i.jg_video_online_vimeo_short[t].image_path+'/'+i.jg_video_online_vimeo_short[t].poster,l=i.jg_video_online_vimeo_short[t].captions_gallery,_=i.jg_video_online_vimeo_short[t].captions_lightbox,g=(i.jg_video_online_vimeo_short[t].video_id,i.jg_video_online_vimeo_short[t].video),d=(i.jg_video_online_vimeo_short[t].theme,i.jg_video_online_vimeo_short[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_vimeo_short){g=i.jg_video_online_vimeo_short[t].video_path+'/'+i.jg_video_online_vimeo_short[t].video;var h=i.jg_video_online_vimeo_short[t].image_path+'/'+i.jg_video_online_vimeo_short[t].poster;i.jg_video_online_vimeo_short[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_vimeo_short[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_vimeo_short').before(r),$('#jg_video_online_vimeo_short').hide().html(o);var v=$('#jg_video_online_vimeo_short');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_vimeo_short=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vimeo_short').show(),s="\ninitializing gallery finished on id: #jg_video_online_vimeo_short",a.info(s)},300)})})),$('#jg_video_online_dailymotion').length&&(s="\ngallery is being initialized on id: #jg_video_online_dailymotion",a.info(s),$('#jg_video_online_dailymotion').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_dailymotion){var n=i.jg_video_online_dailymotion[t].image_path+'/'+i.jg_video_online_dailymotion[t].poster,l=i.jg_video_online_dailymotion[t].captions_gallery,_=i.jg_video_online_dailymotion[t].captions_lightbox,g=(i.jg_video_online_dailymotion[t].video_id,i.jg_video_online_dailymotion[t].video),d=(i.jg_video_online_dailymotion[t].theme,i.jg_video_online_dailymotion[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_dailymotion){g=i.jg_video_online_dailymotion[t].video_path+'/'+i.jg_video_online_dailymotion[t].video;var h=i.jg_video_online_dailymotion[t].image_path+'/'+i.jg_video_online_dailymotion[t].poster;i.jg_video_online_dailymotion[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_dailymotion[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_dailymotion').before(r),$('#jg_video_online_dailymotion').hide().html(o);var v=$('#jg_video_online_dailymotion');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_dailymotion=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_dailymotion').show(),s="\ninitializing gallery finished on id: #jg_video_online_dailymotion",a.info(s)},300)})})),$('#jg_video_online_vk').length&&(s="\ngallery is being initialized on id: #jg_video_online_vk",a.info(s),$('#jg_video_online_vk').addClass('justified-gallery '),$.getJSON('/assets/data/galleries.json',function(i){var o='';for(var t in' light-gallery ',i.jg_video_online_vk){var n=i.jg_video_online_vk[t].image_path+'/'+i.jg_video_online_vk[t].poster,l=i.jg_video_online_vk[t].captions_gallery,_=i.jg_video_online_vk[t].captions_lightbox,g=(i.jg_video_online_vk[t].video_id,i.jg_video_online_vk[t].video),d=(i.jg_video_online_vk[t].theme,i.jg_video_online_vk[t].player_params);null!=_&&'lg'=='lg'?(o+='<a data-sub-html="'+_+'" ',o+=' data-src="'+g+'"',o+=' data-options="'+d+"\">\n",o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+_+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"):(o+='<a data-sub-html="'+l+'" ',o+='href="'+n+"\">\n",o+='<img src="'+n+'" img alt="'+l+"\">\n",o+="<span><img class=\"justified-gallery img-overlay\" src=\"/assets/themes/j1/modules/lightGallery/css/themes/icons/play-button.png\" alt=\"Play Button\"></span>\n"),o+="</a>\n"}var r='';for(var t in i.jg_video_online_vk){g=i.jg_video_online_vk[t].video_path+'/'+i.jg_video_online_vk[t].video;var h=i.jg_video_online_vk[t].image_path+'/'+i.jg_video_online_vk[t].poster;i.jg_video_online_vk[t].captions_lightbox;r+='<div style="display:none;" id="'+i.jg_video_online_vk[t].video_id+"\">\n",r+="  <video class=\"lg-video-object lg-html5 video-js vjs-theme-\"\n",r+='         poster="'+h+"\" controls=\"\" preload=\"none\">\n",r+='    <source src="'+g+'" type="video/'+g.substr(g.lastIndexOf('.')+1)+"\">\n",r+="    Your browser does not support HTML5 video.\n",r+="  </video>\n",r+="</div>\n"}$('#jg_video_online_vk').before(r),$('#jg_video_online_vk').hide().html(o);var v=$('#jg_video_online_vk');undefined,v.justifiedGallery({rowHeight:200,margins:5}).on('jg.complete',function(i){i.stopPropagation(),v.lightGallery({lightbox:"lg"}),e.jg_video_online_vk=v.data('lightGallery'),setTimeout(function(){$('#jg_video_online_vk').show(),s="\ninitializing gallery finished on id: #jg_video_online_vk",a.info(s)},300)})}))},messageHandler:function(e,i){var o=JSON.stringify(i,undefined,2)
;return s="\nreceived message from "+e+': '+o,a.debug(s),'command'===i.type&&'module_initialized'===i.action&&(l.setState('finished'),a.info('\n'+i.text)),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);



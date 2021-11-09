

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtextResizer.js
 # Liquid template to adapt rtextResizer functions
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-11-09 15:00:49 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtextResizer=function(e){var t,a,i;return{init:function(o){t=e.adapter.rtextResizer,a=log4javascript.getLogger('j1.adapter.rtextResizer'),t.setState('started'),a.info("\nstate: "+t.getState()),a.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.rtextResizer',generated:'2021-11-09 15:00:49 +0000'},o);$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,css_classes:"",video_path:"https://github.com/jekyll-one-org/jekyll-one-lfs/raw/master/videos",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://www.youtube.com/watch?v=X5Cfi7U4eL4","https://www.youtube.com/watch?v=Nck6BZga7TQ","https://www.youtube.com/watch?v=F2SXmzk8ve4","https://www.youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://vimeo.com/175582480","https://vimeo.com/179528528"],captions_gallery:["Vogue -  Adriana Lima","Young Fashion - Kick It Old School"],captions_lightbox:["<p>Adriana Lima on Vimeo</p>","<p>Kick It Old School on Vimeo</p>"],poster:["adriana-lima-poster.jpg","kick-it-old-school-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_intro",show_delay:300,title:!1,css_classes:"",video_path:"/assets/videos/tutorials",image_path:"/assets/videos/tutorials",thumb_path:"/assets/videos/tutorials",videos:["web-erzeugen.1.mp4","web-erzeugen.2.mp4"],captions_gallery:["Ein Starter Web erzeugen","Noch ein Starter Web erzeugen"],captions_lightbox:["<p>Ein Starter Web erzeugen</p>","<p>Noch ein Starter Web erzeugen</p>"],poster:["web-erzeugen-poster.jpg","web-erzeugen-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_tiktok",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/tiktok",thumb_path:"/assets/videos/tiktok",videos:["https://www.tiktok.com/@octaviaegon/video/6983746143356292357/","https://www.tiktok.com/@waluschka.w59/video/6984680288114756870/","https://www.tiktok.com/@octaviaegon/video/6983746143356292357/"],captions_gallery:["Egon - Einhorn","Valentina - Mahlzeit!","Egon - Einhorn"],captions_lightbox:["<p>Egon - Einhorn</p>","<p>Valentina - Mahlzeit!</p>","<p>Egon - Einhorn</p>"],poster:["einhorn.jpg","waluschka.jpg","einhorn.jpg"],gallery_options:{rowHeight:400,margins:5},lightbox_options:{lightbox:"lg"}}}]}),$.extend({},{enabled:!0,title:"Mega Cities",xhr_container_id:"customizer",xhr_data_element:"galleryCustomizer",xhr_data_path:"/assets/data/gallery_customizer/index.html",gallery_settings:{rowHeight:150,maxRowHeight:-1,justifyLastRow:!1,hideLastRow:!1,margins:1,border:0,randomize:!1,sort:!1,refreshTime:200,refreshSensitivity:0,justifyThreshold:.9,captions:!0}}),e.loadHTML({xhr_container_id:'rtext_resizer_container',xhr_data_path:'/assets/data/rtext_resizer/index.html',xhr_data_element:'rtext_resizer_modal'},'j1.adapter.rtextResizer','null');var s=setInterval(function(){var a=log4javascript.getLogger('j1.adapter.rtextResizer');if('success'==e.xhrDOMState['#rtext_resizer_container']){var o=$('#rtext_resizer_modal');if(a.info("\nloading rtext resizer modal finished on id: #rtext_resizer"),a.info("\ninitialize resizer ui"),o.length){var n,r,l='production',g=(a=log4javascript.getLogger('j1.template.rtext-resizer'),$("main[class*='r-text']")),d=$("main[class*='r-text']").attr('class').replace(/r-text-[0-9]*/g,''),p=' r-text-300',h=' r-text-400',c=' r-text-500';$('input:checkbox[name="textsize-300"]').on('click',function(e){r=$(this).is(':checked'),$('input:checkbox[name="textsize-400"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==r&&(n=p),g.attr('class',d+n),'development'===l&&(i='Changed textsize to: '+n,a.info(i)),e.stopPropagation()}),$('input:checkbox[name="textsize-400"]').on('click',function(e){r=$(this).is(':checked'),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-500"]').prop('checked',!1),1==r&&(n=h),g.attr('class',d+n),'development'===l&&(i='Changed textsize to: '+n,a.info(i)),e.stopPropagation()}),$('input:checkbox[name="textsize-500"]').on('click',function(e){r=$(this).is(':checked'),$('input:checkbox[name="textsize-300"]').prop('checked',!1),$('input:checkbox[name="textsize-400"]').prop('checked',!1),1==r&&(n=c),g.attr('class',d+n),'development'===l&&(i='Changed textsize to: '+n,a.info(i)),e.stopPropagation()})}t.setState('finished'),a.info("\nstate: "+t.getState()),a.info("\ninitializing module finished"),a.info("\nmet dependencies for: loadHTML"),clearInterval(s)}},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+o,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



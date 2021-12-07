

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGalleryCustomizer.js
 # J1 Adapter for Gallery Customizer
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-12-07 17:40:53 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.justifiedGalleryCustomizer=function(e){var t,a,i,o='production',s={},n={};return{init:function(l){t=e.adapter.justifiedGalleryCustomizer,a=log4javascript.getLogger('j1.adapter.justifiedGalleryCustomizer'),t.setState('started'),a.info("\nstate: "+t.getState()),a.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.justifiedGalleryCustomizer',generated:'2021-12-07 17:40:53 +0000'},l);s=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,css_classes:"",video_path:"https://github.com/jekyll-one-org/jekyll-one-lfs/raw/master/videos",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://www.youtube.com/watch?v=X5Cfi7U4eL4","https://www.youtube.com/watch?v=Nck6BZga7TQ","https://www.youtube.com/watch?v=F2SXmzk8ve4","https://www.youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["https://vimeo.com/175582480","https://vimeo.com/179528528"],captions_gallery:["Vogue -  Adriana Lima","Young Fashion - Kick It Old School"],captions_lightbox:["<p>Adriana Lima on Vimeo</p>","<p>Kick It Old School on Vimeo</p>"],poster:["adriana-lima-poster.jpg","kick-it-old-school-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_intro",show_delay:300,title:!1,css_classes:"",video_path:"/assets/videos/tutorials",image_path:"/assets/videos/tutorials",thumb_path:"/assets/videos/tutorials",videos:["web-erzeugen.1.mp4","web-erzeugen.2.mp4"],captions_gallery:["Ein Starter Web erzeugen","Noch ein Starter Web erzeugen"],captions_lightbox:["<p>Ein Starter Web erzeugen</p>","<p>Noch ein Starter Web erzeugen</p>"],poster:["web-erzeugen-poster.jpg","web-erzeugen-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_tiktok",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/tiktok",thumb_path:"/assets/videos/tiktok",videos:["https://www.tiktok.com/@octaviaegon/video/6983746143356292357/","https://www.tiktok.com/@waluschka.w59/video/6984680288114756870/","https://www.tiktok.com/@octaviaegon/video/6983746143356292357/"],captions_gallery:["Egon - Einhorn","Valentina - Mahlzeit!","Egon - Einhorn"],captions_lightbox:["<p>Egon - Einhorn</p>","<p>Valentina - Mahlzeit!</p>","<p>Egon - Einhorn</p>"],poster:["einhorn.jpg","waluschka.jpg","einhorn.jpg"],gallery_options:{rowHeight:400,margins:5},lightbox_options:{lightbox:"lg"}}}]}),n=$.extend({},{enabled:!0,title:"Mega Cities",xhr_container_id:"customizer",xhr_data_element:"galleryCustomizer",xhr_data_path:"/assets/data/gallery_customizer/index.html",gallery_settings:{rowHeight:150,maxRowHeight:-1,justifyLastRow:!1,hideLastRow:!1,margins:1,border:0,randomize:!1,sort:!1,refreshTime:200,refreshSensitivity:0,justifyThreshold:.9,captions:!0}}),e.loadHTML({xhr_container_id:n.xhr_container_id,xhr_data_path:n.xhr_data_path,xhr_data_element:n.xhr_data_element},'j1.adapter.gallery_customizer','null');var r=setInterval(function(){if('success'==e.xhrDOMState['#customizer']){var l,g='#jg_customizer',d=$('#jg-customizer-form'),h=$('#jg_customizer'),p=750,c=100;if(a.info("\nloading customizer finished on id: #"+n.xhr_container_id),e.adapter.justifiedGallery.initialize(s),a.info("\ninitialize customizer ui|forms"),d.length)$('input[name="rowHeight"]').on('input',function(e){var t=$(this).val();if(t<c)return!1;$(this).data('lastval')!=t&&($(this).data('lastval',t),clearTimeout(l),l=setTimeout(function(){h.justifiedGallery({rowHeight:t}),'development'===o&&(i="\ngallery on ID "+g+' changed rowHeight to: '+t,a.info(i))},p)),e.stopPropagation()}),$('input[name="rowHeightMax"]').on('input',function(e){var t=$(this).val();$(this).data('lastval')!=t&&($(this).data('lastval',t),clearTimeout(l),l=setTimeout(function(){h.justifiedGallery({maxRowHeight:t}),'development'===o&&(i="\ngallery on ID "+g+' changed maxRowHeight to: '+t,a.info(i))},p)),e.stopPropagation()}),$('input[name="margins"]').on('input',function(e){var t=$(this).val();$(this).data('lastval')!=t&&($(this).data('lastval',t),clearTimeout(l),l=setTimeout(function(){h.justifiedGallery({margins:t}),'development'===o&&(i="\ngallery on ID "+g+' changed margins to: '+t,a.info(i))},p)),e.stopPropagation()}),$('input[name="border"]').on('input',function(e){var t=$(this).val();$(this).data('lastval')!=t&&($(this).data('lastval',t),clearTimeout(l),l=setTimeout(function(){h.justifiedGallery({border:t}),'development'===o&&(i="\ngallery on ID "+g+' changed padding to: '+t,a.info(i))},p)),e.stopPropagation()}),$('input:checkbox[name="captions"]').on('click',function(e){var t=$(this).is(':checked');h.justifiedGallery({captions:t}),'development'===o&&(i="\ngallery on ID "+g+' changed captions to: '+t,a.info(i)),e.stopPropagation()}),$('input:checkbox[name="random"]').on('click',function(e){var t=$(this).is(':checked');h.justifiedGallery({randomize:t}),'development'===o&&(i="\ngallery on ID "+g+' changed randomize to: '+t,a.info(i)),e.stopPropagation()}),$('input:checkbox[name="justify_last_row"]').on('click',function(e){var t=$(this).is(':checked');1==t?(t='justify',h.justifiedGallery({lastRow:t})):(t='nojustify',h.justifiedGallery({lastRow:t})),'development'===o&&(i="\ngallery on ID "+g+' changed lastRow to: '+t,a.info(i)),e.stopPropagation()}),$('input:checkbox[name="hide_last_row"]').on('click',function(e){var t=$(this).is(':checked');1==t?(t='hide',h.justifiedGallery({lastRow:t})):(t='nojustify',h.justifiedGallery({lastRow:t})),'development'===o&&(i="\ngallery on ID "+g+' changed lastRow to: '+t,a.info(i)),e.stopPropagation()}),$('#jg-customizer-form button[name="reset-defaults"]').on('click',function(e){$('#rowHeight').val(n.gallery_settings.rowHeight),$('#rowHeightMax').val(n.gallery_settings.maxRowHeight),$('#margins').val(n.gallery_settings.margins),$('#border').val(n.gallery_settings.border),$('input:checkbox[name="captions"]').val('on').filter('[value="on"]').prop('checked',n.gallery_settings.captions),$('input:checkbox[name="random"]').val('off').filter('[value="off"]').prop('checked',n.gallery_settings.randomize),$('input:checkbox[name="justify_last_row"]').val('on').filter('[value="on"]').prop('checked',n.gallery_settings.justifyLastRow),$('input:checkbox[name="hide_last_row"]').val('off').filter('[value="off"]').prop('checked',n.gallery_settings.hideLastRow),h.justifiedGallery({rowHeight:n.gallery_settings.rowHeight,maxRowHeight:n.gallery_settings.maxRowHeight,lastRow:n.gallery_settings.lastRow,margins:n.gallery_settings.margins,border:n.gallery_settings.border,randomize:n.gallery_settings.randomize,sort:n.gallery_settings.sort,refreshTime:n.gallery_settings.refreshTime,refreshSensitivity:n.gallery_settings.refreshSensitivity,justifyThreshold:n.gallery_settings.justifyThreshold,captions:n.gallery_settings.captions}),'development'===o&&(i="\ngallery on ID "+g+' reset to default values',a.info(i)),e.stopPropagation()});$('button.drawer-toggler').click(function(){$('button.drawer-toggler span.mdi').toggleClass('mdi-menu mdi-close')}),$('button.drawer-toggler').click(function(){$('button.drawer-toggler').toggleClass('fadeIn rotateIn')}),t.setState('finished'),a.info("\nstate: "+t.getState()),a.info("\ninitializing module finished"),a.info("\nmet dependencies for: loadHTML"),clearInterval(r)}},25)},messageHandler:function(e,t){var o=JSON.stringify(t,undefined,2);return i="\nreceived message from "+e+': '+o,a.debug(i),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



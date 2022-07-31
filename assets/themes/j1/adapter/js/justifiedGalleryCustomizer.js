

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/justifiedGalleryCustomizer.js
 # J1 Adapter for Gallery Customizer
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-07-31 15:28:07 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.justifiedGalleryCustomizer=function(e){var t,o,a,i='production',s={},n={};return{init:function(l){$.extend({module_name:'j1.adapter.justifiedGalleryCustomizer',generated:'2022-07-31 15:28:07 +0000'},l);t=e.adapter.justifiedGalleryCustomizer,o=log4javascript.getLogger('j1.adapter.justifiedGalleryCustomizer'),s=$.extend({},{enabled:!0,xhr_data_path:"/assets/data/galleries.json",instance_type:"multiple",rowHeight:170,galleries:[{gallery:{enabled:!0,type:"image",id:"jg_example",title:"Example of LightGallery Lightbox",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China"],captions_lightbox:[],gallery_options:{rowHeight:250,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_old_times",show_delay:200,title:"GrandPa around the 1930th",css_classes:"mb-3",images_path:"/assets/images/modules/gallery/old_times",thumb_path:"/assets/images/modules/gallery/old_times",images:["image_01.jpg","image_02.jpg","image_03.jpg","image_04.jpg"],captions_gallery:["GrandPa's 80th Birthday","GrandPa's 80th Birthday","GrandPa's annual journey","GrandPa's annual journey"],captions_lightbox:[],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"image",id:"jg_customizer",show_delay:250,css_classes:"mb-3",images_path:"/assets/images/modules/gallery/mega_cities",thumb_path:"/assets/images/modules/gallery/mega_cities",images:["banter-snaps_b.jpg","denys-nevozhai-1_b.jpg","gints-gailis_b.jpg","steven-diaz_b.jpg","denys-nevozhai-2_b.jpg","johan-mouchet_b.jpg","emmad-mazhari_b.jpg","federico-rizzarelli_b.jpg","andreas-brucker_b.jpg","thomas-tucker_b.jpg","luca-bravo_b.jpg","ethan-brooke_b.jpg","oskars-sylwan_b.jpg"],captions_gallery:["Osaka - Japan","Man posing at the rooftop of Jin Mao Tower Shanghai - China","Shangri-La Hotel Jakarta - Indonesia","Tokyo seen from World Trade Center Observation Deck - Japan","Young couple over Shenzhen - China","The Queen Bee at the Eureka Tower - Melbourne Southbank Australia","Chicago - United States","Shanghai - China","Cityscape of Bangkok Downtown - Thailand","Sunset over Taipei City - Taiwan","Brooklyn Bridge New York - United States","Lotte World Tower Seoul - South Korea","New York City","United States"],captions_lightbox:[],gallery_options:{rowHeight:150,margins:1},lightbox_options:{lightbox:"lg",mode:"lg-fade",cssEasing:"cubic-bezier(0.25, 0, 0.25, 1)"}}},{gallery:{enabled:!0,type:"video-html5",id:"jg_video_html5",show_delay:300,title:!1,theme:"city",video_path:"/assets/videos/gallery/html5",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["video1.mp4","video2.mp4"],captions_gallery:["PeckPocketed","Rollin`Wild"],captions_lightbox:["<p>CGI Animated Short HD: Student Academy Award Winning <b>PeckPocketed</b> by Kevin Herron</p>","<p>Rollin`Wild - Short Funny Animated Clips - Film Academy BW</p>"],poster:["video1-poster.jpg","video2-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//youtube.com/watch?v=X5Cfi7U4eL4","//youtube.com/watch?v=Nck6BZga7TQ","//youtube.com/watch?v=F2SXmzk8ve4","//youtube.com/watch?v=ln3wAdRAim4"],captions_gallery:["Carpool Karaoke - Lady Gaga","Carpool Karaoke - Adele","Carpool Karaoke - Gwen Stefani","Carpool Karaoke - First Lady Michelle Obama"],captions_lightbox:["<p>Lady Gaga joins James for a drive through Los Angeles singing her classics and tracks from her new album</p>","<p>James Corden is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits and Adele raps Nicki Minaj's <b>monster</b></p>","<p>Gwen Stefani, Julia Roberts, George Clooney and James Corden singing Holla back girl, there's nothing left to see</p>","<p>James Corden's White House tour takes an unthinkable turn when First Lady Michelle Obama joins him for a drive around the grounds singing Stevie Wonder and Beyonce</p>"],poster:["video_gaga-poster.jpg","video_adele-poster.jpg","video_gwen-poster.jpg","video_michelle-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube_2",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_path:"/assets/videos/gallery/voice_kids_de_2021",videos:["//youtube.com/watch?v=aQqPgLMgO-I","//youtube.com/watch?v=Bl6tkAgaP1g","//youtube.com/watch?v=GuiOYCv9NTI","//youtube.com/watch?v=1bvE2mgJ22I"],player_params:["start: 0, end: 148","start: 0, end: 122","start: 0, end: 104","start: 10, end: 173"],captions_gallery:["The Voice Kids Germany 2021 - Constance","The Voice Kids Germany 2021 - Elisa","The Voice Kids Germany 2021 - Ben","The Voice Kids Germany 2021 - The Battle"],captions_lightbox:["<p>14-year-old Constance has dreamed of being on The Voice Kids stage for a very long time. Your dream has finally come true! She performs a breathtaking version of Sia's song Alive.</p>","<p>14-year-old Elisa is fascinated by the classics of pop music. Her version of Hey Jude from The Beatles comes with a lot of feeling.</p>","<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>","<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"],poster:["constance.jpg","elisa.jpg","ben.jpg","battle.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_youtube_2_short",show_delay:300,title:!1,css_classes:"",image_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_path:"/assets/videos/gallery/voice_kids_de_2021",videos:["//youtube.com/watch?v=GuiOYCv9NTI","//youtube.com/watch?v=1bvE2mgJ22I"],player_params:["start: 0, end: 104","start: 10, end: 173"],captions_gallery:["The Voice Kids Germany 2021 - Ben","The Voice Kids Germany 2021 - The Battle"],captions_lightbox:["<p>14-year-old Ben pours all of his emotions into his performance of Maroon 5's Sunday Morning. He wants to show what he's made of.</p>","<p>The battle of the three young people is a real emotional battle. Elisa's husky voice, Constanze's unbelievable power, and Ben's rhythm come into their own in Adele's James Bond theme song Skyfall.</p>"],poster:["ben.jpg","battle.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg",videojs:!0,videojsOptions:{}}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//vimeo.com/179528528","//vimeo.com/202117650","//vimeo.com/196000652"],captions_gallery:["Forever 21 - Kick It Old School","Forever 21 - Stay Colorful, Babe!","Forever 21 - NYE Party Shop"],captions_lightbox:["<p>Kick It Old School on Vimeo</p>","<p>Stay Colorful on Vimeo</p>","<p>NYE Party Shop on Vimeo</p>"],poster:["kick-it-old-school-poster.jpg","stay-colorful-poster.jpg","nye-party-shop-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vimeo_short",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery",thumb_path:"/assets/videos/gallery",videos:["//vimeo.com/179528528","//vimeo.com/202117650"],captions_gallery:["Forever 21 - Kick It Old School","Forever 21 - Stay Colorful, Babe!"],captions_lightbox:["<p>Kick It Old School on Vimeo</p>","<p>Stay Colorful on Vimeo</p>"],poster:["kick-it-old-school-poster.jpg","stay-colorful-poster.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_dailymotion",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery/dailymotion",thumb_path:"/assets/videos/gallery/dailymotion",videos:["//dai.ly/x887s09","//dai.ly/x87ycik"],captions_gallery:["Guided Meditation: Morning Energy","Beginner Mat Pilates: Core Workout"],captions_lightbox:["<p>Guided Meditation: Morning Energy</p>","<p>Beginner Mat Pilates: Core Workout</p>"],poster:["meditation.jpg","pilates.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}},{gallery:{enabled:!0,type:"video-online",id:"jg_video_online_vk",show_delay:300,title:!1,thumb_items:2,thumb_spacing:5,thumb_bordered:!0,thumb_animate:!0,css_classes:"",image_path:"/assets/videos/gallery/vk",thumb_path:"/assets/videos/gallery/vk",videos:["//vk.com/video_ext.php?oid=-114944820&id=456242413&hash=ef5be3f71500f8df","//vk.com/video_ext.php?oid=-114944820&id=456239717&hash=f6651448bfb14b90"],captions_gallery:["Otter plague","Looked at the shark's mouth (whale shark)"],captions_lightbox:["<p>Otter plague</p>","<p>Looked at the shark's mouth (whale shark)</p>"],poster:["otter.jpg","hai.jpg"],gallery_options:{rowHeight:200,margins:5},lightbox_options:{lightbox:"lg"}}}]}),n=$.extend({},{enabled:!0,title:"Mega Cities",xhr_container_id:"customizer",xhr_data_element:"galleryCustomizer",xhr_data_path:"/assets/data/gallery_customizer/index.html",max_gallery_width:1024,gallery_settings:{rowHeight:150,margins:1,border:0,captions:!0,randomize:!1,justifyLastRow:!1,hideLastRow:!1}}),e.loadHTML({xhr_container_id:n.xhr_container_id,xhr_data_path:n.xhr_data_path,xhr_data_element:n.xhr_data_element},'j1.adapter.gallery_customizer','null');var r=setInterval(function(){if('finished'==e.getState()&&'success'==e.xhrDOMState['#customizer']&&'finished'==e.adapter.justifiedGallery.getState()){var l='#jg_customizer',g=$('#jg-customizer-form'),d=$('#jg_customizer'),h=document.getElementById('jgSlider_row_heigth'),p=document.getElementById('jgSlider_thumb_spacing'),m=document.getElementById('jgSlider_gallery_padding');if(o.info("\nmodule is being initialized"),t.setState('started'),o.debug("\nstate: "+t.getState()),o.info("\nloading HTML portion of the customizer finished on id: #"+n.xhr_container_id),e.adapter.justifiedGallery.initialize(s),g.length)var c=setInterval(function(){'finished'==e.adapter.rangeSlider.getState()&&(o.info("\ninitialize customizer ui"),h.noUiSlider.on('update',function(e,t){d.justifiedGallery({rowHeight:e[t]})}),p.noUiSlider.on('update',function(e,t){d.justifiedGallery({margins:e[t]})}),m.noUiSlider.on('update',function(e,t){d.justifiedGallery({border:e[t]})}),$('input:checkbox[name="captions"]').on('click',function(e){var t=$(this).is(':checked');d.justifiedGallery({captions:t}),'development'===i&&(a="\ngallery on ID "+l+' changed captions to: '+t,o.info(a)),e.stopPropagation()}),$('input:checkbox[name="random"]').on('click',function(e){var t=$(this).is(':checked');d.justifiedGallery({randomize:t}),'development'===i&&(a="\ngallery on ID "+l+' changed randomize to: '+t,o.info(a)),e.stopPropagation()}),$('input:checkbox[name="justify_last_row"]').on('click',function(e){var t=$(this).is(':checked');1==t?(t='justify',d.justifiedGallery({lastRow:t})):(t='nojustify',d.justifiedGallery({lastRow:t})),'development'===i&&(a="\ngallery on ID "+l+' changed lastRow to: '+t,o.info(a)),e.stopPropagation()}),$('input:checkbox[name="hide_last_row"]').on('click',function(e){var t=$(this).is(':checked');1==t?(t='hide',d.justifiedGallery({lastRow:t})):(t='nojustify',d.justifiedGallery({lastRow:t})),'development'===i&&(a="\ngallery on ID "+l+' changed lastRow to: '+t,o.info(a)),e.stopPropagation()}),$('#jg-customizer-form button[name="reset-defaults"]').on('click',function(e){h.noUiSlider.set(n.gallery_settings.rowHeight),p.noUiSlider.set(n.gallery_settings.margins),m.noUiSlider.set(n.gallery_settings.border),$('input:checkbox[name="captions"]').val('on').filter('[value="on"]').prop('checked',n.gallery_settings.captions),$('input:checkbox[name="random"]').val('off').filter('[value="off"]').prop('checked',n.gallery_settings.randomize),$('input:checkbox[name="justify_last_row"]').val('on').filter('[value="on"]').prop('checked',n.gallery_settings.justifyLastRow),$('input:checkbox[name="hide_last_row"]').val('off').filter('[value="off"]').prop('checked',n.gallery_settings.hideLastRow),d.justifiedGallery({rowHeight:n.gallery_settings.rowHeight,maxRowHeight:n.gallery_settings.maxRowHeight,lastRow:n.gallery_settings.lastRow,margins:n.gallery_settings.margins,border:n.gallery_settings.border,randomize:n.gallery_settings.randomize,sort:n.gallery_settings.sort,refreshTime:n.gallery_settings.refreshTime,refreshSensitivity:n.gallery_settings.refreshSensitivity,justifyThreshold:n.gallery_settings.justifyThreshold,captions:n.gallery_settings.captions}),'development'===i&&(a="\ngallery on ID "+l+' reset to default values',o.info(a)),e.stopPropagation()}),clearInterval(c))},25);$('button.drawer-toggler').click(function(){$('button.drawer-toggler span.mdi').toggleClass('mdi-menu mdi-close')}),$('button.drawer-toggler').click(function(){$('button.drawer-toggler').toggleClass('fadeIn rotateIn')}),t.setState('finished'),o.debug("\nstate: "+t.getState()),o.info("\ninitializing module finished"),o.debug("\nmet dependencies for: loadHTML"),clearInterval(r)}},25)},messageHandler:function(e,t){var i=JSON.stringify(t,undefined,2);return a="\nreceived message from "+e+': '+i,o.debug(a),'command'===t.type&&'module_initialized'===t.action&&o.info('\n'+t.text),!0},setState:function(e){t.state=e},getState:function(){return t.state}}}(j1,window);



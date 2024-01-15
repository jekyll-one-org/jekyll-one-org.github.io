

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/gallery.js
 # JS Adapter for J1 Gallery
 #
 # Product/Info:
 # https://jekyll.one
 # https://github.com/miromannino/Justified-Gallery
 #
 # Copyright (C) 2020 Miro Mannino
 # Copyright (C) 2023 Sachin Neravath
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Justified Gallery is licensed under the MIT license
 # See: https://github.com/miromannino/Justified-Gallery/blob/master/LICENSE
 # lightGallery is licensed under the GPLv3 license
 # See: https://github.com/sachinchoolur/lightGallery/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 # Adapter generated: 2024-01-15 03:15:22 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.gallery=function(e,i){var o,n,l,a,t,d,s,r;return{init:function(r){o=new URL(i.location.href),o.origin,e.jg={callback:{}};$.extend({module_name:'j1.adapter.gallery',generated:'2024-01-15 03:15:22 +0100'},r);d=e.adapter.gallery,s=log4javascript.getLogger('j1.adapter.gallery'),t=null!=r?$.extend({},r):{},n=$.extend({},{enabled:!1,xhr_data_path:"/assets/data/galeries",gallery_complete_timeout:1e3,filters:{enabled:!1,grayscale:1,contrast:.8,brightness:.4}}),l=$.extend({},{enabled:!0,galleries:[{gallery:null,enabled:!0,id:"jg_old_times",type:"image",image_base_path:"/assets/images/modules/gallery/old_times",thumb_base_path:"/assets/images/modules/gallery/old_times",gallery_options:{rowHeight:250,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgFullscreen, lgRotate, lgThumbnail",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left"}},images:[{image:null,file:"image_01.jpg",description:"<h5>GrandPa</h5> <h6>80th Birthday</h6>\n",caption:{text:"GrandPa &middot; 80th Birthday"}},{image:null,file:"image_02.jpg",description:"<h5>GrandPa</h5> <h6>80th Birthday</h6>\n",caption:{text:"GrandPa &middot; 80th Birthday"}},{image:null,file:"image_03.jpg",description:"<h5>GrandPa</h5> <h6>Annual journey</h6>\n",caption:{text:"GrandPa &middot; Annual journey"}},{image:null,file:"image_04.jpg",description:"<h5>GrandPa</h5> <h6>Annual journey</h6>\n",caption:{text:"GrandPa &middot; Annual journey"}}]},{gallery:null,enabled:!0,id:"jg_mega_cities",type:"image",image_base_path:"/assets/images/modules/gallery/mega_cities",thumb_base_path:"/assets/images/modules/gallery/mega_cities",gallery_options:{rowHeight:150,gutters:1},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgFullscreen, lgRotate, lgThumbnail",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",addClass:"lg-uno-thumbnails",appendThumbnailsTo:".lg-outer",animateThumb:!1,allowMediaOverlap:!0}},filters:{enabled:!1,grayscale:0,contrast:.8,brightness:.4},images:[{image:null,file:"banter-snaps_b.jpg",description:"<h5>Japan</h5> <h6>City of Osaka</h6>\n",caption:{text:"Japan &middot; City of Osaka"}},{image:null,file:"denys-nevozhai-1_b.jpg",description:"<h5>China</h5> <h6>Man posing at the rooftop of Jin Mao Tower Shanghai</h6>\n",caption:{text:"China &middot; Man posing at the rooftop of Jin Mao Tower Shanghai"}},{image:null,file:"gints-gailis_b.jpg",description:"<h5>Indonesia</h5> <h6>Shangri-La Hotel Jakarta</h6>\n",caption:{text:"Indonesia &middot; Shangri-La Hotel Jakarta"}},{image:null,file:"steven-diaz_b.jpg",description:"<h5>Japan</h5> <h6>Tokyo seen from World Trade Center Observation Deck</h6>\n",caption:{text:"Japan - Tokyo seen from World Trade Center Observation Deck"}},{image:null,file:"denys-nevozhai-2_b.jpg",description:"<h5>China</h5> <h6>Young couple over Shenzhen</h6>\n",caption:{text:"China &middot; Young couple over Shenzhen"}},{image:null,file:"johan-mouchet_b.jpg",description:"<h5>Australia</h5> <h6>The Queen Bee at the Eureka Tower of Melbourne</h6>\n",caption:{text:"Australia &middot; The Queen Bee at the Eureka Tower of Melbourne"}},{image:null,file:"thomas-tucker_b.jpg",description:"<h5>Taiwan</h5> <h6>Sunset over City of Taipei</h6>\n",caption:{text:"Taiwan &middot; Sunset over City of Taipei"}},{image:null,file:"emmad-mazhari_b.jpg",description:"<h5>United States</h5> <h6>City of Chicago</h6>\n",caption:{text:"United States &middot; City of Chicago"}},{image:null,file:"federico-rizzarelli_b.jpg",description:"<h5>China</h5> <h6>City of Shanghai</h6>\n",caption:{text:"China &middot; City of Shanghai"}},{image:null,file:"andreas-brucker_b.jpg",description:"<h5>Thailand</h5> <h6>City of Bangkok</h6>\n",caption:{text:"Thailand &middot; City of Bangkok"}},{image:null,file:"luca-bravo_b.jpg",description:"<h5>Taiwan</h5> <h6>Sunset over City of Taipei</h6>\n",caption:{text:"Taiwan &middot; Sunset over City of Taipei"}},{image:null,file:"ethan-brooke_b.jpg",description:"<h5>South Korea</h5> <h6>Lotte World Tower Seoul</h6>\n",caption:{text:"South Korea &middot; Lotte World Tower Seoul"}}]},{gallery:null,enabled:!0,id:"jg_video_html5",type:"video",video:"html5",video_base_path:"/assets/videos/gallery/html5",image_base_path:"/assets/videos/gallery",thumb_base_path:"/assets/videos/gallery",gallery_options:{rowHeight:250,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!0,videojsTheme:"vjs-theme-uno"},videojsOptions:{enabled:!0,controls:!0,muted:!1,preload:!0,playbackRates:[.25,.5,1,1.5,2],zoomPlugin:{enabled:!0},controlBar:{remainingTimeDisplay:!0,pictureInPictureToggle:!1}}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"Peck Pocketed",type:"html5",size:"1280-720",source:"video1.mp4",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Peck Pocketed by Kevin Herron | Disney Favorite</h5> <h6>Student Academy Award winning Cartoon Clip</h6>\n",caption:{text:"Peck Pocketed &middot; Student Academy Award winning Cartoon Clip"},poster:{source:"video1-poster.jpg"},tracks:[{track:null,"default":!0,kind:"captions",srclang:"en",label:"English",src:"/assets/videos/vtt/captions/video1.vtt"},{track:null,"default":!0,kind:"chapters",srclang:"en",label:"Chapters",src:"/assets/videos/vtt/chapters/video1.vtt"}]},{video:null,enabled:!0,name:"Rollin Wild",type:"html5",size:"1280-720",source:"video2.mp4",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Rollin` Wild</h5> <h6>Short Funny Animated Clip created at the Film Academy</h6>\n",caption:{text:"Rollin` Wild &middot; Short Funny Animated Clip created at the Film Academy"},poster:{source:"video2-poster.jpg"}}]},{gallery:null,enabled:!0,id:"jg_video_online_youtube",type:"video",video:"youtube",image_base_path:"/assets/videos/gallery",thumb_base_path:"/assets/videos/gallery",gallery_options:{rowHeight:200,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1},videojsOptions:{enabled:!1},playerParams:{enabled:!0,autoplay:0,controls:0,enablejsapi:1,hl:"en",loop:0,mute:0,playsinline:1,wmode:"opaque"}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"Carpool Karaoke Lady Gaga",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=X5Cfi7U4eL4",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6>\n  Lady Gaga joins James for a drive through Los Angeles\n  singing her classics and tracks from her new album.\n</h6>\n",caption:{text:"Carpool Karaoke &middot; Lady Gaga"},poster:{source:"video_gaga-poster.jpg"},playerParams:{enabled:!1}},{video:null,enabled:!0,name:"Carpool Karaoke Adele",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=Nck6BZga7TQ",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6>\n  James Corden is about the holidays in London and gets Adele\n  off for a ride through the city. On the way they sing some\n  of their biggest hits and Adele raps Nicki Minaj's <b>monster</b>\n</h6>\n",caption:{text:"Carpool Karaoke &middot; Adele"},poster:{source:"video_adele-poster.jpg"},playerParams:{enabled:!1}},{video:null,enabled:!0,name:"Carpool Karaoke Gwen Stefani",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=F2SXmzk8ve4",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6>\n  Gwen Stefani, Julia Roberts, George Clooney and James Corden\n  singing Holla back girl, there's nothing left to see\n</h6>\n",poster:{source:"video_gwen-poster.jpg"},caption:{text:"Carpool Karaoke &middot; Gwen Stefani"},playerParams:!1},{video:null,enabled:!0,name:"Carpool Karaoke Michelle Obama",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=ln3wAdRAim4",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6>\n  James Corden's White House tour takes an unthinkable turn\n  when First Lady Michelle Obama joins him for a drive around\n  the grounds singing Stevie Wonder and Beyonce\n</h6>\n",caption:{text:"Carpool Karaoke &middot; Michelle Obama"},poster:{source:"video_michelle-poster.jpg"},playerParams:{enabled:!1}}]},{gallery:null,enabled:!0,id:"jg_video_online_youtube_james_and_adele",type:"video",video:"youtube",image_base_path:"/assets/videos/gallery",thumb_base_path:"/assets/videos/gallery",gallery_options:{rowHeight:250,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1},videojsOptions:{enabled:!1},playerParams:{enabled:!0,autoplay:1,mute:0}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"Carpool Karaoke Lady Gaga",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=Nck6BZga7TQ",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6> December 2015 - James is on holidays is about the holidays in London and gets Adele off for a ride through the city. On the way they sing some of their biggest hits. </h6>\n",caption:{text:"Carpool Karaoke &middot; James and Adele"},poster:{source:"video_adele-poster.jpg"}},{video:null,enabled:!0,name:"Last Carpool Karaoke",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=nV8UZJNBY6Y",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>Carpool Karaoke</h5> <h6>\n  April 2023 - Adele wakeup James at home for the last Late Night Show,\n  for the last Carpool Caraoke ever.\n</h6>\n",caption:{text:"Carpool Karaoke &middot; Last Carpool Karaoke"},poster:{source:"video_adele_last_carpool_caraoke_poster.jpg"}}]},{gallery:null,enabled:!0,id:"jg_video_online_youtube_voice_kids",type:"video",video:"youtube",image_base_path:"/assets/videos/gallery/voice_kids_de_2021",thumb_base_path:"/assets/videos/gallery/voice_kids_de_2021",gallery_options:{rowHeight:200,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1},videojsOptions:{enabled:!1},playerParams:{enabled:!0,autoplay:1,mute:0}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"Voice Kids Constance",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=aQqPgLMgO-I",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  The Voice Kids Germany 2021 &middot; Constance\n</h5> <h6>\n  The 14-year-old Constance has dreamed of being on The Voice Kids stage\n  for a very long time. Your dream has finally come true! She performs a\n  breathtaking version of Sia's song Alive.\n</h6>\n",caption:{text:"Voice Kids Germany 2021 &middot; Constance"},poster:{source:"constance.jpg"}},{video:null,enabled:!0,name:"Voice Kids Elisa",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=Bl6tkAgaP1g",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  The Voice Kids Germany 2021 &middot; Elisa\n</h5> <h6>\n  The 14-year-old Elisa is fascinated by the classics of pop music.\n  Her version of Hey Jude from The Beatles comes with a lot of feeling.\n</h6>\n",caption:{text:"Voice Kids Germany 2021 &middot; Elisa"},poster:{source:"elisa.jpg"}},{video:null,enabled:!0,name:"Voice Kids Ben",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=GuiOYCv9NTI",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  The Voice Kids Germany 2021 &middot; Ben\n</h5> <h6>\n  The 14-year-old Ben pours all of his emotions into his performance\n  of Maroon 5's Sunday Morning. He wants to show what he's made of.\n</h6>\n",caption:{text:"Voice Kids Germany 2021 &middot; Ben"},poster:{source:"ben.jpg"}},{video:null,enabled:!0,name:"Voice Kids The Battle",type:"youtube",size:"1280-720",source:"//youtube.com/watch?v=1bvE2mgJ22I",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  The Voice Kids Germany 2021 &middot; The Battle\n</h5> <h6>\n  The battle of the three young people is a real emotional battle.\n  Elisa's husky voice, Constanze's unbelievable power, and Ben's\n  rhythm come into their own in Adele's James Bond theme song Skyfall.\n</h6>\n",caption:{text:"Voice Kids Germany 2021 &middot; The Battle"},poster:{source:"battle.jpg"}}]},{gallery:null,enabled:!0,id:"jg_video_online_vimeo",type:"video",video:"vimeo",image_base_path:"/assets/videos/gallery",thumb_base_path:"/assets/videos/gallery",gallery_options:{rowHeight:250,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1},videojsOptions:{enabled:!1},playerParams:{enabled:!1,autoplay:0,byline:0,portrait:0,color:"CCCCCC",muted:0}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"Forever 21",type:"vimeo",size:"1280-720",source:"//vimeo.com/179528528",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  Forever 21\n</h5> <h6>\n  Kick It Old School\n</h6>\n",caption:{text:"Forever 21 &middot; Kick It Old School"},poster:{source:"kick-it-old-school-poster.jpg"}},{video:null,enabled:!0,name:"Forever 21",type:"vimeo",size:"1280-720",source:"//vimeo.com/202117650",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  Forever 21\n</h5> <h6>\n  Stay Colorful, Babe!\n</h6>\n",caption:{text:"Forever 21 &middot; Stay Colorful, Babe!"},poster:{source:"stay-colorful-poster.jpg"}}]},{gallery:null,enabled:!0,id:"jg_video_online_dailymotion",type:"video",video:"dailymotion",image_base_path:"/assets/videos/gallery/dailymotion",thumb_base_path:"/assets/videos/gallery/dailymotion",gallery_options:{rowHeight:250,gutters:3},lightbox:{enabled:!0,type:"lg"},lightGallery:{plugins:"lgThumbnail, lgVideo",options:{licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1},videojsOptions:{enabled:!1},playerParams:{enabled:!1}},filters:{enabled:!1,grayscale:0,contrast:1,brightness:1},videos:[{video:null,enabled:!0,name:"SELF Channel",type:"dailymotion",size:"1280-720",source:"//dai.ly/x887s09",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  SELF Channel\n</h5> <h6>\n  Guided Meditation: Morning Energy\n</h6>\n",caption:{text:"SELF Channel &middot; Morning Energy"},poster:{source:"meditation.jpg"}},{video:null,enabled:!0,name:"SELF Channel",type:"dailymotion",size:"1280-720",source:"//dai.ly/x87ycik",pinterest_prefix:"Pin video",tweet_prefix:"Try video",description:"<h5>\n  SELF Channel\n</h5> <h6>\n  Beginner Mat Pilates: Core Workout\n</h6>\n",caption:{text:"SELF Channel &middot; Pilates Core Workout"},poster:{source:"pilates.jpg"}}]}]}),a=$.extend(!0,{},n,l,t),console.debug('loading HTML portion for all galleries configured'),d.loadGalleryHTML(a,a.galleries);var _=setInterval(function(){var i='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'==e.getState()&&i&&(d.setState('started'),s.debug("\nstate: "+d.getState()),s.info("\nmodule is being initialized"),d.initialize(a),d.setState('finished'),s.debug("\nstate: "+d.getState()),s.info("\nmodule initialized successfully"),clearInterval(_))},10)},initialize:function(){var i={};s=log4javascript.getLogger('j1.adapter.gallery'),d.setState('running'),s.debug("\nstate: "+d.getState()),s.info("\nfound gallery on id: jg_old_times"),i['dependencies_met_html_loaded_jg_old_times']='',i.dependencies_met_html_loaded_jg_old_times=setInterval(function(){if('success'===e.xhrDOMState['#jg_old_times_parent']){$('#jg_old_times');s.info("\ndyn_loader, initialize gallery on id: jg_old_times"),e.jg.callback.jg_old_times='waiting',$('#jg_old_times').justifiedGallery({rowHeight:250,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_old_times='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_old_times"),s.info("\ndyn_loader, initialize lightGallery on id: jg_old_times");var o=document.getElementById("jg_old_times");lightGallery(o,{plugins:[lgFullscreen,lgRotate,lgThumbnail],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",galleryId:"jg_old_times",selector:".lg-item"})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_old_times){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_old_times),s.info("\ndyn_loader, initialize lightGallery on id: jg_old_times");var i=document.getElementById("jg_old_times");lightGallery(i,{plugins:[lgFullscreen,lgRotate,lgThumbnail],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",galleryId:"jg_old_times",selector:".lg-item"})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_old_times)}},10),s.info("\nfound gallery on id: jg_mega_cities"),i['dependencies_met_html_loaded_jg_mega_cities']='',i.dependencies_met_html_loaded_jg_mega_cities=setInterval(function(){if('success'===e.xhrDOMState['#jg_mega_cities_parent']){$('#jg_mega_cities');s.info("\ndyn_loader, initialize gallery on id: jg_mega_cities"),e.jg.callback.jg_mega_cities='waiting',$('#jg_mega_cities').justifiedGallery({rowHeight:150,margins:1}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_mega_cities='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_mega_cities"),s.info("\ndyn_loader, initialize lightGallery on id: jg_mega_cities");var o=document.getElementById("jg_mega_cities");lightGallery(o,{plugins:[lgFullscreen,lgRotate,lgThumbnail],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",addClass:"lg-uno-thumbnails",appendThumbnailsTo:".lg-outer",animateThumb:!1,allowMediaOverlap:!0,galleryId:"jg_mega_cities",selector:".lg-item"})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_mega_cities){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_mega_cities),s.info("\ndyn_loader, initialize lightGallery on id: jg_mega_cities");var i=document.getElementById("jg_mega_cities");lightGallery(i,{plugins:[lgFullscreen,lgRotate,lgThumbnail],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",addClass:"lg-uno-thumbnails",appendThumbnailsTo:".lg-outer",animateThumb:!1,allowMediaOverlap:!0,galleryId:"jg_mega_cities",selector:".lg-item"})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_mega_cities)}},10),s.info("\nfound gallery on id: jg_video_html5"),i['dependencies_met_html_loaded_jg_video_html5']='',i.dependencies_met_html_loaded_jg_video_html5=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_html5_parent']){$('#jg_video_html5');s.info("\ndyn_loader, initialize gallery on id: jg_video_html5"),e.jg.callback.jg_video_html5='waiting',$('#jg_video_html5').justifiedGallery({rowHeight:250,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_html5='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_html5"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_html5");var o=document.getElementById("jg_video_html5");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!0,videojsTheme:"vjs-theme-uno",galleryId:"jg_video_html5",selector:".lg-item",videojsOptions:{controls:!0,muted:!1,preload:!0,playbackRates:[.25,.5,1,1.5,2],zoomPlugin:{enabled:!0},controlBar:{remainingTimeDisplay:!0,pictureInPictureToggle:!1}}})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_html5){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_html5),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_html5");var i=document.getElementById("jg_video_html5");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!0,videojsTheme:"vjs-theme-uno",galleryId:"jg_video_html5",selector:".lg-item",videojsOptions:{controls:!0,muted:!1,preload:!0,playbackRates:[.25,.5,1,1.5,2],zoomPlugin:{enabled:!0},controlBar:{remainingTimeDisplay:!0,pictureInPictureToggle:!1}}})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_html5)}},10),s.info("\nfound gallery on id: jg_video_online_youtube"),i['dependencies_met_html_loaded_jg_video_online_youtube']='',i.dependencies_met_html_loaded_jg_video_online_youtube=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_online_youtube_parent']){$('#jg_video_online_youtube');s.info("\ndyn_loader, initialize gallery on id: jg_video_online_youtube"),e.jg.callback.jg_video_online_youtube='waiting',$('#jg_video_online_youtube').justifiedGallery({rowHeight:200,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_online_youtube='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_online_youtube"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube");var o=document.getElementById("jg_video_online_youtube");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube",selector:".lg-item",youTubePlayerParams:{autoplay:0,controls:0,enablejsapi:1,hl:"en",loop:0,mute:0,playsinline:1,wmode:"opaque",origin:"origin"}})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_online_youtube){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_online_youtube),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube");var i=document.getElementById("jg_video_online_youtube");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube",selector:".lg-item",youTubePlayerParams:{autoplay:0,controls:0,enablejsapi:1,hl:"en",loop:0,mute:0,playsinline:1,wmode:"opaque",origin:"origin"}})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_online_youtube)}},10),s.info("\nfound gallery on id: jg_video_online_youtube_james_and_adele"),i['dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele']='',i.dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_online_youtube_james_and_adele_parent']){$('#jg_video_online_youtube_james_and_adele');s.info("\ndyn_loader, initialize gallery on id: jg_video_online_youtube_james_and_adele"),e.jg.callback.jg_video_online_youtube_james_and_adele='waiting',$('#jg_video_online_youtube_james_and_adele').justifiedGallery({rowHeight:250,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_online_youtube_james_and_adele='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_online_youtube_james_and_adele"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube_james_and_adele");var o=document.getElementById("jg_video_online_youtube_james_and_adele");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube_james_and_adele",selector:".lg-item",youTubePlayerParams:{autoplay:1,mute:0,origin:"origin"}})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_online_youtube_james_and_adele){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_online_youtube_james_and_adele),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube_james_and_adele");var i=document.getElementById("jg_video_online_youtube_james_and_adele");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube_james_and_adele",selector:".lg-item",youTubePlayerParams:{autoplay:1,mute:0,origin:"origin"}})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_online_youtube_james_and_adele)}},10),s.info("\nfound gallery on id: jg_video_online_youtube_voice_kids"),i['dependencies_met_html_loaded_jg_video_online_youtube_voice_kids']='',i.dependencies_met_html_loaded_jg_video_online_youtube_voice_kids=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_online_youtube_voice_kids_parent']){$('#jg_video_online_youtube_voice_kids');s.info("\ndyn_loader, initialize gallery on id: jg_video_online_youtube_voice_kids"),e.jg.callback.jg_video_online_youtube_voice_kids='waiting',$('#jg_video_online_youtube_voice_kids').justifiedGallery({rowHeight:200,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_online_youtube_voice_kids='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_online_youtube_voice_kids"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube_voice_kids");var o=document.getElementById("jg_video_online_youtube_voice_kids");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube_voice_kids",selector:".lg-item",youTubePlayerParams:{autoplay:1,mute:0,origin:"origin"}})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_online_youtube_voice_kids){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_online_youtube_voice_kids),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_youtube_voice_kids");var i=document.getElementById("jg_video_online_youtube_voice_kids");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_youtube_voice_kids",selector:".lg-item",youTubePlayerParams:{autoplay:1,mute:0,origin:"origin"}})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_online_youtube_voice_kids)}},10),s.info("\nfound gallery on id: jg_video_online_vimeo"),i['dependencies_met_html_loaded_jg_video_online_vimeo']='',i.dependencies_met_html_loaded_jg_video_online_vimeo=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_online_vimeo_parent']){$('#jg_video_online_vimeo');s.info("\ndyn_loader, initialize gallery on id: jg_video_online_vimeo"),e.jg.callback.jg_video_online_vimeo='waiting',$('#jg_video_online_vimeo').justifiedGallery({rowHeight:250,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_online_vimeo='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_online_vimeo"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_vimeo");var o=document.getElementById("jg_video_online_vimeo");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_vimeo",selector:".lg-item"})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_online_vimeo){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_online_vimeo),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_vimeo");var i=document.getElementById("jg_video_online_vimeo");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_vimeo",selector:".lg-item"})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_online_vimeo)}},10),s.info("\nfound gallery on id: jg_video_online_dailymotion"),i['dependencies_met_html_loaded_jg_video_online_dailymotion']='',i.dependencies_met_html_loaded_jg_video_online_dailymotion=setInterval(function(){if('success'===e.xhrDOMState['#jg_video_online_dailymotion_parent']){$('#jg_video_online_dailymotion');s.info("\ndyn_loader, initialize gallery on id: jg_video_online_dailymotion"),e.jg.callback.jg_video_online_dailymotion='waiting',$('#jg_video_online_dailymotion').justifiedGallery({rowHeight:250,margins:3}).on('jg.complete',function(i){i.stopPropagation(),e.jg.callback.jg_video_online_dailymotion='successful',s.info("\ndyn_loader, callback \"jg.complete\" entered on id: jg_video_online_dailymotion"),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_dailymotion");var o=document.getElementById("jg_video_online_dailymotion");lightGallery(o,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_dailymotion",selector:".lg-item"})}),setTimeout(function(){if('waiting'==e.jg.callback.jg_video_online_dailymotion){s.warn("\ndyn_loader, callback \"jg.callback\": "+e.jg.callback.jg_video_online_dailymotion),s.info("\ndyn_loader, initialize lightGallery on id: jg_video_online_dailymotion");var i=document.getElementById("jg_video_online_dailymotion");lightGallery(i,{plugins:[lgThumbnail,lgVideo],licenseKey:"0000-0000-000-0000",download:!1,alignThumbnails:"left",animateThumb:!0,autoplayFirstVideo:!0,videojs:!1,galleryId:"jg_video_online_dailymotion",selector:".lg-item"})}},2e3),clearInterval(i.dependencies_met_html_loaded_jg_video_online_dailymotion)}},10)},loadGalleryHTML:function(i,o){var n,l=Object.keys(o).length,a=l,t=i.xhr_data_path+'/index.html';console.debug('number of galleries found: '+a),d.setState('load_data'),Object.keys(o).forEach(function(i){o[i].enabled?(n=o[i].id+'_parent',console.debug('load HTML portion on gallery id: '+o[i].id),e.loadHTML({xhr_container_id:n,xhr_data_path:t,xhr_data_element:o[i].id})):(console.debug('gallery found disabled on id: '+o[i].id),a--)}),console.debug('galleries loaded in page enabled|all: '+a+'|'+l),d.setState('data_loaded')},messageHandler:function(e,i){var o=JSON.stringify(i,undefined,2);return r="\nreceived message from "+e+': '+o,s.debug(r),'command'===i.type&&'module_initialized'===i.action&&(d.setState('finished'),s.info('\n'+i.text)),!0},setState:function(e){d.state=e},getState:function(){return d.state}}}(j1,window);



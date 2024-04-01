

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/slick.js
 # JS Adapter for J1 Slick
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023, 2024 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.slick=((e,o)=>{var s,i,a,l,t,n,r,c,d,u,p,g,_,h,b,m,f=[],S=[];return{init:h=>{var w,y,k,v={},T={},O=!1;$.extend({module_name:'j1.adapter.cookieConsent',generated:'2024-04-01 01:16:05 +0200'},h);s=$.extend({}),i=$.extend({},{attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",title_animate:"animate__bounceInDown",title_animate_duration:"animate__fast",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slow",padding_top:600}},{name:"Pages",attic:{enabled:!0,id:"attic_page",layout:"page",padding_top:600}},{name:"Posts",attic:{enabled:!0,id:"attic_post",layout:["collection","post"],title_animate:"animate__fadeInDown",padding_top:600}}]}),$.extend(!0,{},s,i),a=$.extend({},{enabled:!1,xhr_data_path:"/assets/data/slick",lightbox:{enabled:!1,type:"slick",caption:!1,useHistoryApi:!1,background:"rgba(0,0,0,.8)",closeOnEscape:!0,closeOnBackdropClick:!0,navigateByKeyboard:!0,destroyTimeout:500,imageMaxHeight:.9,lazy:!1},filters:{enabled:!1,grayscale:1,contrast:1,brightness:1},accessibility:!0,adaptiveHeight:!1,arrows:!1,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.15,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnDotsHover:!1,pauseOnFocus:!0,pauseOnHover:!0,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:300,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3}),l=$.extend({},{enabled:!0,lightbox:{enabled:!1,caption:"caption",background:!1},captions:{enabled:!0},carousels:[{carousel:null,enabled:!0,id:"post_carousel_featured",type:"post",gutters:1,group:"Featured",image_styles:"img-fluid img-object--cover",image_height:"300px",translate_links:!1,link_new_window:!0,options:{autoplay:!1,arrows:!0,dots:!0,slidesToShow:2,slidesToScroll:2,responsive:!0},filters:{enabled:!0,grayscale:1,contrast:1,brightness:.4},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"collection_carousel_portfolio",type:"collection",gutters:1,collection:"portfolio",translate_links:!1,link_new_window:!0,image_styles:"img-fluid img-object--cover",image_height:"500px",options:{autoplay:!1,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:3,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"collection_carousel_biography",type:"collection",gutters:1,collection:"biography",translate_links:!1,link_new_window:!0,image_styles:"img-fluid img-object--cover",image_height:"500px",options:{autoplay:!1,arrows:!0,dots:!0,slidesToShow:3,slidesToScroll:3,responsive:!0},filters:{enabled:!0,grayscale:1,contrast:1,brightness:.8},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"collection_carousel_fantasy",type:"collection",gutters:1,collection:"fantasy",translate_links:!1,link_new_window:!0,image_styles:"img-fluid img-object--cover",image_height:"500px",options:{autoplay:!1,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:3,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"collection_carousel_romance",type:"collection",gutters:1,collection:"romance",translate_links:!1,link_new_window:!0,image_styles:"img-fluid img-object--cover",image_height:"500px",options:{autoplay:!1,arrows:!0,dots:!0,slidesToShow:3,slidesToScroll:3,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"example_carousel_arrows_dots",type:"example",gutters:1,style:"h3",height:"200px",slides:9,options:{arrows:!0,dots:!0,autoplay:!1,slidesToShow:3,slidesToScroll:3,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,arrows:!0,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]},{carousel:null,enabled:!0,id:"image_carousel_simple",type:"image",gutters:0,image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid img-object--cover",image_height:"300px",lightbox:{enabled:!1},captions:{enabled:!1,position:"bottom"},options:{autoplay:!1,arrows:!1,dots:!1,speed:300,slidesToShow:2,slidesToScroll:2,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:800,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,dots:!1,slidesToShow:1,slidesToScroll:1}}],slides:[{slide:null,image:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{slide:null,image:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{slide:null,image:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{slide:null,image:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{slide:null,image:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{slide:null,image:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]},{carousel:null,enabled:!0,id:"image_carousel_full",type:"image",gutters:1,image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid img-object--cover",image_height:"300px",lightbox:{enabled:!0},captions:{enabled:!0,position:"bottom"},options:{autoplay:!1,arrows:!0,dots:!0,speed:300,slidesToShow:2,slidesToScroll:2,responsive:!0},responsive:[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:800,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}],slides:[{slide:null,image:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{slide:null,image:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{slide:null,image:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{slide:null,image:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{slide:null,image:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{slide:null,image:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]}]}),t=$.extend({},{enabled:!1,type:"slick",caption:!1,useHistoryApi:!1,background:"rgba(0,0,0,.8)",closeOnEscape:!0,closeOnBackdropClick:!0,navigateByKeyboard:!0,destroyTimeout:500,imageMaxHeight:.9,lazy:!1}),n=$.extend({},{enabled:!1,caption:"caption",background:!1}),r=$.extend(!0,{},t,n),c=$.extend(!0,{},a,l),g=e.adapter.slick,_=log4javascript.getLogger('j1.adapter.slick'),g.loadCarouselHTML(c,c.carousels),O&&(o.onresize=(()=>{location.reload()}));var x=setInterval(()=>{var o='block'==$('#content').css("display"),s='finished'==e.getState(),i='finished'==e.adapter.attic.getState();if(s&&o&&i){b=Date.now(),g.setState('started'),_.debug("\nset module state to: "+g.getState()),_.info("\ninitializing module: started"),_.info("\ninitialize carousel on id: post_carousel_featured"),_.debug("\ncollect responsive settings for carousel on id: post_carousel_featured"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){var l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_post_carousel_featured']='',v.dependencies_met_html_loaded_post_carousel_featured=setInterval(()=>{if('success'===e.xhrDOMState['#post_carousel_featured_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='post',s=$('.post-carousel-featured').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: post_carousel_featured'),$('.slick-arrow-post_carousel_featured').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!0,slidesToShow:2,slidesToScroll:2,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #post_carousel_featured: \n"+y),$('.post-carousel-featured').on('init',function(){_.debug("\ncarousel initialized on id: post_carousel_featured"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: post_carousel_featured"),$('#post_carousel_featured').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: post_carousel_featured");var e=$("#post_carousel_featured > button");Math.round(document.documentElement.clientHeight/2);if($('#post_carousel_featured_caption')){_.debug("\nadjust top position of arrows on id: post_carousel_featured");e=$("#post_carousel_featured > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-post_carousel_featured')})}}),$('.post-carousel-featured').on('init afterChange',o),_.debug("\ncarousel is being setup on id: post_carousel_featured"),$('.post-carousel-featured').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_post_carousel_featured)}},10),_.info("\ninitialize carousel on id: collection_carousel_portfolio"),_.debug("\ncollect responsive settings for carousel on id: collection_carousel_portfolio"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_collection_carousel_portfolio']='',v.dependencies_met_html_loaded_collection_carousel_portfolio=setInterval(()=>{if('success'===e.xhrDOMState['#collection_carousel_portfolio_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='collection',s=$('.collection-carousel-portfolio').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: collection_carousel_portfolio'),$('.slick-arrow-collection_carousel_portfolio').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:3,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #collection_carousel_portfolio: \n"+y),$('.collection-carousel-portfolio').on('init',function(){_.debug("\ncarousel initialized on id: collection_carousel_portfolio"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: collection_carousel_portfolio"),$('#collection_carousel_portfolio').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: collection_carousel_portfolio");var e=$("#collection_carousel_portfolio > button");Math.round(document.documentElement.clientHeight/2);if($('#collection_carousel_portfolio_caption')){_.debug("\nadjust top position of arrows on id: collection_carousel_portfolio");e=$("#collection_carousel_portfolio > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-collection_carousel_portfolio')})}}),$('.collection-carousel-portfolio').on('init afterChange',o),_.debug("\ncarousel is being setup on id: collection_carousel_portfolio"),$('.collection-carousel-portfolio').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_collection_carousel_portfolio)}},10),_.info("\ninitialize carousel on id: collection_carousel_biography"),_.debug("\ncollect responsive settings for carousel on id: collection_carousel_biography"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_collection_carousel_biography']='',v.dependencies_met_html_loaded_collection_carousel_biography=setInterval(()=>{if('success'===e.xhrDOMState['#collection_carousel_biography_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='collection',s=$('.collection-carousel-biography').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: collection_carousel_biography'),$('.slick-arrow-collection_carousel_biography').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!0,slidesToShow:3,slidesToScroll:3,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #collection_carousel_biography: \n"+y),$('.collection-carousel-biography').on('init',function(){_.debug("\ncarousel initialized on id: collection_carousel_biography"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: collection_carousel_biography"),$('#collection_carousel_biography').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: collection_carousel_biography");var e=$("#collection_carousel_biography > button");Math.round(document.documentElement.clientHeight/2);if($('#collection_carousel_biography_caption')){_.debug("\nadjust top position of arrows on id: collection_carousel_biography");e=$("#collection_carousel_biography > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-collection_carousel_biography')})}}),$('.collection-carousel-biography').on('init afterChange',o),_.debug("\ncarousel is being setup on id: collection_carousel_biography"),$('.collection-carousel-biography').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_collection_carousel_biography)}},10),_.info("\ninitialize carousel on id: collection_carousel_fantasy"),_.debug("\ncollect responsive settings for carousel on id: collection_carousel_fantasy"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_collection_carousel_fantasy']='',v.dependencies_met_html_loaded_collection_carousel_fantasy=setInterval(()=>{if('success'===e.xhrDOMState['#collection_carousel_fantasy_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='collection',s=$('.collection-carousel-fantasy').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: collection_carousel_fantasy'),$('.slick-arrow-collection_carousel_fantasy').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!1,slidesToShow:3,slidesToScroll:3,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #collection_carousel_fantasy: \n"+y),$('.collection-carousel-fantasy').on('init',function(){_.debug("\ncarousel initialized on id: collection_carousel_fantasy"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: collection_carousel_fantasy"),$('#collection_carousel_fantasy').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: collection_carousel_fantasy");var e=$("#collection_carousel_fantasy > button");Math.round(document.documentElement.clientHeight/2);if($('#collection_carousel_fantasy_caption')){_.debug("\nadjust top position of arrows on id: collection_carousel_fantasy");e=$("#collection_carousel_fantasy > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-collection_carousel_fantasy')})}}),$('.collection-carousel-fantasy').on('init afterChange',o),_.debug("\ncarousel is being setup on id: collection_carousel_fantasy"),$('.collection-carousel-fantasy').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_collection_carousel_fantasy)}},10),_.info("\ninitialize carousel on id: collection_carousel_romance"),_.debug("\ncollect responsive settings for carousel on id: collection_carousel_romance"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_collection_carousel_romance']='',v.dependencies_met_html_loaded_collection_carousel_romance=setInterval(()=>{if('success'===e.xhrDOMState['#collection_carousel_romance_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='collection',s=$('.collection-carousel-romance').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: collection_carousel_romance'),$('.slick-arrow-collection_carousel_romance').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!0,slidesToShow:3,slidesToScroll:3,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #collection_carousel_romance: \n"+y),$('.collection-carousel-romance').on('init',function(){_.debug("\ncarousel initialized on id: collection_carousel_romance"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: collection_carousel_romance"),$('#collection_carousel_romance').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: collection_carousel_romance");var e=$("#collection_carousel_romance > button");Math.round(document.documentElement.clientHeight/2);if($('#collection_carousel_romance_caption')){_.debug("\nadjust top position of arrows on id: collection_carousel_romance");e=$("#collection_carousel_romance > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-collection_carousel_romance')})}}),$('.collection-carousel-romance').on('init afterChange',o),_.debug("\ncarousel is being setup on id: collection_carousel_romance"),$('.collection-carousel-romance').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_collection_carousel_romance)}},10),_.info("\ninitialize carousel on id: example_carousel_arrows_dots"),_.debug("\ncollect responsive settings for carousel on id: example_carousel_arrows_dots"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,arrows:!0,dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:600,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_example_carousel_arrows_dots']='',v.dependencies_met_html_loaded_example_carousel_arrows_dots=setInterval(()=>{if('success'===e.xhrDOMState['#example_carousel_arrows_dots_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='example',s=$('.example-carousel-arrows-dots').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('h3').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: example_carousel_arrows_dots'),$('.slick-arrow-example_carousel_arrows_dots').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{arrows:!0,dots:!0,autoplay:!1,slidesToShow:3,slidesToScroll:3,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #example_carousel_arrows_dots: \n"+y),$('.example-carousel-arrows-dots').on('init',function(){_.debug("\ncarousel initialized on id: example_carousel_arrows_dots"),(k=''!==(k='')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: example_carousel_arrows_dots"),$('#example_carousel_arrows_dots').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: example_carousel_arrows_dots");var e=$("#example_carousel_arrows_dots > button");Math.round(document.documentElement.clientHeight/2);if($('#example_carousel_arrows_dots_caption')){_.debug("\nadjust top position of arrows on id: example_carousel_arrows_dots");e=$("#example_carousel_arrows_dots > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-example_carousel_arrows_dots')})}}),$('.example-carousel-arrows-dots').on('init afterChange',o),_.debug("\ncarousel is being setup on id: example_carousel_arrows_dots"),$('.example-carousel-arrows-dots').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_example_carousel_arrows_dots)}},10),_.info("\ninitialize carousel on id: image_carousel_simple"),_.debug("\ncollect responsive settings for carousel on id: image_carousel_simple"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:800,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,dots:!1,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_image_carousel_simple']='',v.dependencies_met_html_loaded_image_carousel_simple=setInterval(()=>{if('success'===e.xhrDOMState['#image_carousel_simple_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='image',s=$('.image-carousel-simple').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: image_carousel_simple'),$('.slick-arrow-image_carousel_simple').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!1,dots:!1,speed:300,slidesToShow:2,slidesToScroll:2,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),
_.debug("\nresponsive settings on carousel id #image_carousel_simple: \n"+y),$('.image-carousel-simple').on('init',function(){_.debug("\ncarousel initialized on id: image_carousel_simple"),(k=''!==(k='false')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: image_carousel_simple"),$('#image_carousel_simple').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: image_carousel_simple");var e=$("#image_carousel_simple > button");Math.round(document.documentElement.clientHeight/2);if($('#image_carousel_simple_caption')){_.debug("\nadjust top position of arrows on id: image_carousel_simple");e=$("#image_carousel_simple > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-image_carousel_simple')})}}),$('.image-carousel-simple').on('init afterChange',o),_.debug("\ncarousel is being setup on id: image_carousel_simple"),$('.image-carousel-simple').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_image_carousel_simple)}},10),_.info("\ninitialize carousel on id: image_carousel_full"),_.debug("\ncollect responsive settings for carousel on id: image_carousel_full"),f=$.extend({},[{breakpoint:null,settings:{breakOn:1024,slidesToShow:2,slidesToScroll:2}},{breakpoint:null,settings:{breakOn:800,slidesToShow:1,slidesToScroll:1}},{breakpoint:null,settings:{breakOn:480,slidesToShow:1,slidesToScroll:1}}]),S='[';for(const[e,o]of Object.entries(f)){l=Object.keys(o.settings).length,t=0;for(const[e,s]of Object.entries(o.settings))t++,'breakOn'==e&&1==t?(S+='  {',S+='    breakpoint: '+s+',',S+='    settings: {'):S+='      '+e+': '+s+',',t==l&&(S+='    }',S+='  },')}S+=']',v['dependencies_met_html_loaded_image_carousel_full']='',v.dependencies_met_html_loaded_image_carousel_full=setInterval(()=>{if('success'===e.xhrDOMState['#image_carousel_full_parent']){function o(){var o=setInterval(()=>{var s='block'===$('#content').css("display");if('finished'===e.getState()&&s){const e='image',s=$('.image-carousel-full').find('.slick-slide').filter((e,o)=>$(o).hasClass('slick-current'));p='example'===e?s.find('').height()/2-25:s.find('img').height()/2-25,_.debug("\nadjust top arrow position (centered) by "+p+' on id: image_carousel_full'),$('.slick-arrow-image_carousel_full').css('top',p+'px'),clearInterval(o)}},10)}d=$.extend({},{autoplay:!1,arrows:!0,dots:!0,speed:300,slidesToShow:2,slidesToScroll:2,responsive:!0}),u=$.extend(!0,{},a,d),w=yaml.loadAll(S,'utf8'),T=w[0],y=JSON.stringify(T,null,4),_.debug("\nresponsive settings on carousel id #image_carousel_full: \n"+y),$('.image-carousel-full').on('init',function(){_.debug("\ncarousel initialized on id: image_carousel_full"),(k=''!==(k='true')&&'true'==k)&&(_.debug("\ninitialize lightbox on id: image_carousel_full"),$('#image_carousel_full').slickLightbox({caption:r.caption,useHistoryApi:r.useHistoryApi,background:r.background,closeOnEscape:r.closeOnEscape,closeOnBackdropClick:r.closeOnBackdropClick,navigateByKeyboard:r.navigateByKeyboard,destroyTimeout:r.destroyTimeout,imageMaxHeight:r.imageMaxHeight,lazy:r.lazy})),_.debug("\nadjust positions of slick lightbox arrows on id: image_carousel_full");var e=$("#image_carousel_full > button");Math.round(document.documentElement.clientHeight/2);if($('#image_carousel_full_caption')){_.debug("\nadjust top position of arrows on id: image_carousel_full");e=$("#image_carousel_full > button");$.each($(e),function(e,o){$(o).addClass('slick-arrow-image_carousel_full')})}}),$('.image-carousel-full').on('init afterChange',o),_.debug("\ncarousel is being setup on id: image_carousel_full"),$('.image-carousel-full').slick({accessibility:u.accessibility,adaptiveHeight:u.adaptiveHeight,arrows:u.arrows,autoplay:u.autoplay,autoplaySpeed:u.autoplaySpeed,centerMode:u.centerMode,centerPadding:u.centerPadding,cssEase:u.cssEase,dots:u.dots,dotsClass:u.dotsClass,draggable:u.draggable,easing:u.easing,edgeFriction:u.edgeFriction,fade:u.fade,focusOnSelect:u.focusOnSelect,focusOnChange:u.focusOnChange,infinite:u.infinite,initialSlide:u.initialSlide,lazyLoad:u.lazyLoad,mobileFirst:u.mobileFirst,pauseOnDotsHover:u.pauseOnDotsHover,pauseOnFocus:u.pauseOnFocus,pauseOnHover:u.pauseOnHover,respondTo:u.respondTo,rows:u.rows,rtl:u.rtl,slide:u.slide,slidesPerRow:u.slidesPerRow,slidesToScroll:u.slidesToScroll,slidesToShow:u.slidesToShow,speed:u.speed,swipe:u.swipe,swipeToSlide:u.swipeToSlide,touchMove:u.touchMove,touchThreshold:u.touchThreshold,useCSS:u.useCSS,useTransform:u.useTransform,variableWidth:u.variableWidth,vertical:u.vertical,verticalSwiping:u.verticalSwiping,waitForAnimate:u.waitForAnimate,zIndex:u.zIndex,responsive:T}),clearInterval(v.dependencies_met_html_loaded_image_carousel_full)}},10),g.setState('finished'),_.debug("\nstate: "+g.getState()),_.info("\nmodule initialization finished"),m=Date.now(),_.info("\nmodule initializing time: "+(m-b)+'ms'),clearInterval(x)}},10)},loadCarouselHTML:(o,s)=>{Object.keys(s).length;var i,a=o.xhr_data_path+'/index.html';g.setState('load_data'),Object.keys(s).forEach(o=>{s[o].enabled?(i=s[o].id+'_parent',e.loadHTML({xhr_container_id:i,xhr_data_path:a,xhr_data_element:s[o].id})):0}),g.setState('data_loaded')},messageHandler:(e,o)=>{var s=JSON.stringify(o,undefined,2);return h="\nreceived message from "+e+': '+s,_.debug(h),'command'===o.type&&'module_initialized'===o.action&&_.info('\n'+o.text),!0},setState:e=>{g.state=e},getState:()=>g.state}})(j1,window);



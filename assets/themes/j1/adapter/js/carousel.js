

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/carousel.js
 # JS Adapter for J1 Carousel (Owl Carousel V1)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-07-31 13:00:07 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.carousel=function(e){var a,t,i,o={};return{init:function(s){var n=$.extend({module_name:'j1.adapter.carousel',generated:'2022-07-31 13:00:07 +0000'},s);a=e.adapter.carousel,t=log4javascript.getLogger('j1.adapter.carousel');var d=setInterval(function(){if('finished'==e.getState()){if(o=$.extend({},{enabled:!0,items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:"window",baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,xhr_data_path:"/assets/data/carousel.json",jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1,addClassActive:!1,carousel:[{show:{enabled:!0,id:"demo_text_carousel",lightbox:!1,type:"text",text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of OpenSource and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"demo_text_carousel_parallax",lightbox:!1,type:"text",parallax:!0,padding:"75px 0 75px 75px",text_color:"md-grey-100",font_size:"1.5rem",font_weight:500,background:"/assets/images/quotes/default.jpg",cover:!0,darken:1,gridify:!0,text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of OpenSource and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"demo_cats",slide_space_between:3,slide_border:!0,lightbox:!0,type:"image",images_path:"/assets/images/modules/carousel/cats",images:["cat-1.jpg","cat-2.jpg","cat-3.jpg","cat-4.jpg"],links:["#void","#void","#void","#void"],lb_caption:["You see cat #1","You see cat #2","You see cat #3","You see cat #4"],options:{navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2}}},{show:{enabled:!0,provider:"j1",id:"demo_simple",type:"image",images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],links:["#void","#void","#void","#void","#void","#void","#void","#void"],options:{autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]"}}},{show:{enabled:!0,provider:"j1",id:"demo_oneslide",type:"image",lightbox:!0,images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],options:{navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown"}}}]}),void 0!==n&&(o=$.extend({},o,n)),a.setState('started'),t.debug("\nstate: "+a.getState()),t.info("\nmodule is being initialized"),$('#demo_text_carousel').length){i="\nslider is being processed on id: #demo_text_carousel",t.info(i),a.setState('processing'),$('head').append('<style>.demo_text_carousel-item{margin: 3px;}</style>'),$('head').append('<style>#demo_text_carousel{border-left: 3px solid #0072ff;}</style>');var s=setInterval(function(){$('#demo_text_carousel > .owl-wrapper-outer').length&&($('head').append('<style>#demo_text_carousel{font-size:1.5rem}</style>'),$('head').append('<style>#demo_text_carousel{font-weight:400}</style>'),$('#demo_text_carousel > .owl-wrapper-outer').addClass('ml-3'),clearInterval(s))},25);function l(e){var o='';for(var s in e.demo_text_carousel){var n=e.demo_text_carousel[s].text,d=e.demo_text_carousel[s].href;o+=d?"<div class=\"item\"><p href="+d+'">'+n+"</p></div>":"<div class=\"item\"><p>"+n+"</p></div>"}$('#demo_text_carousel').html(o),a.setState('processed'),i="\nprocessing slider finished on id: demo_text_carousel",t.info(i)}$('#demo_text_carousel').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:l}),e.demo_text_carousel=$('#demo_text_carousel').data('owlCarousel')}if($('#demo_text_carousel_parallax').length){function p(e){var o='';for(var s in e.demo_text_carousel_parallax){var n=e.demo_text_carousel_parallax[s].text,d=e.demo_text_carousel_parallax[s].href;o+=d?"<div class=\"item\"><p href="+d+'">'+n+"</p></div>":"<div class=\"item\"><p>"+n+"</p></div>"}$('#demo_text_carousel_parallax').html(o),a.setState('processed'),i="\nprocessing slider finished on id: demo_text_carousel_parallax",t.info(i)}i="\nslider is being processed on id: #demo_text_carousel_parallax",t.info(i),a.setState('processing'),$('head').append('<style>.demo_text_carousel_parallax-item{margin: 3px;}</style>'),$('head').append('<style>#demo_text_carousel_parallax{padding:75px 0 75px 75px;position:relative}</style>'),$('head').append('<style>#demo_text_carousel_parallax{background:url(/assets/images/quotes/default.jpg) 50% 0 repeat fixed}</style>'),$('head').append('<style>#demo_text_carousel_parallax:after{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:rgba(0,0,0,0.1)}</style>'),$('#demo_text_carousel_parallax').addClass('mdi-md-grey-100'),$('head').append('<style>#demo_text_carousel_parallax{font-size:1.5rem}</style>'),$('head').append('<style>#demo_text_carousel_parallax{font-weight:500}</style>'),$('head').append('<style>#demo_text_carousel_parallax:before{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:url(/assets/images/modules/patterns/gridtile.png) repeat;}</style>'),$('#demo_text_carousel_parallax').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:p}),e.demo_text_carousel_parallax=$('#demo_text_carousel_parallax').data('owlCarousel')}if($('#demo_cats').length){function r(e){var o='';for(var s in e.demo_cats){var n=e.demo_cats[s].href,d=e.demo_cats[s].lb,l=e.demo_cats[s].lb_caption,p=e.demo_cats[s].img,r=e.demo_cats[s].alt;d?l?(o+="\t\t<div class=\"item demo_cats-item thumbnail\">\n",o+="\t\t\t<a href=\""+p+"\" data-lightbox=\"demo_cats\" data-title=\""+l+"\">\n",o+="\t\t\t\t<img class=\"lazyOwl\" src=\""+p+'" alt="'+l+"\">\n",o+="\t\t\t </a>\n",o+=n?"\t\t\t<span id=\"demo_cats_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_cats_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",o+="\t\t</div>\n"):(o+='<a class="item link-no-decoration" href="'+p+'" ',o+='data-lightbox="demo_cats"> <img class="lazyOwl" data-src="'+p,o+='" alt="'+r+'">'+r+' </a>'):o+="<div class=\"item\"><img src=\""+p+'" alt="'+r+"\"></div>"}$('#demo_cats').html(o),a.setState('processed'),i="\nprocessing slider finished on id: demo_cats",t.info(i)}i="\nslider is being processed on id: #demo_cats",t.info(i),a.setState('processing'),$('head').append('<style>.demo_cats-item{margin: 3px;}</style>'),$('#demo_cats').owlCarousel({navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2,lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:r}),e.demo_cats=$('#demo_cats').data('owlCarousel')}if($('#demo_simple').length){function c(e){var o='';for(var s in e.demo_simple){var n=e.demo_simple[s].href,d=e.demo_simple[s].lb,l=e.demo_simple[s].lb_caption,p=e.demo_simple[s].img,r=e.demo_simple[s].alt;d?l?(o+="\t\t<div class=\"item demo_simple-item \">\n",o+="\t\t\t<a href=\""+p+"\" data-lightbox=\"demo_simple\" data-title=\""+l+"\">\n",o+="\t\t\t\t<img class=\"lazyOwl\" src=\""+p+'" alt="'+l+"\">\n",o+="\t\t\t </a>\n",o+=n?"\t\t\t<span id=\"demo_simple_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_simple_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",o+="\t\t</div>\n"):(o+='<a class="item link-no-decoration" href="'+p+'" ',o+='data-lightbox="demo_simple"> <img class="lazyOwl" data-src="'+p,o+='" alt="'+r+'">'+r+' </a>'):o+="<div class=\"item\"><img src=\""+p+'" alt="'+r+"\"></div>"}$('#demo_simple').html(o),a.setState('processed'),i="\nprocessing slider finished on id: demo_simple",t.info(i)}i="\nslider is being processed on id: #demo_simple",t.info(i),a.setState('processing'),$('head').append('<style>.demo_simple-item{margin: 3px;}</style>'),$('#demo_simple').owlCarousel({autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]",jsonPath:"/assets/data/carousel.json",jsonSuccess:c}),e.demo_simple=$('#demo_simple').data('owlCarousel')}if($('#demo_oneslide').length){function m(e){var o='';for(var s in e.demo_oneslide){var n=e.demo_oneslide[s].href,d=e.demo_oneslide[s].lb,l=e.demo_oneslide[s].lb_caption,p=e.demo_oneslide[s].img,r=e.demo_oneslide[s].alt;d?l?(o+="\t\t<div class=\"item demo_oneslide-item \">\n",o+="\t\t\t<a href=\""+p+"\" data-lightbox=\"demo_oneslide\" data-title=\""+l+"\">\n",o+="\t\t\t\t<img class=\"lazyOwl\" src=\""+p+'" alt="'+l+"\">\n",o+="\t\t\t </a>\n",o+=n?"\t\t\t<span id=\"demo_oneslide_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_oneslide_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",o+="\t\t</div>\n"):(o+='<a class="item link-no-decoration" href="'+p+'" ',o+='data-lightbox="demo_oneslide"> <img class="lazyOwl" data-src="'+p,o+='" alt="'+r+'">'+r+' </a>'):o+="<div class=\"item\"><img src=\""+p+'" alt="'+r+"\"></div>"}$('#demo_oneslide').html(o),a.setState('processed'),i="\nprocessing slider finished on id: demo_oneslide",t.info(i)}i="\nslider is being processed on id: #demo_oneslide",t.info(i),a.setState('processing'),$('head').append('<style>.demo_oneslide-item{margin: 3px;}</style>'),$('#demo_oneslide').owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown",lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:m}),e.demo_oneslide=$('#demo_oneslide').data('owlCarousel')}clearInterval(d);var g=setInterval(function(){'processed'==a.getState()&&(a.setState('finished'),t.debug("\nstate: "+a.getState()),t.info("\ninitializing module finished"),clearInterval(g))},25)}},25)},messageHandler:function(e,a){var o=JSON.stringify(a,undefined,2);return i="\nreceived message from "+e+': '+o,t.debug(i),'command'===a.type&&'module_initialized'===a.action&&t.info('\n'+a.text),!0},setState:function(e){a.state=e},getState:function(){return a.state},fadeIn:function(e,a){$(e+'.active .caption .fadeIn-1').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-2').stop().delay(a.delay+200).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-3').stop().delay(a.delay+500).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUp:function(e,a){$(e+'.active .caption .fadeInUp-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInUp-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:800,easing:'easeOutCubic'}),$(e+'.active .caption .fadeInUp-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRight:function(e,a){$(e+'.active .caption .fadeInRight-1').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-2').stop().delay(a.delay+200).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-3').stop().delay(a.delay+500).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDown:function(e,a){$('#item-1').backstretch(),$(e+'.active .caption .fadeInDown-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeft:function(e,a){$('#item-2').backstretch(),$(e+'.active .caption .fadeInLeft-1').stop().delay(500).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-2').stop().delay(700).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-3').stop().delay(1e3).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing})},fadeInReset:function(e,a){a.dragging?$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').css({opacity:a.opacity}):$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUpReset:function(e,a){a.dragging?$(e+'.caption .fadeInUp-1',+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').css({opacity:a.opacity,top:a.top}):$(e+'.caption .fadeInUp-1,'+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRightReset:function(e,a){a.dragging?$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDownReset:function(e,a){a.dragging?$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').css({opacity:a.opacity,top:a.transitionTypes}):$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeftReset:function(e,a){a.dragging?$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})}}}(j1,window);



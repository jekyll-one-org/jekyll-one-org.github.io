

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/carousel.js
 # JS Adapter for J1 Carousel (Owl Carousel V1)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-03-05 14:46:36 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.carousel=function(e){var a,t,i,o={};return{init:function(n){a=e.adapter.carousel,t=log4javascript.getLogger('j1.adapter.carousel'),a.state='pending';var s=$.extend({module_name:'j1.adapter.carousel',generated:'2021-03-05 14:46:36 +0000'},n);o=$.extend({},{enabled:!0,items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:"window",baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,xhr_data_path:"/assets/data/carousel.json",jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1,addClassActive:!1,carousel:[{show:{enabled:!0,id:"demo_text_carousel",lightbox:!1,type:"text",text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of OpenSource and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"demo_text_carousel_parallax",lightbox:!1,type:"text",parallax:!0,padding:"75px 0 75px 75px",text_color:"md-grey-100",font_size:"1.5rem",font_weight:500,background:"/assets/images/quotes/default.jpg",cover:!0,darken:1,gridify:!0,text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of OpenSource and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"demo_cats",slide_space_between:3,slide_border:!0,lightbox:!0,type:"image",images_path:"/assets/images/modules/carousel/cats",images:["cat-1.jpg","cat-2.jpg","cat-3.jpg","cat-4.jpg"],links:["#","#","#","#"],lb_caption:["You see cat #1","You see cat #2","You see cat #3","You see cat #4"],options:{navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2}}},{show:{enabled:!0,provider:"j1",id:"demo_simple",type:"image",images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],links:["#","#","#","#","#","#","#","#"],options:{autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]"}}},{show:{enabled:!0,provider:"j1",id:"demo_oneslide",type:"image",lightbox:!0,images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],options:{navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown"}}}]}),void 0!==s&&(o=e.mergeData(o,s)),a.setState('started'),t.info('state: '+a.getState()),t.info('module is being initialized');var l=setInterval(function(){if('finished'==e.getState()){if($('#demo_text_carousel').length){function o(e){var a='';for(var o in e.demo_text_carousel){var n=e.demo_text_carousel[o].text,s=e.demo_text_carousel[o].href;a+=s?"<div class=\"item\"><p href="+s+'">'+n+"</p></div>":"<div class=\"item\"><p>"+n+"</p></div>"}$('#demo_text_carousel').html(a),i='initializing slider finished on id: demo_text_carousel',t.info(i)}$('head').append('<style>.demo_text_carousel-item{margin: 3px;}</style>'),$('#demo_text_carousel').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:o}),e.demo_text_carousel=$('#demo_text_carousel').data('owlCarousel')}if($('#demo_text_carousel_parallax').length){function n(e){var a='';for(var o in e.demo_text_carousel_parallax){var n=e.demo_text_carousel_parallax[o].text,s=e.demo_text_carousel_parallax[o].href;a+=s?"<div class=\"item\"><p href="+s+'">'+n+"</p></div>":"<div class=\"item\"><p>"+n+"</p></div>"}$('#demo_text_carousel_parallax').html(a),i='initializing slider finished on id: demo_text_carousel_parallax',t.info(i)}$('head').append('<style>.demo_text_carousel_parallax-item{margin: 3px;}</style>'),$('head').append('<style>#demo_text_carousel_parallax{padding:75px 0 75px 75px;position:relative}</style>'),$('head').append('<style>#demo_text_carousel_parallax{background:url(/assets/images/quotes/default.jpg) 50% 0 repeat fixed}</style>'),$('head').append('<style>#demo_text_carousel_parallax:after{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:rgba(0,0,0,0.1)}</style>'),$('#demo_text_carousel_parallax').addClass('mdi-md-grey-100'),$('head').append('<style>#demo_text_carousel_parallax{font-size:1.5rem}</style>'),$('head').append('<style>#demo_text_carousel_parallax{font-weight:500}</style>'),$('head').append('<style>#demo_text_carousel_parallax:before{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:url(/assets/images/modules/patterns/gridtile.png) repeat;}</style>'),$('#demo_text_carousel_parallax').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:n}),e.demo_text_carousel_parallax=$('#demo_text_carousel_parallax').data('owlCarousel')}if($('#demo_cats').length){function s(e){var a='';for(var o in e.demo_cats){var n=e.demo_cats[o].href,s=e.demo_cats[o].lb,l=e.demo_cats[o].lb_caption,d=e.demo_cats[o].img,p=e.demo_cats[o].alt;s?l?(a+="\t\t<div class=\"item demo_cats-item thumbnail\">\n",a+="\t\t\t<a href=\""+d+"\" data-lightbox=\"demo_cats\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+d+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=n?"\t\t\t<span class=\"carousel-caption\"><a href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+d+"\" data-lightbox=\"demo_cats\"> <img class=\"lazyOwl\" data-src=\""+d+'" alt="'+p+"\"> </a>":a+="<div class=\"item\"><img src=\""+d+'" alt="'+p+"\"></div>"}$('#demo_cats').html(a),i='initializing slider finished on id: demo_cats',t.info(i)}$('head').append('<style>.demo_cats-item{margin: 3px;}</style>'),$('#demo_cats').owlCarousel({navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2,lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:s}),e.demo_cats=$('#demo_cats').data('owlCarousel')}if($('#demo_simple').length){function d(e){var a='';for(var o in e.demo_simple){var n=e.demo_simple[o].href,s=e.demo_simple[o].lb,l=e.demo_simple[o].lb_caption,d=e.demo_simple[o].img,p=e.demo_simple[o].alt;s?l?(a+="\t\t<div class=\"item demo_simple-item \">\n",a+="\t\t\t<a href=\""+d+"\" data-lightbox=\"demo_simple\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+d+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=n?"\t\t\t<span class=\"carousel-caption\"><a href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+d+"\" data-lightbox=\"demo_simple\"> <img class=\"lazyOwl\" data-src=\""+d+'" alt="'+p+"\"> </a>":a+="<div class=\"item\"><img src=\""+d+'" alt="'+p+"\"></div>"}$('#demo_simple').html(a),i='initializing slider finished on id: demo_simple',t.info(i)}$('head').append('<style>.demo_simple-item{margin: 3px;}</style>'),$('#demo_simple').owlCarousel({autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]",jsonPath:"/assets/data/carousel.json",jsonSuccess:d}),e.demo_simple=$('#demo_simple').data('owlCarousel')}if($('#demo_oneslide').length){function p(e){var a='';for(var o in e.demo_oneslide){var n=e.demo_oneslide[o].href,s=e.demo_oneslide[o].lb,l=e.demo_oneslide[o].lb_caption,d=e.demo_oneslide[o].img,p=e.demo_oneslide[o].alt;s?l?(a+="\t\t<div class=\"item demo_oneslide-item \">\n",a+="\t\t\t<a href=\""+d+"\" data-lightbox=\"demo_oneslide\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+d+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=n?"\t\t\t<span class=\"carousel-caption\"><a href=\""+n+'">'+l+" </a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+d+"\" data-lightbox=\"demo_oneslide\"> <img class=\"lazyOwl\" data-src=\""+d+'" alt="'+p+"\"> </a>":a+="<div class=\"item\"><img src=\""+d+'" alt="'+p+"\"></div>"}$('#demo_oneslide').html(a),i='initializing slider finished on id: demo_oneslide',t.info(i)}$('head').append('<style>.demo_oneslide-item{margin: 3px;}</style>'),$('#demo_oneslide').owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown",lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:p}),e.demo_oneslide=$('#demo_oneslide').data('owlCarousel')}clearInterval(l)}a.setState('finished'),t.info('state: '+a.getState()),t.info('initializing module finished')},25)},messageHandler:function(e,a){var o=JSON.stringify(a,undefined,2);return i='received message from '+e+': '+o,t.debug(i),'command'===a.type&&'module_initialized'===a.action&&t.info(a.text),!0},setState:function(e){a.state=e},getState:function(){return a.state},fadeIn:function(e,a){$(e+'.active .caption .fadeIn-1').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-2').stop().delay(a.delay+200).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-3').stop().delay(a.delay+500).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUp:function(e,a){$(e+'.active .caption .fadeInUp-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInUp-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:800,easing:'easeOutCubic'}),$(e+'.active .caption .fadeInUp-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRight:function(e,a){$(e+'.active .caption .fadeInRight-1').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-2').stop().delay(a.delay+200).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-3').stop().delay(a.delay+500).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDown:function(e,a){$('#item-1').backstretch(),$(e+'.active .caption .fadeInDown-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeft:function(e,a){$('#item-2').backstretch(),$(e+'.active .caption .fadeInLeft-1').stop().delay(500).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-2').stop().delay(700).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-3').stop().delay(1e3).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing})},fadeInReset:function(e,a){a.dragging?$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').css({opacity:a.opacity}):$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUpReset:function(e,a){a.dragging?$(e+'.caption .fadeInUp-1',+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').css({opacity:a.opacity,top:a.top}):$(e+'.caption .fadeInUp-1,'+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRightReset:function(e,a){a.dragging?$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDownReset:function(e,a){a.dragging?$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').css({opacity:a.opacity,top:a.transitionTypes}):$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeftReset:function(e,a){a.dragging?$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})}}}(j1,window);





  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/carousel.js
 # JS Adapter for J1 Carousel (Owl Carousel V1)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2020 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/J1 Template/blob/master/LICENSE
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-07-27 20:04:15 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.carousel=function(e){var a,t,o,l={};return{init:function(s){function i(e){var a='';for(var l in e.owl_demo_text_carousel){var s=e.owl_demo_text_carousel[l].text,i=e.owl_demo_text_carousel[l].href;a+=i?"<div class=\"item\"><p href="+i+'">'+s+"</p></div>":"<div class=\"item\"><p>"+s+"</p></div>"}$('#owl_demo_text_carousel').html(a),o='initializing slider finished on id: owl_demo_text_carousel',t.info(o)}function n(e){var a='';for(var l in e.owl_demo_text_carousel_parallax){var s=e.owl_demo_text_carousel_parallax[l].text,i=e.owl_demo_text_carousel_parallax[l].href;a+=i?"<div class=\"item\"><p href="+i+'">'+s+"</p></div>":"<div class=\"item\"><p>"+s+"</p></div>"}$('#owl_demo_text_carousel_parallax').html(a),o='initializing slider finished on id: owl_demo_text_carousel_parallax',t.info(o)}function d(e){var a='';for(var l in e.owl_demo_cats){var s=e.owl_demo_cats[l].lb,i=e.owl_demo_cats[l].lb_caption,n=e.owl_demo_cats[l].img,d=e.owl_demo_cats[l].alt,r=e.owl_demo_cats[l].href,_='class="img-fluid";';s?i?(a+="\t\t<div class=\"item owl_demo_cats-item thumbnail\">\n",a+="\t\t\t<a href=\""+n+"\" data-lightbox=\"owl_demo_cats\" data-title=\""+i+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+n+"\">\n",a+="\t\t\t</a>\n",a+=r?"\t\t\t<span class=\"carousel-caption\"><a href=\""+r+'">'+i+"</a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+i+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+n+"\" data-lightbox=\"owl_demo_cats\"> <img class=\"lazyOwl\" data-src=\""+n+'" alt="'+d+"\"></a>":a+="<div class=\"item\"><img "+_+' src="'+n+'" alt="'+d+"\"></div>"}$('#owl_demo_cats').html(a),o='initializing slider finished on id: owl_demo_cats',t.info(o)}function r(e){var a='';for(var l in e.owl_demo_simple){var s=e.owl_demo_simple[l].lb,i=e.owl_demo_simple[l].lb_caption,n=e.owl_demo_simple[l].img,d=e.owl_demo_simple[l].alt,r=e.owl_demo_simple[l].href,_='class="img-fluid";';s?i?(a+="\t\t<div class=\"item owl_demo_simple-item \">\n",a+="\t\t\t<a href=\""+n+"\" data-lightbox=\"owl_demo_simple\" data-title=\""+i+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+n+"\">\n",a+="\t\t\t</a>\n",a+=r?"\t\t\t<span class=\"carousel-caption\"><a href=\""+r+'">'+i+"</a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+i+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+n+"\" data-lightbox=\"owl_demo_simple\"> <img class=\"lazyOwl\" data-src=\""+n+'" alt="'+d+"\"></a>":a+="<div class=\"item\"><img "+_+' src="'+n+'" alt="'+d+"\"></div>"}$('#owl_demo_simple').html(a),o='initializing slider finished on id: owl_demo_simple',t.info(o)}function _(e){var a='';for(var l in e.owl_demo_oneslide){var s=e.owl_demo_oneslide[l].lb,i=e.owl_demo_oneslide[l].lb_caption,n=e.owl_demo_oneslide[l].img,d=e.owl_demo_oneslide[l].alt,r=e.owl_demo_oneslide[l].href,_='class="img-fluid";';s?i?(a+="\t\t<div class=\"item owl_demo_oneslide-item \">\n",a+="\t\t\t<a href=\""+n+"\" data-lightbox=\"owl_demo_oneslide\" data-title=\""+i+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+n+"\">\n",a+="\t\t\t</a>\n",a+=r?"\t\t\t<span class=\"carousel-caption\"><a href=\""+r+'">'+i+"</a> </span>\n":"\t\t\t<span class=\"carousel-caption\">"+i+"</span>\n",a+="\t\t</div>\n"):a+='<a class="item" href="'+n+"\" data-lightbox=\"owl_demo_oneslide\"> <img class=\"lazyOwl\" data-src=\""+n+'" alt="'+d+"\"></a>":a+="<div class=\"item\"><img "+_+' src="'+n+'" alt="'+d+"\"></div>"}$('#owl_demo_oneslide').html(a),o='initializing slider finished on id: owl_demo_oneslide',t.info(o)}a=e.adapter.carousel,t=log4javascript.getLogger('j1.adapter.carousel'),a.state='pending';var m=$.extend({module_name:'j1.adapter.carousel',generated:'2020-07-27 20:04:15 +0200'},s);return l=$.extend({},{enabled:!0,items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:"window",baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,xhr_data_path:"/assets/data/carousel.json",jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1,addClassActive:!1,carousel:[{show:{enabled:!0,id:"owl_demo_text_carousel",lightbox:!1,type:"text",css_classes:"img-fluid",text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of open source and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"owl_demo_text_carousel_parallax",lightbox:!1,type:"text",parallax:!0,parallax_id:"owl_text_carousel_parallax",css_classes:"img-fluid",text:["<big>Jekyll One Template</big>         </br> <i>Clean, responsive and fully featured Template made for Jekyll</i>","<big>Jekyll meets Bootstrap</big>      </br> <i>Best of open source and commercial software for the Web</i>","<big>J1 is Open Source</big>           </br> <i>No pain for private or professional use</i>","<big>Explore this site</big>           </br> <i>Learn what's possible if you go the Jekyll Way</i>","<big>Create modern static sites</big>  </br> <i>Secure, powerful and fast<i>"],options:{autoPlay:5e3,singleItem:!0,pagination:!1}}},{show:{enabled:!0,id:"owl_demo_cats",slide_space_between:3,slide_border:!0,lightbox:!0,type:"image",css_classes:"img-fluid",images_path:"/assets/images/modules/carousel/cats",images:["cat-1.jpg","cat-2.jpg","cat-3.jpg","cat-4.jpg"],links:["#","#","#","#"],lb_caption:["You see cat no 1","You see cat no 2","You see cat np 3","You see cat no 4"],options:{navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2}}},{show:{enabled:!0,provider:"j1",id:"owl_demo_simple",type:"image",css_classes:"img-fluid",images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],links:["#","#","#","#","#","#","#","#"],options:{autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]"}}},{show:{enabled:!0,provider:"j1",id:"owl_demo_oneslide",type:"image",lightbox:!0,css_classes:"img-fluid",images_path:"/assets/images/modules/carousel/mega_cities",images:["andreas-brucker_b.jpg","denys-nevozhai-1_b.jpg","denys-nevozhai-2_b.jpg","luca-bravo_b.jpg","thomas-tucker_b.jpg"],options:{navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown"}}}]}),void 0!==m&&(l=e.mergeData(l,m)),a.setState('started'),t.info('state: '+a.getState()),t.info('module is being initialized'),$('#owl_demo_text_carousel').length&&($('head').append('<style>.owl_demo_text_carousel-item{margin: 3px;}</style>'),$('#owl_demo_text_carousel').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:i}),e.owl_demo_text_carousel=$('#owl_demo_text_carousel').data('owlCarousel')),$('#owl_demo_text_carousel_parallax').length&&($('head').append('<style>.parallax-slider__owl_demo_text_carousel_parallax{background:url(/assets/images/quotes/default.png) 50% 0 repeat fixed}</style>'),$('head').append('<style>.parallax-slider__owl_demo_text_carousel_parallax{padding:75px 0 75px 25px;position:relative}</style>'),$('head').append('<style>.parallax-slider__owl_demo_text_carousel_parallax{color:#e5e5e5;font-size:1.5rem;font-weight:400}</style>'),$('head').append('<!-- style>.parallax-slider__owl_demo_text_carousel_parallax{text-align:center}</style -->'),$('head').append('<!-- style>.parallax-slider__owl_demo_text_carousel_parallax{text-transform:uppercase}</style -->'),$('head').append('<style>.parallax-slider__owl_demo_text_carousel_parallax:before{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:url(/assets/images/modules/patterns/gridtile.png) repeat;}</style>'),$('head').append('<style>.parallax-slider__owl_demo_text_carousel_parallax:after{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:rgba(0,0,0,0.3)}</style>'),$('head').append('<style>.owl_demo_text_carousel_parallax-item{margin: 3px;}</style>'),$('#owl_demo_text_carousel_parallax').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:n}),e.owl_demo_text_carousel_parallax=$('#owl_demo_text_carousel_parallax').data('owlCarousel')),$('#owl_demo_cats').length&&($('head').append('<style>.owl_demo_cats-item{margin: 3px;}</style>'),$('#owl_demo_cats').owlCarousel({navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2,lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:d}),e.owl_demo_cats=$('#owl_demo_cats').data('owlCarousel')),$('#owl_demo_simple').length&&($('head').append('<style>.owl_demo_simple-item{margin: 3px;}</style>'),$('#owl_demo_simple').owlCarousel({autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]",jsonPath:"/assets/data/carousel.json",jsonSuccess:r}),e.owl_demo_simple=$('#owl_demo_simple').data('owlCarousel')),$('#owl_demo_oneslide').length&&($('head').append('<style>.owl_demo_oneslide-item{margin: 3px;}</style>'),$('#owl_demo_oneslide').owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown",lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:_}),e.owl_demo_oneslide=$('#owl_demo_oneslide').data('owlCarousel')),a.setState('finished'),t.info('state: '+a.getState()),t.info('initializing module finished'),!0},messageHandler:function(e,a){var l=JSON.stringify(a,undefined,2);return o='received message from '+e+': '+l,t.debug(o),'command'===a.type&&'module_initialized'===a.action&&t.info(a.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);



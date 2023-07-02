

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/carousel.js
 # JS Adapter for J1 Carousel (Owl Carousel V1)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # See: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-02 20:26:42 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.carousel=function(e){var a,t,o,i,n;return{init:function(s){$.extend({module_name:'j1.adapter.carousel',generated:'2023-07-02 20:26:42 +0200'},s);o=e.adapter.carousel,i=log4javascript.getLogger('j1.adapter.carousel'),a=$.extend({}),t=$.extend({}),$.extend(!0,{},a,t);var d=setInterval(function(){var a='block'==$('#no_flicker').css("display");e.adapter.attic.getState();if('finished'==e.getState()&&a){if(o.setState('started'),i.debug("\nstate: "+o.getState()),i.info("\nmodule is being initialized"),$('#demo_text_carousel').length){n="\nslider is being processed on id: #demo_text_carousel",i.info(n),o.setState('processing'),$('head').append('<style>.demo_text_carousel-item{margin: 3px;}</style>'),$('head').append('<style>#demo_text_carousel{border-left: 3px solid #0072ff;}</style>');var t=setInterval(function(){$('#demo_text_carousel > .owl-wrapper-outer').length&&($('head').append('<style>#demo_text_carousel{font-size:1.5rem}</style>'),$('head').append('<style>#demo_text_carousel{font-weight:400}</style>'),$('#demo_text_carousel > .owl-wrapper-outer').addClass('ml-3'),clearInterval(t))},10);function s(e){var a='';for(var t in e.demo_text_carousel){var s=e.demo_text_carousel[t].text,d=e.demo_text_carousel[t].href;a+=d?"<div class=\"item\"><p href="+d+'">'+s+"</p></div>":"<div class=\"item\"><p>"+s+"</p></div>"}$('#demo_text_carousel').html(a),o.setState('processed'),n="\nprocessing slider finished on id: demo_text_carousel",i.info(n)}$('#demo_text_carousel').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:s}),e.demo_text_carousel=$('#demo_text_carousel').data('owlCarousel')}if($('#demo_text_carousel_parallax').length){function l(e){var a='';for(var t in e.demo_text_carousel_parallax){var s=e.demo_text_carousel_parallax[t].text,d=e.demo_text_carousel_parallax[t].href;a+=d?"<div class=\"item\"><p href="+d+'">'+s+"</p></div>":"<div class=\"item\"><p>"+s+"</p></div>"}$('#demo_text_carousel_parallax').html(a),o.setState('processed'),n="\nprocessing slider finished on id: demo_text_carousel_parallax",i.info(n)}n="\nslider is being processed on id: #demo_text_carousel_parallax",i.info(n),o.setState('processing'),$('head').append('<style>.demo_text_carousel_parallax-item{margin: 3px;}</style>'),$('head').append('<style>#demo_text_carousel_parallax{padding:75px 0 75px 75px;position:relative}</style>'),$('head').append('<style>#demo_text_carousel_parallax{background:url(/assets/images/quotes/default.jpg) 50% 0 repeat fixed}</style>'),$('head').append('<style>#demo_text_carousel_parallax:after{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:rgba(0,0,0,0.1)}</style>'),$('#demo_text_carousel_parallax').addClass('mdi-md-grey-100'),$('head').append('<style>#demo_text_carousel_parallax{font-size:1.5rem}</style>'),$('head').append('<style>#demo_text_carousel_parallax{font-weight:500}</style>'),$('head').append('<style>#demo_text_carousel_parallax:before{top:0;left:0;width:100%;height:100%;content:" ";position:absolute;background:url(/assets/images/modules/patterns/gridtile.png) repeat;}</style>'),$('#demo_text_carousel_parallax').owlCarousel({autoPlay:5e3,singleItem:!0,pagination:!1,jsonPath:"/assets/data/carousel.json",jsonSuccess:l}),e.demo_text_carousel_parallax=$('#demo_text_carousel_parallax').data('owlCarousel')}if($('#demo_cats').length){function c(e){var a='';for(var t in e.demo_cats){var s=e.demo_cats[t].href,d=e.demo_cats[t].lb,l=e.demo_cats[t].lb_caption,c=e.demo_cats[t].img,p=e.demo_cats[t].alt;d?l?(a+="\t\t<div class=\"item demo_cats-item thumbnail\">\n",a+="\t\t\t<a href=\""+c+"\" data-lightbox=\"demo_cats\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+c+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=s?"\t\t\t<span id=\"demo_cats_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+s+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_cats_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):(a+='<a class="item link-no-decoration" href="'+c+'" ',a+='data-lightbox="demo_cats"> <img class="lazyOwl" data-src="'+c,a+='" alt="'+p+'">'+p+' </a>'):a+="<div class=\"item\"><img src=\""+c+'" alt="'+p+"\"></div>"}$('#demo_cats').html(a),o.setState('processed'),n="\nprocessing slider finished on id: demo_cats",i.info(n)}n="\nslider is being processed on id: #demo_cats",i.info(n),o.setState('processing'),$('head').append('<style>.demo_cats-item{margin: 3px;}</style>'),$('#demo_cats').owlCarousel({navigation:!1,itemsCustom:[[0,1],[400,1],[700,2],[1e3,2],[1200,2],[1600,2]],slideSpeed:300,paginationSpeed:400,items:2,lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:c}),e.demo_cats=$('#demo_cats').data('owlCarousel')}if($('#demo_simple').length){function p(e){var a='';for(var t in e.demo_simple){var s=e.demo_simple[t].href,d=e.demo_simple[t].lb,l=e.demo_simple[t].lb_caption,c=e.demo_simple[t].img,p=e.demo_simple[t].alt;d?l?(a+="\t\t<div class=\"item demo_simple-item \">\n",a+="\t\t\t<a href=\""+c+"\" data-lightbox=\"demo_simple\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+c+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=s?"\t\t\t<span id=\"demo_simple_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+s+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_simple_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):(a+='<a class="item link-no-decoration" href="'+c+'" ',a+='data-lightbox="demo_simple"> <img class="lazyOwl" data-src="'+c,a+='" alt="'+p+'">'+p+' </a>'):a+="<div class=\"item\"><img src=\""+c+'" alt="'+p+"\"></div>"}$('#demo_simple').html(a),o.setState('processed'),n="\nprocessing slider finished on id: demo_simple",i.info(n)}n="\nslider is being processed on id: #demo_simple",i.info(n),o.setState('processing'),$('head').append('<style>.demo_simple-item{margin: 3px;}</style>'),$('#demo_simple').owlCarousel({autoPlay:3e3,items:3,autoHeight:!0,pagination:!1,paginationNumbers:!1,itemsDesktop:"[1199,3]",itemsDesktopSmall:"[979,3]",jsonPath:"/assets/data/carousel.json",jsonSuccess:p}),e.demo_simple=$('#demo_simple').data('owlCarousel')}if($('#demo_oneslide').length){function r(e){var a='';for(var t in e.demo_oneslide){var s=e.demo_oneslide[t].href,d=e.demo_oneslide[t].lb,l=e.demo_oneslide[t].lb_caption,c=e.demo_oneslide[t].img,p=e.demo_oneslide[t].alt;d?l?(a+="\t\t<div class=\"item demo_oneslide-item \">\n",a+="\t\t\t<a href=\""+c+"\" data-lightbox=\"demo_oneslide\" data-title=\""+l+"\">\n",a+="\t\t\t\t<img class=\"lazyOwl\" src=\""+c+'" alt="'+l+"\">\n",a+="\t\t\t </a>\n",a+=s?"\t\t\t<span id=\"demo_oneslide_caption\" class=\"text-start carousel-caption\"><a class=\"md-grey-300 link-no-decoration\" href=\""+s+'">'+l+" </a> </span>\n":"\t\t\t<span id=\"demo_oneslide_caption\" class=\"text-start carousel-caption\">"+l+"</span>\n",a+="\t\t</div>\n"):(a+='<a class="item link-no-decoration" href="'+c+'" ',a+='data-lightbox="demo_oneslide"> <img class="lazyOwl" data-src="'+c,a+='" alt="'+p+'">'+p+' </a>'):a+="<div class=\"item\"><img src=\""+c+'" alt="'+p+"\"></div>"}$('#demo_oneslide').html(a),o.setState('processed'),n="\nprocessing slider finished on id: demo_oneslide",i.info(n)}n="\nslider is being processed on id: #demo_oneslide",i.info(n),o.setState('processing'),$('head').append('<style>.demo_oneslide-item{margin: 3px;}</style>'),$('#demo_oneslide').owlCarousel({navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,transitionStyle:"goDown",lazyLoad:!0,jsonPath:"/assets/data/carousel.json",jsonSuccess:r}),e.demo_oneslide=$('#demo_oneslide').data('owlCarousel')}clearInterval(d);var m=setInterval(function(){'processed'==o.getState()&&(o.setState('finished'),i.debug("\nstate: "+o.getState()),i.info("\ninitializing module finished"),clearInterval(m))},10)}},10)},messageHandler:function(e,a){var t=JSON.stringify(a,undefined,2);return n="\nreceived message from "+e+': '+t,i.debug(n),'command'===a.type&&'module_initialized'===a.action&&i.info('\n'+a.text),!0},setState:function(e){o.state=e},getState:function(){return o.state},fadeIn:function(e,a){$(e+'.active .caption .fadeIn-1').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-2').stop().delay(a.delay+200).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeIn-3').stop().delay(a.delay+500).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUp:function(e,a){$(e+'.active .caption .fadeInUp-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInUp-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:800,easing:'easeOutCubic'}),$(e+'.active .caption .fadeInUp-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRight:function(e,a){$(e+'.active .caption .fadeInRight-1').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-2').stop().delay(a.delay+200).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInRight-3').stop().delay(a.delay+500).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDown:function(e,a){$('#item-1').backstretch(),$(e+'.active .caption .fadeInDown-1').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-2').stop().delay(a.delay+200).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInDown-3').stop().delay(a.delay+500).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeft:function(e,a){$('#item-2').backstretch(),$(e+'.active .caption .fadeInLeft-1').stop().delay(500).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-2').stop().delay(700).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing}),$(e+'.active .caption .fadeInLeft-3').stop().delay(1e3).animate({opacity:a.opacity,top:a.left},{duration:a.duration,easing:a.easing})},fadeInReset:function(e,a){a.dragging?$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').css({opacity:a.opacity}):$(e+'.caption .fadeIn-1,'+e+'.caption .fadeIn-2,'+e+'.caption .fadeIn-3').stop().delay(a.delay).animate({opacity:a.opacity},{duration:a.duration,easing:a.easing})},fadeInUpReset:function(e,a){a.dragging?$(e+'.caption .fadeInUp-1',+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').css({opacity:a.opacity,top:a.top}):$(e+'.caption .fadeInUp-1,'+e+'.caption .fadeInUp-2,'+e+'.caption .fadeInUp-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInRightReset:function(e,a){a.dragging?$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInRight-1,'+e+'.caption .fadeInRight-2,'+e+'.caption .fadeInRight-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})},fadeInDownReset:function(e,a){a.dragging?$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').css({opacity:a.opacity,top:a.transitionTypes}):$(e+'.caption .fadeInDown-1,'+e+'.caption .fadeInDown-2,'+e+'.caption .fadeInDown-3').stop().delay(a.delay).animate({opacity:a.opacity,top:a.top},{duration:a.duration,easing:a.easing})},fadeInLeftReset:function(e,a){a.dragging?$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').css({opacity:a.opacity,left:a.left}):$(e+'.caption .fadeInLeft-1,'+e+'.caption .fadeInLeft-2,'+e+'.caption .fadeInLeft-3').stop().delay(a.delay).animate({opacity:a.opacity,left:a.left},{duration:a.duration,easing:a.easing})}}}(j1,window);


